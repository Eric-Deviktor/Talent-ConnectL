import React, { useState } from 'react';
import { 
  Users, 
  Briefcase, 
  TrendingUp, 
  DollarSign, 
  Calendar,
  MessageSquare,
  Star,
  Eye,
  Plus,
  Filter,
  Search
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const CompanyDashboard = () => {
  const [timeRange, setTimeRange] = useState('30d');

  // Mock data
  const stats = {
    activeProjects: 12,
    totalApplications: 156,
    hiredFreelancers: 8,
    totalSpent: 45000
  };

  const projectsData = [
    { month: 'Jan', projects: 4, completed: 3 },
    { month: 'Fév', projects: 6, completed: 5 },
    { month: 'Mar', projects: 8, completed: 6 },
    { month: 'Avr', projects: 5, completed: 4 },
    { month: 'Mai', projects: 7, completed: 6 },
    { month: 'Jun', projects: 9, completed: 7 }
  ];

  const applicationsData = [
    { day: 'Lun', applications: 12 },
    { day: 'Mar', applications: 19 },
    { day: 'Mer', applications: 15 },
    { day: 'Jeu', applications: 22 },
    { day: 'Ven', applications: 18 },
    { day: 'Sam', applications: 8 },
    { day: 'Dim', applications: 5 }
  ];

  const skillsDistribution = [
    { name: 'React/Frontend', value: 35, color: '#3B82F6' },
    { name: 'Node.js/Backend', value: 28, color: '#10B981' },
    { name: 'Mobile Dev', value: 20, color: '#F59E0B' },
    { name: 'DevOps', value: 10, color: '#EF4444' },
    { name: 'UI/UX Design', value: 7, color: '#8B5CF6' }
  ];

  const recentProjects = [
    {
      id: 1,
      title: 'Application E-commerce Mobile',
      status: 'En cours',
      freelancer: 'Jean Kamga',
      budget: 15000,
      deadline: '2024-02-15',
      progress: 65
    },
    {
      id: 2,
      title: 'Site Web Corporate',
      status: 'En attente',
      applications: 23,
      budget: 8000,
      deadline: '2024-02-28'
    },
    {
      id: 3,
      title: 'API REST Backend',
      status: 'Terminé',
      freelancer: 'Marie Nkomo',
      budget: 12000,
      rating: 5
    }
  ];

  const topFreelancers = [
    {
      id: 1,
      name: 'Jean Kamga',
      skills: ['React', 'Node.js'],
      rating: 4.9,
      projects: 15,
      avatar: '',
      hourlyRate: 25
    },
    {
      id: 2,
      name: 'Marie Nkomo',
      skills: ['Python', 'Django'],
      rating: 4.8,
      projects: 12,
      avatar: '',
      hourlyRate: 30
    },
    {
      id: 3,
      name: 'Paul Mbarga',
      skills: ['Flutter', 'Dart'],
      rating: 4.7,
      projects: 18,
      avatar: '',
      hourlyRate: 28
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En cours': return 'bg-blue-100 text-blue-800';
      case 'En attente': return 'bg-yellow-100 text-yellow-800';
      case 'Terminé': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
          <p className="text-gray-600">Gérez vos projets et trouvez les meilleurs talents</p>
        </div>
        <div className="flex space-x-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="7d">7 derniers jours</option>
            <option value="30d">30 derniers jours</option>
            <option value="90d">90 derniers jours</option>
          </select>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Nouveau projet</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Projets actifs</p>
              <p className="text-2xl font-bold text-gray-900">{stats.activeProjects}</p>
              <p className="text-xs text-green-600">+2 ce mois</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Briefcase className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Candidatures</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalApplications}</p>
              <p className="text-xs text-green-600">+15% vs mois dernier</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <Users className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Freelancers embauchés</p>
              <p className="text-2xl font-bold text-gray-900">{stats.hiredFreelancers}</p>
              <p className="text-xs text-green-600">Taux de succès: 85%</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Star className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Budget dépensé</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalSpent.toLocaleString()} FCFA</p>
              <p className="text-xs text-gray-500">Budget restant: 55k FCFA</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg">
              <DollarSign className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Projects Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Évolution des projets</h3>
            <div className="flex space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">Créés</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Terminés</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={projectsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="projects" fill="#3B82F6" />
              <Bar dataKey="completed" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Applications Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Candidatures cette semaine</h3>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={applicationsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="applications" stroke="#10B981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Skills Distribution & Recent Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Skills Distribution */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Compétences demandées</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={skillsDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {skillsDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {skillsDistribution.map((skill, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: skill.color }}></div>
                  <span className="text-gray-600">{skill.name}</span>
                </div>
                <span className="font-medium">{skill.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Projects */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Projets récents</h3>
            <button className="text-green-600 hover:text-green-700 text-sm font-medium">
              Voir tout
            </button>
          </div>
          <div className="space-y-4">
            {recentProjects.map((project) => (
              <div key={project.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-medium text-gray-900">{project.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      {project.freelancer && (
                        <span>👤 {project.freelancer}</span>
                      )}
                      {project.applications && (
                        <span>📝 {project.applications} candidatures</span>
                      )}
                      <span>💰 {project.budget.toLocaleString()} FCFA</span>
                      <span>📅 {new Date(project.deadline).toLocaleDateString('fr-FR')}</span>
                    </div>
                    {project.progress && (
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-gray-600">Progression</span>
                          <span className="font-medium">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    {project.rating && (
                      <div className="mt-2 flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < project.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">({project.rating}/5)</span>
                      </div>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <MessageSquare className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Freelancers */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Freelancers recommandés</h3>
          <div className="flex space-x-2">
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-4 w-4" />
            </button>
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topFreelancers.map((freelancer) => (
            <div key={freelancer.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {freelancer.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{freelancer.name}</h4>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{freelancer.rating}</span>
                    <span className="text-sm text-gray-400">({freelancer.projects} projets)</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {freelancer.skills.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-sm font-medium text-green-600">{freelancer.hourlyRate}€/h</span>
                    <button className="text-xs bg-green-600 text-white px-3 py-1 rounded-full hover:bg-green-700 transition-colors">
                      Contacter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
