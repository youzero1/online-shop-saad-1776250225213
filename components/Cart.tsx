'use client';

import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CartItem } from '@/types';

interface CartProps {
  items: CartItem[];
  total: number;
  onClose: () => void;
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

export default function Cart({ items, total, onClose, onRemove, onUpdateQuantity }: CartProps) {
  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="flex-1 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Drawer */}
      <div className="w-full max-w-md bg-white h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-blue-600" />
            <h2 className="text-lg font-bold text-gray-900">Your Cart</h2>
            {items.length > 0 && (
              <span className="bg-blue-100 text-blue-600 text-xs font-bold px-2 py-0.5 rounded-full">
                {items.reduce((s, i) => s + i.quantity, 0)} items
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-20">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Cart is empty</h3>
              <p className="text-gray-500 text-sm">Add some products to get started!</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-gray-50 rounded-xl p-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-800 truncate">{item.name}</h4>
                  <p className="text-xs text-gray-500 mb-2">{item.category}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm font-medium w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <span className="text-sm font-bold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors self-start"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-4 border-t bg-white">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Subtotal</span>
              <span className="text-sm font-medium">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Shipping</span>
              <span className="text-sm text-green-600 font-medium">Free</span>
            </div>
            <div className="flex justify-between items-center mb-4 pt-2 border-t">
              <span className="font-bold text-gray-900">Total</span>
              <span className="font-bold text-blue-600 text-lg">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors">
              Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full text-gray-500 text-sm mt-2 py-2 hover:text-gray-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
