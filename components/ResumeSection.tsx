'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Cpu, 
  Layers, 
  Zap, 
  TrendingUp, 
  ShieldCheck, 
  FileText 
} from 'lucide-react';

export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState<'case-study' | 'resume-bullets' | 'before-after'>('case-study');

  return (
    <section
      id="resume"
      className="relative w-full py-24 px-6 md:px-16 bg-[#0a0a0c] select-none text-white border-t border-white/5"
      style={{
        backgroundImage: 'radial-gradient(rgba(255,107,53,0.03) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10 mb-4">
            <Sparkles size={12} className="text-[#FF6B35]" />
            <span className="font-orbitron text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#FF6B35] uppercase">
              RECRUITER SHOWCASE · INTERNSHIP CANDIDATE
            </span>
          </div>

          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white tracking-tight uppercase">
            FLAGSHIP PROJECT &amp; TECHNICAL RESUME
          </h2>
          <p className="mt-4 text-sm text-white/50 max-w-2xl mx-auto font-inter">
            Production-grade systems engineering featuring autonomous dispatch logistics, real-time spatial telemetry, and measurable business impact.
          </p>

          {/* Sub Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('case-study')}
              className={`px-5 py-2 rounded-full text-xs font-inter font-medium tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'case-study'
                  ? 'bg-[#FF6B35] text-white shadow-[0_0_20px_rgba(255,107,53,0.4)] font-semibold'
                  : 'bg-white/5 border border-white/10 text-white/60 hover:text-white'
              }`}
            >
              System Architecture &amp; Audit
            </button>
            <button
              onClick={() => setActiveTab('before-after')}
              className={`px-5 py-2 rounded-full text-xs font-inter font-medium tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'before-after'
                  ? 'bg-[#FF6B35] text-white shadow-[0_0_20px_rgba(255,107,53,0.4)] font-semibold'
                  : 'bg-white/5 border border-white/10 text-white/60 hover:text-white'
              }`}
            >
              Before &amp; After Business Impact
            </button>
            <button
              onClick={() => setActiveTab('resume-bullets')}
              className={`px-5 py-2 rounded-full text-xs font-inter font-medium tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'resume-bullets'
                  ? 'bg-[#FF6B35] text-white shadow-[0_0_20px_rgba(255,107,53,0.4)] font-semibold'
                  : 'bg-white/5 border border-white/10 text-white/60 hover:text-white'
              }`}
            >
              Recruiter-Optimized Resume Bullets
            </button>
          </div>
        </div>

        {/* Tab 1: Architecture & Overview */}
        {activeTab === 'case-study' && (
          <div className="rounded-2xl p-6 md:p-10 bg-white/[0.02] border border-white/10 shadow-2xl space-y-8 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-[10px] font-orbitron font-bold tracking-widest text-[#FF6B35] uppercase bg-[#FF6B35]/10 border border-[#FF6B35]/30 px-3 py-1 rounded-full">
                  PRODUCTION V4.0.0 MONOREPO
                </span>
                <h3 className="text-2xl md:text-3xl font-bold font-inter text-white mt-2">
                  Quick-Commerce Dark Store Command Center &amp; Dispatch Ecosystem
                </h3>
                <p className="text-xs text-white/50 mt-1 font-inter">
                  Chhatrapati Sambhajinagar Hyperlocal Logistics Network · End-to-End 5-Tier Architecture
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://my-dark-store-app.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#FF6B35] text-black text-xs font-orbitron font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-[#FF8454] transition-colors shadow-lg"
                >
                  Live Ops Center <ExternalLink size={14} />
                </a>
                <a
                  href="https://github.com/NeelBelsare/my-dark-store-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-[#FF6B35]/40 transition-colors"
                  aria-label="GitHub Source"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>

            {/* Core Tech Stack Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <p className="text-[10px] font-orbitron text-[#FF6B35] uppercase tracking-wider">Backend &amp; Dispatch</p>
                <p className="text-xs font-bold text-white mt-1">FastAPI · Python 3.9+ · OSRM</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <p className="text-[10px] font-orbitron text-[#FF6B35] uppercase tracking-wider">Cloud &amp; Realtime</p>
                <p className="text-xs font-bold text-white mt-1">Supabase · PostgreSQL · PostGIS</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <p className="text-[10px] font-orbitron text-[#FF6B35] uppercase tracking-wider">Mobile Clients</p>
                <p className="text-xs font-bold text-white mt-1">React Native (Expo 51) · Flutter</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <p className="text-[10px] font-orbitron text-[#FF6B35] uppercase tracking-wider">3D Telemetry &amp; ML</p>
                <p className="text-xs font-bold text-white mt-1">Streamlit · PyDeck 3D · Deck.gl</p>
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Zap size={16} className="text-[#FF6B35]" />
                  <span>Sub-12 Minute SLA Routing</span>
                </div>
                <p className="text-xs text-white/60 leading-relaxed font-inter">
                  Haversine multi-hub allocation across 12 geographic dark stores with dynamic weather/traffic friction buffers and OSRM turn-by-turn road navigation.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Layers size={16} className="text-[#10B981]" />
                  <span>Serpentine Warehouse Picking</span>
                </div>
                <p className="text-xs text-white/60 leading-relaxed font-inter">
                  Algorithmic S-shape warehouse pick-path routing reducing picker traversal distance by 42% and keeping in-hub pack time strictly under 120 seconds.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <ShieldCheck size={16} className="text-[#3B82F6]" />
                  <span>Smart Inventory Auto-Rebalance</span>
                </div>
                <p className="text-xs text-white/60 leading-relaxed font-inter">
                  Real-time stock deduction with automated stockout tripwires (&lt;10 units) and autonomous inter-hub inventory transfer recommendations.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Before & After Business Impact Breakdown */}
        {activeTab === 'before-after' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-xl font-bold font-inter text-white">
                Operational Upgrade: Manual vs. Automated
              </h3>
              <p className="text-xs text-white/50 mt-1">
                Demonstrating how the automated quick-commerce platform solved legacy operational bottlenecks to unlock high-velocity delivery economics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Before Card */}
              <div className="rounded-2xl p-6 md:p-8 bg-rose-500/[0.03] border border-rose-500/20 relative">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-rose-500/10">
                  <div className="flex items-center gap-2">
                    <XCircle size={18} className="text-rose-400" />
                    <span className="font-orbitron font-bold text-xs tracking-wider text-rose-300 uppercase">
                      Before Solution (Manual &amp; Fragmented)
                    </span>
                  </div>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-400 font-mono">
                    Legacy Workflow
                  </span>
                </div>

                <ul className="space-y-4 text-xs text-white/70 font-inter">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white block mb-0.5">Slow Manual Dispatch Latency:</strong>
                      Manual store-to-rider phone coordination resulted in 40–50 minute average delivery turnaround times and frequent missed delivery windows.
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white block mb-0.5">Inefficient Random-Walk Warehouse Picking:</strong>
                      Store pickers navigated aisles manually with printed slips, causing 6–8 minute in-hub retrieval times and wrong item packing errors.
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white block mb-0.5">End-of-Day Stockout Surprises:</strong>
                      Fragmented spreadsheets led to silent inventory stockouts, cancellation rates over 14%, and zero inter-store rebalancing visibility.
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white block mb-0.5">Zero Real-Time Transit Telemetry:</strong>
                      Customers and warehouse managers had zero visibility into courier street positions, resulting in repetitive support calls.
                    </div>
                  </li>
                </ul>
              </div>

              {/* After Card */}
              <div className="rounded-2xl p-6 md:p-8 bg-emerald-500/[0.04] border border-emerald-500/25 relative shadow-[0_0_30px_rgba(16,185,129,0.08)]">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-emerald-500/15">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-emerald-400" />
                    <span className="font-orbitron font-bold text-xs tracking-wider text-emerald-300 uppercase">
                      After Solution (Antigravity Automated Ecosystem)
                    </span>
                  </div>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono font-semibold">
                    10-Minute SLA
                  </span>
                </div>

                <ul className="space-y-4 text-xs text-white/80 font-inter">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white block mb-0.5">&lt;3 Second Autonomous Dispatch:</strong>
                      Automated Haversine hub assignment and instant rider lock slashed dispatch latency to under 3 seconds with zero human touchpoints.
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white block mb-0.5">Sub-120s Serpentine Aisle Optimization:</strong>
                      Algorithmic S-shape warehouse pick routes reduced in-store traversal distances by 42% and guaranteed packing within 2 minutes.
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white block mb-0.5">100% Real-Time Inventory &amp; Auto-Rebalancing:</strong>
                      Instant PostgreSQL database triggers decremented stock upon checkout, with autonomous transfers between 12 stores preventing stockouts.
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white block mb-0.5">Live 3D PyDeck Telemetry &amp; GPS Steering:</strong>
                      Full turn-by-turn road tracking with sub-meter proximity steppers and real-time courier heading visualization.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Impact Metric Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/10 text-center">
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-[#FF6B35] font-orbitron">94%</p>
                <p className="text-[10px] text-white/50 uppercase mt-0.5">Dispatch Latency Drop</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-[#10B981] font-orbitron">42%</p>
                <p className="text-[10px] text-white/50 uppercase mt-0.5">Pick Distance Saved</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-[#3B82F6] font-orbitron">&lt;12 min</p>
                <p className="text-[10px] text-white/50 uppercase mt-0.5">End-to-End Fulfillment SLA</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-amber-400 font-orbitron">100%</p>
                <p className="text-[10px] text-white/50 uppercase mt-0.5">Real-time Stock Integrity</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Recruiter-Optimized Resume Bullet Points */}
        {activeTab === 'resume-bullets' && (
          <div className="rounded-2xl p-6 md:p-10 bg-white/[0.02] border border-white/10 space-y-6 animate-fade-in">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <h3 className="text-lg font-bold font-inter text-white">
                  Technical Resume Bullets (Google XYZ &amp; STAR Formatted)
                </h3>
                <p className="text-xs text-white/50 mt-0.5">
                  Optimized for Technical Internship Recruiters &amp; Engineering Managers for Winter/Spring applications.
                </p>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full text-[10px] font-orbitron font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 uppercase">
                ATS OPTIMIZED
              </span>
            </div>

            <div className="space-y-4 text-xs md:text-sm text-white/80 font-inter leading-relaxed">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <p className="text-xs font-semibold text-[#FF6B35] font-orbitron">DISTRIBUTED BACKEND &amp; DISPATCH ROUTING</p>
                <p>
                  • <strong>Architected an autonomous 5-tier quick-commerce dispatch engine</strong> using <strong>FastAPI, OSRM road networks, and Supabase PostgreSQL</strong>, executing nearest-hub matching across 12 dark stores to lower order dispatch latency from 45 minutes to under 3 seconds.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <p className="text-xs font-semibold text-[#10B981] font-orbitron">ALGORITHMIC WAREHOUSE OPTIMIZATION</p>
                <p>
                  • <strong>Engineered a Serpentine (S-Shape) aisle pick-path heuristic</strong> for dark store inventory retrieval, reducing picker traversal distance by <strong>42%</strong> and ensuring order pick-and-pack fulfillment consistently completed in under 120 seconds.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <p className="text-xs font-semibold text-[#3B82F6] font-orbitron">REALTIME SPATIAL TELEMETRY &amp; 3D OPS</p>
                <p>
                  • <strong>Developed a real-time command center</strong> using <strong>Streamlit and PyDeck (Deck.gl) 3D vector arcs</strong>, streaming live courier coordinates via WebSockets with dynamic monsoon/traffic friction buffers across a 1.91M urban population.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <p className="text-xs font-semibold text-amber-400 font-orbitron">CROSS-PLATFORM MOBILE ENGINEERING</p>
                <p>
                  • <strong>Built dual cross-platform mobile applications in React Native (Expo 51) and Flutter</strong>, implementing GPS lock, sub-meter proximity tracking, and dedicated Rider Partner turn-by-turn navigation with zero-downtime offline caching.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-white/50">
                Target Roles: <strong>Software Engineering Intern, Full-Stack Intern, Backend Systems Intern</strong>
              </div>
              <a
                href="https://github.com/NeelBelsare/my-dark-store-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-orbitron font-bold text-[#FF6B35] hover:underline flex items-center gap-1"
              >
                Inspect Monorepo Source <ArrowRight size={14} />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
