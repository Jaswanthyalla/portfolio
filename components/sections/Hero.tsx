'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import Image from 'next/image';

const roles = [
  'AI & ML Engineer',
  'Python Developer',
  'Computer Vision Engineer',
  'Data Scientist',
  'Backend Developer',
  'Full Stack Developer',
];

function TypingText({ texts }: { texts: string[] }) {
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState<'typing' | 'deleting' | 'wait'>('typing');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = texts[textIndex];

    if (phase === 'typing') {
      if (charIndex < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex(c => c + 1);
        }, 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase('deleting'), 2000);
        return () => clearTimeout(t);
      }
    }

    if (phase === 'deleting') {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex(c => c - 1);
        }, 35);
        return () => clearTimeout(t);
      } else {
        setTextIndex(i => (i + 1) % texts.length);
        setPhase('typing');
      }
    }
  }, [phase, charIndex, textIndex, texts]);

  return (
    <span>
      <span className="gradient-text-blue">{displayed}</span>
      <span className="inline-block w-0.5 h-8 bg-[#00BFFF] ml-1 animate-pulse" />
    </span>
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container-width section-padding relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{
                background: 'rgba(0, 191, 255, 0.08)',
                border: '1px solid rgba(0, 191, 255, 0.2)',
                color: '#00BFFF',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#00FFB3] animate-pulse" />
              Available for Internships
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight mb-4"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="gradient-text-mixed">Jaswanth</span>
              <br />
              <span className="text-white">Yalla</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl md:text-3xl font-semibold h-10 mb-6 flex items-center justify-center lg:justify-start"
            >
              <TypingText texts={roles} />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white/60 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8"
            >
              Third-year B.Tech student in AI & Data Science at SRKR Engineering College.
              Building intelligent systems with Python, ML, and Computer Vision. CGPA: 8.6.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-8 justify-center lg:justify-start mb-10"
            >
              {[
                { label: 'CGPA', value: '8.6' },
                { label: 'Projects', value: '3+' },
                { label: 'Certifications', value: '5+' },
                { label: 'Tech Stack', value: '10+' },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold gradient-text-blue">{value}</div>
                  <div className="text-xs text-white/40 font-medium tracking-wider uppercase mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="btn-primary"
              >
                <Terminal size={16} />
                View Projects
              </button>
              <a
                href="/jassupyResume.pdf"
                download
                className="btn-secondary"
              >
                <Download size={16} />
                Download Resume
              </a>
              <button
                onClick={() => scrollTo('contact')}
                className="btn-secondary"
              >
                <Mail size={16} />
                Contact Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
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
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Outer rotating ring */}
              <div
                className="absolute inset-0 rounded-full animate-spin-slow"
                style={{
                  background: 'conic-gradient(from 0deg, #00BFFF, #007BFF, #00FFB3, #00C853, #00BFFF)',
                  padding: '2px',
                }}
              >
                <div className="w-full h-full rounded-full bg-[#0A0A0A]" />
              </div>

              {/* Inner glow ring */}
              <div
                className="absolute inset-2 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,191,255,0.15), rgba(0,255,179,0.1))',
                  border: '1px solid rgba(0,191,255,0.2)',
                }}
              />

              {/* Avatar placeholder */}
              <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-[#00BFFF]/20 to-[#00FFB3]/20 flex items-center justify-center"
                style={{ border: '1px solid rgba(0,191,255,0.3)' }}>
                {/* Replace 'profile.jpg' with your actual image filename once you add it to the public folder */}
                <Image 
                  src="/profile.jpg" 
                  alt="Jaswanth Yalla" 
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating tech badges */}
              {[
                { label: 'Python', x: '-16%', y: '8%', delay: 1 },
                { label: 'ML', x: '90%', y: '15%', delay: 1.2 },
                { label: 'React', x: '-20%', y: '70%', delay: 1.4 },
                { label: 'FastAPI', x: '85%', y: '72%', delay: 1.6 },
              ].map(({ label, x, y, delay }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay, type: 'spring', stiffness: 200 }}
                  className="absolute px-3 py-1.5 rounded-lg text-xs font-semibold text-white"
                  style={{
                    left: x, top: y,
                    background: 'rgba(15,15,15,0.9)',
                    border: '1px solid rgba(0,191,255,0.3)',
                    boxShadow: '0 0 15px rgba(0,191,255,0.15)',
                  }}
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} className="text-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
