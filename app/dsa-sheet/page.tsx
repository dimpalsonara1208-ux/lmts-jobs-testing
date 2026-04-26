"use client";

import React, { useState, useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, ExternalLink, Search, Filter } from 'lucide-react';

const dsaTopics = [
  {
    title: 'Arrays & Hashing',
    problems: [
      { name: 'Two Sum', difficulty: 'Easy', link: 'https://leetcode.com/problems/two-sum/' },
      { name: 'Contains Duplicate', difficulty: 'Easy', link: 'https://leetcode.com/problems/contains-duplicate/' },
      { name: 'Valid Anagram', difficulty: 'Easy', link: 'https://leetcode.com/problems/valid-anagram/' },
      { name: 'Group Anagrams', difficulty: 'Medium', link: 'https://leetcode.com/problems/group-anagrams/' },
      { name: 'Top K Frequent Elements', difficulty: 'Medium', link: 'https://leetcode.com/problems/top-k-frequent-elements/' },
    ]
  },
  {
    title: 'Two Pointers',
    problems: [
      { name: 'Valid Palindrome', difficulty: 'Easy', link: 'https://leetcode.com/problems/valid-palindrome/' },
      { name: 'Two Sum II', difficulty: 'Medium', link: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/' },
      { name: '3Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/3sum/' },
      { name: 'Container With Most Water', difficulty: 'Medium', link: 'https://leetcode.com/problems/container-with-most-water/' },
    ]
  },
  {
    title: 'Linked List',
    problems: [
      { name: 'Reverse Linked List', difficulty: 'Easy', link: 'https://leetcode.com/problems/reverse-linked-list/' },
      { name: 'Merge Two Sorted Lists', difficulty: 'Easy', link: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
      { name: 'Linked List Cycle', difficulty: 'Easy', link: 'https://leetcode.com/problems/linked-list-cycle/' },
      { name: 'Reorder List', difficulty: 'Medium', link: 'https://leetcode.com/problems/reorder-list/' },
    ]
  },
  {
    title: 'Trees',
    problems: [
      { name: 'Invert Binary Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/invert-binary-tree/' },
      { name: 'Maximum Depth of Binary Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/' },
      { name: 'Binary Tree Level Order Traversal', difficulty: 'Medium', link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/' },
      { name: 'Validate Binary Search Tree', difficulty: 'Medium', link: 'https://leetcode.com/problems/validate-binary-search-tree/' },
    ]
  }
];

export default function DSASheet() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('careerup-dsa-progress');
    if (saved) setCompleted(JSON.parse(saved));
  }, []);

  const toggleProblem = (name: string) => {
    const newCompleted = completed.includes(name)
      ? completed.filter(c => c !== name)
      : [...completed, name];
    setCompleted(newCompleted);
    localStorage.setItem('careerup-dsa-progress', JSON.stringify(newCompleted));
  };

  const totalProblems = dsaTopics.reduce((acc, topic) => acc + topic.problems.length, 0);
  const progressPercentage = Math.round((completed.length / totalProblems) * 100);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
        <PageHeader 
          badge="Curated Sheet"
          title="Top 150 DSA Problems"
          subtitle="Master the most frequently asked problems in technical interviews. Track your progress as you go."
        />
        
        <div className="glass p-6 rounded-3xl min-w-[280px]">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-bold text-white/50 uppercase tracking-wider">Progress</span>
            <span className="text-xl font-bold font-outfit text-primary">{progressPercentage}%</span>
          </div>
          <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              className="h-full bg-gradient-to-r from-primary to-secondary"
            />
          </div>
          <p className="text-[10px] text-white/30 mt-3 font-medium uppercase tracking-widest text-center">
            {completed.length} OF {totalProblems} PROBLEMS COMPLETED
          </p>
        </div>
      </div>

      <div className="relative mb-12">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5" />
        <input 
          type="text" 
          placeholder="Search problems or topics..."
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-16 pr-8 focus:outline-none focus:border-primary/50 transition-all text-lg"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-12">
        {dsaTopics.map((topic, i) => (
          <motion.div 
            key={topic.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="text-2xl font-bold font-outfit mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center text-sm">{i + 1}</span>
              {topic.title}
            </h3>
            
            <div className="grid gap-3">
              {topic.problems
                .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((prob) => (
                <div 
                  key={prob.name}
                  className={`glass p-5 rounded-2xl flex items-center justify-between group transition-all ${
                    completed.includes(prob.name) ? 'border-primary/30 bg-primary/5' : 'hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <button 
                      onClick={() => toggleProblem(prob.name)}
                      className="transition-transform active:scale-90"
                    >
                      {completed.includes(prob.name) ? (
                        <CheckCircle2 className="w-7 h-7 text-primary" />
                      ) : (
                        <Circle className="w-7 h-7 text-white/10 group-hover:text-white/30" />
                      )}
                    </button>
                    <div>
                      <h4 className={`font-semibold transition-all ${completed.includes(prob.name) ? 'text-white/50 line-through' : ''}`}>
                        {prob.name}
                      </h4>
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${
                        prob.difficulty === 'Easy' ? 'text-emerald-400' : 
                        prob.difficulty === 'Medium' ? 'text-amber-400' : 'text-rose-400'
                      }`}>
                        {prob.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <a 
                    href={prob.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
