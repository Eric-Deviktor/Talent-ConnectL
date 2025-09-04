import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Eye, EyeOff, Mail, Lock, User, Building, Phone, MapPin, ArrowRight } from 'lucide-react';
import { loginSuccess } from '../../store/slices/authSlice';

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    userType: 'freelancer' as 'freelancer' | 'company',
    email: '',
    password: '',
    confirmPassword: '',
    // Freelancer fields
    firstName: '',
    lastName: '',
    phone: '',
    city: '',
    // Company fields
    companyName: '',
    industry: '',
    companySize: '',
    rccm: '',
    website: '',
    contactPerson: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 1) {
      if (formData.password !== formData.confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return;
      }
      setStep(2);
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      const mockUser = {
        _id: Date.now().toString(),
        email: formData.email,
        userType: formData.userType,
        profile: formData.userType === 'freelancer' ? {
          name: `${formData.firstName} ${formData.lastName}`,
          avatar: '',
          location: {
            city: formData.city || 'Douala',
            country: 'Cameroun'
          },
          bio: 'Nouveau développeur sur TalentConnect CM',
          skills: [],
          experience: [],
          certifications: [],
          portfolio: [],
          hourlyRate: 0,
          availability: 'available' as const
        } : {
          name: formData.companyName,
          logo: '',
          industry: formData.industry,
          size: formData.companySize,
          rccm: formData.rccm,
          website: formData.website,
          description: `${formData.industry} - ${formData.companySize} employés`,
          location: {
            city: 'Douala',
            country: 'Cameroun'
          }
        },
        rating: {
          average: 0,
          count: 0
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      dispatch(loginSuccess({
        user: mockUser,
        token: 'mock-jwt-token'
      }));

      // Redirect based on user type
      if (formData.userType === 'freelancer') {
        navigate('/freelancer/profile');
      } else {
        navigate('/admin/dashboard');
      }
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const renderStep1 = () => (
    <div className="space-y-4">
      <div>
        <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-2">
          Type de compte *
        </label>
        <select
          id="userType"
          name="userType"
          value={formData.userType}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          <option value="freelancer">Informaticien / Freelancer</option>
          <option value="company">Entreprise</option>
        </select>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Adresse email *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="votre@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
          Mot de passe *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="••••••••"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
          Confirmer le mot de passe *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="••••••••"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => {
    if (formData.userType === 'freelancer') {
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                Prénom *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Jean"
                />
              </div>
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Nom *
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Dupont"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Téléphone *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="+237 6XX XXX XXX"
              />
            </div>
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
              Ville *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <select
                id="city"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Sélectionnez votre ville</option>
                <option value="Douala">Douala</option>
                <option value="Yaoundé">Yaoundé</option>
                <option value="Bafoussam">Bafoussam</option>
                <option value="Bamenda">Bamenda</option>
                <option value="Garoua">Garoua</option>
                <option value="Maroua">Maroua</option>
                <option value="Ngaoundéré">Ngaoundéré</option>
                <option value="Bertoua">Bertoua</option>
                <option value="Ebolowa">Ebolowa</option>
                <option value="Kribi">Kribi</option>
              </select>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="space-y-4">
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
              Nom de l'entreprise *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Building className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="companyName"
                name="companyName"
                type="text"
                required
                value={formData.companyName}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="TechCorp Ltd"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-2">
              Personne de contact *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="contactPerson"
                name="contactPerson"
                type="text"
                required
                value={formData.contactPerson}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Jean Dupont"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                Secteur d'activité *
              </label>
              <select
                id="industry"
                name="industry"
                required
                value={formData.industry}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Sélectionnez</option>
                <option value="Technologie">Technologie</option>
                <option value="Finance">Finance</option>
                <option value="Santé">Santé</option>
                <option value="Éducation">Éducation</option>
                <option value="Commerce">Commerce</option>
                <option value="Industrie">Industrie</option>
                <option value="Services">Services</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
            <div>
              <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-2">
                Taille de l'entreprise *
              </label>
              <select
                id="companySize"
                name="companySize"
                required
                value={formData.companySize}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Sélectionnez</option>
                <option value="1-10">1-10 employés</option>
                <option value="11-50">11-50 employés</option>
                <option value="51-200">51-200 employés</option>
                <option value="201-500">201-500 employés</option>
                <option value="500+">500+ employés</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="rccm" className="block text-sm font-medium text-gray-700 mb-2">
              Numéro RCCM
            </label>
            <input
              id="rccm"
              name="rccm"
              type="text"
              value={formData.rccm}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="RC/DLA/2023/B/XXXX"
            />
          </div>

          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
              Site web
            </label>
            <input
              id="website"
              name="website"
              type="url"
              value={formData.website}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="https://www.votre-entreprise.com"
            />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-bold text-gray-900">
              Talent<span className="text-green-500">Connect</span>
            </h1>
          </Link>
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Créez votre compte
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Ou{' '}
            <Link to="/auth/login" className="font-medium text-green-600 hover:text-green-500">
              connectez-vous à votre compte existant
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6 bg-white p-8 rounded-xl shadow-lg" onSubmit={handleSubmit}>
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-700">Étape {step} sur 2</span>
              <div className="flex space-x-2">
                <div className={`w-3 h-3 rounded-full ${step >= 1 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <div className={`w-3 h-3 rounded-full ${step >= 2 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 2) * 100}%` }}
              ></div>
            </div>
          </div>

          {step === 1 ? renderStep1() : renderStep2()}

          <div className="flex space-x-4">
            {step === 2 && (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 py-3 px-4 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
              >
                Précédent
              </button>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 group relative flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  {step === 1 ? 'Suivant' : 'Créer le compte'}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </>
              )}
            </button>
          </div>

          <div className="text-xs text-gray-500 text-center">
            En créant un compte, vous acceptez nos{' '}
            <Link to="/terms" className="text-green-600 hover:text-green-500">
              Conditions d'utilisation
            </Link>{' '}
            et notre{' '}
            <Link to="/privacy" className="text-green-600 hover:text-green-500">
              Politique de confidentialité
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
