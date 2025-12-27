import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      window.location.href = "/#" + id;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/60 backdrop-blur border-b border-dark-border py-4 px-6 flex justify-center">
      <ul className="flex items-center gap-6 text-sm font-bold uppercase tracking-widest">
        <li className="cursor-pointer hover:text-accent-purple" onClick={() => scrollToSection("home")}>Home</li>
        <li className="cursor-pointer hover:text-accent-purple" onClick={() => scrollToSection("about")}>About</li>
        <li className="cursor-pointer hover:text-accent-purple" onClick={() => scrollToSection("skills")}>Skills</li>
        <li className="cursor-pointer hover:text-accent-purple" onClick={() => scrollToSection("projects")}>Projects</li>
        <li className="cursor-pointer hover:text-accent-purple" onClick={() => scrollToSection("internship")}>Internship</li>
        <li className="cursor-pointer hover:text-accent-purple" onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
