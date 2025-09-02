import React, { useState } from 'react';
import { Camera, Plus, X, Edit, Save, MapPin, Globe, Github, Linkedin, Star, Award, Briefcase } from 'lucide-react';

const ProfileManagement = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');

  // Mock data - in real app, this would come from API
  const [profile, setProfile] = useState({
    personal: {
      name: 'Jean Dupont',
      title: 'Développeur Full Stack',
      bio: 'Développeur passionné avec 5 ans d\'expérience en React, Node.js et TypeScript. Spécialisé dans le développement d\'applications web modernes et scalables.',
      location: 'Douala, Cameroun',
      hourlyRate: 45,
      availability: 'available',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      email: 'jean.dupont@email.com',
      phone: '+237 6XX XXX XXX',
      website: 'https://jeandupont.dev',
      github: 'https://github.com/jeandupont',
      linkedin: 'https://linkedin.com/in/jeandupont'
    },
    skills: [
      { name: 'React', level: 90, category: 'Frontend', verified: true },
      { name: 'Node.js', level: 85, category: 'Backend', verified: true },
      { name: 'TypeScript', level: 80, category: 'Language', verified: false },
      { name: 'MongoDB', level: 75, category: 'Database', verified: true },
      { name: 'Python', level: 70, category: 'Language', verified: false },
      { name: 'Docker', level: 65, category: 'DevOps', verified: false }
    ],
    experience: [
      {
        company: 'TechCorp SARL',
        position: 'Senior Full Stack Developer',
        duration: '2022 - Présent',
        description: 'Développement d\'applications web complexes avec React et Node.js. Leadership technique sur plusieurs projets stratégiques.',
        startDate: '2022-01',
        endDate: null
      },
      {
        company: 'StartupXYZ',
        position: 'Frontend Developer',
        duration: '2020 - 2022',
        description: 'Création d\'interfaces utilisateur modernes et responsives. Collaboration étroite avec l\'équipe UX/UI.',
        startDate: '2020-03',
        endDate: '2022-01'
      },
      {
        company: 'WebAgency CM',
        position: 'Junior Developer',
        duration: '2019 - 2020',
        description: 'Développement de sites web et applications mobiles. Apprentissage des bonnes pratiques de développement.',
        startDate: '2019-06',
        endDate: '2020-03'
      }
    ],
    certifications: [
      {
        name: 'AWS Certified Developer',
        issuer: 'Amazon Web Services',
        date: '2023-06',
        credentialId: 'AWS-DEV-2023-001',
        url: 'https://aws.amazon.com/certification/'
      },
      {
        name: 'React Professional Certificate',
        issuer: 'Meta',
        date: '2022-12',
        credentialId: 'META-REACT-2022-456',
        url: 'https://developers.facebook.com/certification/'
      },
      {
        name: 'Node.js Application Development',
        issuer: 'OpenJS Foundation',
        date: '2022-08',
        credentialId: 'NODEJS-2022-789',
        url: 'https://openjsf.org/certification/'
      }
    ]
  });

  const tabs = [
    { id: 'personal', name: 'Informations Personnelles', icon: Edit },
    { id: 'skills', name: 'Compétences', icon: Star },
    { id: 'experience', name: 'Expérience', icon: Briefcase },
    { id: 'certifications', name: 'Certifications', icon: Award }
  ];

  const availabilityOptions = [
    { value: 'available', label: 'Disponible', color: 'text-green-600 bg-green-100' },
    { value: 'busy', label: 'Occupé', color: 'text-yellow-600 bg-yellow-100' },
    { value: 'unavailable', label: 'Indisponible', color: 'text-red-600 bg-red-100' }
  ];

  const skillCategories = ['Frontend', 'Backend', 'Database', 'Language', 'DevOps', 'Design', 'Mobile'];

  const addSkill = () => {
    const newSkill = {
      name: '',
      level: 50,
      category: 'Frontend',
      verified: false
    };
    setProfile(prev => ({
      ...prev,
      skills: [...prev.skills, newSkill]
    }));
  };

  const removeSkill = (index: number) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const addExperience = () => {
    const newExperience = {
      company: '',
      position: '',
      duration: '',
      description: '',
      startDate: '',
      endDate: null
    };
    setProfile(prev => ({
      ...prev,
      experience: [...prev.experience, newExperience]
    }));
  };

  const addCertification = () => {
    const newCertification = {
      name: '',
      issuer: '',
      date: '',
      credentialId: '',
      url: ''
    };
    setProfile(prev => ({
      ...prev,
      certifications: [...prev.certifications, newCertification]
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mon Profil</h1>
          <p className="text-gray-600">Gérez vos informations professionnelles</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            Prévisualiser
          </button>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2"
          >
            {isEditing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
            <span>{isEditing ? 'Sauvegarder' : 'Modifier'}</span>
          </button>
        </div>
      </div>

      {/* Profile Header Card */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <img
              src={profile.personal.avatar}
              alt="Profile"
              className="h-24 w-24 rounded-full object-cover"
            />
            {isEditing && (
              <button className="absolute bottom-0 right-0 bg-green-600 text-white rounded-full p-2 hover:bg-green-700">
                <Camera className="h-4 w-4" />
              </button>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-2">
              <h2 className="text-2xl font-bold text-gray-900">{profile.personal.name}</h2>
              <span className={`inline-flex px-3 py-1 text-sm font-medium rounded-full ${
                availabilityOptions.find(opt => opt.value === profile.personal.availability)?.color
              }`}>
                {availabilityOptions.find(opt => opt.value === profile.personal.availability)?.label}
              </span>
            </div>
            <p className="text-lg text-gray-600 mb-2">{profile.personal.title}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{profile.personal.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>4.8 (127 avis)</span>
              </div>
              <span>€{profile.personal.hourlyRate}/h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Personal Information Tab */}
          {activeTab === 'personal' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom Complet</label>
                  <input
                    type="text"
                    value={profile.personal.name}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Titre Professionnel</label>
                  <input
                    type="text"
                    value={profile.personal.title}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={profile.personal.email}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                  <input
                    type="tel"
                    value={profile.personal.phone}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Localisation</label>
                  <input
                    type="text"
                    value={profile.personal.location}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tarif Horaire (€)</label>
                  <input
                    type="number"
                    value={profile.personal.hourlyRate}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Disponibilité</label>
                <select
                  value={profile.personal.availability}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-50"
                >
                  {availabilityOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Biographie</label>
                <textarea
                  value={profile.personal.bio}
                  disabled={!isEditing}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-50"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Site Web</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="url"
                      value={profile.personal.website}
                      disabled={!isEditing}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-50"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">GitHub</label>
                  <div className="relative">
                    <Github className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="url"
                      value={profile.personal.github}
                      disabled={!isEditing}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-50"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
                  <div className="relative">
                    <Linkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="url"
                      value={profile.personal.linkedin}
                      disabled={!isEditing}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-50"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Mes Compétences</h3>
                {isEditing && (
                  <button
                    onClick={addSkill}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Ajouter</span>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {profile.skills.map((skill, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={skill.name}
                          disabled={!isEditing}
                          placeholder="Nom de la compétence"
                          className="font-medium text-gray-900 border-none p-0 focus:ring-0 disabled:bg-transparent"
                        />
                        {skill.verified && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                            Vérifiée
                          </span>
                        )}
                      </div>
                      {isEditing && (
                        <button
                          onClick={() => removeSkill(index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                    
                    <div className="mb-3">
                      <select
                        value={skill.category}
                        disabled={!isEditing}
                        className="text-sm text-gray-600 border-none p-0 focus:ring-0 disabled:bg-transparent"
                      >
                        {skillCategories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Niveau</span>
                        <span className="text-sm font-medium text-gray-900">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      {isEditing && (
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={skill.level}
                          className="w-full"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Expérience Professionnelle</h3>
                {isEditing && (
                  <button
                    onClick={addExperience}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Ajouter</span>
                  </button>
                )}
              </div>

              <div className="space-y-6">
                {profile.experience.map((exp, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Entreprise</label>
                        <input
                          type="text"
                          value={exp.company}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Poste</label>
                        <input
                          type="text"
                          value={exp.position}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-50"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Période</label>
                      <input
                        type="text"
                        value={exp.duration}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        value={exp.description}
                        disabled={!isEditing}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-50"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Certifications</h3>
                {isEditing && (
                  <button
                    onClick={addCertification}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Ajouter</span>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {profile.certifications.map((cert, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nom de la Certification</label>
                        <input
                          type="text"
                          value={cert.name}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Organisme</label>
                        <input
                          type="text"
                          value={cert.issuer}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-50"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                          <input
                            type="month"
                            value={cert.date}
                            disabled={!isEditing}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">ID Certification</label>
                          <input
                            type="text"
                            value={cert.credentialId}
                            disabled={!isEditing}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-50"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">URL de Vérification</label>
                        <input
                          type="url"
                          value={cert.url}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-50"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileManagement;
