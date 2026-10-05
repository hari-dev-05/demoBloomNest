import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-cream border border-sand-300 rounded-2xl shadow-soft gap-4">
      {/* IMAGE & INFO */}
      <div className="flex items-center space-x-4 w-full sm:w-auto">
        <div className="w-20 h-20 rounded-xl overflow-hidden bg-sand-100 flex-shrink-0 border border-sand-200">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-1">
          <h4 className="font-serif text-base font-bold text-forest-800">
            {item.name}
          </h4>
          <p className="text-xs text-forest-800/60">{item.category}</p>
          <p className="text-xs font-semibold text-terracotta-600">
            ${item.price.toFixed(2)} each
          </p>
        </div>
      </div>

      {/* QUANTITY & ACTIONS */}
      <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto space-x-6 pt-2 sm:pt-0 border-t sm:border-t-0 border-sand-200">
        {/* QUANTITY CONTROLS */}
        <div className="flex items-center space-x-3 bg-sand-100 border border-sand-300 rounded-full px-3 py-1">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="text-forest-800/70 hover:text-terracotta-600 p-1"
            title="Decrease quantity"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="text-xs font-bold text-forest-800 w-4 text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="text-forest-800/70 hover:text-terracotta-600 p-1"
            title="Increase quantity"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* ITEM SUBTOTAL */}
        <div className="text-right">
          <span className="text-[10px] text-forest-800/50 block">Subtotal</span>
          <span className="font-serif text-base font-bold text-forest-800">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>

        {/* REMOVE BUTTON */}
        <button
          onClick={() => removeFromCart(item.id)}
          className="p-2 text-forest-800/50 hover:text-terracotta-600 hover:bg-sand-200 rounded-full transition-colors"
          title="Remove item"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
