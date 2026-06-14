'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.05]">
      <div className="container-width px-6 md:px-12 lg:px-24 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs"
              style={{ background: 'linear-gradient(135deg, #00BFFF, #007BFF)' }}
            >
              JY
            </div>
            <div>
              <div className="font-semibold text-white text-sm">Jaswanth Yalla</div>
              <div className="text-white/30 text-xs">AI & Data Science Engineer</div>
            </div>
          </div>

          <div className="flex items-center gap-1 text-white/30 text-xs">
            <span>Built with</span>
            <Heart size={10} className="text-red-400 mx-0.5" />
            <span>using Next.js, Three.js & Framer Motion</span>
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/Jaswanthyalla', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/jaswanth-yalla', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:Jaswanthyalla123@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white transition-all hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © 2026 Jaswanth Yalla. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-white/25 hover:text-white/60 text-xs transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
