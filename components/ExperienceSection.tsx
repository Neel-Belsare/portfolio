'use client';

import React from 'react';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  skills: string[];
  isCurrent?: boolean;
}

export default function ExperienceSection() {
  const experiences: ExperienceItem[] = [
    {
      period: '2024 – 2028',
      role: 'B.Tech in Artificial Intelligence & Data Science (Minor in Business Analytics)',
      company: "MGM's Jawaharlal Nehru Engineering College",
      description: 'Undergraduate degree specializing in AI, Machine Learning, Statistical Inference, and Database Systems, alongside an intensive minor in Business Analytics. Focus on operations research, prescriptive analytics, data lifecycle management, and translating technical AI metrics into business ROI.',
      skills: ['Machine Learning', 'Business Analytics', 'Operations Research', 'SQL', 'Python', 'Tableau / BI', 'Data Lifecycle'],
      isCurrent: true,
    },
    {
      period: '2024 – PRESENT',
      role: 'Lead Systems Architect & Developer',
      company: 'Quick-Commerce Dark Store Ecosystem (v4.0)',
      description: 'Engineered an autonomous 10-minute grocery fulfillment simulation across 12 hubs in Chhatrapati Sambhajinagar. Implemented S-curve warehouse route heuristics (42% travel reduction), sub-3s OSRM spatial dispatch, and PyDeck 3D operations telemetry.',
      skills: ['FastAPI', 'OSRM Graph', 'PyDeck 3D', 'Supabase', 'Streamlit', 'PostGIS', 'NumPy'],
    },
    {
      period: '2024 – PRESENT',
      role: 'Full-Stack & Product Analytics Builder',
      company: 'Applied AI & Autonomous Projects',
      description: 'Architecting responsive web applications, automated business intelligence dashboards, and RESTful microservices. Spearheading state management overhauls, database query optimizations, and seamless cloud deployments.',
      skills: ['Next.js 14', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'Git'],
    },
  ];

  return (
    <section
      id="experience"
      className="relative w-full min-h-screen py-24 px-6 md:px-16 bg-[#0a0a0c] select-none"
      style={{
        backgroundImage: 'radial-gradient(rgba(255,107,53,0.03) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
      }}
    >
      <div className="text-center max-w-4xl mx-auto mb-20">
        <p className="font-orbitron text-[10px] font-bold tracking-[0.3em] text-[#FF6B35] mb-3 uppercase">
          EDUCATION &amp; MILESTONES
        </p>
        <h2 className="font-orbitron font-black text-4xl md:text-6xl text-white tracking-[0.1em] uppercase">
          EXPERIENCE
        </h2>
        <p className="mt-3 text-sm text-white/40 max-w-md mx-auto font-inter">
          Academic rigor in AI &amp; Business Analytics combined with production systems engineering.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Center Vertical Timeline Line */}
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(255,107,53,0.3) 10%, rgba(255,107,53,0.3) 90%, transparent)',
          }}
        />

        <div className="flex flex-col gap-12">
          {experiences.map((exp, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={exp.role + exp.company}
                className={`relative md:flex md:items-start ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card Side */}
                <div className="md:w-1/2 md:px-8">
                  <div
                    className={`relative rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:-translate-y-1 ${
                      exp.isCurrent
                        ? 'bg-[rgba(255,107,53,0.06)] border-[#FF6B35]/30 shadow-[0_0_30px_rgba(255,107,53,0.1)]'
                        : 'bg-white/[0.02] border-white/10 hover:border-[#FF6B35]/25'
                    }`}
                  >
                    {exp.isCurrent && (
                      <span className="absolute -top-3 left-6 bg-[#FF6B35] text-black text-[10px] font-black font-orbitron tracking-widest px-3 py-0.5 rounded-full uppercase shadow-md">
                        ● CURRENT ROLE
                      </span>
                    )}

                    <div className="flex items-center justify-between text-xs text-[#FF6B35] font-orbitron tracking-widest mb-2">
                      <span>{exp.period}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white font-inter mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-white/50 mb-4 font-inter flex items-center gap-1.5">
                      <Building2 size={14} className="text-[#FF6B35]" />
                      {exp.company}
                    </p>

                    <p className="text-sm text-white/60 leading-relaxed font-inter mb-6">
                      {exp.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md text-[11px] font-inter font-medium bg-[#FF6B35]/10 border border-[#FF6B35]/20 text-[#FF6B35]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Node Dot */}
                <div className="hidden md:flex justify-center items-center w-8 absolute left-1/2 -translate-x-1/2 top-8">
                  <div
                    className={`w-3.5 h-3.5 rounded-full z-10 ${
                      exp.isCurrent
                        ? 'bg-[#FF6B35] ring-4 ring-[#FF6B35]/30'
                        : 'bg-white/40 ring-4 ring-white/10'
                    }`}
                  />
                </div>

                {/* Empty Half on desktop */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
