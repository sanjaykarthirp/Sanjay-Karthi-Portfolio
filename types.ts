
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Tool {
  id: number;
  name: string;
  icon: string;
}

export interface Internship {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
