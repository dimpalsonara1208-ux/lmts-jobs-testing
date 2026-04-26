"use client";

import React from 'react';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { Code2, Hash, Layers, ListChecks } from 'lucide-react';
import Link from 'next/link';

const dsaTopics = [
  { name: 'Arrays', count: '45 Problems', icon: Hash },
  { name: 'Linked Lists', count: '30 Problems', icon: ListChecks },
  { name: 'Trees & Graphs', count: '60 Problems', icon: Layers },
  { name: 'Recursion & DP', count: '50 Problems', icon: Code2 },
];

export default function DSAPrep() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <PageHeader 
        badge="DSA Concepts"
        title="Data Structures & Algorithms"
        subtitle="In-depth notes and conceptual breakdowns of core algorithmic paradigms."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {dsaTopics.map((topic, i) => (
          <div key={topic.name} className="glass p-8 rounded-3xl group cursor-pointer hover:border-primary/50 transition-all">
            <topic.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold font-outfit mb-2">{topic.name}</h3>
            <p className="text-white/40 text-sm">{topic.count}</p>
          </div>
        ))}
      </div>

      <div className="glass p-12 rounded-[3rem] text-center border border-white/5">
        <h2 className="text-3xl font-bold font-outfit mb-6">Looking for the Complete Sheet?</h2>
        <p className="text-white/50 mb-10 max-w-xl mx-auto">Our curated DSA sheet contains a topic-wise list of the most important problems to solve for top product companies.</p>
        <Link href="/dsa-sheet" className="px-8 py-4 rounded-2xl bg-primary text-white font-bold hover:scale-105 transition-all inline-block shadow-xl shadow-primary/20">
          View DSA Sheet
        </Link>
      </div>
    </div>
  );
}
