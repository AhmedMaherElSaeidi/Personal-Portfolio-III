export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  technologies: string[];
  description: string;
  extendedDescription?: string;
  keyFeatures: string[];
  frontendUrl?: string;
  backendUrl?: string;
  liveUrl?: string;
  image?: string;
  type: 'ai' | 'fullstack';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  isCurrentOrUpcoming?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  specialization: string;
  cgpa: string;
  rank: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}
