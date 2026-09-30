'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import VideoIntro from '@/components/VideoIntro';
import NameReveal from '@/components/NameReveal';
import AboutSection from '@/components/AboutSection';
import ResumeSection from '@/components/ResumeSection';
import ProjectsSection from '@/components/ProjectsSection';
import BlogSection from '@/components/BlogSection';
import TechStack from '@/components/TechStack';
import ExperienceSection from '@/components/ExperienceSection';
import SocialStats from '@/components/SocialStats';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

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

      {/* About Section with Typewriter Bio & Metric Counters */}
      <AboutSection />

      {/* Recruiter Showcase & Flagship Project Resume Section */}
      <ResumeSection />

      {/* Projects Showcase */}
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
    </main>
  );
}
