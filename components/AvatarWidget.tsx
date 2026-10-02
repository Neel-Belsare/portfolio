'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, MessageSquare, X, ChevronUp, ChevronDown, Send, ExternalLink, Bot } from 'lucide-react';
import { getAssetPath } from '@/lib/asset';

interface AvatarWidgetProps {
  onOpenContact?: () => void;
}

export default function AvatarWidget({ onOpenContact }: AvatarWidgetProps) {
  const [controlsVisible, setControlsVisible] = useState(false);
  const [isWaving, setIsWaving] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [speechText, setSpeechText] = useState<string | null>("Hi there! I'm Neel's 3D Assistant. Click me to explore! 👋");
  const [isSpeechOpen, setIsSpeechOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  // Mouse tracking state (target & smooth current)
  const targetRot = useRef({ x: 0, y: 0 });
  const currentRot = useRef({ x: 0, y: 0 });
  const [renderRot, setRenderRot] = useState({ x: 0, y: 0 });
  const [floatY, setFloatY] = useState(0);

  // Mouse move handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize from center of screen (-1 to +1)
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;

      // Restrict rotation angles so it stays facing mostly forward
      targetRot.current = {
        y: nx * 18,  // left / right rotation (-18deg to +18deg)
        x: -ny * 12, // tilt up / down (-12deg to +12deg)
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation Loop (lerp & gentle breathing bob)
  useEffect(() => {
    let animId: number;
    let startTime = performance.now();

    const loop = (now: number) => {
      const elapsed = (now - startTime) / 1000;

      // Lerp rotation smoothly (0.08 damping)
      currentRot.current.x += (targetRot.current.x - currentRot.current.x) * 0.08;
      currentRot.current.y += (targetRot.current.y - currentRot.current.y) * 0.08;

      setRenderRot({
        x: currentRot.current.x,
        y: currentRot.current.y,
      });

      // Gentle floating sine wave
      setFloatY(Math.sin(elapsed * 2.2) * 5);

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Trigger emote actions
  const triggerEmote = (type: 'wave' | 'jump' | 'talk' | 'darkstore') => {
    if (type === 'wave') {
      setIsWaving(true);
      setSpeechText("Hey there! Welcome to my portfolio! Glad you're here. 👋");
      setIsSpeechOpen(true);
      setTimeout(() => {
        setIsWaving(false);
      }, 3000);
    } else if (type === 'jump') {
      setIsJumping(true);
      setSpeechText("Ready to architect high-impact AI & data products! 🚀");
      setIsSpeechOpen(true);
      setTimeout(() => {
        setIsJumping(false);
      }, 1200);
    } else if (type === 'talk') {
      setSpeechText("I'm an AI & Data Science student @ MGM JNEC with a Minor in Business Analytics! 💡");
      setIsSpeechOpen(true);
    } else if (type === 'darkstore') {
      setSpeechText("Check out our flagship 10-Minute Dark Store Ecosystem below! 🏬");
      setIsSpeechOpen(true);
      const target = document.getElementById('projects');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Close speech auto after 8 seconds of inactivity unless hovered
  useEffect(() => {
    if (!speechText) return;
    const timer = setTimeout(() => {
      setIsSpeechOpen(false);
    }, 9000);
    return () => clearTimeout(timer);
  }, [speechText]);

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#121216]/95 border border-[#FF6B35]/40 text-white shadow-[0_0_20px_rgba(255,107,53,0.3)] hover:scale-105 transition-all text-xs font-orbitron cursor-pointer backdrop-blur-md"
        aria-label="Expand 3D Assistant"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-[#FF6B35] font-bold">Neel 3D</span>
        <ChevronUp size={14} className="text-white/60" />
      </button>
    );
  }

  return (
    <div
      id="avatar-widget-root"
      className="fixed bottom-4 right-4 z-50 flex items-end gap-3 select-none pointer-events-none"
    >
      {/* 1. Speech Bubble & Actions (To the left of avatar) */}
      <div className="flex flex-col items-end gap-2 pointer-events-auto">
        {/* Controls Panel (Toggled via avatar click) */}
        {controlsVisible && (
          <div className="bg-[#121216]/95 border border-white/10 backdrop-blur-md p-3.5 rounded-2xl shadow-2xl flex flex-col gap-2 mb-1 animate-fade-in w-44">
            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-1">
              <span className="text-[10px] font-orbitron font-bold text-[#FF6B35] tracking-wider uppercase">
                Emotes &amp; Actions
              </span>
              <button
                onClick={() => setControlsVisible(false)}
                className="text-white/40 hover:text-white transition-colors"
              >
                <X size={12} />
              </button>
            </div>

            <button
              onClick={() => triggerEmote('wave')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-[#FF6B35]/20 text-white text-xs font-inter font-medium transition-colors text-left border border-white/5 hover:border-[#FF6B35]/30"
            >
              <span>👋</span>
              <span>Wave &amp; Say Hi</span>
            </button>

            <button
              onClick={() => triggerEmote('jump')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-emerald-500/20 text-white text-xs font-inter font-medium transition-colors text-left border border-white/5 hover:border-emerald-500/30"
            >
              <span>✨</span>
              <span>Jump &amp; Cheer</span>
            </button>

            <button
              onClick={() => triggerEmote('darkstore')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-blue-500/20 text-white text-xs font-inter font-medium transition-colors text-left border border-white/5 hover:border-blue-500/30"
            >
              <span>🛒</span>
              <span>Dark Store Demo</span>
            </button>

            <button
              onClick={() => {
                if (onOpenContact) onOpenContact();
              }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#FF6B35]/15 hover:bg-[#FF6B35] text-[#FF6B35] hover:text-black text-xs font-orbitron font-bold transition-all text-left border border-[#FF6B35]/30"
            >
              <span>📬</span>
              <span>Initiate Contact</span>
            </button>
          </div>
        )}

        {/* Speech Bubble */}
        {isSpeechOpen && speechText && (
          <div className="relative max-w-xs bg-[#121216]/95 border border-[#FF6B35]/40 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.7)] text-white text-xs font-inter leading-relaxed animate-fade-in">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-1.5 text-[10px] font-orbitron font-bold text-[#FF6B35] mb-1 uppercase">
                <Bot size={12} />
                <span>Neel (Assistant)</span>
              </div>
              <button
                onClick={() => setIsSpeechOpen(false)}
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Close speech"
              >
                <X size={12} />
              </button>
            </div>
            <p className="text-white/90 text-xs">{speechText}</p>

            {/* Bubble Tail pointing toward avatar */}
            <div
              className="absolute -right-2 bottom-4 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-[#FF6B35]/40"
            />
          </div>
        )}
      </div>

      {/* 2. Avatar Container with 3D Mouse Parallax */}
      <div className="relative flex flex-col items-center pointer-events-auto">
        {/* Tooltip on Hover */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black/90 border border-white/10 text-white text-[10px] font-orbitron font-semibold py-0.5 px-2.5 rounded-full whitespace-nowrap shadow-md opacity-0 hover:opacity-100 transition-opacity">
          Click me! ✨
        </div>

        {/* Avatar Interactive Wrapper */}
        <div
          onClick={() => {
            setControlsVisible((prev) => !prev);
            setIsSpeechOpen((prev) => !prev);
            if (!controlsVisible) {
              setSpeechText("Select an emote or chat with my assistant! 👇");
            }
          }}
          className={`relative cursor-pointer group transition-transform duration-300 ${
            isJumping ? 'animate-bounce' : ''
          }`}
          style={{
            perspective: 800,
          }}
          title="Click to interact with Neel's avatar"
        >
          {/* Avatar Image with 3D Tilt */}
          <div
            className="w-32 sm:w-36 md:w-40 h-56 sm:h-64 flex items-end justify-center transition-transform duration-75 ease-out"
            style={{
              transform: `rotateY(${renderRot.y}deg) rotateX(${renderRot.x}deg) translateY(${floatY}px) ${
                isJumping ? 'scale(1.08)' : 'scale(1)'
              }`,
              transformStyle: 'preserve-3d',
              transformOrigin: 'bottom center',
            }}
          >
            {/* Holographic Glowing Base Ring Under Avatar */}
            <div
              className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-7 rounded-[100%] pointer-events-none transition-all duration-300 group-hover:scale-110"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(255,107,53,0.45) 0%, rgba(255,107,53,0.15) 50%, transparent 75%)',
                boxShadow: '0 0 25px rgba(255,107,53,0.3)',
                transform: 'rotateX(75deg)',
              }}
            />

            {/* When waving: dynamically replaces static image with greeting video */}
            {isWaving ? (
              <video
                src={getAssetPath('/video/gemini_greeting.mp4')}
                autoPlay
                muted
                playsInline
                controls={false}
                onEnded={() => setIsWaving(false)}
                onError={() => setIsWaving(false)}
                className="w-full h-full object-cover object-top select-none rounded-2xl"
              />
            ) : (
              /* Idle state: static 3D avatar image with floating effect */
              <img
                src={getAssetPath('/images/avatar_cutout.png')}
                alt="Neel Belsare 3D Avatar"
                className="w-full h-full object-contain object-bottom select-none filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.7)] group-hover:drop-shadow-[0_0_20px_rgba(255,107,53,0.4)] transition-all duration-200"
                draggable={false}
              />
            )}
          </div>

          {/* Interactive Badge Indicator */}
          <div className="absolute bottom-1 right-2 w-6 h-6 rounded-full bg-[#121216] border border-[#FF6B35]/60 flex items-center justify-center text-[#FF6B35] shadow-lg group-hover:scale-110 transition-transform">
            <Sparkles size={11} className="animate-pulse" />
          </div>
        </div>

        {/* Minimize Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsMinimized(true);
          }}
          className="mt-1 text-[9px] font-orbitron text-white/30 hover:text-[#FF6B35] transition-colors flex items-center gap-0.5 cursor-pointer"
          title="Minimize avatar widget"
        >
          <ChevronDown size={10} />
          <span>Hide</span>
        </button>
      </div>
    </div>
  );
}
