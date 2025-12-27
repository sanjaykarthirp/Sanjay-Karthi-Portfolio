
import React from 'react';
import { 
  Home, 
  Briefcase, 
  User, 
  Mail, 
  Layers,
  Code,
  Award,
  Linkedin,
  Github,
  Twitter,
  Instagram
} from 'lucide-react';
import { Project, Tool, Internship, SkillGroup, BlogPost, FAQItem } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '/#home', icon: <Home size={20} /> },
  { name: 'About', href: '/#about', icon: <User size={20} /> },
  { name: 'Projects', href: '/#projects', icon: <Briefcase size={20} /> },
  { name: 'Skills', href: '/#skills', icon: <Code size={20} /> },
  { name: 'Internship', href: '/#internship', icon: <Award size={20} /> },
  { name: 'Contact', href: '/#contact', icon: <Mail size={20} /> },
];

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: <Linkedin size={18} /> },
  { name: 'GitHub', url: 'https://github.com', icon: <Github size={18} /> },
  { name: 'Twitter', url: 'https://twitter.com', icon: <Twitter size={18} /> },
  { name: 'Instagram', url: 'https://instagram.com', icon: <Instagram size={18} /> },
];

export const STATS = [
  { value: '8.5', label: 'College CGPA' },
  { value: '4+', label: 'Core Projects' },
  { value: '2027', label: 'Graduation Year' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Fake News Detection Tool',
    category: 'Machine Learning / NLP',
    image: 'https://images.unsplash.com/photo-1504711432869-efd597cdd042?auto=format&fit=crop&q=80&w=800',
    description: 'Built ML-based NLP system to classify news as real or fake using Python. Implemented preprocessing, vectorization, and classification pipelines.'
  },
  {
    id: 2,
    title: 'Exam Allocation Website',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    description: 'Developed Flask-based system for exam hall, seating, and faculty allocation. Integrated MySQL backend with student and faculty views.'
  },
  {
    id: 3,
    title: 'CGPA & GPA Calculator',
    category: 'Utility Tool',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    description: 'Built an academic calculator with subject management and printable summary features for university students.'
  },
  {
    id: 4,
    title: 'Expense Calculator',
    category: 'Personal Finance',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800',
    description: 'Developed a comprehensive expense tracking application with category management and budget visualization.'
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  { category: 'Languages', items: ['C++', 'Python', 'Java', 'HTML', 'CSS', 'JavaScript'] },
  { category: 'Frameworks', items: ['React', 'Spring', 'Django', 'Bootstrap', 'Flask'] },
  { category: 'Libraries', items: ['TensorFlow', 'NumPy', 'Pandas'] },
  { category: 'Database & Tools', items: ['MySQL', 'Git', 'GitHub', 'Docker', 'VS Code', 'Figma'] },
];

export const INTERNSHIP: Internship = {
  id: 1,
  role: 'Frontend Development Intern',
  company: 'Feather Softwares',
  duration: 'Jul 2025',
  description: [
    'Completed 120-hour internship focusing on responsive UI development.',
    'Worked with HTML, CSS, Bootstrap, and JavaScript to build production-ready components.'
  ]
};

export const SOFT_SKILLS = [
  'Communication', 'Teamwork', 'Problem-Solving', 'Leadership', 'Time Management'
];



export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: 'What is your primary programming language?',
    answer: 'I am highly proficient in Python and C++, with a strong focus on Python for Data Science and Machine Learning tasks.',
  },
  {
    id: 2,
    question: 'Are you open to collaborative research?',
    answer: 'Yes, I am particularly interested in NLP and UI/UX research projects.',
  },
  {
    id: 3,
    question: 'When do you graduate?',
    answer: 'I am part of the 2023-2027 batch at SRM Madurai College of Engineering and Technology.',
  },
];
