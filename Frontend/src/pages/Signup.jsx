import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Phone, Lock, ArrowRight, Leaf, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const validateForm = () => {
    const { name, email, phone, password, confirmPassword } = formData;
    if (!name || !email || !phone || !password || !confirmPassword) {
      return 'All fields are required.';
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address.';
    }

    if (phone.length < 7) {
      return 'Please enter a valid phone number.';
    }

    if (password.length < 6) {
      return 'Password must be at least 6 characters long.';
    }

    if (password !== confirmPassword) {
      return 'Passwords do not match.';
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError('');

    const res = await register(
      formData.name,
      formData.email,
      formData.phone,
      formData.password
    );

    setLoading(false);

    if (res.success) {
      toast.success(res.message || 'Account created successfully! Welcome to BloomNest.', {
        style: {
          background: '#2D4030',
          color: '#FDFBF7',
          borderRadius: '12px',
        },
      });
      navigate('/', { replace: true });
    } else {
      setError(res.message);
      toast.error(res.message || 'Registration failed', {
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
            Create Account
          </h2>
          <p className="text-xs text-forest-800/70 font-light">
            Join the BloomNest artisan planter family today.
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
            <label className="block text-xs font-bold text-forest-800 uppercase tracking-wider mb-1">
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-cream border border-sand-300 rounded-xl text-forest-800 focus:outline-none focus:border-terracotta-500 font-medium"
              />
              <User className="w-4 h-4 text-forest-800/50 absolute left-3.5 top-3" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-forest-800 uppercase tracking-wider mb-1">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="jane@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-cream border border-sand-300 rounded-xl text-forest-800 focus:outline-none focus:border-terracotta-500 font-medium"
              />
              <Mail className="w-4 h-4 text-forest-800/50 absolute left-3.5 top-3" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-forest-800 uppercase tracking-wider mb-1">
              Phone Number
            </label>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-cream border border-sand-300 rounded-xl text-forest-800 focus:outline-none focus:border-terracotta-500 font-medium"
              />
              <Phone className="w-4 h-4 text-forest-800/50 absolute left-3.5 top-3" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-forest-800 uppercase tracking-wider mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Min 6 characters"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-cream border border-sand-300 rounded-xl text-forest-800 focus:outline-none focus:border-terracotta-500 font-medium"
              />
              <Lock className="w-4 h-4 text-forest-800/50 absolute left-3.5 top-3" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-forest-800 uppercase tracking-wider mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter password"
                value={formData.confirmPassword}
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
              <span className="animate-pulse">Creating Account...</span>
            ) : (
              <>
                <span>Create Account</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* FOOTER LINK */}
        <div className="pt-4 border-t border-sand-200 text-center">
          <p className="text-xs text-forest-800/70">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-bold text-terracotta-600 hover:text-terracotta-700 underline"
            >
              Login
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Signup;
