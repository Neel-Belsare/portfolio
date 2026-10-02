'use client';

import React from 'react';
import { Github, Linkedin, ExternalLink, Code2, Flame, GitPullRequest, GitCommit, CheckCircle2 } from 'lucide-react';
import { getAssetPath } from '@/lib/asset';

export default function SocialStats() {
  return (
    <section
      id="social-stats"
      className="relative w-full py-24 px-6 md:px-16 bg-[#0a0a0c] select-none"
      style={{
        backgroundImage: 'radial-gradient(rgba(255,107,53,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    >
      <div className="text-center max-w-4xl mx-auto mb-16">
        <p className="font-orbitron text-[10px] font-bold tracking-[0.3em] text-[#FF6B35] mb-3 uppercase">
          PRESENCE &amp; ACTIVITY
        </p>
        <h2 className="font-orbitron font-black text-4xl md:text-6xl text-white tracking-tight uppercase">
          BEYOND THE CODE
        </h2>
        <p className="mt-3 text-sm text-white/40 max-w-md mx-auto font-inter">
          Continuous learning, open-source building, and engineering discipline.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* GitHub Highlight Card */}
        <div className="rounded-2xl p-6 md:p-10 bg-white/[0.02] border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 items-center">
            {/* Left: User Profile & Metrics */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/15 bg-white/5 flex items-center justify-center">
                    <img
                      src={getAssetPath('/images/portrait-headshot.png')}
                      alt="Neel Belsare"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-inter">
                      Neel-Belsare
                    </h3>
                    <p className="text-xs text-white/40 font-inter">
                      github.com/Neel-Belsare
                    </p>
                  </div>
                </div>

                <a
                  href="https://github.com/Neel-Belsare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[#FF6B35]/40 bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center hover:scale-105 transition-transform"
                  aria-label="GitHub Profile"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* 4 Stat Boxes */}
              <div className="grid grid-cols-2 gap-3 max-w-md">
                <div className="p-4 rounded-xl bg-[#FF6B35]/[0.06] border border-[#FF6B35]/20 text-center">
                  <div className="text-2xl font-bold font-orbitron text-white">
                    720+
                  </div>
                  <div className="text-[10px] tracking-wider text-white/40 uppercase mt-1">
                    Contributions
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FF6B35]/[0.10] border border-[#FF6B35]/30 text-center">
                  <div className="text-2xl font-bold font-orbitron text-[#FF6B35] flex items-center justify-center gap-1">
                    <Flame size={20} className="fill-[#FF6B35]" /> 42
                  </div>
                  <div className="text-[10px] tracking-wider text-[#FF6B35] uppercase mt-1">
                    Day Streak
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FF6B35]/[0.06] border border-[#FF6B35]/20 text-center">
                  <div className="text-2xl font-bold font-orbitron text-white">
                    28
                  </div>
                  <div className="text-[10px] tracking-wider text-white/40 uppercase mt-1">
                    Pull Requests
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FF6B35]/[0.06] border border-[#FF6B35]/20 text-center">
                  <div className="text-2xl font-bold font-orbitron text-white">
                    310+
                  </div>
                  <div className="text-[10px] tracking-wider text-white/40 uppercase mt-1 flex items-center justify-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Active Commits
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Featured Repositories */}
            <div>
              <p className="text-[10px] font-orbitron font-bold tracking-widest text-[#FF6B35] mb-3 uppercase">
                PINNED REPOSITORIES
              </p>
              <div className="flex flex-col gap-2.5">
                <a
                  href="https://github.com/Neel-Belsare/dark-store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#FF6B35]/40 transition-colors block"
                >
                  <div className="flex items-center justify-between text-xs font-semibold text-white">
                    <span>dark-store</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">Python / FastAPI</span>
                  </div>
                  <p className="text-[11px] text-white/40 mt-1">
                    AI-Powered Dark Store Command Center &amp; Real-Time Dispatch Ecosystem (v4.0 Production).
                  </p>
                </a>

                <a
                  href="https://github.com/Neel-Belsare/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#FF6B35]/40 transition-colors block"
                >
                  <div className="flex items-center justify-between text-xs font-semibold text-white">
                    <span>portfolio</span>
                    <span className="text-[10px] text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full">Next.js / TypeScript</span>
                  </div>
                  <p className="text-[11px] text-white/40 mt-1">
                    Personal engineering portfolio showcasing full-stack systems, 3D telemetry, and data products.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* LeetCode & LinkedIn Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LeetCode Card */}
          <div className="rounded-2xl p-6 md:p-8 bg-white/[0.02] border border-white/10 hover:border-[#FF6B35]/25 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-[#FF6B35]/15 flex items-center justify-center text-[#FF6B35]">
                <Code2 size={18} />
              </div>
              <span className="text-xs font-orbitron font-bold tracking-widest text-white/80 uppercase">
                LEETCODE &amp; ALGORITHMS
              </span>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-white/5">
              <span className="text-xs tracking-widest text-white/40 uppercase font-orbitron">
                PROBLEMS SOLVED
              </span>
              <span className="text-2xl font-bold font-orbitron text-[#FF6B35]">
                250+
              </span>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-white/5">
              <span className="text-xs tracking-widest text-white/40 uppercase font-orbitron">
                CONTEST RATING
              </span>
              <span className="text-2xl font-bold font-orbitron text-[#FF6B35]">
                1620+
              </span>
            </div>

            <div className="flex gap-2 mt-5">
              <span className="px-3 py-1 rounded-full text-xs font-inter bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                Easy: 110+
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-inter bg-amber-500/10 border border-amber-500/30 text-amber-400">
                Medium: 115+
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-inter bg-rose-500/10 border border-rose-500/30 text-rose-400">
                Hard: 25+
              </span>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="rounded-2xl p-6 md:p-8 bg-white/[0.02] border border-white/10 hover:border-[#0077B5]/30 transition-all">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0077B5]/20 flex items-center justify-center text-[#0077B5]">
                  <Linkedin size={18} />
                </div>
                <span className="text-xs font-orbitron font-bold tracking-widest text-white/80 uppercase">
                  LINKEDIN NETWORK
                </span>
              </div>
              <span className="text-[10px] font-semibold bg-[#0077B5] text-white px-2.5 py-0.5 rounded-full uppercase">
                AVAILABLE
              </span>
            </div>

            <div className="space-y-3 py-2 text-xs text-white/70 font-inter">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>Open for Data Product, BI &amp; Analytics roles</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>Prescriptive analytics &amp; supply chain optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>Translating AI model metrics into business ROI</span>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/neel-belsare-16921a440/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-3 rounded-xl bg-[#0077B5] text-white text-xs font-orbitron font-bold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#0077B5]/90 transition-colors shadow-lg"
            >
              Connect On LinkedIn <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
