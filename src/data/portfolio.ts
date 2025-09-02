import { Project, TechItem } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Polska Blog",
    description:
      "An application for 4,000 prospective Polish citizens featuring a dynamic form with 45+ conditional fields and 6 informational articles about the citizenship process.",
    technologies: [
      "Javascript",
      "Bootstrap",
      "Python",
      "Git",
      "GitHub",
      "Figma",
    ],
    image: "./assets/polskablog.png",
    liveUrl: "https://polskablog.com/",
    githubUrl: "https://github.com/mica-ailen",
  },
  {
    id: 2,
    title: "Movie Match",
    description:
      "Never waste time scrolling streaming services. Our smart picker cuts through decision fatigue—select your mood, discover your perfect watch in seconds.",
    technologies: ["Javascript", "CSS", "Git", "GitHub", "Figma"],
    image: "./assets/movie-match.png",
    liveUrl: "https://mica-ailen.github.io/movie-match/",
    githubUrl: "https://github.com/mica-ailen/movie-match",
  },
  {
    id: 3,
    title: "Dish Discovery",
    description:
      "Staring at a fridge full of ingredients? Enter one ingredient, get recipes plus step-by-step video tutorials. Cook with ease, no matter your experience.",
    image: "./assets/dish-discovery.png",
    technologies: ["Javascript", "CSS", "Git", "GitHub", "Figma"],
    liveUrl: "https://mica-ailen.github.io/dish-discovery/",
    githubUrl: "https://github.com/mica-ailen/dish-discovery",
  },
  {
    id: 4,
    title: "Task Management",
    description:
      "Drowning in endless to-do lists? Add, edit, delete, and check off tasks with instant updates. Stay organized and productive, no matter how busy your day gets.",
    image: "./assets/task-managment-app.png",
    technologies: ["React", "CSS", "Git", "GitHub", "Figma"],
    liveUrl: "https://mica-ailen.github.io/task-management-productivity-app/",
    githubUrl: "https://github.com/mica-ailen/task-management-productivity-app",
  },
];

export const techStack: TechItem[] = [
  { name: "React", icon: "⚛️", category: "frontend" },
  { name: "TypeScript", icon: "🔷", category: "frontend" },
  { name: "JavaScript", icon: "🟨", category: "frontend" },
  { name: "Node.js", icon: "🟢", category: "backend" },
  { name: "Python", icon: "🐍", category: "backend" },
  { name: "MongoDB", icon: "🍃", category: "database" },
  { name: "AWS", icon: "☁️", category: "tools" },
  { name: "Git", icon: "🔀", category: "tools" },
  { name: "GitHub", icon: "🐙", category: "tools" },
];

export const personalInfo = {
  name: "Micaela",
  title: "Full Stack Developer",
  github: "https://github.com/mica-ailen",
  linkedin: "https://www.linkedin.com/in/micaela-paw/",
  about: `I'm a passionate full stack developer specializing in frontend technologies with backend knowledge that supports my development process. I excel at crafting intuitive user interfaces and seamless user experiences, while understanding how to build well-integrated, scalable web applications. I'm driven by the challenge of translating complex ideas into clean, functional designs and am always eager to explore emerging technologies that enhance the development process.`,
};
