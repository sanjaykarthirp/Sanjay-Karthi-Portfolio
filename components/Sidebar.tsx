
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Download } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-full lg:w-[350px] lg:fixed lg:left-8 lg:top-8 lg:h-[calc(100vh-64px)] z-20">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-dark-card border border-dark-border rounded-[32px] p-8 flex flex-col h-full overflow-y-auto lg:overflow-visible"
      >
        <div className="relative group mx-auto lg:mx-0 w-32 h-32 lg:w-48 lg:h-48 mb-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-full h-full rounded-3xl overflow-hidden border-2 border-accent-purple/20 bg-dark-bg"
          >
            <img 
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-3xl border border-dark-border shadow-xl"
              loading="eager"
              onError={(e) => {
                // If profile.jpg fails, it might be due to environment naming issues. 
                // We try a placeholder to ensure the layout doesn't break.
                (e.target as HTMLImageElement).src = 'https://i.ibb.co/F8C0LpQ/profile.jpg';
              }}
            />
          </motion.div>
          <div className="absolute -bottom-2 -right-2 bg-accent-purple p-2 rounded-xl text-white shadow-lg shadow-accent-purple/20">
            <span className="block w-2 h-2 rounded-full bg-white animate-pulse"></span>
          </div>
        </div>

        <div className="text-center lg:text-left mb-8">
          <h1 className="text-2xl font-bold mb-1 tracking-tight">Sanjay Karthi R P</h1>
          <p className="text-gray-text font-medium text-sm">UI/UX & Frontend Developer</p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-dark-bg border border-dark-border flex items-center justify-center text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-all">
              <Mail size={18} />
            </div>
            <div className="overflow-hidden">
              <p className="text-[10px] uppercase tracking-widest text-gray-text font-semibold">Email</p>
              <p className="text-sm font-medium truncate">rpsanjays@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-dark-bg border border-dark-border flex items-center justify-center text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-all">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-text font-semibold">Phone</p>
              <p className="text-sm font-medium">+91 9360463606</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-dark-bg border border-dark-border flex items-center justify-center text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-all">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-text font-semibold">Location</p>
              <p className="text-sm font-medium">Nagercoil, India</p>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-8 border-t border-dark-border">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-dark-bg border border-dark-border flex items-center justify-center text-gray-text hover:text-accent-purple hover:border-accent-purple hover:bg-accent-purple/10 transition-all"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
        <motion.button 
          className="w-full py-4 bg-accent-purple text-white rounded-2xl border border-accent-purple/30 
          flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.3)]
          hover:bg-accent-purple-light transition-all"
          onClick={() => window.open('/resume.pdf')}
        >
          <Download size={18} />
          Download Resume
        </motion.button>
        </div>
      </motion.div>
    </aside>
  );
};

export default Sidebar;
