"use client";

import React from 'react';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { Cpu, Database, Globe, Shield } from 'lucide-react';

const techSubjects = [
  { name: 'Operating Systems', icon: Cpu, topics: ['Process Sync', 'Memory Mgmt', 'Deadlocks'] },
  { name: 'DBMS', icon: Database, topics: ['Normalization', 'SQL', 'Transactions'] },
  { name: 'Computer Networks', icon: Globe, topics: ['OSI Model', 'TCP/IP', 'HTTP/S'] },
  { name: 'OOPs Concepts', icon: Shield, topics: ['Inheritance', 'Polymorphism', 'Encapsulation'] },
];

export default function TechnicalPrep() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <PageHeader 
        badge="Core Subjects"
        title="Technical Fundamentals"
        subtitle="Brush up on core CS subjects that are frequently tested in technical interview rounds."
      />

      <div className="grid md:grid-cols-2 gap-8">
        {techSubjects.map((subject, i) => (
          <motion.div
            key={subject.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass p-10 rounded-[2.5rem] border border-white/5 group"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <subject.icon className="w-8 h-8 text-white/50 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-2xl font-bold font-outfit">{subject.name}</h3>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Key Topics</h4>
              <div className="flex flex-wrap gap-3">
                {subject.topics.map(topic => (
                  <span key={topic} className="px-4 py-2 rounded-xl bg-white/5 text-sm text-white/60 border border-white/5 group-hover:border-white/10 transition-colors">
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <button className="mt-10 text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
              READ NOTES <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
