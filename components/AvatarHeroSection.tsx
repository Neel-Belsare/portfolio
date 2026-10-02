'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, RotateCcw, Play, Pause } from 'lucide-react';
import { getAssetPath } from '@/lib/asset';

interface AvatarHeroSectionProps {
  onOpenContact?: () => void;
}

export default function AvatarHeroSection({ onOpenContact }: AvatarHeroSectionProps) {
  // Starts as true so it waves his hand to say hi every time the page loads or refreshes
  const [isPlayingVideo, setIsPlayingVideo] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 10-second silent video of Neel's 3D avatar raising hand and waving hello
  const videoSrc = getAssetPath('/video/gemini_greeting.mp4');
  const staticImageSrc = getAssetPath('/images/gemini_avatar_static.jpg');

  // Trigger greeting on page refresh / load
  useEffect(() => {
    setIsPlayingVideo(true);
    setIsPaused(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const handleSayHi = () => {
    setIsPlayingVideo(true);
    setIsPaused(false);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    }, 50);
  };

  const handleVideoEnded = () => {
    setIsPlayingVideo(false);
    setIsPaused(false);
  };

  const handleVideoError = () => {
    console.warn('Video playback error, returning to static avatar');
    setIsPlayingVideo(false);
  };

  const togglePause = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  return (
    <section
      id="avatar-hero"
      className="relative w-full py-24 px-6 bg-[#0a0a0c] overflow-hidden flex flex-col items-center justify-center select-none"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[500px] h-[500px] rounded-full bg-[#FF6B35]/10 blur-[130px]" />
        <div className="w-[360px] h-[360px] rounded-full bg-violet-600/10 blur-[100px]" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-2xl mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-orbitron text-[#FF6B35] tracking-wider uppercase mb-4 shadow-sm">
          <Sparkles size={13} className="text-[#FF6B35] animate-pulse" />
          <span>Interactive 3D Digital Twin</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold tracking-tight text-white mb-3">
          Meet My <span className="text-[#FF6B35]">3D Assistant</span>
        </h2>
        <p className="text-sm sm:text-base text-white/60 font-inter max-w-lg mx-auto">
          Equipped with continuous CSS antigravity levitation. Waves his hand to say hi automatically on page load or tap the &ldquo;Hi&rdquo; button anytime!
        </p>
      </div>

      {/* Floating 3D Avatar Container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* The Avatar Display Frame (9:16 aspect ratio matching the 720x1280 video) */}
        <div className="relative w-64 sm:w-72 md:w-80 h-[450px] sm:h-[510px] md:h-[560px] flex items-center justify-center">
          {/* Holographic Glowing Base Ring Under Avatar */}
          <div
            className="absolute bottom-2 left-1/2 -translate-x-1/2 w-52 h-14 rounded-[100%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255,107,53,0.55) 0%, rgba(255,107,53,0.15) 50%, transparent 75%)',
              boxShadow: '0 0 35px rgba(255,107,53,0.4)',
              transform: 'rotateX(75deg)',
            }}
          />

          {!isPlayingVideo ? (
            /* 1. Static 3D Avatar Image with Continuous CSS Antigravity Float */
            <div
              onClick={handleSayHi}
              className="relative w-full h-full rounded-2xl overflow-hidden flex items-end justify-center antigravity-float cursor-pointer group border border-white/5 hover:border-[#FF6B35]/40 transition-colors shadow-2xl"
              title="Click to say Hi!"
            >
              <img
                src={staticImageSrc}
                alt="Neel Belsare 3D Floating Avatar"
                className="w-full h-full object-cover object-top select-none filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] group-hover:scale-[1.02] transition-transform duration-300"
                draggable={false}
              />

              {/* Click prompt overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                <span className="px-3 py-1 rounded-full bg-[#FF6B35] text-white text-xs font-orbitron font-semibold shadow-lg">
                  Tap to Say Hi 👋
                </span>
              </div>
            </div>
          ) : (
            /* 2. Dynamically Replaced Autoplaying Silent Greeting Video */
            <div className="relative w-full h-full rounded-2xl overflow-hidden flex items-center justify-center bg-black border border-[#FF6B35]/40 shadow-[0_0_40px_rgba(255,107,53,0.3)] animate-fade-in">
              <video
                ref={videoRef}
                src={videoSrc}
                autoPlay
                muted
                playsInline
                controls={false}
                onEnded={handleVideoEnded}
                onError={handleVideoError}
                className="w-full h-full object-cover object-top rounded-2xl select-none"
              />

              {/* Video Controls Overlay */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5 z-20">
                <button
                  onClick={togglePause}
                  className="p-2 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/10 backdrop-blur-md transition-colors cursor-pointer"
                  title={isPaused ? 'Resume' : 'Pause'}
                  aria-label="Toggle pause"
                >
                  {isPaused ? <Play size={14} /> : <Pause size={14} />}
                </button>
              </div>

              {/* Status Pill */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#FF6B35]/50 text-[11px] font-orbitron text-[#FF6B35] flex items-center gap-2 whitespace-nowrap shadow-lg z-20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>👋 Waving Hello...</span>
              </div>
            </div>
          )}
        </div>

        {/* Action Controls Beneath Avatar */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {/* Styled "Hi" Button */}
          <button
            onClick={handleSayHi}
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] hover:from-[#ff7a45] hover:to-[#ffa05c] text-white font-orbitron font-bold text-sm tracking-wider shadow-[0_0_25px_rgba(255,107,53,0.45)] hover:shadow-[0_0_35px_rgba(255,107,53,0.7)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span className="text-base group-hover:scale-125 transition-transform duration-200">👋</span>
            <span>Hi</span>
            <Sparkles size={14} className="opacity-80 group-hover:opacity-100 group-hover:rotate-12 transition-all" />
          </button>

          {/* Revert / Replay Action if currently playing */}
          {isPlayingVideo && (
            <button
              onClick={() => setIsPlayingVideo(false)}
              className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white/80 hover:text-white font-inter text-xs border border-white/10 transition-colors cursor-pointer"
            >
              <RotateCcw size={13} />
              <span>Back to Avatar</span>
            </button>
          )}

          {/* Quick Contact Action */}
          {onOpenContact && (
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#121216] hover:bg-[#1a1a20] text-white/90 hover:text-white font-inter text-xs border border-white/10 hover:border-[#FF6B35]/40 transition-colors cursor-pointer"
            >
              <span>Connect with Neel</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
