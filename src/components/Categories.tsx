import React from 'react';
import { Code, Palette, PenTool, Megaphone, Languages, Camera, Music, TrendingUp } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      icon: Code,
      title: 'Développement & Tech',
      subtitle: 'Sites web, apps, logiciels',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Palette,
      title: 'Design Graphique',
      subtitle: 'Logos, branding, UI/UX',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: PenTool,
      title: 'Rédaction & Traduction',
      subtitle: 'Articles, copywriting, SEO',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Megaphone,
      title: 'Marketing Digital',
      subtitle: 'SEO, publicité, réseaux sociaux',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Camera,
      title: 'Photo & Vidéo',
      subtitle: 'Montage, animation, photo',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Music,
      title: 'Audio & Musique',
      subtitle: 'Composition, mixage, voix-off',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: TrendingUp,
      title: 'Business',
      subtitle: 'Consultation, finance, RH',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Languages,
      title: 'Langues',
      subtitle: 'Traduction, cours, correction',
      color: 'from-teal-500 to-teal-600',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Explorez nos catégories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez des milliers de services professionnels dans tous les domaines
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-green-500 transition-colors duration-200">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {category.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;