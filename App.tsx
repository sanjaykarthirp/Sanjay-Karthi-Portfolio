import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HashRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation,
  useParams,
  useNavigate
} from 'react-router-dom';
import { 
  Send, 
  Plus, 
  Minus, 
  ArrowRight,
  Sparkles,
  Zap,
  Layout,
  Award,
  Terminal,
  Database,
  Cpu,
  GraduationCap,
  Calendar,
  Briefcase,
  Mail,
  ArrowLeft
} from 'lucide-react';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Section from './components/Section';

import { 
  STATS, 
  PROJECTS, 
  SKILL_GROUPS, 
  INTERNSHIP, 
  SOFT_SKILLS,
  FAQS,
} from './constants';

/* ----------------------------------------------------
   SCROLL TO TOP
---------------------------------------------------- */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname, hash]);
  return null;
};

/* ----------------------------------------------------
   PROJECT DETAILS PAGE
---------------------------------------------------- */
const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === Number(id));

  if (!project) return <div className="p-20 text-center">Project not found</div>;

  return (
    <div className="pt-8">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-accent-purple font-bold mb-8 hover:translate-x-[-4px] transition-transform"
      >
        <ArrowLeft size={20} /> Back to Home
      </button>
      
      <Section className="!pt-0">
        <div className="bg-dark-card border border-dark-border rounded-[40px] overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full aspect-video object-cover" />
          <div className="p-8 lg:p-12">
            <span className="text-accent-purple font-bold text-xs uppercase tracking-widest mb-4 block">{project.category}</span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{project.title}</h1>
            <p className="text-gray-text text-lg leading-loose mb-10">{project.description}</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

/* ----------------------------------------------------
   HOME PAGE
---------------------------------------------------- */
const HomePage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getIcon = (category: string) => {
    switch (category) {
      case 'Languages': return <Terminal size={18} />;
      case 'Frameworks': return <Layout size={18} />;
      case 'Libraries': return <Cpu size={18} />;
      case 'Database & Tools': return <Database size={18} />;
      default: return <Terminal size={18} />;
    }
  };

  return (
    <>
      {/* Hero */}
      <Section id="home" className="pt-8">
        <div className="bg-dark-card border border-dark-border rounded-[40px] p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-purple/10 blur-[100px] rounded-full"></div>
          <div className="relative z-10 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-bg border border-dark-border text-accent-purple text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Sparkles size={14} />
              Building the future with ML & UI
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] mb-6">
              Transforming complex <span className="text-accent-purple">Data</span> into elegant <span className="text-accent-purple-light">Design</span>
            </h2>

            <p className="text-gray-text text-lg mb-8">
              Frontend Developer & Data Science enthusiast focused on Python, React, and crafting seamless digital experiences.
            </p>

            <button
  onClick={() => scrollToSection("projects")}
  className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-accent-purple hover:text-white transition-all shadow-lg"
>
  My Projects
</button>

<button
  onClick={() => scrollToSection("contact")}
  className="px-8 py-4 bg-dark-bg border border-dark-border font-bold rounded-2xl hover:border-accent-purple transition-all"
>
  Get in Touch
</button>

            
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {STATS.map((stat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-dark-card border border-dark-border rounded-3xl p-8 flex flex-col items-center"
            >
              <span className="text-4xl font-bold mb-2">{stat.value}</span>
              <span className="text-gray-text text-xs uppercase tracking-widest">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* About */}
      <Section id="about">
        <div className="bg-dark-card border border-dark-border rounded-[32px] p-8 lg:p-12">
          <div className="flex items-center gap-2 text-accent-purple mb-4">
            <Zap size={20} />
            <span className="font-bold text-xs uppercase tracking-widest">About Me</span>
          </div>

          <h3 className="text-3xl font-bold mb-6">The Journey so far</h3>

          <p className="text-gray-text leading-loose mb-8 text-lg">
            I am a UI/UX Developer and Python enthusiast with a strong foundation in Computer Science.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-dark-bg border border-dark-border rounded-2xl">
              <h4 className="font-bold mb-4 flex items-center gap-2 text-accent-purple">
                <GraduationCap size={18}/> Education
              </h4>
              <p className="text-sm font-bold">SRM Madurai College of Engineering & Technology</p>
              <p className="text-xs text-gray-text mb-2">B.E. - Computer Science and Engineering</p>
            </div>

            <div className="p-6 bg-dark-bg border border-dark-border rounded-2xl">
              <h4 className="font-bold mb-4 flex items-center gap-2 text-accent-purple">
                <Award size={18}/> Achievements
              </h4>
              <p className="text-sm font-bold">Technical Certifications</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <motion.div 
              key={project.id}
              whileHover={{ y: -10 }}
              className="group bg-dark-card border border-dark-border rounded-[32px] overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-8">
                <span className="text-[10px] uppercase tracking-widest font-bold text-accent-purple mb-2 block">{project.category}</span>
                <h4 className="text-xl font-bold mb-3 group-hover:text-accent-purple">{project.title}</h4>
                <p className="text-gray-text text-sm mb-6 line-clamp-2">{project.description}</p>

                <Link 
                  to={`/project/${project.id}`}
                  className="w-12 h-12 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center"
                >
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-dark-card border border-dark-border rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center text-accent-purple">
                  {getIcon(group.category)}
                </div>
                <h4 className="font-bold text-lg">{group.category}</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, sIdx) => (
                  <span key={sIdx} className="px-4 py-2 bg-dark-bg border border-dark-border rounded-xl text-xs font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Internship */}
      <Section id="internship">
        <div className="bg-dark-card border border-dark-border rounded-[32px] p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Briefcase size={120} className="text-accent-purple" />
          </div>

          <div className="mb-6">
            <Award size={20} className="text-accent-purple" />
            <span className="ml-2 text-accent-purple text-xs uppercase tracking-widest font-bold">
              Professional Experience
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white">{INTERNSHIP.role}</h3>
          <p className="text-accent-purple font-bold text-lg">{INTERNSHIP.company}</p>

          <ul className="space-y-4 mt-6">
            {INTERNSHIP.description.map((item, idx) => (
              <li key={idx} className="flex gap-3 text-gray-text">
                <Zap size={16} className="text-accent-purple mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="bg-dark-card border border-dark-border rounded-[32px] p-8 lg:p-12">
          <h3 className="text-3xl font-bold mb-8">Frequently Asked Questions</h3>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.id} className="border border-dark-border rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <span className="font-bold">{faq.question}</span>
                  {activeFaq === faq.id ? <Minus size={20} /> : <Plus size={20} />}
                </button>

                <AnimatePresence>
                  {activeFaq === faq.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-text">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-accent-purple rounded-[32px] p-8 lg:p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">Let's work together</h3>
            <p className="text-white/80 text-lg mb-8">
              I'm currently looking for internship opportunities and freelance projects.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail size={24} />
                <div>
                  <p className="text-xs text-white/70 uppercase font-bold">Email</p>
                  <p className="text-lg font-bold">rpsanjays@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-[32px] p-8 lg:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-4"
              />
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-4"
              />
              <textarea
                rows={5}
                placeholder="Message"
                className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-4 resize-none"
              ></textarea>

              <button className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-accent-purple hover:text-white transition-all flex items-center justify-center gap-2">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};

/* ----------------------------------------------------
   MAIN APP
---------------------------------------------------- */
const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />

      <div className="min-h-screen bg-dark-bg text-white">
        <Sidebar />
        <Navbar />

        <main className="lg:ml-[400px] lg:mr-8 px-6 pb-32 max-w-5xl">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectDetailPage />} />
          </Routes>

          <footer className="mt-16 pt-8 border-t border-dark-border text-center">
            <p className="text-gray-text text-sm">© {new Date().getFullYear()} Sanjay Karthi R P.</p>
          </footer>
        </main>
      </div>
    </Router>
  );
};

export default App;
