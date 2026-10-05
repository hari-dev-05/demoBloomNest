import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, ArrowRight, Leaf, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Please fill in both email and password.');
      return;
    }

    setLoading(true);
    setError('');

    const res = await login(formData.email, formData.password);
    setLoading(false);

    if (res.success) {
      toast.success(res.message || 'Logged in successfully!', {
        style: {
          background: '#2D4030',
          color: '#FDFBF7',
          borderRadius: '12px',
        },
      });
      navigate(from, { replace: true });
    } else {
      setError(res.message);
      toast.error(res.message || 'Login failed', {
        style: {
          background: '#8C5A41',
          color: '#FDFBF7',
          borderRadius: '12px',
        },
      });
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 flex items-center justify-center bg-cream px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-sand-100 border border-sand-300 rounded-3xl p-8 shadow-soft-hover space-y-6">
        
        {/* LOGO & TITLE */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-terracotta-500 text-cream flex items-center justify-center mx-auto shadow-md">
            <Leaf className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-forest-800">
            Welcome Back
          </h2>
          <p className="text-xs text-forest-800/70 font-light">
            Sign in to access your BloomNest account and saved pots.
          </p>
        </div>

        {/* ERROR MESSAGE ALERT */}
        {error && (
          <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-xs flex items-center space-x-2.5 animate-fade-in">
            <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-500" />
            <span>{error}</span>
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-forest-800 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-cream border border-sand-300 rounded-xl text-forest-800 focus:outline-none focus:border-terracotta-500 font-medium"
              />
              <Mail className="w-4 h-4 text-forest-800/50 absolute left-3.5 top-3" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-forest-800 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-cream border border-sand-300 rounded-xl text-forest-800 focus:outline-none focus:border-terracotta-500 font-medium"
              />
              <Lock className="w-4 h-4 text-forest-800/50 absolute left-3.5 top-3" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-6 bg-terracotta-500 hover:bg-terracotta-600 text-cream text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 uppercase tracking-wider disabled:opacity-50"
          >
            {loading ? (
              <span className="animate-pulse">Authenticating...</span>
            ) : (
              <>
                <span>Login</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* FOOTER LINK */}
        <div className="pt-4 border-t border-sand-200 text-center">
          <p className="text-xs text-forest-800/70">
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="font-bold text-terracotta-600 hover:text-terracotta-700 underline"
            >
              Sign up
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
