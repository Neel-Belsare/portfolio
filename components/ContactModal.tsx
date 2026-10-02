'use client';

import React, { useState } from 'react';
import { X, Mail, Send, Check, Copy } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const email = 'neelbelsaredpvn@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#121216] border border-white/10 p-6 md:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <p className="text-xs font-orbitron font-bold tracking-[0.2em] text-[#FF6B35] mb-2 uppercase">
          INITIATE CONTACT
        </p>
        <h3 className="text-2xl font-bold font-inter text-white mb-2">
          Let&apos;s Build Something Iconic
        </h3>
        <p className="text-sm text-white/50 mb-6 font-inter">
          Available for Data Product roles, Business Intelligence engineering, or innovative analytics opportunities.
        </p>

        {/* Quick Email Pill */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/10 mb-6">
          <div className="flex items-center gap-2.5 text-xs text-white/80 font-mono truncate">
            <Mail size={16} className="text-[#FF6B35] flex-shrink-0" />
            <span className="truncate">{email}</span>
          </div>
          <button
            onClick={copyEmail}
            className="flex items-center gap-1 text-[11px] font-orbitron font-semibold text-[#FF6B35] hover:text-[#FF8454] transition-colors ml-2 flex-shrink-0"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span>{copied ? 'COPIED' : 'COPY'}</span>
          </button>
        </div>

        {sent ? (
          <div className="py-8 text-center bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
            <Check size={36} className="text-emerald-400 mx-auto mb-2" />
            <p className="text-sm font-bold text-white">Message Dispatched!</p>
            <p className="text-xs text-white/60 mt-1">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-orbitron tracking-wider text-white/60 uppercase mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF6B35] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-orbitron tracking-wider text-white/60 uppercase mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF6B35] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-orbitron tracking-wider text-white/60 uppercase mb-1.5">
                Message
              </label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF6B35] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#FF6B35] text-black font-orbitron font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[#FF8454] transition-colors shadow-lg cursor-pointer"
            >
              Send Message <Send size={14} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
