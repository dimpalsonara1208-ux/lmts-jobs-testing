"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, BookOpen, Building2, ClipboardList, CheckCircle2, Zap, Trophy, Users } from 'lucide-react';

const Hero = () => (
  <section className="relative pt-20 pb-32 overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 -z-10">
      <img 
        src="/hero.png" 
        alt="Futuristic Tech Background" 
        className="w-full h-full object-cover opacity-40 scale-110 blur-[2px]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-border text-primary text-sm font-medium mb-8 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          Revolutionizing Career Preparation
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold font-outfit mb-8 tracking-tight"
        >
          Your Fast Track to <br />
          <span className="text-gradient">Dream Tech Careers</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          A complete ecosystem for modern developers. Find jobs, master DSA, 
          practice aptitude, and decode company hiring processes — all in one place.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <Link href="/jobs" className="px-8 py-4 rounded-2xl bg-primary text-white font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20 flex items-center gap-2">
            Explore Jobs <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/prep" className="px-8 py-4 rounded-2xl bg-foreground/5 border border-border text-foreground font-bold hover:bg-foreground/10 transition-all backdrop-blur-md">
            Start Preparation
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description, href, color }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-8 rounded-3xl glass glass-hover relative overflow-hidden group"
  >
    <div className={`w-14 h-14 rounded-2xl bg-${color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
      <Icon className={`w-8 h-8 text-${color}`} />
    </div>
    <h3 className="text-2xl font-bold mb-4 font-outfit">{title}</h3>
    <p className="text-muted-foreground mb-8 leading-relaxed">{description}</p>
    <Link href={href} className="text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
      Learn More <ArrowRight className="w-4 h-4 text-primary" />
    </Link>
  </motion.div>
);

const Stats = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-20 border-y border-border my-20">
    {[
      { label: 'Active Jobs', value: '5000+', icon: Briefcase },
      { label: 'Learning Resources', value: '1200+', icon: BookOpen },
      { label: 'Top Companies', value: '250+', icon: Building2 },
      { label: 'Success Stories', value: '10k+', icon: Users },
    ].map((stat, i) => (
      <div key={i} className="text-center">
        <stat.icon className="w-6 h-6 mx-auto mb-4 text-primary opacity-50" />
        <div className="text-3xl font-bold font-outfit mb-1">{stat.value}</div>
        <div className="text-muted-foreground text-sm">{stat.label}</div>
      </div>
    ))}
  </div>
);

export default function Home() {
  return (
    <div className="px-6">
      <Hero />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={Briefcase}
            title="Job Portal"
            description="Browse curated opportunities from tech giants to fast-growing startups."
            href="/jobs"
            color="primary"
          />
          <FeatureCard 
            icon={BookOpen}
            title="Prep Center"
            description="Master DSA, Aptitude, Technical and HR rounds with our expert notes."
            href="/prep"
            color="secondary"
          />
          <FeatureCard 
            icon={Building2}
            title="Company Insights"
            description="Get the inside scoop on interview patterns and eligibility for top firms."
            href="/companies"
            color="accent"
          />
          <FeatureCard 
            icon={ClipboardList}
            title="DSA Sheet"
            description="Topic-wise curated problems to take you from beginner to expert."
            href="/dsa-sheet"
            color="primary"
          />
        </div>

        <Stats />

        <div className="py-20 text-center">
          <h2 className="text-4xl font-bold font-outfit mb-16">Why Developers Choose LMT JOBS</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Topic-wise Sheets', desc: 'Curated lists focusing on high-frequency interview patterns.', icon: Zap },
              { title: 'Interactive Practice', desc: 'Mock problems and notes designed for maximum retention.', icon: Trophy },
              { title: 'Community Driven', desc: 'Resources updated daily based on latest interview experiences.', icon: CheckCircle2 },
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="w-16 h-16 rounded-full bg-foreground/5 border border-border flex items-center justify-center mx-auto mb-6 group-hover:border-primary transition-colors">
                  <item.icon className="w-8 h-8 text-foreground/70 group-hover:text-primary transition-colors" />
                </div>
                <h4 className="text-xl font-bold mb-4 font-outfit">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
