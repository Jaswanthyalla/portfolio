'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Code2, GraduationCap, MapPin, Phone, Trophy } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech – Artificial Intelligence & Data Science',
    institution: 'SRKR Engineering College',
    score: 'CGPA: 8.6 (up to V semester)',
    year: '2023 – Present',
    icon: GraduationCap,
    color: '#00BFFF',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Narayana Junior College',
    score: '94%',
    year: '2021 – 2023',
    icon: GraduationCap,
    color: '#00FFB3',
  },
  {
    degree: 'SSC (10th Standard)',
    institution: "St. Ann's English Medium School",
    score: '98%',
    year: '2020 – 2021',
    icon: Trophy,
    color: '#007BFF',
  },
];

const highlights = [
  { icon: Brain, label: 'AI Specialist', desc: 'Deep focus on ML, CV, and predictive modeling' },
  { icon: Code2, label: 'Full Stack', desc: 'React frontend + FastAPI/Flask backend' },
  { icon: Trophy, label: 'Top Performer', desc: 'SIH 2025 selected from 300+ teams' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative section-padding">
      <div className="container-width" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mx-auto">About Me</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Crafting Intelligence,{' '}
            <span className="gradient-text-blue">One Line at a Time</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card-glass mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #00BFFF22, #007BFF22)', border: '1px solid rgba(0,191,255,0.2)' }}>
                  <Brain size={22} className="text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">Jaswanth Yalla</h3>
                  <div className="flex items-center gap-1.5 text-white/40 text-sm mt-0.5">
                    <MapPin size={12} />
                    <span>Srikakulam, Andhra Pradesh</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/40 text-sm mt-0.5">
                    <Phone size={12} />
                    <span>+91 9347637152</span>
                  </div>
                </div>
              </div>
              <p className="text-white/65 leading-relaxed text-sm">
                I'm a passionate third-year B.Tech student specializing in Artificial Intelligence and
                Data Science. My journey spans building real-time computer vision systems for traffic
                monitoring, developing satellite imagery analysis pipelines for coastal erosion detection,
                and creating machine learning models for environmental quality assessment.
              </p>
              <p className="text-white/65 leading-relaxed text-sm mt-3">
                I thrive at the intersection of research and engineering — turning complex datasets into
                actionable insights and deploying them as production-ready APIs. Selected for Smart India
                Hackathon 2025 in the Disaster Management domain.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 gap-3">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="card-glass flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(0,191,255,0.1)', border: '1px solid rgba(0,191,255,0.15)' }}>
                    <Icon size={18} className="text-[#00BFFF]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{label}</div>
                    <div className="text-white/45 text-xs mt-0.5">{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-white/80 mb-6 uppercase tracking-widest text-xs">
              Education
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-px"
                style={{ background: 'linear-gradient(to bottom, #00BFFF33, #00FFB333, transparent)' }} />

              {educationData.map(({ degree, institution, score, year, icon: Icon, color }, i) => (
                <motion.div
                  key={degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className="relative flex gap-6 pb-8 last:pb-0"
                >
                  {/* Node */}
                  <div
                    className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${color}18`,
                      border: `1px solid ${color}40`,
                      boxShadow: `0 0 15px ${color}20`,
                    }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>

                  {/* Content */}
                  <div className="card-glass flex-1 group">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h4 className="font-semibold text-white text-sm leading-tight">{degree}</h4>
                      <span className="text-xs text-white/35 font-mono whitespace-nowrap">{year}</span>
                    </div>
                    <p className="text-white/50 text-xs mb-2">{institution}</p>
                    <span
                      className="inline-block px-2.5 py-1 rounded-lg text-xs font-semibold"
                      style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
                    >
                      {score}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
