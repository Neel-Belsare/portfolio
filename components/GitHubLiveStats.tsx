'use client';

import React, { useEffect, useState } from 'react';
import { ExternalLink, Flame, Star, GitFork, BookOpen } from 'lucide-react';
import { getAssetPath } from '@/lib/asset';

export default function GitHubLiveStats() {
  const [data, setData] = useState<{ user: any; repos: any } | null>(null);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const userRes = await fetch('https://api.github.com/users/Neel-Belsare');
        const reposRes = await fetch('https://api.github.com/users/Neel-Belsare/repos?sort=updated&per_page=3');
        
        if (!userRes.ok || !reposRes.ok) return;
        
        const user = await userRes.json();
        const repos = await reposRes.json();
        setData({ user, repos });
      } catch (error) {
        console.error('Failed to fetch GitHub data:', error);
      }
    }
    fetchGitHubData();
  }, []);
  
  if (!data) return null; // Fallback if API fails or while loading

  
  return (
    <div className="rounded-2xl p-6 md:p-10 bg-white/[0.02] border border-white/10 mt-6">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
        <h3 className="text-xl font-bold font-inter text-white flex items-center gap-2">
          <BookOpen size={20} className="text-[#FF6B35]" />
          Live GitHub Activity
        </h3>
        <a
          href={data.user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#FF6B35]/30 bg-[#FF6B35]/10 text-[#FF6B35] text-xs font-orbitron hover:bg-[#FF6B35]/20 transition-colors"
        >
          Follow <ExternalLink size={14} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* User Stats Card */}
        <div className="flex items-center gap-6 p-6 rounded-xl bg-white/[0.02] border border-white/5">
           <img
            src={data.user.avatar_url}
            alt="GitHub Avatar"
            className="w-20 h-20 rounded-full border border-white/20"
          />
          <div>
            <h4 className="text-lg font-bold text-white">{data.user.name || data.user.login}</h4>
            <p className="text-sm text-white/50 mb-3">{data.user.bio || 'Data Science & BI Engineer'}</p>
            <div className="flex gap-4">
               <div className="text-center">
                 <p className="text-xl font-orbitron font-bold text-[#FF6B35]">{data.user.public_repos}</p>
                 <p className="text-[10px] text-white/40 uppercase tracking-wider">Repos</p>
               </div>
               <div className="text-center">
                 <p className="text-xl font-orbitron font-bold text-[#FF6B35]">{data.user.followers}</p>
                 <p className="text-[10px] text-white/40 uppercase tracking-wider">Followers</p>
               </div>
            </div>
          </div>
        </div>

        {/* Latest Repos */}
        <div className="space-y-3">
          <h4 className="text-xs font-orbitron font-bold text-white/50 uppercase tracking-wider mb-2">Recently Updated Repositories</h4>
          {data.repos.map((repo: any) => (
            <a 
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer" 
              className="block p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-white font-inter text-sm">{repo.name}</span>
                <div className="flex items-center gap-3 text-xs text-white/40">
                  <span className="flex items-center gap-1"><Star size={12} className="text-amber-400" /> {repo.stargazers_count}</span>
                  <span className="flex items-center gap-1"><GitFork size={12} className="text-blue-400" /> {repo.forks_count}</span>
                </div>
              </div>
              <p className="text-xs text-white/50 truncate">{repo.description || 'No description provided.'}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
