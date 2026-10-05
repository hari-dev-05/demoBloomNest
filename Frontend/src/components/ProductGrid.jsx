import React from 'react';
import ProductCard from './ProductCard';
import { PackageX } from 'lucide-react';

const ProductGrid = ({ products, title, subtitle }) => {
  if (!products || products.length === 0) {
    return (
      <div className="py-16 text-center bg-sand-100 rounded-3xl border border-sand-300 px-6 max-w-2xl mx-auto space-y-4">
        <div className="w-16 h-16 rounded-full bg-sand-200 text-terracotta-500 flex items-center justify-center mx-auto">
          <PackageX className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-forest-800">No Flower Pots Found</h3>
        <p className="text-sm text-forest-800/70">
          Try resetting your search query or selecting a different style or price filter.
        </p>
      </div>
    );
  }

  return (
    <section className="space-y-8">
      {(title || subtitle) && (
        <div className="text-center max-w-2xl mx-auto space-y-2">
          {title && (
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-800 tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-sm text-forest-800/70 leading-relaxed font-light">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
