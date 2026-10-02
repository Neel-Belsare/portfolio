'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Twitter, ArrowUpRight } from 'lucide-react';
import { getAssetPath } from '@/lib/asset';

export default function AboutSection() {
  const fullText = "Undergraduate in Artificial Intelligence & Data Science with a minor in Business Analytics at MGM's Jawaharlal Nehru Engineering College (2024–2028). Passionate about moving beyond predictive models to prescriptive analytics and operations research—identifying specific actions businesses must take to maximize ROI, streamline logistics, and eliminate operational bottlenecks. Builder of end-to-end data pipelines, spatial optimization engines, and executive BI telemetry.";
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 15);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section id="about" className="min-h-screen grid grid-cols-1 md:grid-cols-[340px_1fr] lg:grid-cols-[400px_1fr] bg-[#f5f5f0] text-gray-900 select-none">
      {/* Left Column: Portrait & Quick Links */}
      <div className="flex flex-col justify-end p-8 md:sticky md:top-0 md:h-screen md:pb-12 md:pl-12">
        <div className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-[320px] h-[430px] border border-black/10 bg-white">
          <img
            src={getAssetPath('/images/portrait-headshot.png')}
            alt="Neel Belsare"
            className="w-full h-full object-cover object-top filter contrast-[1.03]"
          />
        </div>

        <p className="mt-4 pl-2 text-4xl text-[#FF6B35] font-dancing font-bold">
          Neel
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mt-3 pl-2">
          <a
            href="https://github.com/Neel-Belsare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-black/40 hover:text-[#FF6B35] transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/neel-belsare-16921a440/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-black/40 hover:text-[#FF6B35] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:neelbelsaredpvn@gmail.com"
            className="text-xl text-black/40 hover:text-[#FF6B35] transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Right Column: Bio & Achievements */}
      <div className="px-6 py-12 md:px-16 md:py-24 flex flex-col justify-center">
        {/* Category Pill */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold bg-[#FF6B35]">
            NB
          </div>
          <span className="text-xs tracking-[0.25em] text-black/50 font-semibold font-orbitron">
            WHO I AM
          </span>
        </div>

        <h2 className="text-xs font-bold tracking-[0.2em] text-black/40 uppercase mb-4 font-orbitron">
          ABOUT NEEL BELSARE
        </h2>

        {/* Interactive Bio Paragraph */}
        <div className="relative w-full max-w-2xl min-h-[140px]">
          <p className="text-xl md:text-2xl font-normal leading-relaxed text-gray-900 font-inter">
            {displayedText}
            <span className="inline-block w-[3px] h-[1.1em] translate-y-[0.18em] bg-[#FF6B35] ml-1 animate-pulse" />
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap items-center gap-y-6 mt-14 pt-8 border-t border-black/10">
          <div className="flex items-center">
            <div className="px-8 first:pl-0 text-center md:text-left">
              <p className="text-5xl font-extrabold text-[#FF6B35] font-orbitron">
                12
              </p>
              <p className="text-xs text-black/50 tracking-wider mt-1 uppercase font-inter font-medium">
                Dark Store Hubs
              </p>
            </div>
            <div className="w-px h-12 bg-black/15" />
          </div>

          <div className="flex items-center">
            <div className="px-8 text-center md:text-left">
              <p className="text-5xl font-extrabold text-[#FF6B35] font-orbitron">
                &lt;12m
              </p>
              <p className="text-xs text-black/50 tracking-wider mt-1 uppercase font-inter font-medium">
                Delivery SLA
              </p>
            </div>
            <div className="w-px h-12 bg-black/15" />
          </div>

          <div className="flex items-center">
            <div className="px-8 text-center md:text-left">
              <p className="text-5xl font-extrabold text-[#FF6B35] font-orbitron">
                v4.0
              </p>
              <p className="text-xs text-black/50 tracking-wider mt-1 uppercase font-inter font-medium">
                Production Release
              </p>
            </div>
          </div>
        </div>

        {/* Currently Status */}
        <div className="mt-12 pt-8 border-t border-black/10 max-w-xl">
          <p className="text-xs font-bold tracking-[0.2em] mb-2 text-[#FF6B35] font-orbitron">
            CURRENT STATUS
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <p className="text-sm text-black/70 font-medium">
              Open to Data Product Management, BI Engineering &amp; AI Analytics roles · Building high-impact systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
