import type { NavItem, Skill, Experience, Project } from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skills: Skill[] = [
  { name: "React.js", category: "frontend" },
  { name: "Vue.js", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Laravel", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Git", category: "tools" },
];

export const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Fakultas Hukum Universitas Pasundan",
    period: "2023 — Present",
    description: [
      "Developed and maintained the faculty's official web presence",
      "Built responsive UI components using React and Tailwind CSS",
      "Collaborated with stakeholders to gather requirements and deliver solutions",
      "Improved page performance and accessibility scores",
    ],
    type: "work",
  },
  {
    role: "Fullstack Web Development Bootcamp",
    company: "SYNRGY Academy",
    period: "2023",
    description: [
      "Completed intensive fullstack web development program",
      "Built production-ready applications with React, Node.js, and PostgreSQL",
      "Practiced agile development methodologies and Git workflows",
      "Delivered 3+ capstone projects under real-world constraints",
    ],
    type: "education",
  },
  {
    role: "MBKM Program",
    company: "Merdeka Belajar Kampus Merdeka",
    period: "2023",
    description: [
      "Participated in the national MBKM (Merdeka Belajar Kampus Merdeka) initiative",
      "Gained hands-on industry experience through structured project work",
      "Collaborated in cross-functional teams on real-world software solutions",
      "Enhanced soft skills including communication, teamwork, and problem-solving",
    ],
    type: "program",
  },
];

export const projects: Project[] = [
  {
    title: "Valorant App",
    description:
      "An interactive Valorant companion app featuring agent browser, weapon stats, and map details. Built with modern Vue 3 composition API for a smooth user experience.",
    stack: ["Vue 3", "TypeScript", "Tailwind CSS", "Valorant API"],
    featured: true,
  },
  {
    title: "Restaurant App",
    description:
      "A dynamic restaurant listing and menu application with filtering and search capabilities. Powered by local JSON data with a clean, intuitive interface.",
    stack: ["JavaScript", "HTML/CSS", "JSON Data", "Responsive Design"],
    featured: false,
  },
];
