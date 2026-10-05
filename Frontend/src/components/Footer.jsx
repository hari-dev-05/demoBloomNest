import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Instagram, Facebook, Phone, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest-900 text-cream pt-16 pb-12 border-t border-forest-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-forest-800/80">
          
          {/* BRAND COL */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-full bg-terracotta-500 flex items-center justify-center text-cream shadow-md">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-cream">
                BloomNest
              </span>
            </Link>
            <p className="text-sand-300 text-sm leading-relaxed">
              Handmade pots. Made with love. Bringing warmth, artisan craftsmanship, and nature into modern homes.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-forest-800 flex items-center justify-center text-sand-300 hover:text-cream hover:bg-terracotta-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-forest-800 flex items-center justify-center text-sand-300 hover:text-cream hover:bg-terracotta-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-forest-800 flex items-center justify-center text-sand-300 hover:text-cream hover:bg-terracotta-500 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-sand-300">
              <li>
                <Link to="/" className="hover:text-terracotta-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-terracotta-500 transition-colors">
                  Shop Collection
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-terracotta-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-terracotta-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CUSTOMER SUPPORT */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-4 tracking-wide">
              Customer Support
            </h4>
            <ul className="space-y-2.5 text-sm text-sand-300">
              <li>
                <Link to="/contact" className="hover:text-terracotta-500 transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-terracotta-500 transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-terracotta-500 transition-colors">
                  Care & Maintenance Guide
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-terracotta-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER / TAGLINE */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-cream tracking-wide">
              Join Our Green Family
            </h4>
            <p className="text-xs text-sand-300 leading-relaxed">
              Subscribe for plant styling tips, artisan story updates, and exclusive seasonal releases.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing!"); }} className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-xl bg-forest-800 text-cream text-xs border border-forest-800 focus:outline-none focus:border-terracotta-500 placeholder-sand-300/60"
                required
              />
              <button
                type="submit"
                className="w-full py-2.5 text-xs font-bold text-cream bg-terracotta-500 hover:bg-terracotta-600 rounded-xl shadow-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-sand-300/70 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} BloomNest. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-terracotta-500 fill-terracotta-500" />
            <span>for plant lovers worldwide.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
