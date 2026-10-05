import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductGrid from '../components/ProductGrid';
import { categories, products } from '../data/products';
import { Sparkles, HeartHandshake, Leaf, ShieldCheck, Package, ArrowRight } from 'lucide-react';

const Home = () => {
  const featuredProducts = products.filter((p) => p.isFeatured);

  const features = [
    {
      icon: <HeartHandshake className="w-7 h-7 text-terracotta-500" />,
      title: 'Handmade with Care',
      description: 'Every pot is individually hand-molded and turned on potter wheels by passionate artisans.',
    },
    {
      icon: <Leaf className="w-7 h-7 text-sage-600" />,
      title: 'Eco-Friendly Materials',
      description: '100% natural red terracotta, porcelain clay, and non-toxic mineral dyes sourced sustainably.',
    },
    {
      icon: <Sparkles className="w-7 h-7 text-amber-500" />,
      title: 'Unique Designs',
      description: 'No two pieces are identical. Subtle hand-carved textures make each planter a unique art piece.',
    },
    {
      icon: <Package className="w-7 h-7 text-forest-800" />,
      title: 'Carefully Packed',
      description: 'Recyclable shatterproof padding ensures your flower pots arrive safely at your doorstep.',
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. CATEGORY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
            Handcrafted Styles
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-800 tracking-tight">
            Shop by Style
          </h2>
          <p className="text-sm text-forest-800/70 font-light">
            Discover planters tailored for succulents, trailing ivy, indoor trees, and outdoor greenery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductGrid
          products={featuredProducts}
          title="Handpicked for You"
          subtitle="Our most beloved bestselling artisan pots, created with premium clay and timeless aesthetics."
        />
        <div className="text-center pt-10">
          <Link
            to="/shop"
            className="inline-flex items-center space-x-2 px-8 py-3 text-sm font-semibold bg-forest-800 hover:bg-forest-900 text-cream rounded-full shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. ABOUT SECTION */}
      <section className="bg-sand-100 py-20 border-y border-sand-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="relative rounded-3xl overflow-hidden shadow-soft-hover aspect-[4/3] border-4 border-cream">
              <img
                src="https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=1000&q=80"
                alt="Pottery Studio Craftsman"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-forest-900/10" />
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cream text-forest-800 text-xs font-semibold uppercase tracking-wider shadow-sm">
                <Leaf className="w-3.5 h-3.5 text-sage-600" />
                <span>Our Heritage</span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-800 leading-tight">
                Made by Hand, Made for Home
              </h2>

              <p className="text-sm sm:text-base text-forest-800/80 leading-relaxed font-light">
                At BloomNest, we believe that plant containers should be as vibrant and alive as the botanicals within them. Each pot is individually turned, trimmed, and kiln-fired using centuries-old techniques.
              </p>

              <p className="text-sm text-forest-800/80 leading-relaxed font-light">
                Whether you are decorating a cozy studio apartment balcony, setting up a peaceful office desk nook, or designing a sun-drenched outdoor patio, our pots provide ideal root ventilation and timeless warmth.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 text-sm font-bold text-terracotta-600 hover:text-terracotta-700 underline underline-offset-4"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. WHY BLOOMNEST (4 FEATURE CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
            The BloomNest Promise
          </span>
          <h2 className="font-serif text-3xl font-bold text-forest-800">
            Why Choose BloomNest
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-cream border border-sand-300 rounded-3xl p-6 shadow-soft hover:shadow-soft-hover transition-all duration-300 space-y-4 text-center sm:text-left"
            >
              <div className="w-12 h-12 rounded-2xl bg-sand-200 flex items-center justify-center mx-auto sm:mx-0">
                {feat.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-800">
                {feat.title}
              </h3>
              <p className="text-xs text-forest-800/70 leading-relaxed font-light">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-forest-900 text-cream p-10 sm:p-16 text-center space-y-6 shadow-floating">
          {/* Subtle overlay image */}
          <div
            className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1200&q=80)',
            }}
          />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-terracotta-500">
              Transform Your Space
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Give Your Plants a Beautiful Home
            </h2>
            <p className="text-sm sm:text-base text-sand-300 font-light leading-relaxed">
              Explore our curated collection of handcrafted planters and find the perfect match for your green companions today.
            </p>
            <div className="pt-4">
              <Link
                to="/shop"
                className="inline-block px-8 py-3.5 text-xs sm:text-sm font-bold bg-terracotta-500 hover:bg-terracotta-600 text-cream rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 uppercase tracking-wider"
              >
                Shop Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
