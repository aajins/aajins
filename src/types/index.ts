export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools";
  icon?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  type: "work" | "education" | "program";
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}
