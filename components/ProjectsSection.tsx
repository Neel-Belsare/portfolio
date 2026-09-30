'use client';

import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Layers, ArrowRight, ShieldCheck, Zap, Activity, Smartphone, Server, Database } from 'lucide-react';

interface ProjectModule {
  title: string;
  category: 'Command Center' | 'Mobile App' | 'Backend Engine' | 'Cloud & Data';
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

  const modules: ProjectModule[] = [
    {
      title: 'Operations Command Center & 3D Spatial Telemetry',
      category: 'Command Center',
      kind: 'Executive 3D Spatial Dashboard',
      description: 'Mission-control portal with 3D PyDeck ArcLayers, moving courier spatial telemetry, dynamic multi-variable cross-filters, weather impact friction scales, and citywide macro KPIs across a 1.91M urban population.',
      tags: ['Streamlit 1.32', 'PyDeck 3D', 'Deck.gl', 'Plotly', 'Folium', 'Python'],
      featured: true,
      color: '#FF6B35',
      demoUrl: 'https://my-dark-store-app.streamlit.app/',
      githubUrl: 'https://github.com/NeelBelsare/my-dark-store-app',
    },
    {
      title: 'Blinkit Consumer Client & Rider Partner Navigation',
      category: 'Mobile App',
      kind: 'Dual Cross-Platform Mobile Suite',
      description: 'Consumer mobile client with instant catalog search, dynamic quantity steppers, free delivery thresholds, GPS pin lock, dedicated Rider Partner Mode, and OSRM turn-by-turn road navigation with live courier heading rotation.',
      tags: ['React Native', 'Expo 51', 'Flutter 3.0', 'OSRM Navigation', 'Supabase Realtime'],
      featured: true,
      color: '#10B981',
      demoUrl: 'https://blinkit-aurangabad.netlify.app',
      githubUrl: 'https://github.com/NeelBelsare/my-dark-store-app',
    },
    {
      title: 'Autonomous Dispatch & Warehouse Routing Engine',
      category: 'Backend Engine',
      kind: 'High-Throughput Edge Dispatch Bridge',
      description: 'FastAPI microservice executing Haversine nearest dark store allocation across 12 hubs in <3 seconds. Computes Serpentine (S-Shape) warehouse pick-path routing, multi-order batching, and dynamic monsoon/traffic SLA buffers.',
      tags: ['FastAPI', 'Python 3.9+', 'OSRM Routing', 'WebSockets', 'Docker'],
      featured: true,
      color: '#8B5CF6',
      demoUrl: 'https://my-dark-store-app.streamlit.app/',
      githubUrl: 'https://github.com/NeelBelsare/my-dark-store-app',
    },
    {
      title: 'Smart Inventory & Multi-Hub Rebalance Engine',
      category: 'Cloud & Data',
      kind: 'PostgreSQL Realtime Trigger System',
      description: 'Relational data tier with PostGIS spatial indexing and Row Level Security. Automates instant stock deduction on checkout, triggers stockout alerts when inventory dips below 10 units, and generates autonomous inter-hub transfer schedules.',
      tags: ['Supabase', 'PostgreSQL', 'PostGIS', 'Row Level Security', 'Realtime Triggers'],
      featured: true,
      color: '#3B82F6',
      demoUrl: 'https://my-dark-store-app.streamlit.app/',
      githubUrl: 'https://github.com/NeelBelsare/my-dark-store-app',
    },
  ];

  const categories = ['All', 'Command Center', 'Mobile App', 'Backend Engine', 'Cloud & Data'];

  const filtered = activeCategory === 'All'
    ? modules
    : modules.filter(m => m.category === activeCategory);

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
          CORE PROJECT ECOSYSTEM
        </p>
        <h2 className="font-orbitron font-black text-4xl md:text-6xl text-white tracking-[0.1em] uppercase">
          DARK STORE PLATFORM
        </h2>
        <p className="mt-4 text-sm text-white/50 max-w-2xl mx-auto font-inter">
          A production-grade, 5-tier Quick-Commerce Dark Store Management &amp; Real-Time Dispatch Ecosystem designed for sub-12 minute urban delivery fulfillment.
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
        {filtered.map((item) => (
          <div
            key={item.title}
            className="group relative rounded-2xl p-6 md:p-8 bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between"
          >
            {/* Top Indicator bar */}
            <div
              className="absolute top-0 left-8 right-8 h-[2px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: item.color }}
            />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className="px-3 py-1 rounded-full text-[10px] font-orbitron font-bold tracking-widest uppercase border"
                  style={{
                    color: item.color,
                    borderColor: `${item.color}40`,
                    backgroundColor: `${item.color}15`,
                  }}
                >
                  {item.category}
                </span>

                {item.featured && (
                  <span className="flex items-center gap-1 text-[10px] font-orbitron font-bold tracking-widest text-[#FF6B35] bg-[#FF6B35]/10 border border-[#FF6B35]/30 px-2.5 py-0.5 rounded-full">
                    <Sparkles size={10} /> PRODUCTION V4.0
                  </span>
                )}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white font-inter group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p
                className="text-xs font-semibold tracking-wider uppercase mb-3 mt-1"
                style={{ color: item.color }}
              >
                {item.kind}
              </p>

              <p className="text-sm text-white/60 leading-relaxed font-inter mb-6">
                {item.description}
              </p>
            </div>

            <div>
              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((t) => (
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
                <div className="flex items-center gap-4">
                  {item.demoUrl && (
                    <a
                      href={item.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-orbitron font-bold text-[#FF6B35] hover:underline"
                    >
                      Live Deployment <ExternalLink size={13} />
                    </a>
                  )}
                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-orbitron text-white/60 hover:text-white"
                    >
                      <Github size={13} /> Code
                    </a>
                  )}
                </div>

                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-[#FF6B35] group-hover:border-[#FF6B35]/50 transition-colors">
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
