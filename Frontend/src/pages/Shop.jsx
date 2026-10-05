import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const cat = searchParams.get('category');
    const srch = searchParams.get('search');
    if (cat) setSelectedCategory(cat);
    if (srch) setSearchTerm(srch);
  }, [searchParams]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setPriceRange('all');
    setSortBy('featured');
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Search term filter
        if (searchTerm.trim()) {
          const query = searchTerm.toLowerCase();
          const matchesName = p.name.toLowerCase().includes(query);
          const matchesCategory = p.category.toLowerCase().includes(query);
          const matchesDesc = p.shortDescription.toLowerCase().includes(query);
          const matchesMaterial = p.material.toLowerCase().includes(query);
          if (!matchesName && !matchesCategory && !matchesDesc && !matchesMaterial) {
            return false;
          }
        }

        // Category filter
        if (selectedCategory !== 'All') {
          if (p.category.toLowerCase() !== selectedCategory.toLowerCase()) {
            return false;
          }
        }

        // Price range filter
        if (priceRange === 'under-30' && p.price >= 30) return false;
        if (priceRange === '30-45' && (p.price < 30 || p.price > 45)) return false;
        if (priceRange === 'over-45' && p.price <= 45) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        // Default featured
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return 0;
      });
  }, [searchTerm, selectedCategory, priceRange, sortBy]);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
          Handcrafted Collection
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-forest-800 tracking-tight">
          Shop All Pots
        </h1>
        <p className="text-sm text-forest-800/70 font-light leading-relaxed">
          Browse our full range of artisan terracotta, glazed stoneware, macrame hanging vessels, and desk succulents.
        </p>
      </div>

      {/* SEARCH BAR */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* FILTER & SORT CONTROLS */}
      <FilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onResetFilters={handleResetFilters}
      />

      {/* RESULTS META */}
      <div className="flex items-center justify-between text-xs text-forest-800/60 px-2 font-medium">
        <span>Showing {filteredProducts.length} of {products.length} flower pots</span>
        {(selectedCategory !== 'All' || searchTerm || priceRange !== 'all') && (
          <span className="text-terracotta-600">Active filters applied</span>
        )}
      </div>

      {/* PRODUCT GRID */}
      <ProductGrid products={filteredProducts} />

    </div>
  );
};

export default Shop;
