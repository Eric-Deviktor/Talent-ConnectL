import React, { useState } from 'react';
import { Search, Menu, X, User, Heart, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Talent<span className="text-green-500">Connect</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-500 transition-colors duration-200">
              Explorer
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500 transition-colors duration-200">
              Devenir vendeur
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500 transition-colors duration-200">
              Aide
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-green-500 transition-colors duration-200">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-green-500 transition-colors duration-200">
              <ShoppingCart className="h-5 w-5" />
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <User className="h-5 w-5" />
              <span>Connexion</span>
            </button>
            <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium">
              S'inscrire
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-100">
            <a href="#" className="block text-gray-700 hover:text-green-500 transition-colors duration-200">
              Explorer
            </a>
            <a href="#" className="block text-gray-700 hover:text-green-500 transition-colors duration-200">
              Devenir vendeur
            </a>
            <a href="#" className="block text-gray-700 hover:text-green-500 transition-colors duration-200">
              Aide
            </a>
            <div className="pt-4 space-y-2 border-t border-gray-100">
              <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                Connexion
              </button>
              <button className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium">
                S'inscrire
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;