"use client";

import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { Search, MapPin, DollarSign, Clock, Briefcase, Filter, ArrowUpRight } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Meta',
    logo: 'M',
    location: 'Remote / Menlo Park, CA',
    salary: '$180k - $250k',
    type: 'Full-time',
    category: 'Engineering',
    tags: ['React', 'Next.js', 'TypeScript'],
    color: 'bg-blue-600'
  },
  {
    id: 2,
    title: 'Product Designer',
    company: 'Airbnb',
    logo: 'A',
    location: 'San Francisco, CA',
    salary: '$140k - $190k',
    type: 'Full-time',
    category: 'Design',
    tags: ['Figma', 'UI/UX', 'Prototyping'],
    color: 'bg-rose-500'
  },
  {
    id: 3,
    title: 'Backend Engineer (Go)',
    company: 'Stripe',
    logo: 'S',
    location: 'Remote / Dublin, IE',
    salary: '$160k - $220k',
    type: 'Full-time',
    category: 'Engineering',
    tags: ['Go', 'PostgreSQL', 'Redis'],
    color: 'bg-indigo-500'
  },
  {
    id: 4,
    title: 'Marketing Manager',
    company: 'Notion',
    logo: 'N',
    location: 'New York, NY',
    salary: '$110k - $150k',
    type: 'Contract',
    category: 'Marketing',
    tags: ['Growth', 'SEO', 'Content'],
    color: 'bg-zinc-800'
  },
  {
    id: 5,
    title: 'Software Engineering Intern',
    company: 'Google',
    logo: 'G',
    location: 'Mountain View, CA',
    salary: '$50 - $70 / hr',
    type: 'Internship',
    category: 'Engineering',
    tags: ['Java', 'C++', 'Python'],
    color: 'bg-red-500'
  }
];

export default function JobPortal() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Engineering', 'Design', 'Marketing', 'Product'];

  const filteredJobs = activeCategory === 'All' 
    ? jobs 
    : jobs.filter(job => job.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
        <PageHeader 
          badge="Opportunities"
          title="Find Your Next Big Move"
          subtitle="Discover high-impact roles at top-tier companies. Tailored for ambitious developers and designers."
        />
        
        <div className="flex items-center gap-3 bg-foreground/5 p-1.5 rounded-2xl border border-border">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeCategory === cat 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6">
        {filteredJobs.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative"
          >
            <div className="glass glass-hover p-8 rounded-[2rem] flex flex-col lg:flex-row items-start lg:items-center gap-8 relative z-10">
              <div className={`w-20 h-20 rounded-2xl ${job.color} flex items-center justify-center text-3xl font-bold text-white shadow-xl`}>
                {job.logo}
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold font-outfit">{job.title}</h3>
                  <span className="px-3 py-1 rounded-full bg-foreground/10 text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
                    {job.type}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="font-medium text-foreground/80">{job.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>2 days ago</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {job.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-lg bg-foreground/5 border border-border text-xs font-medium text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full lg:w-auto px-8 py-4 rounded-2xl bg-foreground text-background font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-xl shadow-foreground/5 group-hover:bg-primary group-hover:text-white group-hover:shadow-primary/20">
                Apply Now <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* Background Glow */}
            <div className={`absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 ${job.color}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
