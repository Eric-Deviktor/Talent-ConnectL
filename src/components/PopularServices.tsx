import { Star, Heart } from 'lucide-react';

const PopularServices = () => {
  const services = [
    {
      id: 1,
      title: "Je vais créer votre site web moderne et responsive",
      seller: "Marie Dubois",
      sellerAvatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      rating: 4.9,
      reviews: 127,
      price: 29520,
      image: "https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg",
      badge: "Choix du pro",
    },
    {
      id: 2,
      title: "Je vais designer votre logo professionnel unique",
      seller: "Thomas Martin",
      sellerAvatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      rating: 4.8,
      reviews: 89,
      price: 16400,
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    },
    {
      id: 3,
      title: "Je vais rédiger vos articles de blog SEO optimisés",
      seller: "Sophie Laurent",
      sellerAvatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      rating: 5.0,
      reviews: 203,
      price: 9840,
      image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg",
      badge: "Bestseller",
    },
    {
      id: 4,
      title: "Je vais créer une stratégie marketing sur mesure",
      seller: "Lucas Petit",
      sellerAvatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      rating: 4.7,
      reviews: 156,
      price: 49200,
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
    },
    {
      id: 5,
      title: "Je vais monter votre vidéo professionnelle",
      seller: "Emma Rousseau",
      sellerAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      rating: 4.9,
      reviews: 94,
      price: 22960,
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
    },
    {
      id: 6,
      title: "Je vais traduire vos textes en 3 langues",
      seller: "Antoine Bernard",
      sellerAvatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      rating: 4.8,
      reviews: 167,
      price: 13120,
      image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12 animate-fade-in-up">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Services populaires
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les services les plus demandés par nos clients
            </p>
          </div>
          <button className="hidden sm:block px-6 py-2 border-2 border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-200 font-medium hover:scale-105 transform shadow-lg hover:shadow-xl">
            Voir tout
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up animation-delay-300">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2 animate-fade-in-up"
              style={{animationDelay: `${service.id * 100}ms`}}
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {service.badge && (
                  <div className="absolute top-3 left-3 px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-medium rounded-md shadow-lg animate-pulse">
                    {service.badge}
                  </div>
                )}
                <button className="absolute top-3 right-3 p-2 bg-white/90 text-gray-700 rounded-full hover:bg-white hover:text-red-500 transition-all duration-200 hover:scale-110 transform shadow-lg">
                  <Heart className="h-4 w-4" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src={service.sellerAvatar}
                    alt={service.seller}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-gray-900">{service.seller}</span>
                </div>

                <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-500 transition-colors duration-200 leading-tight">
                  {service.title}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-900">{service.rating}</span>
                    <span className="text-sm text-gray-500">({service.reviews})</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">À partir de</p>
                    <p className="text-lg font-bold text-gray-900">{service.price.toLocaleString()} FCFA</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up animation-delay-1000">
          <button className="sm:hidden px-8 py-3 border-2 border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-200 font-medium hover:scale-105 transform shadow-lg hover:shadow-xl">
            Voir tous les services
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;