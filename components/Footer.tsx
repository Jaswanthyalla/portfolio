'use client';

import { Github, Linkedin, Instagram, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 mt-12 border-t border-white/[0.05]">
      <div className="container-width px-6 flex flex-col items-center text-center gap-8">
        
        {/* Name */}
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#007BFF]"
            style={{ textShadow: '0 0 20px rgba(0, 123, 255, 0.4)' }}>
          Jaswanth Yalla
        </h2>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              className="text-white/90 hover:text-[#00BFFF] transition-colors font-medium text-sm md:text-base"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4">
          {[
            { icon: Github, href: 'https://github.com/Jaswanthyalla', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/jaswanth-yalla', label: 'LinkedIn' },
            { icon: Instagram, href: '#', label: 'Instagram' },
            { icon: MessageCircle, href: '#', label: 'WhatsApp' },
            { icon: Mail, href: 'mailto:Jaswanthyalla123@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-[#007BFF] transition-all duration-300 hover:scale-110"
              style={{ border: '2px solid #007BFF', boxShadow: '0 0 15px rgba(0, 123, 255, 0.15)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#007BFF';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#007BFF';
              }}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-white/80 text-sm md:text-base mt-2">
          © 2025-2026 Made with <span className="text-red-500 mx-1">❤️</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
