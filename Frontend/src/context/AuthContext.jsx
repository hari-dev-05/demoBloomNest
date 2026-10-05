import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('bloomnest_token') || null);
  const [loading, setLoading] = useState(true);

  // Load user profile on startup if token exists
  useEffect(() => {
    const fetchUser = async () => {
      const storedToken = localStorage.getItem('bloomnest_token');
      if (!storedToken) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const response = await api.get('/auth/me');
        if (response.data && response.data.success) {
          setUser(response.data.user);
          setToken(storedToken);
        } else {
          logout();
        }
      } catch (error) {
        console.error('Failed to restore authentication:', error?.response?.data?.message || error.message);
        logout();
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      if (response.data && response.data.token) {
        const { token: newToken, user: userData } = response.data;
        localStorage.setItem('bloomnest_token', newToken);
        setToken(newToken);
        setUser(userData);
        return { success: true, message: response.data.message };
      }
      return { success: false, message: response.data.message || 'Login failed' };
    } catch (error) {
      const errorMsg = error?.response?.data?.message || 'Failed to communicate with server';
      return { success: false, message: errorMsg };
    }
  };

  const register = async (name, email, phone, password) => {
    try {
      const response = await api.post('/auth/register', { name, email, phone, password });
      if (response.data && response.data.token) {
        const { token: newToken, user: userData } = response.data;
        localStorage.setItem('bloomnest_token', newToken);
        setToken(newToken);
        setUser(userData);
        return { success: true, message: response.data.message };
      }
      return { success: false, message: response.data.message || 'Registration failed' };
    } catch (error) {
      const errorMsg = error?.response?.data?.message || 'Failed to communicate with server';
      return { success: false, message: errorMsg };
    }
  };

  const logout = () => {
    localStorage.removeItem('bloomnest_token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
