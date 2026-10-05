import React from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search pot names, styles, or materials..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-12 pr-10 py-3 text-sm bg-cream border border-sand-300 rounded-full shadow-soft focus:outline-none focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-500/20 text-forest-800 placeholder-forest-800/40 transition-all"
      />
      <Search className="w-5 h-5 text-forest-800/50 absolute left-4 top-3.5" />
      {searchTerm && (
        <button
          onClick={() => setSearchTerm('')}
          className="absolute right-4 top-3.5 text-forest-800/50 hover:text-forest-800"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
