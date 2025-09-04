import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, Heart, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900 hover:scale-105 transition-transform duration-200">
              Talent<span className="text-green-500 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">Connect</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-500 transition-all duration-200 relative group">
              Explorer
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500 transition-all duration-200 relative group">
              Devenir vendeur
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500 transition-all duration-200 relative group">
              Aide
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-200 group-hover:w-full"></span>
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
            <Link to="/auth/login" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <User className="h-5 w-5" />
              <span>Connexion</span>
            </Link>
            <Link to="/auth/register" className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105">
              S'inscrire
            </Link>
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
              <Link to="/auth/login" className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                Connexion
              </Link>
              <Link to="/auth/register" className="block w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium text-center">
                S'inscrire
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;