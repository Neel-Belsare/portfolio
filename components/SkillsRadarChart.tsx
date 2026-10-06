'use client';

import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Target } from 'lucide-react';

const data = [
  { subject: 'Machine Learning', A: 95, fullMark: 100 },
  { subject: 'Data Engineering', A: 85, fullMark: 100 },
  { subject: 'Business Intelligence', A: 90, fullMark: 100 },
  { subject: 'Backend (Python/FastAPI)', A: 88, fullMark: 100 },
  { subject: 'Frontend (React)', A: 75, fullMark: 100 },
  { subject: 'Cloud & MLOps', A: 80, fullMark: 100 },
];

export default function SkillsRadarChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="rounded-2xl p-6 md:p-10 bg-white/[0.02] border border-white/10 mt-6 flex flex-col items-center">
       <div className="w-full flex justify-between items-center mb-6 border-b border-white/5 pb-4">
         <h3 className="text-xl font-bold font-inter text-white flex items-center gap-2">
            <Target size={20} className="text-[#FF6B35]" />
            Core Competencies Matrix
         </h3>
       </div>
       
       <div className="w-full h-[350px] max-w-2xl">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
              <PolarGrid stroke="rgba(255,255,255,0.1)" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12, fontFamily: 'monospace' }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#121216', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                itemStyle={{ color: '#FF6B35' }}
              />
              <Radar
                name="Proficiency"
                dataKey="A"
                stroke="#FF6B35"
                fill="#FF6B35"
                fillOpacity={0.3}
              />
            </RadarChart>
          </ResponsiveContainer>
       </div>
    </div>
  );
}
