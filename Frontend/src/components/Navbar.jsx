import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu, X, LogOut, Leaf, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const { user, isAuthenticated, logout } = useAuth();
  const { totalItemsCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully', {
      style: {
        background: '#8C5A41',
        color: '#FDFBF7',
        borderRadius: '12px',
      },
    });
    navigate('/');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-soft py-3 border-b border-sand-200'
          : 'bg-cream/70 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center text-cream shadow-md group-hover:bg-terracotta-500 transition-colors duration-300">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-forest-800 block leading-tight">
                BloomNest
              </span>
              <span className="text-[10px] tracking-widest text-terracotta-600 font-semibold uppercase block -mt-0.5">
                Handmade Pots
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-terracotta-600 font-semibold'
                      : 'text-forest-800/80 hover:text-terracotta-500'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-terracotta-500 rounded-full animate-fade-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT ACTION BUTTONS */}
          <div className="hidden md:flex items-center space-x-5">
            {/* Search Icon / Input toggle */}
            <div className="relative">
              {searchOpen ? (
                <form onSubmit={handleSearchSubmit} className="relative flex items-center animate-fade-in">
                  <input
                    type="text"
                    placeholder="Search flower pots..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-56 pl-3 pr-8 py-1.5 text-xs bg-sand-100 border border-sand-300 rounded-full text-forest-800 focus:outline-none focus:border-terracotta-500 shadow-inner"
                  />
                  <button
                    type="button"
                    onClick={() => setSearchOpen(false)}
                    className="absolute right-2 text-forest-800/60 hover:text-forest-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 text-forest-800/80 hover:text-terracotta-600 hover:bg-sand-200/60 rounded-full transition-colors"
                  title="Search products"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Cart Icon */}
            <Link
              to="/cart"
              className="p-2 text-forest-800/80 hover:text-terracotta-600 hover:bg-sand-200/60 rounded-full transition-colors relative"
              title="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItemsCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-terracotta-500 text-cream text-[11px] font-bold rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {totalItemsCount}
                </span>
              )}
            </Link>

            {/* Auth section */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center space-x-2 pl-3 pr-2 py-1.5 bg-sand-200/70 hover:bg-sand-300/70 text-forest-800 rounded-full text-xs font-medium transition-colors border border-sand-300"
                >
                  <div className="w-6 h-6 rounded-full bg-forest-800 text-cream flex items-center justify-center font-bold text-[10px]">
                    {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <span className="max-w-[100px] truncate font-semibold">
                    Hi, {user?.name?.split(' ')[0]}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-forest-800/60" />
                </button>

                {/* Dropdown Menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-cream border border-sand-300 rounded-2xl shadow-soft-hover py-2 z-50 animate-fade-in">
                    <div className="px-4 py-2 border-b border-sand-200">
                      <p className="text-xs font-bold text-forest-800 truncate">{user?.name}</p>
                      <p className="text-[11px] text-forest-800/60 truncate">{user?.email}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-xs text-terracotta-700 hover:bg-sand-100 flex items-center space-x-2 transition-colors font-medium"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="px-4 py-2 text-xs font-semibold text-forest-800 hover:text-terracotta-600 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-xs font-semibold bg-terracotta-500 hover:bg-terracotta-600 text-cream rounded-full shadow-soft hover:shadow-soft-hover transition-all transform hover:-translate-y-0.5"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* MOBILE BUTTONS */}
          <div className="flex items-center space-x-3 md:hidden">
            <Link
              to="/cart"
              className="p-2 text-forest-800 hover:text-terracotta-600 relative"
            >
              <ShoppingBag className="w-6 h-6" />
              {totalItemsCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-terracotta-500 text-cream text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItemsCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-forest-800 hover:text-terracotta-600 rounded-lg focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream border-b border-sand-300 px-6 py-6 space-y-4 animate-fade-in shadow-lg">
          {/* Mobile search */}
          <form onSubmit={handleSearchSubmit} className="relative mb-4">
            <input
              type="text"
              placeholder="Search pots..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-sand-100 border border-sand-300 rounded-full focus:outline-none focus:border-terracotta-500"
            />
            <Search className="w-4 h-4 text-forest-800/50 absolute left-3.5 top-2.5" />
          </form>

          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-base font-medium text-forest-800 hover:text-terracotta-600 py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t border-sand-200">
            {isAuthenticated ? (
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-forest-800 text-cream flex items-center justify-center font-bold text-xs">
                    {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-forest-800">{user?.name}</p>
                    <p className="text-xs text-forest-800/60">{user?.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full py-2 text-center text-xs font-semibold text-terracotta-700 bg-sand-200 rounded-xl flex items-center justify-center space-x-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link
                  to="/login"
                  className="w-full py-2.5 text-center text-xs font-semibold text-forest-800 bg-sand-200 rounded-xl"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="w-full py-2.5 text-center text-xs font-semibold text-cream bg-terracotta-500 rounded-xl shadow-md"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
