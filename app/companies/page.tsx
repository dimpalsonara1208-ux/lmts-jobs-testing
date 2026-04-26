"use client";

import React from 'react';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { GraduationCap, Users, FileText, ChevronRight, Search } from 'lucide-react';

const companies = [
  {
    name: 'TCS',
    fullName: 'Tata Consultancy Services',
    process: ['Aptitude Test', 'Technical Round', 'HR Round'],
    eligibility: '60% in Graduation, No active backlogs',
    pattern: 'Numerical, Verbal, Reasoning, Coding (2 questions)',
    syllabus: 'Quants, Data Interpretation, C/C++/Java basics',
    color: 'border-blue-500/20'
  },
  {
    name: 'Infosys',
    fullName: 'Infosys Limited',
    process: ['Online Assessment', 'Technical + HR Interview'],
    eligibility: '65% through out academics',
    pattern: 'Reasoning, Mathematical, Verbal, Pseudocode, Puzzle Solving',
    syllabus: 'Logical Reasoning, DBMS, OS, Data Structures',
    color: 'border-cyan-500/20'
  },
  {
    name: 'Google',
    fullName: 'Google LLC',
    process: ['Phone Screen', 'Onsite (4-5 rounds)', 'Leadership (Googliness)'],
    eligibility: 'Strong CS fundamentals, problem solving skills',
    pattern: 'DSA heavy, System Design (for Senior), Behavioral',
    syllabus: 'Advanced Algorithms, Graphs, Dynamic Programming',
    color: 'border-red-500/20'
  },
  {
    name: 'Amazon',
    fullName: 'Amazon.com, Inc.',
    process: ['OA (Coding + SDE Simulation)', 'Technical Rounds', 'Bar Raiser Round'],
    eligibility: 'Degree in CS or related field',
    pattern: 'Coding, Leadership Principles (LP), System Design',
    syllabus: 'Trees, Graphs, DP, Object Oriented Design',
    color: 'border-orange-500/20'
  }
];

export default function CompaniesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <PageHeader 
        badge="Insider Knowledge"
        title="Company Hiring Guides"
        subtitle="Detailed breakdown of the interview process, syllabus, and eligibility criteria for top tech firms."
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {companies.map((company, i) => (
          <motion.div
            key={company.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`glass p-8 rounded-[2.5rem] border ${company.color} relative group overflow-hidden`}
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-3xl font-bold font-outfit mb-2">{company.name}</h3>
                <p className="text-white/40 font-medium">{company.fullName}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                <ChevronRight className="w-6 h-6 text-white/30 group-hover:text-primary transition-colors" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white/80 uppercase tracking-wider mb-2">Hiring Process</h4>
                  <div className="flex flex-wrap gap-2">
                    {company.process.map(step => (
                      <span key={step} className="px-3 py-1 rounded-md bg-white/5 text-white/50 text-[11px] font-medium border border-white/5">
                        {step}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex-shrink-0 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white/80 uppercase tracking-wider mb-2">Eligibility</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{company.eligibility}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex-shrink-0 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white/80 uppercase tracking-wider mb-2">Exam Pattern & Syllabus</h4>
                  <p className="text-white/50 text-sm leading-relaxed mb-3"><strong>Pattern:</strong> {company.pattern}</p>
                  <p className="text-white/50 text-sm leading-relaxed"><strong>Syllabus:</strong> {company.syllabus}</p>
                </div>
              </div>
            </div>

            <button className="mt-8 w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm font-bold hover:bg-white/10 transition-all">
              View Detailed Guide
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
