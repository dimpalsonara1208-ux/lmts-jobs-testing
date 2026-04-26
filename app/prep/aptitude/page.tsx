"use client";

import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, ChevronRight, BookOpen, BrainCircuit, CheckCircle2 } from 'lucide-react';

const aptitudeTopics = [
  {
    title: 'Quantitative Aptitude',
    topics: [
      { 
        name: 'Time and Work', 
        notes: 'Time and Work is an important topic. Work = Rate × Time. If A can do a piece of work in n days, A\'s 1 day work = 1/n.',
        questions: [
          { q: 'A can do a work in 10 days and B in 15 days. How many days to do it together?', options: ['5 days', '6 days', '8 days', '12 days'], correct: 1 },
          { q: 'A is thrice as good a workman as B. Together they finish in 18 days. In how many days can A alone do it?', options: ['24 days', '36 days', '54 days', '72 days'], correct: 0 }
        ]
      },
      { name: 'Percentages', notes: 'x% of y = (x/100) * y. Percentage increase = (Increase / Original) * 100.', questions: [] },
      { name: 'Profit and Loss', notes: 'Profit = SP - CP. Loss = CP - SP. Profit% = (Profit/CP) * 100.', questions: [] }
    ]
  },
  {
    title: 'Logical Reasoning',
    topics: [
      { name: 'Number Series', notes: 'Look for patterns like squares, cubes, prime numbers, or common differences.', questions: [] },
      { name: 'Blood Relations', notes: 'Use family tree diagrams to visualize relationships. Male: Square/Plus, Female: Circle/Minus.', questions: [] }
    ]
  }
];

export default function AptitudePrep() {
  const [selectedTopic, setSelectedTopic] = useState(aptitudeTopics[0].topics[0]);
  const [showQuestions, setShowQuestions] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <PageHeader 
        badge="Aptitude"
        title="Quantitative & Logical Reasoning"
        subtitle="Master the fundamentals of mathematical and logical problems common in placement exams."
      />

      <div className="grid lg:grid-cols-12 gap-12">
        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          {aptitudeTopics.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-bold text-white/30 uppercase tracking-widest mb-4 px-4">{category.title}</h3>
              <div className="space-y-2">
                {category.topics.map((topic) => (
                  <button
                    key={topic.name}
                    onClick={() => {
                      setSelectedTopic(topic);
                      setShowQuestions(false);
                      setUserAnswers({});
                    }}
                    className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between group ${
                      selectedTopic.name === topic.name 
                        ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                        : 'hover:bg-white/5 text-white/60 hover:text-white'
                    }`}
                  >
                    <span className="font-semibold">{topic.name}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${selectedTopic.name === topic.name ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-8">
          <div className="glass p-10 rounded-[2.5rem] min-h-[600px]">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold font-outfit">{selectedTopic.name}</h2>
            </div>

            <div className="flex gap-4 mb-10 border-b border-white/10">
              <button 
                onClick={() => setShowQuestions(false)}
                className={`pb-4 px-2 font-bold text-sm transition-all relative ${!showQuestions ? 'text-primary' : 'text-white/40'}`}
              >
                Study Notes
                {!showQuestions && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />}
              </button>
              <button 
                onClick={() => setShowQuestions(true)}
                className={`pb-4 px-2 font-bold text-sm transition-all relative ${showQuestions ? 'text-primary' : 'text-white/40'}`}
              >
                Practice Problems
                {showQuestions && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />}
              </button>
            </div>

            <AnimatePresence mode="wait">
              {!showQuestions ? (
                <motion.div
                  key="notes"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="prose prose-invert max-w-none"
                >
                  <p className="text-white/60 text-lg leading-relaxed whitespace-pre-wrap">
                    {selectedTopic.notes}
                  </p>
                  
                  <div className="mt-12 p-8 rounded-3xl bg-white/5 border border-white/10">
                    <h4 className="flex items-center gap-2 text-white font-bold mb-4">
                      <BookOpen className="w-5 h-5 text-primary" /> Key Formulas
                    </h4>
                    <ul className="space-y-2 text-white/50 text-sm">
                      <li>• Work Done = Rate × Time</li>
                      <li>• If A takes X days, efficiency = 1/X</li>
                      <li>• Combined Rate = 1/A + 1/B</li>
                    </ul>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="questions"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-12"
                >
                  {selectedTopic.questions.length > 0 ? (
                    selectedTopic.questions.map((q, qIndex) => (
                      <div key={qIndex} className="space-y-6">
                        <p className="text-xl font-medium text-white/80">Q{qIndex + 1}. {q.q}</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          {q.options.map((opt, oIndex) => (
                            <button
                              key={oIndex}
                              onClick={() => setUserAnswers(prev => ({ ...prev, [qIndex]: oIndex }))}
                              className={`p-5 rounded-2xl text-left transition-all border ${
                                userAnswers[qIndex] === oIndex 
                                  ? (oIndex === q.correct ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' : 'bg-rose-500/10 border-rose-500 text-rose-400')
                                  : 'bg-white/5 border-white/5 hover:border-white/20 text-white/60'
                              }`}
                            >
                              <div className="flex justify-between items-center">
                                <span>{opt}</span>
                                {userAnswers[qIndex] === oIndex && (
                                  oIndex === q.correct ? <CheckCircle2 className="w-5 h-5" /> : null
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                        {userAnswers[qIndex] !== undefined && (
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm">
                            {userAnswers[qIndex] === q.correct 
                              ? <span className="text-emerald-400 font-bold">Correct! Well done.</span> 
                              : <span className="text-rose-400 font-bold">Incorrect. The correct answer is {q.options[q.correct]}.</span>}
                          </motion.div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-20">
                      <p className="text-white/30 italic">No practice problems available for this topic yet. We're working on it!</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
