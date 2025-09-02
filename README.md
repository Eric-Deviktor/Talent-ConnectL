# TalentConnect CM - Plateforme IT Camerounaise

Une plateforme complète pour connecter les informaticiens camerounais avec les entreprises locales, développée par l'équipe CODING ARTISTS CM.

## 🚀 Fonctionnalités Principales

### Pour les Freelancers
- **Dashboard Complet** : Vue d'ensemble des revenus, projets et performances
- **Gestion de Profil** : Profil détaillé avec compétences, expérience et certifications
- **Portfolio Interactif** : Showcase de projets avec images, technologies et liens
- **Candidatures** : Gestion des candidatures et recherche de nouveaux projets
- **Analytics** : Statistiques de visibilité et performance

### Pour les Entreprises
- **Publication de Projets** : Création et gestion de projets avec spécifications détaillées
- **Recherche de Talents** : Algorithme de matching intelligent
- **Gestion des Candidatures** : Évaluation et sélection des freelancers
- **Suivi de Projets** : Monitoring et communication intégrée

### Pour les Administrateurs
- **Dashboard Analytics** : Vue d'ensemble de la plateforme avec métriques clés
- **Gestion Utilisateurs** : Administration complète des comptes freelancers et entreprises
- **Supervision Projets** : Monitoring de tous les projets et transactions
- **Rapports** : Analytics avancés et insights business

## 🛠️ Stack Technique

### Frontend
- **React 18** avec TypeScript
- **Tailwind CSS** pour le styling
- **React Router** pour la navigation
- **Redux Toolkit** pour la gestion d'état
- **Recharts** pour les visualisations de données
- **Framer Motion** pour les animations
- **React Hook Form** pour la gestion des formulaires

### Backend (Recommandé)
- **Node.js** avec Express.js
- **MongoDB** avec Mongoose ODM
- **JWT** pour l'authentification
- **Socket.io** pour la messagerie temps réel
- **AWS S3** pour le stockage de fichiers

### DevOps
- **Docker** pour la containerisation
- **GitHub Actions** pour CI/CD
- **AWS** pour l'hébergement
- **CloudFront** pour le CDN

## 📦 Installation

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn
- Git

### Étapes d'installation

1. **Cloner le repository**
```bash
git clone https://github.com/votre-username/talent-connect-cm.git
cd talent-connect-cm
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Démarrer le serveur de développement**
```bash
npm run dev
```

4. **Accéder à l'application**
- Application principale : http://localhost:5173
- Dashboard Admin : http://localhost:5173/admin
- Dashboard Freelancer : http://localhost:5173/freelancer

## 🎯 Routes Disponibles

### Routes Publiques
- `/` - Page d'accueil
- `/login` - Connexion
- `/register` - Inscription

### Routes Admin
- `/admin` - Dashboard administrateur
- `/admin/users` - Gestion des utilisateurs
- `/admin/projects` - Gestion des projets
- `/admin/settings` - Paramètres

### Routes Freelancer
- `/freelancer` - Dashboard freelancer
- `/freelancer/profile` - Gestion du profil
- `/freelancer/portfolio` - Gestion du portfolio
- `/freelancer/applications` - Candidatures et projets
- `/freelancer/finances` - Finances
- `/freelancer/settings` - Paramètres

### Routes Entreprise (À venir)
- `/company` - Dashboard entreprise
- `/company/projects` - Gestion des projets
- `/company/candidates` - Gestion des candidatures

## 🏗️ Architecture du Projet

```
src/
├── components/           # Composants réutilisables
│   ├── Layout/          # Layouts (Admin, Freelancer)
│   ├── Categories.tsx   # Composants de la landing page
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── PopularServices.tsx
│   └── TopFreelancers.tsx
├── pages/               # Pages de l'application
│   ├── Admin/          # Pages administrateur
│   │   ├── AdminDashboard.tsx
│   │   ├── UserManagement.tsx
│   │   └── ProjectManagement.tsx
│   └── Freelancer/     # Pages freelancer
│       ├── FreelancerDashboard.tsx
│       ├── ProfileManagement.tsx
│       ├── PortfolioManagement.tsx
│       └── ProjectApplications.tsx
├── store/              # Redux store
│   ├── slices/         # Redux slices
│   └── index.ts
├── types/              # Types TypeScript
│   └── index.ts
└── App.tsx             # Composant principal avec routing
```

## 📊 Modèle de Données

### Utilisateur
```typescript
interface User {
  _id: string;
  userType: 'freelancer' | 'company' | 'admin';
  email: string;
  profile: FreelancerProfile | CompanyProfile;
  rating: { average: number; count: number };
  createdAt: string;
  updatedAt: string;
}
```

### Projet
```typescript
interface Project {
  _id: string;
  companyId: string;
  title: string;
  description: string;
  requirements: {
    skills: RequiredSkill[];
    experience: string;
    duration: string;
    budget: { min: number; max: number; currency: string };
  };
  status: 'open' | 'in_progress' | 'completed' | 'cancelled';
  deadline: string;
  applicants: Application[];
}
```

## 🎨 Design System

### Couleurs Principales
- **Vert Principal** : `#10B981` (green-500)
- **Vert Secondaire** : `#059669` (green-600)
- **Gris Texte** : `#374151` (gray-700)
- **Gris Clair** : `#F9FAFB` (gray-50)

### Composants UI
- Utilisation de Tailwind CSS pour un design cohérent
- Composants réutilisables avec variants
- Design responsive mobile-first
- Animations subtiles avec Framer Motion

## 🚀 Déploiement

### Développement
```bash
npm run dev
```

### Production
```bash
npm run build
npm run preview
```

### Docker
```bash
docker build -t talent-connect-cm .
docker run -p 3000:3000 talent-connect-cm
```

## 🧪 Tests

```bash
# Tests unitaires
npm run test

# Tests e2e
npm run test:e2e

# Coverage
npm run test:coverage
```

## 📈 Roadmap

### Phase 1 (Actuelle) - MVP
- [x] Interface utilisateur complète
- [x] Dashboard Admin et Freelancer
- [x] Gestion des profils et portfolios
- [ ] Système d'authentification
- [ ] API Backend

### Phase 2 - Fonctionnalités Avancées
- [ ] Messagerie temps réel
- [ ] Système de paiement
- [ ] Notifications push
- [ ] Application mobile

### Phase 3 - Intelligence Artificielle
- [ ] Algorithme de matching IA
- [ ] Recommandations personnalisées
- [ ] Analyse prédictive
- [ ] Chatbot support

## 👥 Équipe CODING ARTISTS CM

- **Viktor** - Chef de Projet DevOps & FullStack
- **Steeve** - Lead Developer & Architecture Expert
- **Charles** - Backend Lead
- **Dylan** - Backend Developer
- **Nathalie** - Frontend & Business Analyst
- **Landry** - Data & FullStack
- **Christopher** - FullStack, Designer & Data

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! Veuillez lire notre [guide de contribution](CONTRIBUTING.md) pour commencer.

## 📞 Support

Pour toute question ou support :
- Email : support@talentconnect.cm
- Discord : [Serveur CODING ARTISTS CM](https://discord.gg/coding-artists-cm)
- Documentation : [docs.talentconnect.cm](https://docs.talentconnect.cm)

---

**CODING ARTISTS, LET'S CODE THE FUTURE !** 🚀
