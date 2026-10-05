import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, ShoppingCart, ArrowLeft, ShieldCheck, Truck, RotateCcw, Plus, Minus, Check } from 'lucide-react';
import toast from 'react-hot-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="pt-36 pb-20 text-center max-w-xl mx-auto space-y-6 px-4">
        <h2 className="font-serif text-3xl font-bold text-forest-800">Product Not Found</h2>
        <p className="text-sm text-forest-800/70">
          We couldn't find the flower pot you were looking for. It may have been renamed or removed.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center space-x-2 px-6 py-2.5 bg-terracotta-500 text-cream text-xs font-bold rounded-full shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Shop</span>
        </Link>
      </div>
    );
  }

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* BREADCRUMB */}
      <Link
        to="/shop"
        className="inline-flex items-center space-x-2 text-xs font-semibold text-forest-800/70 hover:text-terracotta-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Pots</span>
      </Link>

      {/* MAIN DETAIL GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* LEFT IMAGE GALLERY */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative rounded-3xl overflow-hidden bg-sand-100 border border-sand-300 shadow-soft aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            <span className="absolute top-4 left-4 px-3.5 py-1 bg-cream/95 backdrop-blur-md rounded-full text-xs font-bold text-forest-800 uppercase tracking-wider shadow-sm">
              {product.category}
            </span>
          </div>
        </div>

        {/* RIGHT PRODUCT INFO */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="space-y-2">
            {/* RATING */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-forest-800">{product.rating}</span>
              <span className="text-xs text-forest-800/50">({product.reviewsCount || 24} customer reviews)</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest-800 tracking-tight leading-snug">
              {product.name}
            </h1>

            <div className="flex items-baseline space-x-3 pt-1">
              <span className="font-serif text-3xl font-bold text-terracotta-600">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-xs text-forest-800/60 bg-sand-200 px-2.5 py-1 rounded-full font-medium">
                Free shipping over $50
              </span>
            </div>
          </div>

          <p className="text-sm text-forest-800/80 leading-relaxed font-light border-y border-sand-200 py-4">
            {product.description}
          </p>

          {/* MATERIAL & SIZE SPECS */}
          <div className="grid grid-cols-2 gap-4 bg-sand-100 border border-sand-300 rounded-2xl p-4">
            <div>
              <span className="text-[11px] uppercase font-bold text-forest-800/60 block">Material</span>
              <span className="text-xs font-semibold text-forest-800">{product.material}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase font-bold text-forest-800/60 block">Dimensions</span>
              <span className="text-xs font-semibold text-forest-800">{product.size}</span>
            </div>
          </div>

          {/* QUANTITY & ACTIONS */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center space-x-4">
              <span className="text-xs font-bold text-forest-800">Quantity:</span>
              <div className="flex items-center space-x-3 bg-sand-100 border border-sand-300 rounded-full px-4 py-1.5">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-forest-800/70 hover:text-terracotta-600 p-1"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-sm font-bold text-forest-800 w-6 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-forest-800/70 hover:text-terracotta-600 p-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => addToCart(product, quantity)}
                className="w-full py-3.5 px-6 bg-terracotta-500 hover:bg-terracotta-600 text-cream text-xs font-bold rounded-full shadow-floating hover:shadow-soft-hover transition-all flex items-center justify-center space-x-2 uppercase tracking-wider"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="w-full py-3.5 px-6 bg-forest-800 hover:bg-forest-900 text-cream text-xs font-bold rounded-full shadow-md transition-all flex items-center justify-center space-x-2 uppercase tracking-wider"
              >
                <Check className="w-4 h-4" />
                <span>Buy Now</span>
              </button>
            </div>
          </div>

          {/* PERKS / TRUST */}
          <div className="pt-6 border-t border-sand-200 grid grid-cols-3 gap-3 text-center">
            <div className="p-3 bg-cream border border-sand-200 rounded-xl space-y-1">
              <Truck className="w-5 h-5 text-terracotta-500 mx-auto" />
              <p className="text-[11px] font-bold text-forest-800">Fast Shipping</p>
              <p className="text-[10px] text-forest-800/60">Dispatched in 24h</p>
            </div>
            <div className="p-3 bg-cream border border-sand-200 rounded-xl space-y-1">
              <ShieldCheck className="w-5 h-5 text-sage-600 mx-auto" />
              <p className="text-[11px] font-bold text-forest-800">Safe Pack</p>
              <p className="text-[10px] text-forest-800/60">Shatterproof</p>
            </div>
            <div className="p-3 bg-cream border border-sand-200 rounded-xl space-y-1">
              <RotateCcw className="w-5 h-5 text-forest-800 mx-auto" />
              <p className="text-[11px] font-bold text-forest-800">Easy Returns</p>
              <p className="text-[10px] text-forest-800/60">30 Day Guarantee</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetail;
