import React from 'react';
import { SlidersHorizontal, RotateCcw } from 'lucide-react';

const categories = [
  'All',
  'Ceramic Pots',
  'Clay Pots',
  'Hanging Pots',
  'Indoor Pots',
  'Decorative Pots',
  'Mini Pots',
];

const FilterBar = ({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
  onResetFilters,
}) => {
  return (
    <div className="bg-sand-100 border border-sand-300 rounded-3xl p-5 shadow-soft space-y-6">
      <div className="flex items-center justify-between border-b border-sand-200 pb-4">
        <div className="flex items-center space-x-2 text-forest-800">
          <SlidersHorizontal className="w-4 h-4 text-terracotta-500" />
          <h3 className="font-serif text-lg font-bold">Filter & Sort</h3>
        </div>
        <button
          onClick={onResetFilters}
          className="text-xs font-semibold text-terracotta-600 hover:text-terracotta-700 flex items-center space-x-1"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset All</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* CATEGORY FILTER */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-forest-800/80 mb-2">
            Category Style
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2.5 text-xs bg-cream border border-sand-300 rounded-xl text-forest-800 focus:outline-none focus:border-terracotta-500 font-medium"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* PRICE FILTER */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-forest-800/80 mb-2">
            Price Filter
          </label>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full px-4 py-2.5 text-xs bg-cream border border-sand-300 rounded-xl text-forest-800 focus:outline-none focus:border-terracotta-500 font-medium"
          >
            <option value="all">All Prices</option>
            <option value="under-30">Under $30</option>
            <option value="30-45">$30 - $45</option>
            <option value="over-45">$45 and above</option>
          </select>
        </div>

        {/* SORT BY */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-forest-800/80 mb-2">
            Sort By
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-4 py-2.5 text-xs bg-cream border border-sand-300 rounded-xl text-forest-800 focus:outline-none focus:border-terracotta-500 font-medium"
          >
            <option value="featured">Featured First</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

      </div>

      {/* QUICK CATEGORY PILLS */}
      <div className="pt-2 flex flex-wrap gap-2">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs rounded-full transition-all duration-200 font-medium ${
                isSelected
                  ? 'bg-terracotta-500 text-cream shadow-sm font-bold'
                  : 'bg-cream text-forest-800 hover:bg-sand-200 border border-sand-300'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

    </div>
  );
};

export default FilterBar;
