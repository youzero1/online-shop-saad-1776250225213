'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import Cart from '@/components/Cart';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabase';
import type { Product, CartItem } from '@/types';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(null);
      const { data, error: fetchError } = await supabase
        .from('products')
        .select('*')
        .order('id', { ascending: true });
      if (fetchError) {
        console.error('Error fetching products:', fetchError);
        setError('Failed to load products. Please try again later.');
      } else {
        setProducts(data || []);
      }
      setLoading(false);
    })();
  }, []);

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  const filteredProducts = products.filter(p => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <Hero />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-gray-500 text-lg">Loading products...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-5xl mb-4">⚠️</p>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Something went wrong</h3>
            <p className="text-gray-500">{error}</p>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map(cat => (
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
            <ProductGrid
              products={filteredProducts}
              onAddToCart={product => {
                setCartItems(prev =>
                  prev.find(i => i.id === product.id)
                    ? prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)
                    : [...prev, { ...product, quantity: 1 }]
                );
              }}
            />
          </>
        )}
      </main>
      <Footer />
      {cartOpen && (
        <Cart
          items={cartItems}
          total={cartTotal}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onUpdateQuantity={(id, qty) => {
            if (qty <= 0) { removeFromCart(id); return; }
            setCartItems(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
          }}
        />
      )}
    </div>
  );
}
