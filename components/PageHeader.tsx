"use client";

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
}

const PageHeader = ({ title, subtitle, badge }: PageHeaderProps) => (
  <div className="mb-16">
    {badge && (
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6"
      >
        {badge}
      </motion.span>
    )}
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl font-bold font-outfit mb-6"
    >
      {title}
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-white/50 text-lg max-w-2xl"
    >
      {subtitle}
    </motion.p>
  </div>
);

export default PageHeader;
