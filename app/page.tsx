'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ProductGrid from '@/components/ProductGrid';
import Cart from '@/components/Cart';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { CartItem, Product } from '@/types';
import { products } from '@/data/products';

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <Hero />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <ProductGrid products={filteredProducts} onAddToCart={addToCart} />
      </main>
      <Footer />
      {isCartOpen && (
        <Cart
          items={cartItems}
          total={cartTotal}
          onClose={() => setIsCartOpen(false)}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      )}
    </div>
  );
}
