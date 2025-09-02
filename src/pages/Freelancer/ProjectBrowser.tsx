import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  DollarSign, 
  Calendar, 
  Users, 
  Clock,
  Star,
  Heart,
  Send,
  Bookmark,
  Eye,
  TrendingUp
} from 'lucide-react';

const ProjectBrowser = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    budget: '',
    location: '',
    experience: '',
    duration: '',
    skills: [] as string[]
  });
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');

  // Mock projects data
  const projects = [
    {
      id: '1',
      title: 'Application E-commerce Mobile',
      description: 'Développement d\'une application mobile complète pour la vente en ligne avec intégration de paiement mobile money et gestion des commandes.',
      company: {
        name: 'TechCorp Ltd',
        logo: '',
        rating: 4.8,
        verified: true
      },
      budget: { min: 800000, max: 1200000, type: 'fixed' },
      deadline: '2024-03-15',
      location: { type: 'remote', city: 'Douala' },
      skills: ['React Native', 'Node.js', 'MongoDB', 'Payment Integration'],
      experience: 'intermediate',
      duration: '2-3 mois',
      applicants: 23,
      postedAt: '2024-01-15',
      featured: true,
      matchScore: 95
    },
    {
      id: '2',
      title: 'Site Web Corporate Responsive',
      description: 'Création d\'un site web moderne et responsive pour présenter les services de l\'entreprise avec système de gestion de contenu.',
      company: {
        name: 'Digital Solutions',
        logo: '',
        rating: 4.6,
        verified: false
      },
      budget: { min: 300000, max: 500000, type: 'fixed' },
      deadline: '2024-02-28',
      location: { type: 'hybrid', city: 'Yaoundé' },
      skills: ['React', 'Tailwind CSS', 'Next.js', 'SEO'],
      experience: 'junior',
      duration: '1-2 mois',
      applicants: 15,
      postedAt: '2024-01-20',
      featured: false,
      matchScore: 87
    },
    {
      id: '3',
      title: 'API REST pour Gestion Inventory',
      description: 'Développement d\'une API robuste pour la gestion des stocks et inventaires avec authentification et documentation complète.',
      company: {
        name: 'LogiTech CM',
        logo: '',
        rating: 4.9,
        verified: true
      },
      budget: { min: 600000, max: 800000, type: 'fixed' },
      deadline: '2024-04-10',
      location: { type: 'remote', city: 'Douala' },
      skills: ['Python', 'Django', 'PostgreSQL', 'Docker'],
      experience: 'senior',
      duration: '1-2 mois',
      applicants: 31,
      postedAt: '2024-01-18',
      featured: true,
      matchScore: 92
    },
    {
      id: '4',
      title: 'Application de Gestion Scolaire',
      description: 'Système complet de gestion des élèves, notes, et communications école-parents avec interface web et mobile.',
      company: {
        name: 'EduTech Solutions',
        logo: '',
        rating: 4.7,
        verified: true
      },
      budget: { min: 1000000, max: 1500000, type: 'fixed' },
      deadline: '2024-04-20',
      location: { type: 'onsite', city: 'Bafoussam' },
      skills: ['Laravel', 'Vue.js', 'MySQL', 'SMS Integration'],
      experience: 'intermediate',
      duration: '3-4 mois',
      applicants: 18,
      postedAt: '2024-01-12',
      featured: false,
      matchScore: 78
    },
    {
      id: '5',
      title: 'Plateforme de Formation en Ligne',
      description: 'Développement d\'une plateforme LMS avec vidéos, quiz, suivi de progression et certificats automatiques.',
      company: {
        name: 'LearnHub CM',
        logo: '',
        rating: 4.5,
        verified: false
      },
      budget: { min: 1200000, max: 2000000, type: 'fixed' },
      deadline: '2024-05-30',
      location: { type: 'remote', city: 'Douala' },
      skills: ['MERN Stack', 'Video Streaming', 'Payment Gateway'],
      experience: 'senior',
      duration: '4-6 mois',
      applicants: 42,
      postedAt: '2024-01-10',
      featured: true,
      matchScore: 89
    }
  ];

  const categories = [
    'Développement Web',
    'Développement Mobile',
    'UI/UX Design',
    'Backend/API',
    'DevOps',
    'Data Science',
    'E-commerce'
  ];

  const skills = [
    'React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'PHP', 'Laravel',
    'Django', 'React Native', 'Flutter', 'MongoDB', 'PostgreSQL', 'MySQL'
  ];

  const getLocationText = (location: any) => {
    switch (location.type) {
      case 'remote': return 'Remote';
      case 'onsite': return `Sur site - ${location.city}`;
      case 'hybrid': return `Hybride - ${location.city}`;
      default: return location.city;
    }
  };

  const getExperienceText = (experience: string) => {
    switch (experience) {
      case 'junior': return 'Junior';
      case 'intermediate': return 'Intermédiaire';
      case 'senior': return 'Senior';
      default: return experience;
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.company.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !filters.category || project.skills.some(skill => 
      skill.toLowerCase().includes(filters.category.toLowerCase())
    );
    
    const matchesLocation = !filters.location || project.location.city === filters.location;
    const matchesExperience = !filters.experience || project.experience === filters.experience;
    
    return matchesSearch && matchesCategory && matchesLocation && matchesExperience;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case 'newest': return new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime();
      case 'budget_high': return b.budget.max - a.budget.max;
      case 'budget_low': return a.budget.min - b.budget.min;
      case 'deadline': return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      case 'match': return b.matchScore - a.matchScore;
      default: return 0;
    }
  });

  const ProjectCard = ({ project }: { project: any }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow p-6">
      {project.featured && (
        <div className="flex items-center space-x-2 mb-3">
          <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <Star className="h-3 w-3" />
            <span>Projet mis en avant</span>
          </div>
          <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
            {project.matchScore}% de correspondance
          </div>
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
          <div className="flex items-center space-x-3 text-sm text-gray-600 mb-3">
            <div className="flex items-center space-x-1">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                {project.company.name.charAt(0)}
              </div>
              <span>{project.company.name}</span>
              {project.company.verified && (
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span>{project.company.rating}</span>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
            <Heart className="h-4 w-4" />
          </button>
          <button className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
            <Bookmark className="h-4 w-4" />
          </button>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.skills.slice(0, 4).map((skill, index) => (
          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
            {skill}
          </span>
        ))}
        {project.skills.length > 4 && (
          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
            +{project.skills.length - 4}
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <DollarSign className="h-4 w-4" />
          <span>{project.budget.min.toLocaleString()} - {project.budget.max.toLocaleString()} FCFA</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="h-4 w-4" />
          <span>{getLocationText(project.location)}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4" />
          <span>Échéance: {new Date(project.deadline).toLocaleDateString('fr-FR')}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4" />
          <span>{project.duration}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{project.applicants} candidatures</span>
          </div>
          <span>Niveau: {getExperienceText(project.experience)}</span>
          <span>Il y a {Math.floor((Date.now() - new Date(project.postedAt).getTime()) / (1000 * 60 * 60 * 24))} jours</span>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-1">
            <Eye className="h-4 w-4" />
            <span>Voir</span>
          </button>
          <button className="px-4 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-1">
            <Send className="h-4 w-4" />
            <span>Postuler</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Parcourir les projets</h1>
          <p className="text-gray-600">Trouvez votre prochain projet IT au Cameroun</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">{sortedProjects.length} projets trouvés</span>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher des projets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <select
              value={filters.category}
              onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Toutes catégories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <select
              value={filters.location}
              onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Toutes villes</option>
              <option value="Douala">Douala</option>
              <option value="Yaoundé">Yaoundé</option>
              <option value="Bafoussam">Bafoussam</option>
              <option value="Bamenda">Bamenda</option>
            </select>

            <select
              value={filters.experience}
              onChange={(e) => setFilters(prev => ({ ...prev, experience: e.target.value }))}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Tous niveaux</option>
              <option value="junior">Junior</option>
              <option value="intermediate">Intermédiaire</option>
              <option value="senior">Senior</option>
            </select>

            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
              <Filter className="h-4 w-4" />
              <span>Plus de filtres</span>
            </button>
          </div>
        </div>

        {/* Sort and View Options */}
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Trier par:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="newest">Plus récents</option>
              <option value="match">Meilleure correspondance</option>
              <option value="budget_high">Budget élevé</option>
              <option value="budget_low">Budget faible</option>
              <option value="deadline">Échéance proche</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm6 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V4zm-6 8a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4zm6 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Projects Banner */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">Projets recommandés pour vous</h2>
            <p className="text-green-100">Basés sur vos compétences et votre expérience</p>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-6 w-6" />
            <span className="text-2xl font-bold">{sortedProjects.filter(p => p.matchScore > 85).length}</span>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
        {sortedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Empty State */}
      {sortedProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun projet trouvé</h3>
          <p className="text-gray-500 mb-4">
            Essayez de modifier vos critères de recherche ou vos filtres.
          </p>
          <button 
            onClick={() => {
              setSearchTerm('');
              setFilters({ category: '', budget: '', location: '', experience: '', duration: '', skills: [] });
            }}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}

      {/* Pagination */}
      {sortedProjects.length > 0 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Affichage de <span className="font-medium">1</span> à <span className="font-medium">{sortedProjects.length}</span> sur{' '}
            <span className="font-medium">{sortedProjects.length}</span> projets
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 disabled:opacity-50">
              Précédent
            </button>
            <button className="px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
              1
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 disabled:opacity-50">
              Suivant
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectBrowser;
