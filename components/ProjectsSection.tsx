'use client';

import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Layers, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface Project {
  title: string;
  category: 'SaaS' | 'AI' | 'Full Stack' | 'Frontend';
  kind: string;
  description: string;
  tags: string[];
  featured?: boolean;
  color: string;
  demoUrl?: string;
  githubUrl?: string;
}

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const projects: Project[] = [
    {
      title: 'AutoAgent Pro',
      category: 'AI',
      kind: 'Autonomous Agent Platform',
      description: 'Multi-agent orchestration framework leveraging LangChain, Qdrant vector retrieval, and fast Groq inference for autonomous research and code analysis.',
      tags: ['LangChain', 'FastAPI', 'Qdrant', 'Next.js 14', 'Python'],
      featured: true,
      color: '#8B5CF6',
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'OmniFlow SaaS',
      category: 'SaaS',
      kind: 'Workflow Automation Engine',
      description: 'Cloud automation suite with drag-and-drop workflow builder, real-time webhooks, Stripe/Razorpay subscription billing, and multi-tenant access control.',
      tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind', 'Stripe'],
      featured: true,
      color: '#FF6B35',
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'NeuralHealth',
      category: 'AI',
      kind: 'AI Diagnostic Assistant',
      description: 'Intelligent healthcare assistant featuring medical report OCR, semantic search with RAG pipelines, and automated dietary planning algorithms.',
      tags: ['React Native', 'FastAPI', 'LangChain', 'OpenCV', 'AWS'],
      featured: true,
      color: '#10B981',
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Nexus ERP Core',
      category: 'Full Stack',
      kind: 'Enterprise Resource Management',
      description: 'Mission-critical enterprise dashboard for resource scheduling, employee attendance tracking, and real-time inventory management with WebSocket sync.',
      tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.io'],
      featured: true,
      color: '#3B82F6',
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Pulse Commerce',
      category: 'Full Stack',
      kind: 'Headless E-Commerce Platform',
      description: 'Ultra-fast storefront with server-side rendering, instant product search, Redux Toolkit cart sync, and secure checkout processing.',
      tags: ['Next.js 14', 'Redux', 'Tailwind', 'Stripe', 'Redis'],
      color: '#EC4899',
      demoUrl: 'https://github.com',
    },
    {
      title: 'Aether 3D Portfolio',
      category: 'Frontend',
      kind: 'Cinematic WebGL Experience',
      description: 'Immersive developer showcase powered by Three.js particle systems, custom vertex shaders, and GSAP timeline scroll choreography.',
      tags: ['Three.js', 'GSAP', 'Next.js', 'GLSL'],
      color: '#06B6D4',
      demoUrl: 'https://github.com',
    },
    {
      title: 'DevMetrics Dash',
      category: 'SaaS',
      kind: 'Engineering Telemetry Tool',
      description: 'Real-time performance and crash monitoring dashboard for distributed Node.js microservices with Prometheus and Grafana integration.',
      tags: ['React', 'Node.js', 'Docker', 'PostgreSQL'],
      color: '#F59E0B',
      demoUrl: 'https://github.com',
    },
    {
      title: 'EcoSphere Platform',
      category: 'Full Stack',
      kind: 'Sustainability Tracker',
      description: 'Gamified green initiative tracking app calculating user carbon offsets and incentivizing eco-friendly routines with smart rewards.',
      tags: ['React', 'TypeScript', 'MongoDB', 'Express'],
      color: '#10B981',
      demoUrl: 'https://github.com',
    },
  ];

  const categories = ['All', 'AI', 'SaaS', 'Full Stack', 'Frontend'];

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-24 px-6 md:px-16 bg-[#0a0a0c] select-none"
      style={{
        backgroundImage: 'radial-gradient(rgba(255,107,53,0.025) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    >
      <div className="text-center max-w-4xl mx-auto mb-16">
        <p className="font-orbitron text-[10px] font-bold tracking-[0.3em] text-[#FF6B35] mb-3 uppercase">
          WHAT I&apos;VE BUILT
        </p>
        <h2 className="font-orbitron font-black text-4xl md:text-6xl text-white tracking-[0.1em] uppercase">
          PROJECTS
        </h2>
        <p className="mt-4 text-sm text-white/40 max-w-xl mx-auto font-inter">
          A collection of high-impact platforms shipped across Autonomous AI, SaaS products, full-stack systems, and creative engineering.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-inter font-medium tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#FF6B35] text-white shadow-[0_0_20px_rgba(255,107,53,0.4)] font-semibold'
                  : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((project) => (
          <div
            key={project.title}
            className="group relative rounded-2xl p-6 md:p-8 bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between"
          >
            {/* Top Indicator bar */}
            <div
              className="absolute top-0 left-8 right-8 h-[2px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: project.color }}
            />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className="px-3 py-1 rounded-full text-[10px] font-orbitron font-bold tracking-widest uppercase border"
                  style={{
                    color: project.color,
                    borderColor: `${project.color}40`,
                    backgroundColor: `${project.color}15`,
                  }}
                >
                  {project.category}
                </span>

                {project.featured && (
                  <span className="flex items-center gap-1 text-[10px] font-orbitron font-bold tracking-widest text-[#FF6B35] bg-[#FF6B35]/10 border border-[#FF6B35]/30 px-2.5 py-0.5 rounded-full">
                    <Sparkles size={10} /> FEATURED
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold text-white font-inter group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p
                className="text-xs font-semibold tracking-wider uppercase mb-3 mt-1"
                style={{ color: project.color }}
              >
                {project.kind}
              </p>

              <p className="text-sm text-white/60 leading-relaxed font-inter mb-6">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-[11px] font-inter font-medium bg-white/5 border border-white/10 text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-orbitron font-bold text-white/80 hover:text-[#FF6B35] transition-colors"
                    >
                      View Case Study <ArrowRight size={14} />
                    </a>
                  )}
                </div>

                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-[#FF6B35] group-hover:border-[#FF6B35]/50 transition-colors">
                  <ExternalLink size={14} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
