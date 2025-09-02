import React from 'react';
import { Eye, TrendingUp, DollarSign, Clock, Star, Briefcase, MessageSquare, Calendar } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const FreelancerDashboard = () => {
  // Mock data - in real app, this would come from API
  const stats = [
    { name: 'Profil Vues', value: '1,247', change: '+18%', icon: Eye, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { name: 'Candidatures', value: '23', change: '+5%', icon: MessageSquare, color: 'text-green-600', bgColor: 'bg-green-100' },
    { name: 'Revenus ce Mois', value: '€3,420', change: '+12%', icon: DollarSign, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { name: 'Note Moyenne', value: '4.8', change: '+0.2', icon: Star, color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
  ];

  const earningsData = [
    { name: 'Jan', earnings: 2400, projects: 4 },
    { name: 'Fév', earnings: 1398, projects: 3 },
    { name: 'Mar', earnings: 9800, projects: 8 },
    { name: 'Avr', earnings: 3908, projects: 5 },
    { name: 'Mai', earnings: 4800, projects: 6 },
    { name: 'Juin', earnings: 3420, projects: 4 },
  ];

  const skillsData = [
    { name: 'React', value: 45, color: '#10B981' },
    { name: 'Node.js', value: 30, color: '#3B82F6' },
    { name: 'TypeScript', value: 25, color: '#8B5CF6' },
  ];

  const recentProjects = [
    {
      id: 1,
      title: 'Application E-commerce Mobile',
      client: 'TechCorp SARL',
      status: 'in_progress',
      budget: '€5,500',
      deadline: '2024-04-15',
      progress: 65
    },
    {
      id: 2,
      title: 'Site Web Corporate',
      client: 'StartupXYZ',
      status: 'completed',
      budget: '€2,800',
      deadline: '2024-03-30',
      progress: 100
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      client: 'DataCorp',
      status: 'pending',
      budget: '€4,200',
      deadline: '2024-05-01',
      progress: 0
    },
  ];

  const upcomingDeadlines = [
    { project: 'App Mobile E-commerce', client: 'TechCorp', deadline: '2024-04-15', daysLeft: 12 },
    { project: 'API REST', client: 'DevCorp', deadline: '2024-04-20', daysLeft: 17 },
    { project: 'Site Vitrine', client: 'BizCorp', deadline: '2024-04-25', daysLeft: 22 },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      in_progress: 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return styles[status as keyof typeof styles] || styles.pending;
  };

  const getStatusText = (status: string) => {
    const texts = {
      in_progress: 'En cours',
      completed: 'Terminé',
      pending: 'En attente',
      cancelled: 'Annulé'
    };
    return texts[status as keyof typeof texts] || 'En attente';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Bienvenue sur votre espace freelancer</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            Voir Profil Public
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Rechercher Projets
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} ce mois
                </p>
              </div>
              <div className={`p-3 rounded-full ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Earnings Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenus Mensuels</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => [`€${value}`, 'Revenus']} />
              <Bar dataKey="earnings" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Skills Distribution */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Répartition des Compétences</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={skillsData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {skillsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Projects */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Projets Récents</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentProjects.map((project) => (
                <div key={project.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-gray-900">{project.title}</h4>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(project.status)}`}>
                      {getStatusText(project.status)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{project.client}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>{project.budget}</span>
                    <span>Échéance: {new Date(project.deadline).toLocaleDateString('fr-FR')}</span>
                  </div>
                  {project.status === 'in_progress' && (
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4">
              <button className="w-full px-4 py-2 text-center text-green-600 hover:bg-green-50 rounded-lg border border-green-200">
                Voir Tous les Projets
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Échéances Prochaines</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {upcomingDeadlines.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`p-2 rounded-full ${
                    item.daysLeft <= 7 ? 'bg-red-100' :
                    item.daysLeft <= 14 ? 'bg-yellow-100' :
                    'bg-green-100'
                  }`}>
                    <Calendar className={`h-4 w-4 ${
                      item.daysLeft <= 7 ? 'text-red-600' :
                      item.daysLeft <= 14 ? 'text-yellow-600' :
                      'text-green-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{item.project}</p>
                    <p className="text-xs text-gray-500">{item.client}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-medium ${
                      item.daysLeft <= 7 ? 'text-red-600' :
                      item.daysLeft <= 14 ? 'text-yellow-600' :
                      'text-green-600'
                    }`}>
                      {item.daysLeft} jours
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(item.deadline).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <button className="w-full px-4 py-2 text-center text-blue-600 hover:bg-blue-50 rounded-lg border border-blue-200">
                Voir Calendrier Complet
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions Rapides</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Briefcase className="h-6 w-6 text-blue-600" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Rechercher Projets</p>
              <p className="text-sm text-gray-500">Trouvez de nouvelles opportunités</p>
            </div>
          </button>
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Star className="h-6 w-6 text-yellow-600" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Mettre à Jour Portfolio</p>
              <p className="text-sm text-gray-500">Ajoutez vos derniers projets</p>
            </div>
          </button>
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <MessageSquare className="h-6 w-6 text-green-600" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Messages</p>
              <p className="text-sm text-gray-500">Répondez aux clients</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreelancerDashboard;
