import React from 'react';
import { Leaf, Flame, Sparkles, HeartHandshake, ShieldCheck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-28 pb-20 space-y-20">
      
      {/* HERO HEADER */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sand-200 border border-sand-300 text-forest-800 text-xs font-semibold tracking-wide uppercase">
          <Leaf className="w-3.5 h-3.5 text-sage-600" />
          <span>Our Story & Philosophy</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-forest-800 tracking-tight">
          Handmade Pots. Made with Love.
        </h1>
        <p className="text-base sm:text-lg text-forest-800/80 leading-relaxed font-light">
          BloomNest was born out of a simple belief: every plant deserves a hand-sculpted vessel that honors its living beauty.
        </p>
      </section>

      {/* STORY & VISUAL GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-soft-hover border-4 border-cream aspect-[4/3] bg-sand-200">
            <img
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=80"
              alt="Pottery Studio Hands crafting pot"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-forest-800">
              The BloomNest Journey
            </h2>
            <p className="text-sm text-forest-800/80 leading-relaxed font-light">
              Founded in 2021 as a small home studio workshop, BloomNest grew from shaping raw clay on weekends to crafting thousands of custom planters for plant enthusiasts across the world.
            </p>
            <p className="text-sm text-forest-800/80 leading-relaxed font-light">
              Unlike mass-produced plastic or stamped factory pots, our pieces retain natural clay breathability, optimal drainage contours, and tactile hand-rubbed glazes that change color subtly depending on room lighting.
            </p>
          </div>
        </div>
      </section>

      {/* HANDMADE PROCESS */}
      <section className="bg-sand-100 py-16 border-y border-sand-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
              Craftsmanship Step-by-Step
            </span>
            <h2 className="font-serif text-3xl font-bold text-forest-800">
              Our Handmade Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream border border-sand-300 rounded-3xl p-6 shadow-soft space-y-3">
              <div className="w-10 h-10 rounded-full bg-sand-200 text-terracotta-600 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-serif text-xl font-bold text-forest-800">Clay Preparation</h3>
              <p className="text-xs text-forest-800/70 leading-relaxed font-light">
                We wedged pure terracotta and porcelain clay by hand to eliminate air bubbles, ensuring structural durability and optimal moisture retention.
              </p>
            </div>

            <div className="bg-cream border border-sand-300 rounded-3xl p-6 shadow-soft space-y-3">
              <div className="w-10 h-10 rounded-full bg-sand-200 text-terracotta-600 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-serif text-xl font-bold text-forest-800">Wheel Turning & Carving</h3>
              <p className="text-xs text-forest-800/70 leading-relaxed font-light">
                Master potters throw each pot on traditional potter wheels, carving organic ribbing, curves, and base drainage ports before slow air-drying.
              </p>
            </div>

            <div className="bg-cream border border-sand-300 rounded-3xl p-6 shadow-soft space-y-3">
              <div className="w-10 h-10 rounded-full bg-sand-200 text-terracotta-600 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-serif text-xl font-bold text-forest-800">High-Heat Firing</h3>
              <p className="text-xs text-forest-800/70 leading-relaxed font-light">
                Planters undergo twin kiln firings reaching temperatures above 2,100°F, creating frost-resistant stoneware ready for indoor and outdoor living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CUSTOMERS CHOOSE BLOOMNEST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="font-serif text-3xl font-bold text-forest-800">
            Why Plant Lovers Trust Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-cream border border-sand-300 rounded-3xl space-y-3">
            <HeartHandshake className="w-8 h-8 text-terracotta-500" />
            <h4 className="font-serif text-lg font-bold text-forest-800">Ethical Artisan Wages</h4>
            <p className="text-xs text-forest-800/70 leading-relaxed">
              We directly support local pottery artists with fair wages and safe creative studio spaces.
            </p>
          </div>

          <div className="p-6 bg-cream border border-sand-300 rounded-3xl space-y-3">
            <Leaf className="w-8 h-8 text-sage-600" />
            <h4 className="font-serif text-lg font-bold text-forest-800">Zero Plastic Packaging</h4>
            <p className="text-xs text-forest-800/70 leading-relaxed">
              Shipped using 100% biodegradable honey-comb paper and recyclable cardboard boxes.
            </p>
          </div>

          <div className="p-6 bg-cream border border-sand-300 rounded-3xl space-y-3">
            <Award className="w-8 h-8 text-amber-500" />
            <h4 className="font-serif text-lg font-bold text-forest-800">Root Health Priority</h4>
            <p className="text-xs text-forest-800/70 leading-relaxed">
              Designed with proper aeration dynamics so plant roots breathe naturally without waterlogging.
            </p>
          </div>
        </div>

        <div className="text-center pt-6">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 bg-forest-800 hover:bg-forest-900 text-cream text-xs font-bold rounded-full shadow-md transition-all uppercase tracking-wider"
          >
            Explore Our Pots
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;
