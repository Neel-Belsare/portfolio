'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenContact?: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check section in view
      const sections = ['hero', 'name-reveal', 'about', 'resume', 'projects', 'blog', 'techstack', 'experience', 'social-stats'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Resume', id: 'resume' },
    { label: 'Platform', id: 'projects' },
    { label: 'Blog', id: 'blog' },
    { label: 'Tech', id: 'techstack' },
    { label: 'Experience', id: 'experience' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? 'bg-[#0a0a0c]/90 backdrop-blur-md border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 h-16 max-w-7xl mx-auto">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-white text-lg font-black tracking-[0.18em] font-orbitron transition-opacity hover:opacity-80 flex items-center"
          aria-label="Back to top"
        >
          NEEL<span className="text-[#FF6B35]">.</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative text-xs tracking-[0.18em] uppercase transition-colors duration-200 py-1 ${
                activeSection === item.id ? 'text-[#FF6B35]' : 'text-white/70 hover:text-white'
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#FF6B35] transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          ))}

          <button
            onClick={onOpenContact}
            className="ml-3 rounded-full border border-[#FF6B35]/60 bg-[#FF6B35]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#FF6B35] transition-all duration-200 hover:bg-[#FF6B35] hover:text-black hover:shadow-[0_0_20px_rgba(255,107,53,0.5)]"
          >
            Let&apos;s Talk
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center p-2 text-white/80 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden bg-[#0a0a0c]/98 border-b border-white/10 transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96 opacity-100 py-4 px-6' : 'max-h-0 opacity-0 py-0 px-6'
        }`}
      >
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`py-2.5 text-left text-sm tracking-[0.15em] uppercase border-b border-white/5 transition-colors ${
                activeSection === item.id ? 'text-[#FF6B35]' : 'text-white/70'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenContact) onOpenContact();
            }}
            className="mt-3 rounded-full border border-[#FF6B35]/60 bg-[#FF6B35]/15 px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#FF6B35] text-center"
          >
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </header>
  );
}
