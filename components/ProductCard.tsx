'use client';

import { useState } from 'react';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col group">
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full ${
              product.badge === 'Sale'
                ? 'bg-red-500 text-white'
                : product.badge === 'Best Seller'
                ? 'bg-green-500 text-white'
                : 'bg-blue-500 text-white'
            }`}
          >
            {product.badge}
          </span>
        )}
        {discount && (
          <span className="absolute top-3 right-10 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
            -{discount}%
          </span>
        )}
        {/* Wishlist */}
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-white shadow hover:scale-110 transition-transform"
        >
          <Heart
            className={`h-4 w-4 ${
              wishlisted ? 'text-red-500 fill-red-500' : 'text-gray-400'
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs text-blue-600 font-medium uppercase tracking-wide mb-1">
          {product.category}
        </span>
        <h3 className="font-semibold text-gray-800 text-sm leading-snug mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-500 text-xs mb-3 line-clamp-2">{product.description}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-3.5 w-3.5 ${
                  star <= Math.floor(product.rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews.toLocaleString()})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4 mt-auto">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
            added
              ? 'bg-green-500 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          <ShoppingCart className="h-4 w-4" />
          {added ? 'Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
