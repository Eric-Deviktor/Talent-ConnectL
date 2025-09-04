import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Catégories",
      links: [
        "Développement & Tech",
        "Design Graphique",
        "Rédaction & Traduction",
        "Marketing Digital",
        "Photo & Vidéo",
      ],
    },
    {
      title: "À propos",
      links: [
        "Comment ça marche",
        "Devenir vendeur",
        "Centre d'aide",
        "Politique de confidentialité",
        "Conditions d'utilisation",
      ],
    },
    {
      title: "Support",
      links: [
        "Centre d'aide",
        "Résolution de conflits",
        "Signaler un problème",
        "Contact",
        "FAQ",
      ],
    },
    {
      title: "Communauté",
      links: [
        "Blog",
        "Forum",
        "Événements",
        "Affiliation",
        "Programme partenaires",
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-green-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in-up">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Talent<span className="text-green-500 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Connect</span>
              </h2>
              <p className="text-gray-400 leading-relaxed hover:text-gray-300 transition-colors duration-200">
                La plateforme qui connecte les talents aux opportunités. 
                Trouvez le freelancer parfait pour votre projet ou proposez vos services.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors duration-200 cursor-pointer">
                <Mail className="h-4 w-4" />
                <span>contact@talentconnect.fr</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors duration-200 cursor-pointer">
                <Phone className="h-4 w-4" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors duration-200">
                <MapPin className="h-4 w-4" />
                <span>Paris, France</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 transition-all duration-200 hover:scale-110 transform shadow-lg"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4 animate-fade-in-up" style={{animationDelay: `${(index + 1) * 200}ms`}}>
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-green-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        {/* Newsletter Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 mb-8">
          <div className="text-center animate-fade-in-up animation-delay-1000">
            <h3 className="text-xl font-semibold mb-4 text-white">Restez informé</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">Recevez les dernières actualités et offres exclusives</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors duration-200"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 font-medium hover:scale-105 transform shadow-lg">
                S'abonner
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 animate-fade-in-up animation-delay-1200">
            <div className="text-gray-400 text-sm">
              © 2025 TalentConnect. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-green-400 transition-colors duration-200">
                Mentions légales
              </a>
              <a href="#" className="hover:text-green-400 transition-colors duration-200">
                Cookies
              </a>
              <a href="#" className="hover:text-green-400 transition-colors duration-200">
                Plan du site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;