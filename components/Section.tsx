
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
  return (
    <motion.section
      id={id}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className={`py-12 lg:py-16 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;
