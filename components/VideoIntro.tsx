'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, ChevronDown, Sparkles } from 'lucide-react';

export default function VideoIntro() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  const toggleSound = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    setHasInteracted(true);
    if (!nextMuted && videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('name-reveal');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Attempt auto-play
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-[#0a0a0c] select-none flex items-center justify-center">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/video/hero.mp4"
        poster="/video/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.08] transition-opacity duration-1000"
      />

      {/* Cinematic Gradient Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-[#0a0a0c]/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(10,10,12,0.85)_100%)]" />

      {/* Futuristic Particle Glow Behind Text */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#FF6B35]/15 via-purple-600/10 to-transparent blur-[120px] rounded-full" />

      {/* Hero Typography Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto -mt-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
          <Sparkles size={12} className="text-[#FF6B35] animate-pulse" />
          <span className="font-orbitron text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#FF6B35]">
            PORTFOLIO 2026
          </span>
        </div>

        <h1 className="font-orbitron font-black tracking-tight text-white leading-[0.95] drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
          <span className="block text-[clamp(2.75rem,8vw,7.5rem)] text-white/95">
            NEEL
          </span>
          <span className="block text-[clamp(2.75rem,8vw,7.5rem)] text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FFA066]">
            BELSARE
          </span>
        </h1>

        <p className="mt-6 font-orbitron text-xs md:text-sm tracking-[0.22em] text-white/70 max-w-2xl uppercase">
          Full-Stack Engineer · AI Systems · Product Architect
        </p>

        {/* Quick stat pill */}
        <div className="mt-8 flex items-center gap-6 text-xs text-white/60 font-inter">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-white/80 font-medium">Available for select projects</span>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="hidden sm:inline">Based in India</span>
        </div>
      </div>

      {/* Video Interactive Controls (Bottom Right / Floating) */}
      <div className="absolute bottom-8 right-6 md:right-12 z-30 flex items-center gap-3">
        {/* Sound Status Pill */}
        <button
          onClick={toggleSound}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#0a0a0c]/80 backdrop-blur-md text-[11px] font-orbitron tracking-wider text-white/80 hover:text-white hover:border-[#FF6B35]/50 transition-all duration-200 cursor-pointer shadow-lg"
          aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
        >
          {isMuted ? (
            <>
              <VolumeX size={14} className="text-[#FF6B35]" />
              <span className="hidden sm:inline">Tap for sound</span>
            </>
          ) : (
            <>
              <Volume2 size={14} className="text-emerald-400 animate-pulse" />
              <span className="text-emerald-400 hidden sm:inline">Audio On</span>
            </>
          )}
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="w-9 h-9 rounded-full border border-white/10 bg-[#0a0a0c]/80 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-[#FF6B35] hover:border-[#FF6B35]/50 transition-all duration-200 shadow-lg cursor-pointer"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
        </button>
      </div>

      {/* Scroll Down Cue */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 group cursor-pointer"
        aria-label="Scroll to next section"
      >
        <span className="font-orbitron text-[10px] tracking-[0.25em] text-white/50 group-hover:text-[#FF6B35] transition-colors">
          SCROLL
        </span>
        <div className="w-[1px] h-9 bg-gradient-to-b from-[#FF6B35] to-transparent animate-bounce" />
      </button>
    </section>
  );
}
