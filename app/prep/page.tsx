"use client";

import React from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { Calculator, Code2, Cpu, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'aptitude',
    title: 'Aptitude',
    icon: Calculator,
    desc: 'Quantitative, Logical Reasoning, and Verbal Ability practice problems with detailed solutions.',
    href: '/prep/aptitude',
    stats: '150+ Topics',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'dsa',
    title: 'DSA',
    icon: Code2,
    desc: 'Master Data Structures and Algorithms with topic-wise notes and curated LeetCode problems.',
    href: '/prep/dsa',
    stats: '500+ Problems',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'technical',
    title: 'Technical',
    icon: Cpu,
    desc: 'Deep dive into Core CS subjects: OS, DBMS, Computer Networks, and OOPS concepts.',
    href: '/prep/technical',
    stats: '400+ Q&A',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'hr',
    title: 'HR Interview',
    icon: MessageSquare,
    desc: 'Common HR interview questions, behavioral tips, and situational response strategies.',
    href: '/prep/hr',
    stats: '50+ Questions',
    color: 'from-green-500 to-emerald-500'
  }
];

export default function PrepPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <PageHeader 
        badge="Preparation Hub"
        title="Master Your Interview Skills"
        subtitle="Choose a category to start your journey. We provide curated notes, practice problems, and expert tips for every round."
      />

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link href={cat.href} className="group block h-full">
              <div className="glass glass-hover p-10 rounded-[2.5rem] h-full flex flex-col relative overflow-hidden">
                {/* Decorative Gradient Blob */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${cat.color} blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity`} />
                
                <div className="flex items-center gap-6 mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                    <cat.icon className="w-8 h-8 text-white/80" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold font-outfit">{cat.title}</h3>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{cat.stats}</span>
                  </div>
                </div>

                <p className="text-white/50 text-lg mb-10 flex-grow leading-relaxed">
                  {cat.desc}
                </p>

                <div className="flex items-center gap-2 font-bold text-sm text-white group-hover:text-primary transition-colors">
                  START LEARNING <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
