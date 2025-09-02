// User Types
export interface User {
  _id: string;
  userType: 'freelancer' | 'company' | 'admin';
  email: string;
  profile: FreelancerProfile | CompanyProfile;
  rating: {
    average: number;
    count: number;
  };
  createdAt: string;
  updatedAt: string;
}

export interface FreelancerProfile {
  name: string;
  avatar: string;
  location: {
    city: string;
    country: string;
  };
  bio: string;
  skills: Skill[];
  experience: Experience[];
  certifications: Certification[];
  portfolio: PortfolioItem[];
  hourlyRate: number;
  availability: 'available' | 'busy' | 'unavailable';
}

export interface CompanyProfile {
  name: string;
  logo: string;
  industry: string;
  size: string;
  rccm: string;
  website: string;
  description: string;
  location: {
    city: string;
    country: string;
  };
}

export interface Skill {
  name: string;
  level: number;
  verified: boolean;
  category: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  startDate: string;
  endDate?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  url?: string;
}

export interface PortfolioItem {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

// Project Types
export interface Project {
  _id: string;
  companyId: string;
  title: string;
  description: string;
  requirements: {
    skills: RequiredSkill[];
    experience: string;
    duration: string;
    budget: {
      min: number;
      max: number;
      currency: string;
    };
  };
  location: {
    onsite: boolean;
    remote: boolean;
    city?: string;
  };
  status: 'open' | 'in_progress' | 'completed' | 'cancelled';
  deadline: string;
  applicants: Application[];
  selectedFreelancer?: string;
  createdAt: string;
  updatedAt: string;
}

export interface RequiredSkill {
  name: string;
  level: string;
  required: boolean;
}

export interface Application {
  _id: string;
  projectId: string;
  freelancerId: string;
  companyId: string;
  proposal: string;
  attachments: string[];
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
  updatedAt: string;
}

// Review Types
export interface Review {
  _id: string;
  projectId: string;
  reviewerId: string;
  revieweeId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

// Analytics Types
export interface Analytics {
  totalUsers: number;
  totalProjects: number;
  totalApplications: number;
  activeProjects: number;
  completedProjects: number;
  averageRating: number;
  monthlyGrowth: {
    users: number;
    projects: number;
    applications: number;
  };
}

// Navigation Types
export interface NavItem {
  name: string;
  href: string;
  icon?: React.ComponentType<any>;
  current?: boolean;
}
