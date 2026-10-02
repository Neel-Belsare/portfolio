'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import VideoIntro from '@/components/VideoIntro';
import NameReveal from '@/components/NameReveal';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import BlogSection from '@/components/BlogSection';
import TechStack from '@/components/TechStack';
import ExperienceSection from '@/components/ExperienceSection';
import SocialStats from '@/components/SocialStats';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import AvatarWidget from '@/components/AvatarWidget';
import AvatarHeroSection from '@/components/AvatarHeroSection';

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#0a0a0c] text-white selection:bg-[#FF6B35] selection:text-black">
      {/* Navigation Header */}
      <Header onOpenContact={() => setIsContactOpen(true)} />

      {/* Hero Welcome Video Animation */}
      <VideoIntro />

      {/* Signature Name Reveal Section with Cutout */}
      <NameReveal />

      {/* 3D Avatar Antigravity Section with 'Hi' Video Greeting */}
      <AvatarHeroSection onOpenContact={() => setIsContactOpen(true)} />

      {/* About Section with Typewriter Bio & Metric Counters */}
      <AboutSection />

      {/* Flagship Quick-Commerce Dark Store System Showcase */}
      <ProjectsSection />

      {/* Technical Engineering Blog Section */}
      <BlogSection />

      {/* Interactive Tech Stack Matrix */}
      <TechStack />

      {/* Experience History Timeline */}
      <ExperienceSection />

      {/* GitHub & Engineering Stats */}
      <SocialStats />

      {/* Footer */}
      <Footer />

      {/* Let's Talk Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* 3D Interactive Avatar Assistant Widget */}
      <AvatarWidget onOpenContact={() => setIsContactOpen(true)} />
    </main>
  );
}
