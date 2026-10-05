import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-cream via-sand-100 to-cream overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-sage-100/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[400px] h-[400px] rounded-full bg-terracotta-100/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sand-200 border border-sand-300 text-forest-800 text-xs font-semibold tracking-wide uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-terracotta-500" />
              <span>Handcrafted Artisan Collection</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-forest-800 leading-[1.15]">
              Bring <span className="text-terracotta-500 italic font-normal">Nature</span> Home
            </h1>

            <p className="text-forest-800/80 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Beautiful handmade flower pots crafted with care, designed to make your plants feel at home. Elevate your living space with raw clay textures and timeless pottery art.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <Link
                to="/shop"
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold bg-terracotta-500 hover:bg-terracotta-600 text-cream rounded-full shadow-floating hover:shadow-soft-hover transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <span>Shop Pots</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold bg-cream hover:bg-sand-200 text-forest-800 border border-sand-300 rounded-full transition-all flex items-center justify-center space-x-2"
              >
                <span>Explore Collection</span>
              </Link>
            </div>

            {/* TRUST BADGES */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-sand-300/80 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left space-y-1">
                <p className="font-serif text-xl font-bold text-forest-800">100%</p>
                <p className="text-[11px] text-forest-800/70 font-medium">Handmade Clay</p>
              </div>
              <div className="text-center lg:text-left space-y-1">
                <p className="font-serif text-xl font-bold text-forest-800">Eco-Friendly</p>
                <p className="text-[11px] text-forest-800/70 font-medium">Sustainable Materials</p>
              </div>
              <div className="text-center lg:text-left space-y-1">
                <p className="font-serif text-xl font-bold text-forest-800">Safe Delivery</p>
                <p className="text-[11px] text-forest-800/70 font-medium">Shatterproof Pack</p>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Pot Hero Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-soft-hover border-4 border-cream bg-sand-200 aspect-[4/5] group">
                <img
                  src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=80"
                  alt="Handmade Flower Pot Hero"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-cream">
                  <p className="text-xs font-semibold uppercase tracking-wider text-sand-300">Featured Artisan Piece</p>
                  <p className="font-serif text-xl font-bold">Rustic Terracotta Planter</p>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -top-6 -left-6 bg-cream border border-sand-300 p-3.5 rounded-2xl shadow-soft flex items-center space-x-3 hidden sm:flex animate-fade-in">
                <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center text-sage-600">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-forest-800">Crafted with Love</p>
                  <p className="text-[10px] text-forest-800/60">By master artisans</p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -bottom-6 -right-6 bg-cream border border-sand-300 p-3.5 rounded-2xl shadow-soft flex items-center space-x-3 hidden sm:flex animate-fade-in">
                <div className="w-10 h-10 rounded-xl bg-terracotta-100 flex items-center justify-center text-terracotta-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-forest-800">Quality Guaranteed</p>
                  <p className="text-[10px] text-forest-800/60">Free 30-day returns</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
