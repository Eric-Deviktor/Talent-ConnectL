import React from 'react';
import { Search, MessageCircle, CreditCard, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "1. Trouvez le service",
      description: "Explorez notre marketplace et trouvez le freelancer parfait pour votre projet",
      color: "bg-blue-500",
    },
    {
      icon: MessageCircle,
      title: "2. Discutez des détails",
      description: "Communiquez directement avec le vendeur pour définir vos besoins",
      color: "bg-green-500",
    },
    {
      icon: CreditCard,
      title: "3. Effectuez le paiement",
      description: "Payez en toute sécurité. Votre argent est protégé jusqu'à livraison",
      color: "bg-orange-500",
    },
    {
      icon: CheckCircle,
      title: "4. Recevez votre projet",
      description: "Obtenez votre travail terminé dans les délais convenus",
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un processus simple en 4 étapes pour réaliser vos projets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium text-lg">
            Commencer maintenant
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;