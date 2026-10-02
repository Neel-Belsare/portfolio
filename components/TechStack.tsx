'use client';

import React, { useState } from 'react';

interface TechItem {
  name: string;
  iconClass?: string;
  customIcon?: string;
  category: 'languages' | 'frameworks' | 'ai' | 'cloud_db' | 'tools';
}

export default function TechStack() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const technologies: TechItem[] = [
    // Languages
    { name: 'Python', iconClass: 'devicon-python-plain colored', category: 'languages' },
    { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored', category: 'languages' },
    { name: 'SQL', iconClass: 'devicon-postgresql-plain colored', category: 'languages' },
    { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored', category: 'languages' },
    { name: 'C++', iconClass: 'devicon-cplusplus-plain colored', category: 'languages' },
    { name: 'C', iconClass: 'devicon-c-plain colored', category: 'languages' },
    { name: 'Bash', iconClass: 'devicon-bash-plain colored', category: 'languages' },
    { name: 'HTML5', iconClass: 'devicon-html5-plain colored', category: 'languages' },
    { name: 'CSS3', iconClass: 'devicon-css3-plain colored', category: 'languages' },

    // Frameworks & Libraries
    { name: 'React', iconClass: 'devicon-react-original colored', category: 'frameworks' },
    { name: 'Next.js', iconClass: 'devicon-nextjs-plain text-white', category: 'frameworks' },
    { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored', category: 'frameworks' },
    { name: 'FastAPI', iconClass: 'devicon-fastapi-plain colored', category: 'frameworks' },
    { name: 'Streamlit', customIcon: '📊', category: 'frameworks' },
    { name: 'Tailwind', iconClass: 'devicon-tailwindcss-plain colored', category: 'frameworks' },
    { name: 'Redux', iconClass: 'devicon-redux-original colored', category: 'frameworks' },
    { name: 'Express', iconClass: 'devicon-express-original text-white', category: 'frameworks' },

    // AI & Machine Learning
    { name: 'NumPy', iconClass: 'devicon-numpy-original colored', category: 'ai' },
    { name: 'Pandas', iconClass: 'devicon-pandas-original colored', category: 'ai' },
    { name: 'Scikit-learn', iconClass: 'devicon-scikitlearn-plain colored', category: 'ai' },
    { name: 'LangChain', customIcon: '🦜', category: 'ai' },
    { name: 'Groq LLaMA', customIcon: '⚡', category: 'ai' },
    { name: 'Qdrant RAG', customIcon: '🎯', category: 'ai' },
    { name: 'PyTorch', iconClass: 'devicon-pytorch-original colored', category: 'ai' },
    { name: 'TensorFlow', iconClass: 'devicon-tensorflow-original colored', category: 'ai' },
    { name: 'OpenCV', iconClass: 'devicon-opencv-plain colored', category: 'ai' },

    // Databases & Cloud
    { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored', category: 'cloud_db' },
    { name: 'PostGIS', customIcon: '🗺️', category: 'cloud_db' },
    { name: 'Supabase', iconClass: 'devicon-supabase-plain colored', category: 'cloud_db' },
    { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored', category: 'cloud_db' },
    { name: 'Redis', iconClass: 'devicon-redis-plain colored', category: 'cloud_db' },
    { name: 'AWS', iconClass: 'devicon-amazonwebservices-plain-wordmark colored', category: 'cloud_db' },
    { name: 'Docker', iconClass: 'devicon-docker-plain colored', category: 'cloud_db' },
    { name: 'Vercel', iconClass: 'devicon-vercel-original text-white', category: 'cloud_db' },
    { name: 'Firebase', iconClass: 'devicon-firebase-plain colored', category: 'cloud_db' },

    // Creative & Dev Tools
    { name: 'Tableau / BI', customIcon: '📈', category: 'tools' },
    { name: 'PyDeck 3D', customIcon: '🛰️', category: 'tools' },
    { name: 'Three.js', iconClass: 'devicon-threejs-original text-white', category: 'tools' },
    { name: 'Git', iconClass: 'devicon-git-plain colored', category: 'tools' },
    { name: 'GitHub', iconClass: 'devicon-github-original text-white', category: 'tools' },
    { name: 'Linux', iconClass: 'devicon-linux-plain colored', category: 'tools' },
    { name: 'Postman', iconClass: 'devicon-postman-plain colored', category: 'tools' },
    { name: 'VS Code', iconClass: 'devicon-vscode-plain colored', category: 'tools' },
  ];

  const filtered = activeFilter === 'all' 
    ? technologies 
    : technologies.filter(t => t.category === activeFilter);

  const categories = [
    { label: 'All', id: 'all' },
    { label: 'Languages', id: 'languages' },
    { label: 'Frameworks', id: 'frameworks' },
    { label: 'AI & ML', id: 'ai' },
    { label: 'Cloud & DB', id: 'cloud_db' },
    { label: 'Tools', id: 'tools' },
  ];

  return (
    <section
      id="techstack"
      className="relative w-full min-h-screen overflow-hidden py-24 px-6 md:px-12 flex flex-col items-center justify-center select-none"
      style={{
        background: `
          linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px),
          radial-gradient(ellipse at center, #150924 0%, #0d0016 45%, #050009 100%)
        `,
        backgroundSize: '70px 70px, 70px 70px, 100% 100%',
      }}
    >
      {/* Ambient Purple Center Aura */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[140px] opacity-25"
        style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto mb-12">
        <p className="font-orbitron text-[11px] font-bold tracking-[0.3em] text-[#FF6B35] mb-3 uppercase">
          CAPABILITIES &amp; TOOLING
        </p>
        <h2 className="font-orbitron font-black text-4xl md:text-6xl text-white/90 tracking-[0.15em] uppercase">
          TECH STACK
        </h2>
        <p className="mt-4 text-sm text-white/40 max-w-lg mx-auto font-inter">
          Modern production technologies leveraged across full-stack engineering, distributed systems, and agentic AI.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-inter font-medium tracking-wider transition-all duration-200 cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-[#FF6B35] text-white shadow-[0_0_15px_rgba(255,107,53,0.5)] font-semibold'
                  : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Badges */}
      <div className="relative z-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 max-w-6xl mx-auto">
        {filtered.map((tech) => (
          <div
            key={tech.name}
            className="group flex flex-col items-center justify-center gap-2 p-3.5 rounded-xl cursor-pointer bg-white/[0.03] border border-white/[0.08] transition-all duration-300 ease-out hover:bg-[rgba(139,92,246,0.15)] hover:border-[rgba(139,92,246,0.4)] hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_32px_rgba(139,92,246,0.25)]"
          >
            {tech.iconClass ? (
              <i
                className={`${tech.iconClass} text-2xl md:text-3xl filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300`}
              />
            ) : (
              <span className="text-2xl md:text-3xl filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                {tech.customIcon}
              </span>
            )}
            <span className="text-[11px] font-inter text-white/50 group-hover:text-white/90 text-center truncate max-w-[75px] transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
