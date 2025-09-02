import React from 'react';
import { Users, Briefcase, TrendingUp, DollarSign, Eye, UserCheck, Clock, CheckCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const AdminDashboard = () => {
  // Mock data - in real app, this would come from API
  const stats = [
    { name: 'Utilisateurs Total', value: '2,847', change: '+12%', icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { name: 'Projets Actifs', value: '156', change: '+8%', icon: Briefcase, color: 'text-green-600', bgColor: 'bg-green-100' },
    { name: 'Revenus Mensuel', value: '€45,230', change: '+23%', icon: DollarSign, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { name: 'Taux de Conversion', value: '68%', change: '+5%', icon: TrendingUp, color: 'text-orange-600', bgColor: 'bg-orange-100' },
  ];

  const monthlyData = [
    { name: 'Jan', users: 400, projects: 240, revenue: 2400 },
    { name: 'Fév', users: 300, projects: 139, revenue: 2210 },
    { name: 'Mar', users: 200, projects: 980, revenue: 2290 },
    { name: 'Avr', users: 278, projects: 390, revenue: 2000 },
    { name: 'Mai', users: 189, projects: 480, revenue: 2181 },
    { name: 'Juin', users: 239, projects: 380, revenue: 2500 },
  ];

  const userTypeData = [
    { name: 'Freelancers', value: 1847, color: '#10B981' },
    { name: 'Entreprises', value: 1000, color: '#3B82F6' },
  ];

  const recentActivities = [
    { id: 1, user: 'Jean Dupont', action: 'a créé un nouveau projet', time: 'Il y a 5 min', type: 'project' },
    { id: 2, user: 'Marie Claire', action: 'a mis à jour son profil', time: 'Il y a 12 min', type: 'profile' },
    { id: 3, user: 'TechCorp', action: 'a publié un projet', time: 'Il y a 23 min', type: 'project' },
    { id: 4, user: 'Paul Martin', action: 'a postulé à un projet', time: 'Il y a 1h', type: 'application' },
    { id: 5, user: 'StartupXYZ', action: 'a accepté une candidature', time: 'Il y a 2h', type: 'acceptance' },
  ];

  const topFreelancers = [
    { id: 1, name: 'Alex Johnson', rating: 4.9, projects: 47, earnings: '€12,450', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { id: 2, name: 'Sarah Wilson', rating: 4.8, projects: 32, earnings: '€9,230', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { id: 3, name: 'Mike Chen', rating: 4.7, projects: 28, earnings: '€8,100', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tableau de Bord</h1>
          <p className="text-gray-600">Vue d'ensemble de la plateforme TalentConnect CM</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            Exporter
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Nouveau Rapport
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
        {/* Monthly Growth Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Croissance Mensuelle</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#10B981" strokeWidth={2} />
              <Line type="monotone" dataKey="projects" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* User Distribution */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Répartition des Utilisateurs</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={userTypeData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {userTypeData.map((entry, index) => (
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
        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Activités Récentes</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${
                    activity.type === 'project' ? 'bg-blue-100' :
                    activity.type === 'profile' ? 'bg-green-100' :
                    activity.type === 'application' ? 'bg-yellow-100' :
                    'bg-purple-100'
                  }`}>
                    {activity.type === 'project' && <Briefcase className="h-4 w-4 text-blue-600" />}
                    {activity.type === 'profile' && <UserCheck className="h-4 w-4 text-green-600" />}
                    {activity.type === 'application' && <Clock className="h-4 w-4 text-yellow-600" />}
                    {activity.type === 'acceptance' && <CheckCircle className="h-4 w-4 text-purple-600" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{activity.user}</span> {activity.action}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Freelancers */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Top Freelancers</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topFreelancers.map((freelancer) => (
                <div key={freelancer.id} className="flex items-center space-x-4">
                  <img
                    src={freelancer.avatar}
                    alt={freelancer.name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{freelancer.name}</p>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span>⭐ {freelancer.rating}</span>
                      <span>•</span>
                      <span>{freelancer.projects} projets</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{freelancer.earnings}</p>
                    <p className="text-xs text-gray-500">ce mois</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
