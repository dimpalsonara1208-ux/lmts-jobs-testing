"use client";

import React from 'react';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { MessageSquare, Heart, Target, Star } from 'lucide-react';

const hrQuestions = [
  {
    q: "Tell me about yourself.",
    tips: "Focus on your professional journey, key achievements, and why you're a fit for this role. Keep it under 2 minutes.",
    sample: "I am a software engineer with 2 years of experience specializing in React and Node.js. In my previous role at X, I led the development of a..."
  },
  {
    q: "What are your strengths and weaknesses?",
    tips: "Be honest but professional. For weaknesses, always mention how you are working to improve them.",
    sample: "My strength is my ability to learn new technologies quickly. A weakness I've identified is that I sometimes take on too much at once, but I'm now using project management tools to better prioritize."
  },
  {
    q: "Why should we hire you?",
    tips: "Align your skills with the company's needs. Show enthusiasm for their mission.",
    sample: "You should hire me because I not only have the technical skills required for this role but also the passion for building user-centric products that align with your company goals."
  }
];

export default function HRPrep() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <PageHeader 
        badge="HR Interview"
        title="Behavioral & HR Prep"
        subtitle="Learn how to communicate your value and personality effectively during HR rounds."
      />

      <div className="grid gap-8 max-w-4xl">
        {hrQuestions.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass p-8 rounded-3xl border border-white/5"
          >
            <div className="flex gap-4 items-start mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-outfit mt-1">{item.q}</h3>
            </div>

            <div className="space-y-6 ml-14">
              <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                <h4 className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Star className="w-3 h-3" /> Expert Tips
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">{item.tips}</p>
              </div>

              <div>
                <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-3">Sample Response</h4>
                <p className="text-white/40 text-sm italic leading-relaxed border-l-2 border-primary/20 pl-4">
                  "{item.sample}"
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
