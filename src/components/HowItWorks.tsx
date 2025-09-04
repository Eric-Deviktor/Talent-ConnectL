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
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un processus simple en 4 étapes pour réaliser vos projets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up animation-delay-300">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                <div className="relative mb-6">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 -z-10 animate-pulse">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center animate-fade-in-up animation-delay-1000">
          <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 font-medium text-lg shadow-xl hover:shadow-2xl transform hover:scale-105">
            Commencer maintenant
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;