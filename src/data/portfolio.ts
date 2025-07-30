import { Project, TechItem } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Polska Blog",
    description: "-",
    technologies: ["Javascript", "", "", "", ""],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Movie Match",
    description: "-.",
    technologies: [""],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Dish Discovery",
    description: "-",
    technologies: ["React", ""],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export const techStack: TechItem[] = [
  { name: "React", icon: "⚛️", category: "frontend" },
  { name: "TypeScript", icon: "🔷", category: "frontend" },
  { name: "Node.js", icon: "🟢", category: "backend" },
  { name: "Python", icon: "🐍", category: "backend" },
  { name: "MongoDB", icon: "🍃", category: "database" },
  { name: "AWS", icon: "☁️", category: "tools" },
  { name: "Git", icon: "🔀", category: "tools" },
];

export const personalInfo = {
  name: "Micaela",
  title: "Full Stack Developer",
  email: "micaela.pawlowski22@gmail.com",
  github: "https://github.com/mica-ailen",
  linkedin: "https://www.linkedin.com/in/micaela-paw/",
  about: `I'm a passionate full stack developer with expertise in building scalable web applications.
  With a strong foundation in both frontend and backend technologies, I enjoy creating
  seamless user experiences and robust server architectures. I'm constantly learning and
  exploring new technologies to stay at the forefront of web development.`,
};
