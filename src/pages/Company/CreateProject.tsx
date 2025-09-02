import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Plus, 
  X, 
  MapPin, 
  DollarSign, 
  Calendar, 
  Users, 
  FileText,
  Clock,
  Globe,
  Building
} from 'lucide-react';

const CreateProject = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    skills: [] as string[],
    experience: 'intermediate',
    duration: '',
    budget: {
      type: 'fixed',
      min: '',
      max: '',
      currency: 'FCFA'
    },
    location: {
      type: 'remote',
      city: '',
      onsite: false,
      remote: true
    },
    deadline: '',
    requirements: '',
    deliverables: '',
    communicationPreference: 'french',
    projectType: 'web_development'
  });

  const [skillInput, setSkillInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'Développement Web',
    'Développement Mobile',
    'UI/UX Design',
    'Backend/API',
    'DevOps',
    'Data Science',
    'Cybersécurité',
    'E-commerce',
    'CMS/WordPress',
    'Autre'
  ];

  const suggestedSkills = [
    'React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'PHP', 'Laravel',
    'Django', 'React Native', 'Flutter', 'iOS', 'Android', 'MongoDB',
    'PostgreSQL', 'MySQL', 'Docker', 'AWS', 'Firebase', 'Figma',
    'Adobe XD', 'Photoshop', 'JavaScript', 'TypeScript', 'HTML/CSS'
  ];

  const cities = [
    'Douala', 'Yaoundé', 'Bafoussam', 'Bamenda', 'Garoua', 
    'Maroua', 'Ngaoundéré', 'Bertoua', 'Ebolowa', 'Kribi'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev] as any,
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleLocationTypeChange = (type: string) => {
    setFormData(prev => ({
      ...prev,
      location: {
        ...prev.location,
        type,
        remote: type === 'remote' || type === 'hybrid',
        onsite: type === 'onsite' || type === 'hybrid'
      }
    }));
  };

  const addSkill = (skill: string) => {
    if (skill && !formData.skills.includes(skill)) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, skill]
      }));
    }
    setSkillInput('');
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Redirect to project management page
      navigate('/company/projects');
    } catch (error) {
      console.error('Error creating project:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
          Titre du projet *
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          value={formData.title}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Ex: Développement d'une application mobile e-commerce"
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
          Catégorie *
        </label>
        <select
          id="category"
          name="category"
          required
          value={formData.category}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">Sélectionnez une catégorie</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Description du projet *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={6}
          value={formData.description}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Décrivez en détail votre projet, ses objectifs, et ce que vous attendez du freelancer..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Compétences requises *
        </label>
        <div className="space-y-3">
          <div className="flex space-x-2">
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill(skillInput))}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Tapez une compétence et appuyez sur Entrée"
            />
            <button
              type="button"
              onClick={() => addSkill(skillInput)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {suggestedSkills.map((skill) => (
              <button
                key={skill}
                type="button"
                onClick={() => addSkill(skill)}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                {skill}
              </button>
            ))}
          </div>

          {formData.skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {formData.skills.map((skill) => (
                <div key={skill} className="flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  <span>{skill}</span>
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="text-green-600 hover:text-green-800"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Niveau d'expérience requis *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { value: 'junior', label: 'Junior', desc: '0-2 ans d\'expérience' },
            { value: 'intermediate', label: 'Intermédiaire', desc: '2-5 ans d\'expérience' },
            { value: 'senior', label: 'Senior', desc: '5+ ans d\'expérience' }
          ].map((level) => (
            <label key={level.value} className="relative">
              <input
                type="radio"
                name="experience"
                value={level.value}
                checked={formData.experience === level.value}
                onChange={handleInputChange}
                className="sr-only"
              />
              <div className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                formData.experience === level.value 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}>
                <div className="font-medium text-gray-900">{level.label}</div>
                <div className="text-sm text-gray-500">{level.desc}</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
          Durée estimée du projet *
        </label>
        <select
          id="duration"
          name="duration"
          required
          value={formData.duration}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">Sélectionnez la durée</option>
          <option value="1-week">Moins d'une semaine</option>
          <option value="1-2-weeks">1-2 semaines</option>
          <option value="2-4-weeks">2-4 semaines</option>
          <option value="1-2-months">1-2 mois</option>
          <option value="2-6-months">2-6 mois</option>
          <option value="6-months-plus">Plus de 6 mois</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Type de budget *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          {[
            { value: 'fixed', label: 'Budget fixe', desc: 'Montant déterminé à l\'avance' },
            { value: 'hourly', label: 'Tarif horaire', desc: 'Paiement basé sur le temps' }
          ].map((type) => (
            <label key={type.value} className="relative">
              <input
                type="radio"
                name="budget.type"
                value={type.value}
                checked={formData.budget.type === type.value}
                onChange={handleInputChange}
                className="sr-only"
              />
              <div className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                formData.budget.type === type.value 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}>
                <div className="font-medium text-gray-900">{type.label}</div>
                <div className="text-sm text-gray-500">{type.desc}</div>
              </div>
            </label>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="budget.min" className="block text-sm font-medium text-gray-700 mb-2">
              {formData.budget.type === 'fixed' ? 'Budget minimum' : 'Tarif minimum/heure'}
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="number"
                id="budget.min"
                name="budget.min"
                required
                value={formData.budget.min}
                onChange={handleInputChange}
                className="w-full pl-10 pr-16 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="0"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                FCFA
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="budget.max" className="block text-sm font-medium text-gray-700 mb-2">
              {formData.budget.type === 'fixed' ? 'Budget maximum' : 'Tarif maximum/heure'}
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="number"
                id="budget.max"
                name="budget.max"
                required
                value={formData.budget.max}
                onChange={handleInputChange}
                className="w-full pl-10 pr-16 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="0"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                FCFA
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-2">
          Date limite *
        </label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="date"
            id="deadline"
            name="deadline"
            required
            value={formData.deadline}
            onChange={handleInputChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Modalité de travail *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { value: 'remote', label: 'À distance', desc: 'Travail 100% remote', icon: Globe },
            { value: 'onsite', label: 'Sur site', desc: 'Présence physique requise', icon: Building },
            { value: 'hybrid', label: 'Hybride', desc: 'Combinaison des deux', icon: MapPin }
          ].map((type) => (
            <label key={type.value} className="relative">
              <input
                type="radio"
                name="location.type"
                value={type.value}
                checked={formData.location.type === type.value}
                onChange={() => handleLocationTypeChange(type.value)}
                className="sr-only"
              />
              <div className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                formData.location.type === type.value 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}>
                <type.icon className="h-6 w-6 text-gray-600 mb-2" />
                <div className="font-medium text-gray-900">{type.label}</div>
                <div className="text-sm text-gray-500">{type.desc}</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {(formData.location.type === 'onsite' || formData.location.type === 'hybrid') && (
        <div>
          <label htmlFor="location.city" className="block text-sm font-medium text-gray-700 mb-2">
            Ville *
          </label>
          <select
            id="location.city"
            name="location.city"
            required
            value={formData.location.city}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Sélectionnez une ville</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
          Exigences spécifiques
        </label>
        <textarea
          id="requirements"
          name="requirements"
          rows={4}
          value={formData.requirements}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Décrivez les exigences particulières, contraintes techniques, ou préférences..."
        />
      </div>

      <div>
        <label htmlFor="deliverables" className="block text-sm font-medium text-gray-700 mb-2">
          Livrables attendus *
        </label>
        <textarea
          id="deliverables"
          name="deliverables"
          rows={4}
          required
          value={formData.deliverables}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Listez les livrables attendus (code source, documentation, tests, déploiement, etc.)"
        />
      </div>

      <div>
        <label htmlFor="communicationPreference" className="block text-sm font-medium text-gray-700 mb-2">
          Langue de communication préférée
        </label>
        <select
          id="communicationPreference"
          name="communicationPreference"
          value={formData.communicationPreference}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="french">Français</option>
          <option value="english">Anglais</option>
          <option value="both">Français et Anglais</option>
        </select>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate('/company/projects')}
          className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Créer un nouveau projet</h1>
          <p className="text-gray-600">Trouvez le freelancer parfait pour votre projet</p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-700">Étape {step} sur 3</span>
          <div className="flex space-x-2">
            {[1, 2, 3].map((stepNum) => (
              <div
                key={stepNum}
                className={`w-3 h-3 rounded-full ${
                  stepNum <= step ? 'bg-green-500' : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>Informations générales</span>
          <span>Budget et délais</span>
          <span>Détails et publication</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6 mt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={() => step > 1 ? setStep(step - 1) : navigate('/company/projects')}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {step === 1 ? 'Annuler' : 'Précédent'}
          </button>
          
          {step < 3 ? (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Suivant
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Publication...</span>
                </>
              ) : (
                <>
                  <span>Publier le projet</span>
                  <FileText className="h-4 w-4" />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
