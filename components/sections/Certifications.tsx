'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, BookOpen, Brain, Cloud, BarChart3, Cpu } from 'lucide-react';

const certifications = [
  {
    title: 'Generative AI, Deep Learning & Language Models',
    issuer: 'EduSkills Foundation',
    type: 'Internship Certificate',
    year: '2025',
    icon: Brain,
    color: '#00BFFF',
    description: 'Comprehensive training on GenAI, LLMs, transformer architectures, and deep learning applications.',
    tags: ['GenAI', 'LLMs', 'Transformers', 'Deep Learning'],
  },
  {
    title: 'AI-ML Virtual Internship',
    issuer: 'Google for Developers & EduSkills',
    type: 'Industry Certification',
    year: 'Oct–Dec 2025',
    icon: Cloud,
    color: '#00FFB3',
    description: 'Hands-on experience with Google Cloud AI/ML tools, real-world ML project development, and best practices.',
    tags: ['Google Cloud', 'AI/ML', 'Machine Learning'],
  },
  {
    title: 'Python Programming',
    issuer: 'Cisco Networking Academy',
    type: 'Professional Certificate',
    year: '2024',
    icon: Cpu,
    color: '#007BFF',
    description: 'Industry-recognized Python certification covering fundamentals, OOP, data structures, and application development.',
    tags: ['Python', 'OOP', 'Data Structures', 'Programming'],
  },
  {
    title: 'Internet of Things (IoT)',
    issuer: 'NPTEL — IIT Kharagpur',
    type: 'NPTEL Certificate',
    year: '2024',
    icon: BookOpen,
    color: '#00C853',
    description: 'Comprehensive IoT course from IIT Kharagpur covering sensor networks, protocols, edge computing, and smart systems.',
    tags: ['IoT', 'Sensors', 'Edge Computing', 'IIT Kharagpur'],
  },
  {
    title: 'Data Analytics',
    issuer: 'Deloitte',
    type: 'Corporate Certificate',
    year: '2024',
    icon: BarChart3,
    color: '#00BFFF',
    description: 'Data analytics certification from Deloitte covering visualization, business intelligence, and analytical methodologies.',
    tags: ['Data Analytics', 'Business Intelligence', 'Visualization'],
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" className="relative section-padding">
      <div className="container-width" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mx-auto">Credentials</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Certifications & <span className="gradient-text-emerald">Training</span>
          </h2>
          <p className="text-white/45 mt-4 max-w-lg mx-auto text-sm">
            Continuous learning from industry leaders — Google, Cisco, IIT Kharagpur, and Deloitte.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="card-glass group relative overflow-hidden"
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${cert.color}08 0%, transparent 60%)` }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none rounded-2xl"
                  style={{ border: `1px solid ${cert.color}40` }}
                />

                {/* Header */}
                <div className="flex items-start gap-3 mb-4 relative z-10">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${cert.color}18`,
                      border: `1px solid ${cert.color}30`,
                    }}
                  >
                    <Icon size={18} style={{ color: cert.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className="text-xs font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full"
                      style={{ background: `${cert.color}12`, color: cert.color }}
                    >
                      {cert.type}
                    </span>
                    <div className="text-xs text-white/30 mt-0.5 font-mono">{cert.year}</div>
                  </div>
                </div>

                <h3 className="font-bold text-white text-sm leading-tight mb-1 relative z-10">{cert.title}</h3>
                <p className="text-white/45 text-xs mb-3 relative z-10">{cert.issuer}</p>
                <p className="text-white/50 text-xs leading-relaxed mb-4 relative z-10">{cert.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 relative z-10">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-md text-white/45"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.07)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Award badge */}
                <div className="absolute top-4 right-4 opacity-[0.07] group-hover:opacity-[0.12] transition-opacity">
                  <Award size={32} style={{ color: cert.color }} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Accomplishments banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 card-glass"
          style={{ background: 'linear-gradient(135deg, rgba(0,191,255,0.06), rgba(0,255,179,0.04))' }}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(0,191,255,0.1)', border: '1px solid rgba(0,191,255,0.2)' }}>
              <Award size={22} className="text-[#00BFFF]" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">Smart India Hackathon 2025</h3>
              <p className="text-white/55 text-sm">
                Selected for Smart India Hackathon 2025 in the Disaster Management domain, securing a position
                among the top teams shortlisted from 300+ entries in the internal selection round.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {['Disaster Management', 'Team Leadership', 'AI Solution', 'National Competition'].map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full text-[#00BFFF]"
                    style={{ background: 'rgba(0,191,255,0.1)', border: '1px solid rgba(0,191,255,0.2)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
