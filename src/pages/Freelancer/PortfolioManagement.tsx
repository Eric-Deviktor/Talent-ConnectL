import React, { useState } from 'react';
import { Plus, Edit, Trash2, ExternalLink, Github, Eye, Upload, X, Save } from 'lucide-react';

const PortfolioManagement = () => {
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [editingProject, setEditingProject] = useState<string | null>(null);

  // Mock data - in real app, this would come from API
  const [portfolioItems, setPortfolioItems] = useState([
    {
      _id: '1',
      title: 'E-commerce Platform',
      description: 'Plateforme e-commerce complète avec panier, paiement et gestion des commandes. Interface moderne et responsive.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      images: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      liveUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/user/ecommerce-platform',
      category: 'Web Development',
      featured: true,
      createdAt: '2024-01-15'
    },
    {
      _id: '2',
      title: 'Task Management App',
      description: 'Application de gestion de tâches avec collaboration en temps réel, notifications et tableaux de bord analytiques.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Socket.io', 'Bootstrap'],
      images: [
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      liveUrl: 'https://taskmanager-demo.com',
      githubUrl: 'https://github.com/user/task-manager',
      category: 'Web Development',
      featured: false,
      createdAt: '2024-02-01'
    },
    {
      _id: '3',
      title: 'Mobile Banking App UI',
      description: 'Design d\'interface pour application bancaire mobile avec focus sur l\'UX et la sécurité.',
      technologies: ['Figma', 'Adobe XD', 'Principle', 'InVision'],
      images: [
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      liveUrl: 'https://banking-ui-demo.com',
      githubUrl: null,
      category: 'UI/UX Design',
      featured: true,
      createdAt: '2024-01-20'
    },
    {
      _id: '4',
      title: 'Data Analytics Dashboard',
      description: 'Tableau de bord analytique avec visualisations interactives et rapports en temps réel.',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      liveUrl: 'https://analytics-demo.com',
      githubUrl: 'https://github.com/user/analytics-dashboard',
      category: 'Data Visualization',
      featured: false,
      createdAt: '2024-01-10'
    }
  ]);

  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    technologies: [],
    images: [],
    liveUrl: '',
    githubUrl: '',
    category: 'Web Development',
    featured: false
  });

  const categories = [
    'Web Development',
    'Mobile Development',
    'UI/UX Design',
    'Data Visualization',
    'Machine Learning',
    'DevOps',
    'E-commerce',
    'Other'
  ];

  const availableTechnologies = [
    'React', 'Vue.js', 'Angular', 'Node.js', 'Express', 'Laravel', 'Django', 'Flask',
    'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Azure',
    'TypeScript', 'JavaScript', 'Python', 'PHP', 'Java', 'C#', 'Go', 'Rust',
    'Tailwind CSS', 'Bootstrap', 'Material-UI', 'Styled Components', 'SASS', 'CSS3',
    'Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'
  ];

  const handleAddProject = () => {
    const project = {
      ...newProject,
      _id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0]
    };
    setPortfolioItems([project, ...portfolioItems]);
    setNewProject({
      title: '',
      description: '',
      technologies: [],
      images: [],
      liveUrl: '',
      githubUrl: '',
      category: 'Web Development',
      featured: false
    });
    setIsAddingProject(false);
  };

  const handleDeleteProject = (id: string) => {
    setPortfolioItems(portfolioItems.filter(item => item._id !== id));
  };

  const toggleFeatured = (id: string) => {
    setPortfolioItems(portfolioItems.map(item => 
      item._id === id ? { ...item, featured: !item.featured } : item
    ));
  };

  const addTechnology = (tech: string) => {
    if (isAddingProject) {
      if (!newProject.technologies.includes(tech)) {
        setNewProject({
          ...newProject,
          technologies: [...newProject.technologies, tech]
        });
      }
    }
  };

  const removeTechnology = (tech: string) => {
    if (isAddingProject) {
      setNewProject({
        ...newProject,
        technologies: newProject.technologies.filter(t => t !== tech)
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mon Portfolio</h1>
          <p className="text-gray-600">Présentez vos meilleurs projets aux clients</p>
        </div>
        <button
          onClick={() => setIsAddingProject(true)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>Nouveau Projet</span>
        </button>
      </div>

      {/* Add Project Modal */}
      {isAddingProject && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Ajouter un Projet</h2>
              <button
                onClick={() => setIsAddingProject(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Titre du Projet</label>
                  <input
                    type="text"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Nom de votre projet"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Catégorie</label>
                  <select
                    value={newProject.category}
                    onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Décrivez votre projet, les défis relevés et les solutions apportées..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Technologies Utilisées</label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {newProject.technologies.map(tech => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800"
                    >
                      {tech}
                      <button
                        onClick={() => removeTechnology(tech)}
                        className="ml-2 text-green-600 hover:text-green-800"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {availableTechnologies
                    .filter(tech => !newProject.technologies.includes(tech))
                    .slice(0, 20)
                    .map(tech => (
                    <button
                      key={tech}
                      onClick={() => addTechnology(tech)}
                      className="px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-50"
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">URL du Projet</label>
                  <input
                    type="url"
                    value={newProject.liveUrl}
                    onChange={(e) => setNewProject({ ...newProject, liveUrl: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="https://monprojet.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Repository GitHub</label>
                  <input
                    type="url"
                    value={newProject.githubUrl}
                    onChange={(e) => setNewProject({ ...newProject, githubUrl: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="https://github.com/user/project"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Images du Projet</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">
                    Glissez-déposez vos images ici ou cliquez pour sélectionner
                  </p>
                  <button className="mt-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                    Choisir des fichiers
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="featured"
                  checked={newProject.featured}
                  onChange={(e) => setNewProject({ ...newProject, featured: e.target.checked })}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="featured" className="ml-2 block text-sm text-gray-900">
                  Projet mis en avant
                </label>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setIsAddingProject(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Annuler
                </button>
                <button
                  onClick={handleAddProject}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Ajouter le Projet
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Portfolio Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Eye className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Projets</p>
              <p className="text-2xl font-bold text-gray-900">{portfolioItems.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Eye className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Projets Mis en Avant</p>
              <p className="text-2xl font-bold text-gray-900">
                {portfolioItems.filter(item => item.featured).length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Eye className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Vues Portfolio</p>
              <p className="text-2xl font-bold text-gray-900">1,247</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Eye className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Catégories</p>
              <p className="text-2xl font-bold text-gray-900">
                {new Set(portfolioItems.map(item => item.category)).size}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <div key={item._id} className="bg-white rounded-lg shadow overflow-hidden">
            {/* Project Image */}
            <div className="relative h-48 bg-gray-200">
              {item.images.length > 0 ? (
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Upload className="h-12 w-12 text-gray-400" />
                </div>
              )}
              {item.featured && (
                <div className="absolute top-2 left-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                    ⭐ Mis en avant
                  </span>
                </div>
              )}
              <div className="absolute top-2 right-2 flex space-x-1">
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full shadow hover:bg-gray-50"
                  >
                    <ExternalLink className="h-4 w-4 text-gray-600" />
                  </a>
                )}
                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full shadow hover:bg-gray-50"
                  >
                    <Github className="h-4 w-4 text-gray-600" />
                  </a>
                )}
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <span className="text-xs text-gray-500">{item.category}</span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 mb-4">
                {item.technologies.slice(0, 4).map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded"
                  >
                    {tech}
                  </span>
                ))}
                {item.technologies.length > 4 && (
                  <span className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">
                    +{item.technologies.length - 4}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <button
                    onClick={() => setEditingProject(item._id)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => toggleFeatured(item._id)}
                    className={`p-2 rounded ${
                      item.featured 
                        ? 'text-yellow-600 hover:bg-yellow-50' 
                        : 'text-gray-400 hover:bg-gray-50'
                    }`}
                  >
                    ⭐
                  </button>
                  <button
                    onClick={() => handleDeleteProject(item._id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-xs text-gray-500">
                  {new Date(item.createdAt).toLocaleDateString('fr-FR')}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {portfolioItems.length === 0 && (
        <div className="text-center py-12">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">Aucun projet</h3>
          <p className="mt-1 text-sm text-gray-500">
            Commencez par ajouter votre premier projet au portfolio.
          </p>
          <div className="mt-6">
            <button
              onClick={() => setIsAddingProject(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              <Plus className="-ml-1 mr-2 h-5 w-5" />
              Nouveau Projet
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioManagement;
