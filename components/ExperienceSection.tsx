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
      period: '2025 – PRESENT',
      role: 'Full-Stack & AI Systems Engineer',
      company: 'Autonomous Projects & Tech Ventures',
      description: 'Architecting end-to-end full stack web platforms and agentic AI systems. Leading development on high-performance SaaS applications, custom LLM pipelines, and vector database integrations.',
      skills: ['Next.js 14', 'TypeScript', 'LangChain', 'FastAPI', 'Node.js', 'PostgreSQL', 'Docker'],
      isCurrent: true,
    },
    {
      period: '2024 – 2025',
      role: 'Full-Stack Developer',
      company: 'Digital Solutions Lab',
      description: 'Engineered responsive web applications and RESTful microservices. Spearheaded state management overhauls, database query optimizations, and seamless third-party payment integrations.',
      skills: ['React', 'Node.js', 'MongoDB', 'Redis', 'Tailwind CSS', 'AWS S3'],
    },
    {
      period: '2023 – 2024',
      role: 'Software Engineering Fellow',
      company: 'Tech Innovations Studio',
      description: 'Built interactive frontend components and dashboard tooling. Contributed to unit testing suites, automated CI/CD deployment pipelines, and UI/UX accessibility improvements.',
      skills: ['React', 'JavaScript', 'Python', 'Git', 'REST APIs', 'Postman'],
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
          WORK HISTORY
        </p>
        <h2 className="font-orbitron font-black text-4xl md:text-6xl text-white tracking-[0.1em] uppercase">
          EXPERIENCE
        </h2>
        <p className="mt-3 text-sm text-white/40 max-w-md mx-auto font-inter">
          A track record of engineering scalable platforms and cutting-edge software.
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
