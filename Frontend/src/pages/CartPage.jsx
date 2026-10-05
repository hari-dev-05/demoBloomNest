import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { ShoppingBag, ArrowLeft, Trash2, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';
import toast from 'react-hot-toast';

const CartPage = () => {
  const { cartItems, subtotal, shipping, total, clearCart } = useCart();
  const [checkedOut, setCheckedOut] = useState(false);

  const handleCheckoutClick = () => {
    if (cartItems.length === 0) return;
    setCheckedOut(true);
    toast.success('Thank you! Demo checkout completed.', {
      style: {
        background: '#2D4030',
        color: '#FDFBF7',
        borderRadius: '12px',
      },
    });
    clearCart();
  };

  if (checkedOut) {
    return (
      <div className="pt-36 pb-20 max-w-xl mx-auto text-center px-4 space-y-6">
        <div className="w-16 h-16 rounded-full bg-sage-100 text-sage-600 flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-forest-800">Order Demo Received!</h2>
        <p className="text-sm text-forest-800/70 font-light leading-relaxed">
          Thank you for choosing BloomNest homemade pots. Your order request has been logged. Full payment processing will be integrated soon.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center space-x-2 px-8 py-3 bg-terracotta-500 text-cream text-xs font-bold rounded-full shadow-md hover:bg-terracotta-600 transition-colors uppercase tracking-wider"
        >
          <span>Continue Shopping</span>
        </Link>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="pt-36 pb-20 max-w-xl mx-auto text-center px-4 space-y-6">
        <div className="w-20 h-20 rounded-full bg-sand-200 text-forest-800/40 flex items-center justify-center mx-auto">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-forest-800">Your Cart is Empty</h2>
        <p className="text-sm text-forest-800/70 font-light">
          Looks like you haven't added any handcrafted flower pots to your cart yet.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center space-x-2 px-8 py-3 bg-terracotta-500 text-cream text-xs font-bold rounded-full shadow-md hover:bg-terracotta-600 transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Explore Shop</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* HEADER */}
      <div className="flex items-center justify-between border-b border-sand-200 pb-4">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest-800 tracking-tight">
            Shopping Cart
          </h1>
          <p className="text-xs text-forest-800/60 mt-1">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <button
          onClick={clearCart}
          className="text-xs font-semibold text-terracotta-600 hover:text-terracotta-700 flex items-center space-x-1"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Empty Cart</span>
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT LIST */}
        <div className="lg:col-span-8 space-y-4">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="pt-4 flex justify-between items-center">
            <Link
              to="/shop"
              className="inline-flex items-center space-x-2 text-xs font-semibold text-forest-800 hover:text-terracotta-600"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>

        {/* RIGHT ORDER SUMMARY */}
        <div className="lg:col-span-4 bg-sand-100 border border-sand-300 rounded-3xl p-6 shadow-soft space-y-6">
          <h3 className="font-serif text-xl font-bold text-forest-800 border-b border-sand-200 pb-3">
            Order Summary
          </h3>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between text-forest-800/80">
              <span>Subtotal</span>
              <span className="font-semibold text-forest-800">${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-forest-800/80">
              <span>Estimated Shipping</span>
              <span className="font-semibold text-forest-800">
                {shipping === 0 ? <span className="text-sage-600 font-bold">FREE</span> : `$${shipping.toFixed(2)}`}
              </span>
            </div>

            {subtotal < 50 && (
              <p className="text-[11px] text-terracotta-600 bg-sand-200 p-2 rounded-xl text-center">
                Add ${(50 - subtotal).toFixed(2)} more for FREE Shipping!
              </p>
            )}

            <div className="pt-3 border-t border-sand-200 flex justify-between items-baseline text-forest-800">
              <span className="font-bold text-sm">Total</span>
              <span className="font-serif text-2xl font-bold text-terracotta-600">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          <button
            onClick={handleCheckoutClick}
            className="w-full py-3.5 px-6 bg-terracotta-500 hover:bg-terracotta-600 text-cream text-xs font-bold rounded-full shadow-floating hover:shadow-soft-hover transition-all text-center uppercase tracking-wider"
          >
            Proceed to Checkout
          </button>

          <div className="space-y-2 pt-2 border-t border-sand-200 text-[11px] text-forest-800/70">
            <div className="flex items-center space-x-2">
              <Truck className="w-3.5 h-3.5 text-sage-600" />
              <span>Free delivery on orders over $50</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-3.5 h-3.5 text-forest-800" />
              <span>Shatterproof safe packaging guaranteed</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default CartPage;
