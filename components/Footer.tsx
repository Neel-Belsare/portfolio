'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#070709] border-t border-white/5 py-12 px-6 md:px-16 text-white/40 font-inter text-xs select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-orbitron font-black text-white text-base tracking-widest">
            NEEL<span className="text-[#FF6B35]">.</span>
          </span>
          <span className="text-white/20">|</span>
          <p>© {new Date().getFullYear()} Neel Belsare. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Neel-Belsare"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF6B35] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/neel-belsare-16921a440/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF6B35] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:neelbelsaredpvn@gmail.com"
            className="hover:text-[#FF6B35] transition-colors"
          >
            Email
          </a>

          <button
            onClick={scrollToTop}
            className="ml-4 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#FF6B35] transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
