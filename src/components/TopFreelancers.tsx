import { Star, MapPin, Verified } from 'lucide-react';

const TopFreelancers = () => {
  const freelancers = [
    {
      id: 1,
      name: "Claire Moreau",
      title: "Développeuse Full-Stack",
      location: "Paris, France",
      avatar: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg",
      rating: 4.9,
      reviews: 245,
      skills: ["React", "Node.js", "Python"],
      verified: true,
      startingPrice: 19680,
    },
    {
      id: 2,
      name: "Alex Leroy",
      title: "Designer UI/UX",
      location: "Lyon, France",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      rating: 4.8,
      reviews: 189,
      skills: ["Figma", "Adobe XD", "Prototyping"],
      verified: true,
      startingPrice: 22960,
    },
    {
      id: 3,
      name: "Camille Durand",
      title: "Spécialiste Marketing Digital",
      location: "Marseille, France",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      rating: 5.0,
      reviews: 312,
      skills: ["SEO", "Google Ads", "Analytics"],
      verified: true,
      startingPrice: 26240,
    },
    {
      id: 4,
      name: "Julien Roux",
      title: "Rédacteur & Copywriter",
      location: "Toulouse, France",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
      rating: 4.9,
      reviews: 167,
      skills: ["Copywriting", "SEO", "Blog"],
      verified: true,
      startingPrice: 16400,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Nos talents les mieux notés
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Travaillez avec des freelancers expérimentés et hautement qualifiés
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up animation-delay-300">
          {freelancers.map((freelancer) => (
            <div
              key={freelancer.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:-translate-y-2 animate-fade-in-up"
              style={{animationDelay: `${freelancer.id * 150}ms`}}
            >
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <img
                    src={freelancer.avatar}
                    alt={freelancer.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto group-hover:scale-110 transition-transform duration-300 ring-4 ring-transparent group-hover:ring-green-200"
                  />
                  {freelancer.verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <Verified className="h-3 w-3 text-white fill-white" />
                    </div>
                  )}
                </div>

                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-green-500 transition-colors duration-200">
                  {freelancer.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2 group-hover:text-gray-700 transition-colors duration-200">{freelancer.title}</p>
                
                <div className="flex items-center justify-center space-x-1 mb-3 text-gray-500 text-sm">
                  <MapPin className="h-3 w-3" />
                  <span>{freelancer.location}</span>
                </div>

                <div className="flex items-center justify-center space-x-1 mb-4">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-900">{freelancer.rating}</span>
                  <span className="text-sm text-gray-500">({freelancer.reviews})</span>
                </div>

                <div className="flex flex-wrap justify-center gap-1 mb-4">
                  {freelancer.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-green-100 hover:text-green-700 transition-colors duration-200 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-4 group-hover:border-green-200 transition-colors duration-200">
                  <p className="text-sm text-gray-500 mb-1">À partir de</p>
                  <p className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-200">{freelancer.startingPrice.toLocaleString()} FCFA</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up animation-delay-1000">
          <button className="px-8 py-3 border-2 border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-200 font-medium hover:scale-105 transform shadow-lg hover:shadow-xl">
            Voir tous les freelancers
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopFreelancers;