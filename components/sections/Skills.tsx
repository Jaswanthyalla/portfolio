'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BrainCircuit, Cloud, Code2, Database, Layers, Server } from 'lucide-react';

const categories = [
  {
    id: 'languages',
    label: 'Programming Languages',
    icon: Code2,
    color: '#00BFFF',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'JavaScript', level: 78 },
      { name: 'Java', level: 70 },
      { name: 'SQL', level: 82 },
      { name: 'C', level: 65 },
    ],
  },
  {
    id: 'ml',
    label: 'Machine Learning & AI',
    icon: BrainCircuit,
    color: '#00FFB3',
    skills: [
      { name: 'Scikit-learn', level: 88 },
      { name: 'TensorFlow', level: 80 },
      { name: 'NumPy / Pandas', level: 90 },
      { name: 'Data Preprocessing', level: 88 },
      { name: 'Predictive Modeling', level: 85 },
    ],
  },
  {
    id: 'cv',
    label: 'Computer Vision',
    icon: Layers,
    color: '#007BFF',
    skills: [
      { name: 'OpenCV', level: 85 },
      { name: 'Object Detection', level: 80 },
      { name: 'Real-time Processing', level: 82 },
      { name: 'Deep Learning (CV)', level: 78 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend Development',
    icon: Server,
    color: '#00C853',
    skills: [
      { name: 'FastAPI', level: 85 },
      { name: 'Flask', level: 88 },
      { name: 'REST API Design', level: 86 },
      { name: 'Twilio Integration', level: 72 },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Database,
    color: '#00BFFF',
    skills: [
      { name: 'React', level: 78 },
      { name: 'HTML/CSS', level: 82 },
      { name: 'Tailwind CSS', level: 76 },
    ],
  },
  {
    id: 'cloud',
    label: 'Tools & Cloud',
    icon: Cloud,
    color: '#00FFB3',
    skills: [
      { name: 'Google Earth Engine', level: 80 },
      { name: 'Git / GitHub', level: 85 },
      { name: 'Jupyter Notebook', level: 90 },
      { name: 'VS Code', level: 92 },
    ],
  },
];

function SkillBar({ name, level, color, inView, delay }: {
  name: string;
  level: number;
  color: string;
  inView: boolean;
  delay: number;
}) {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-white/80 text-xs font-medium">{name}</span>
        <span className="text-xs font-semibold" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative section-padding">
      <div className="container-width" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mx-auto">Technical Arsenal</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Skills & <span className="gradient-text-emerald">Expertise</span>
          </h2>
          <p className="text-white/45 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            From neural networks to REST APIs — building end-to-end intelligent systems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, ci) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: ci * 0.1 }}
                className="card-glass group"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${cat.color}18`,
                      border: `1px solid ${cat.color}30`,
                    }}
                  >
                    <Icon size={18} style={{ color: cat.color }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">{cat.label}</h3>
                    <div className="text-xs text-white/35">{cat.skills.length} technologies</div>
                  </div>
                </div>

                {/* Skills */}
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    inView={inView}
                    delay={ci * 0.1 + si * 0.08 + 0.3}
                  />
                ))}
              </motion.div>
            );
          })}
        </div>

        {/* Tech tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Also familiar with</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Google Earth Engine', 'Satellite Imagery', 'Geospatial Analysis', 'Transect Analysis',
              'Regression Forecasting', 'Signal Processing', 'CCTV Integration', 'Twilio API',
              'Data Visualization', 'EDA', 'Feature Engineering'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-xs text-white/50 transition-all hover:text-white hover:border-white/20"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
