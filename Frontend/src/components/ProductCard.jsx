import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group bg-cream border border-sand-300 rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1">
      
      {/* IMAGE CONTAINER */}
      <div className="relative aspect-square overflow-hidden bg-sand-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* CATEGORY BADGE */}
        <span className="absolute top-3 left-3 px-3 py-1 bg-cream/90 backdrop-blur-md rounded-full text-[10px] font-bold text-forest-800 tracking-wider uppercase shadow-sm">
          {product.category}
        </span>

        {/* HOVER OVERLAY WITH QUICK ACTIONS */}
        <div className="absolute inset-0 bg-forest-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3 p-4">
          <Link
            to={`/product/${product.id}`}
            className="w-10 h-10 rounded-full bg-cream text-forest-800 flex items-center justify-center shadow-lg hover:bg-terracotta-500 hover:text-cream transition-colors duration-200"
            title="View Details"
          >
            <Eye className="w-5 h-5" />
          </Link>
          <button
            onClick={() => addToCart(product, 1)}
            className="w-10 h-10 rounded-full bg-terracotta-500 text-cream flex items-center justify-center shadow-lg hover:bg-terracotta-600 transition-colors duration-200"
            title="Add to Cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* RATING & REVIEWS */}
          <div className="flex items-center space-x-1 mb-1">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
            </div>
            <span className="text-xs font-bold text-forest-800">{product.rating}</span>
            <span className="text-[11px] text-forest-800/50 font-normal">
              ({product.reviewsCount || 24})
            </span>
          </div>

          {/* TITLE & DESCRIPTION */}
          <Link to={`/product/${product.id}`} className="block group-hover:text-terracotta-600 transition-colors">
            <h3 className="font-serif text-lg font-bold text-forest-800 leading-snug">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-forest-800/70 mt-1 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* PRICE & BUTTONS */}
        <div className="pt-3 border-t border-sand-200 flex items-center justify-between">
          <div>
            <span className="text-xs text-forest-800/60 block -mb-0.5">Price</span>
            <span className="font-serif text-xl font-bold text-forest-800">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Link
              to={`/product/${product.id}`}
              className="px-3 py-1.5 text-xs font-medium text-forest-800 hover:text-terracotta-600 bg-sand-100 hover:bg-sand-200 rounded-full transition-colors"
            >
              Details
            </Link>
            <button
              onClick={() => addToCart(product, 1)}
              className="px-3.5 py-1.5 text-xs font-semibold text-cream bg-forest-800 hover:bg-terracotta-500 rounded-full shadow-sm transition-colors duration-200 flex items-center space-x-1"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Add</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ProductCard;
