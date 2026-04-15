'use client';

import { ShoppingCart, Search, Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Navbar({ cartCount, onCartClick, searchQuery, onSearchChange }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">ShopNext</span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearchChange(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
              <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Shop</a>
              <a href="#" className="hover:text-blue-600 transition-colors">About</a>
            </nav>
            <button
              onClick={onCartClick}
              className="relative p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              <ShoppingCart className="h-5 w-5 text-blue-600" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile search + menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearchChange(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <nav className="flex flex-col gap-2 text-sm font-medium text-gray-600">
              <a href="#" className="hover:text-blue-600 py-1">Home</a>
              <a href="#" className="hover:text-blue-600 py-1">Shop</a>
              <a href="#" className="hover:text-blue-600 py-1">About</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
