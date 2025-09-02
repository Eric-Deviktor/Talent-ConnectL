import React, { useState } from 'react';
import { Search, Filter, Clock, CheckCircle, XCircle, Eye, MessageSquare, Calendar, MapPin, DollarSign } from 'lucide-react';

const ProjectApplications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [activeTab, setActiveTab] = useState('applications');

  // Mock data - in real app, this would come from API
  const applications = [
    {
      id: '1',
      project: {
        title: 'Développement Application Mobile E-commerce',
        company: 'TechCorp SARL',
        budget: { min: 5000, max: 8000, currency: 'EUR' },
        deadline: '2024-04-15',
        location: { remote: true, city: 'Douala' },
        description: 'Développement d\'une application mobile complète pour e-commerce avec paiement intégré'
      },
      status: 'pending',
      appliedAt: '2024-02-15',
      proposal: 'Je suis très intéressé par ce projet d\'application e-commerce. Avec mes 5 ans d\'expérience en React Native et Node.js, je peux livrer une solution complète et scalable.',
      proposedRate: 65,
      estimatedDuration: '8 semaines',
      lastActivity: '2024-02-15'
    },
    {
      id: '2',
      project: {
        title: 'Refonte Site Web Corporate',
        company: 'StartupXYZ',
        budget: { min: 2000, max: 3500, currency: 'EUR' },
        deadline: '2024-03-30',
        location: { remote: false, city: 'Yaoundé' },
        description: 'Refonte complète du site web avec design moderne et responsive'
      },
      status: 'accepted',
      appliedAt: '2024-01-25',
      proposal: 'Excellente opportunité pour créer un site web moderne. Je propose une approche avec React et Tailwind CSS pour un résultat optimal.',
      proposedRate: 45,
      estimatedDuration: '4 semaines',
      lastActivity: '2024-02-01'
    },
    {
      id: '3',
      project: {
        title: 'Dashboard Analytics',
        company: 'DataCorp',
        budget: { min: 4000, max: 6000, currency: 'EUR' },
        deadline: '2024-05-01',
        location: { remote: true, city: 'Douala' },
        description: 'Création d\'un tableau de bord analytique avec visualisations de données'
      },
      status: 'rejected',
      appliedAt: '2024-02-01',
      proposal: 'Spécialisé en visualisation de données avec D3.js et React. Je peux créer des graphiques interactifs et des rapports en temps réel.',
      proposedRate: 55,
      estimatedDuration: '6 semaines',
      lastActivity: '2024-02-10'
    },
    {
      id: '4',
      project: {
        title: 'API REST pour Application Mobile',
        company: 'MobileTech',
        budget: { min: 3000, max: 4500, currency: 'EUR' },
        deadline: '2024-04-20',
        location: { remote: true, city: 'Bafoussam' },
        description: 'Développement d\'une API REST robuste pour application mobile'
      },
      status: 'pending',
      appliedAt: '2024-02-10',
      proposal: 'Expert en développement d\'APIs avec Node.js et Express. Je garantis une API sécurisée, documentée et performante.',
      proposedRate: 50,
      estimatedDuration: '5 semaines',
      lastActivity: '2024-02-10'
    }
  ];

  const availableProjects = [
    {
      id: '5',
      title: 'Plateforme de Formation en Ligne',
      company: 'EduTech CM',
      budget: { min: 10000, max: 15000, currency: 'EUR' },
      deadline: '2024-06-15',
      location: { remote: true, city: 'Yaoundé' },
      skills: ['Next.js', 'Prisma', 'Stripe'],
      description: 'Plateforme complète de formation en ligne avec système de paiement et certificats',
      postedAt: '2024-02-05',
      applicants: 20,
      matchScore: 95
    },
    {
      id: '6',
      title: 'Application de Gestion de Stock',
      company: 'LogiCorp',
      budget: { min: 6000, max: 9000, currency: 'EUR' },
      deadline: '2024-05-10',
      location: { remote: false, city: 'Douala' },
      skills: ['React', 'Node.js', 'PostgreSQL'],
      description: 'Système de gestion d\'inventaire avec reporting avancé',
      postedAt: '2024-02-08',
      applicants: 12,
      matchScore: 88
    },
    {
      id: '7',
      title: 'Site E-commerce B2B',
      company: 'BizCorp',
      budget: { min: 8000, max: 12000, currency: 'EUR' },
      deadline: '2024-05-30',
      location: { remote: true, city: 'Yaoundé' },
      skills: ['Vue.js', 'Laravel', 'MySQL'],
      description: 'Plateforme e-commerce B2B avec gestion des commandes et facturation',
      postedAt: '2024-02-12',
      applicants: 8,
      matchScore: 82
    }
  ];

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.project.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || app.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-800',
      accepted: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800',
      withdrawn: 'bg-gray-100 text-gray-800'
    };
    return styles[status as keyof typeof styles] || styles.pending;
  };

  const getStatusText = (status: string) => {
    const texts = {
      pending: 'En attente',
      accepted: 'Acceptée',
      rejected: 'Refusée',
      withdrawn: 'Retirée'
    };
    return texts[status as keyof typeof texts] || 'En attente';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4" />;
      case 'accepted':
        return <CheckCircle className="h-4 w-4" />;
      case 'rejected':
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Candidatures & Projets</h1>
          <p className="text-gray-600">Gérez vos candidatures et trouvez de nouveaux projets</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">En Attente</p>
              <p className="text-2xl font-bold text-gray-900">
                {applications.filter(app => app.status === 'pending').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Acceptées</p>
              <p className="text-2xl font-bold text-gray-900">
                {applications.filter(app => app.status === 'accepted').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <XCircle className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Refusées</p>
              <p className="text-2xl font-bold text-gray-900">
                {applications.filter(app => app.status === 'rejected').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Eye className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Taux de Succès</p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round((applications.filter(app => app.status === 'accepted').length / applications.length) * 100)}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('applications')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'applications'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Mes Candidatures ({applications.length})
            </button>
            <button
              onClick={() => setActiveTab('available')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'available'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Projets Disponibles ({availableProjects.length})
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'applications' && (
            <>
              {/* Filters and Search */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Rechercher par projet ou entreprise..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex space-x-3">
                  <select
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                  >
                    <option value="all">Tous les statuts</option>
                    <option value="pending">En attente</option>
                    <option value="accepted">Acceptées</option>
                    <option value="rejected">Refusées</option>
                  </select>
                </div>
              </div>

              {/* Applications List */}
              <div className="space-y-6">
                {filteredApplications.map((application) => (
                  <div key={application.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{application.project.title}</h3>
                          <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(application.status)}`}>
                            {getStatusIcon(application.status)}
                            <span className="ml-1">{getStatusText(application.status)}</span>
                          </span>
                        </div>
                        <p className="text-gray-600 mb-2">{application.project.company}</p>
                        <p className="text-sm text-gray-500 mb-3">{application.project.description}</p>
                        
                        <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-1">
                            <DollarSign className="h-4 w-4" />
                            <span>€{application.project.budget.min.toLocaleString()} - €{application.project.budget.max.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>Échéance: {new Date(application.project.deadline).toLocaleDateString('fr-FR')}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{application.project.location.city} {application.project.location.remote && '• Remote'}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Ma Proposition</h4>
                      <p className="text-sm text-gray-600 mb-3">{application.proposal}</p>
                      <div className="flex items-center space-x-6 text-sm">
                        <span><strong>Tarif proposé:</strong> €{application.proposedRate}/h</span>
                        <span><strong>Durée estimée:</strong> {application.estimatedDuration}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        Candidature envoyée le {new Date(application.appliedAt).toLocaleDateString('fr-FR')}
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded">
                          <Eye className="h-4 w-4 inline mr-1" />
                          Voir Détails
                        </button>
                        <button className="px-3 py-1 text-sm text-green-600 hover:bg-green-50 rounded">
                          <MessageSquare className="h-4 w-4 inline mr-1" />
                          Messages
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'available' && (
            <>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Projets Recommandés</h3>
                <p className="text-gray-600">Projets correspondant à vos compétences et préférences</p>
              </div>

              <div className="space-y-6">
                {availableProjects.map((project) => (
                  <div key={project.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                          <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                            {project.matchScore}% Match
                          </span>
                        </div>
                        <p className="text-gray-600 mb-2">{project.company}</p>
                        <p className="text-sm text-gray-500 mb-3">{project.description}</p>
                        
                        <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-1">
                            <DollarSign className="h-4 w-4" />
                            <span>€{project.budget.min.toLocaleString()} - €{project.budget.max.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>Échéance: {new Date(project.deadline).toLocaleDateString('fr-FR')}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{project.location.city} {project.location.remote && '• Remote'}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.skills.map((skill, index) => (
                            <span key={index} className="inline-flex px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        Publié le {new Date(project.postedAt).toLocaleDateString('fr-FR')} • {project.applicants} candidatures
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                          Voir Détails
                        </button>
                        <button className="px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700">
                          Postuler
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectApplications;
