export interface Skill {
  id: string;
  name: string;
  category: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}
