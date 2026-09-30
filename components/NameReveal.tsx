'use client';

import React from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/asset';

export default function NameReveal() {
  return (
    <section
      id="name-reveal"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-[linear-gradient(135deg,#FF9D4D_0%,#FF7A1A_52%,#F15A00_100%)] text-black select-none"
    >
      {/* Background radial highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 z-0 hidden md:block"
        style={{
          width: '55%',
          height: '95%',
          background: 'radial-gradient(circle at 72% 50%, rgba(255,244,230,0.65) 0%, rgba(255,180,110,0.3) 35%, transparent 70%)',
          filter: 'blur(35px)',
        }}
      />

      {/* Floating Portrait Cutout on the Right */}
      <div className="pointer-events-none absolute right-4 md:right-16 bottom-0 z-10 hidden md:flex items-end justify-center h-[90%] w-auto max-w-[50%]">
        <img
          src={getAssetPath('/images/portrait-cutout.png')}
          alt="Neel Belsare"
          className="h-full w-auto object-contain object-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)] select-none filter contrast-[1.05]"
        />
      </div>

      {/* Signature Name & Bio on the Left */}
      <div className="relative z-20 flex flex-col justify-center px-8 md:px-20 py-20 w-full md:w-3/5">
        <div className="mb-4">
          <p className="text-base md:text-xl tracking-[0.25em] text-black/75 font-semibold font-orbitron uppercase">
            Hi, I&apos;m
          </p>
          <p className="text-sm md:text-base tracking-[0.2em] text-black/65 font-medium mt-1">
            Software Developer &amp; AI Systems Engineer
          </p>
        </div>

        <div className="relative">
          <h2 className="block font-bold leading-[0.95] text-black/85 text-[clamp(4.5rem,13vw,12rem)] font-dancing drop-shadow-sm">
            Neel
          </h2>

          <div className="my-2 md:absolute md:top-1/2 md:left-[42%] md:-translate-y-1/2 text-xs tracking-widest text-black/75 leading-relaxed font-inter font-medium bg-black/5 md:bg-transparent backdrop-blur-xs px-3 py-1.5 rounded-lg md:p-0 inline-block">
            Based in India<br />
            Available worldwide
          </div>

          <h2 className="block font-bold leading-[0.95] text-black/85 -mt-2 md:-mt-6 text-[clamp(4.5rem,13vw,12rem)] font-dancing drop-shadow-sm">
            Belsare
          </h2>
        </div>

        {/* Short personal ethos */}
        <p className="mt-8 text-black/80 max-w-lg text-sm md:text-base leading-relaxed font-inter font-normal">
          Crafting intuitive, high-velocity web platforms and AI-driven architectures. 
          Bridging the gap between robust engineering and cinematic user experiences.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-black text-white text-xs font-orbitron font-bold tracking-widest uppercase hover:bg-black/80 transition-colors shadow-lg"
          >
            Explore Projects
          </a>
          <a
            href="#about"
            className="px-6 py-3 rounded-full border border-black/25 text-black text-xs font-orbitron font-bold tracking-widest uppercase hover:bg-black/10 transition-colors"
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  );
}
