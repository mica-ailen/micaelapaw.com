export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  image?: string;
}

export interface TechItem {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "tools";
}

export type Section = "home" | "about" | "skills" | "projects" | "contact";
