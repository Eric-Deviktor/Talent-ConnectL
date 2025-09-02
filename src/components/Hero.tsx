import React, { useState } from 'react';
import { Search, Star } from 'lucide-react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const popularSearches = [
    'Développement web',
    'Design graphique',
    'Rédaction',
    'Marketing digital',
    'Traduction'
  ];

  return (
    <section className="bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Trouvez le
                <br />
                <span className="text-yellow-300">talent parfait</span>
                <br />
                pour votre projet
              </h1>
              <p className="text-xl text-green-100 max-w-md">
                Connectez-vous avec des freelancers talentueux du monde entier et donnez vie à vos idées.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <div className="bg-white rounded-lg p-1 flex items-center shadow-lg">
                <input
                  type="text"
                  placeholder="Rechercher un service..."
                  className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 border-0 outline-none rounded-l-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2">
                  <Search className="h-5 w-5" />
                  <span className="hidden sm:inline">Rechercher</span>
                </button>
              </div>
            </div>

            {/* Popular Searches */}
            <div className="space-y-3">
              <p className="text-green-100 text-sm">Recherches populaires :</p>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((search, index) => (
                  <button
                    key={index}
                    className="px-3 py-1 bg-white/20 text-white rounded-full text-sm hover:bg-white/30 transition-colors duration-200"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-green-100">
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-300 text-yellow-300" />
                  ))}
                </div>
                <span className="text-sm">4.9/5 basé sur 2M+ avis</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Freelancer working"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -top-4 -left-4 bg-yellow-300 text-gray-900 px-4 py-2 rounded-lg shadow-lg">
                <div className="text-sm font-medium">+50k projets réalisés</div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-gray-900 px-4 py-3 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-white fill-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Qualité garantie</div>
                    <div className="text-xs text-gray-500">Satisfaction 99%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;