'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Satellite } from 'lucide-react';

const experiences = [
  {
    title: 'Smart India Hackathon 2025 — Finalist',
    organization: 'Government of India',
    type: 'Hackathon',
    period: '2025',
    description:
      'Selected for Smart India Hackathon 2025 in the Disaster Management domain, securing a position among the top teams shortlisted from 300+ entries in the internal selection round. Developed an AI-powered disaster management solution.',
    icon: Award,
    color: '#00BFFF',
    tags: ['AI/ML', 'Disaster Management', 'Team Collaboration', 'Problem Solving'],
    achievement: 'Top team from 300+ entries',
  },
  {
    title: 'Coastal Dynamics Research Collaboration',
    organization: 'Civil Engineering Department, SRKR',
    type: 'Research Collaboration',
    period: '2024 – 2025',
    description:
      'Collaborated with the Civil Engineering department to analyze coastal dynamics in the Chinna Gollapalem region using data science and geospatial analysis. Applied satellite imagery processing and ML-based predictive modeling for real-world environmental impact.',
    icon: Satellite,
    color: '#00FFB3',
    tags: ['Geospatial Analysis', 'Remote Sensing', 'Python', 'ML', 'Research'],
    achievement: '97% prediction accuracy',
  },
  {
    title: 'AI-ML Virtual Internship',
    organization: 'Google for Developers & EduSkills',
    type: 'Internship',
    period: 'Oct – Dec 2025',
    description:
      'Completed AI-ML virtual internship with Google for Developers in collaboration with EduSkills. Gained hands-on experience with Google Cloud AI services, machine learning pipelines, and practical ML project development.',
    icon: Users,
    color: '#007BFF',
    tags: ['Google Cloud', 'AI/ML', 'Machine Learning', 'Cloud Computing'],
    achievement: 'Google for Developers',
  },
  {
    title: 'Generative AI & Deep Learning Internship',
    organization: 'EduSkills Foundation',
    type: 'Internship',
    period: '2025',
    description:
      'Completed internship focused on Generative AI, Deep Learning, and Large Language Models. Explored transformer architectures, prompt engineering, and applications of LLMs in real-world scenarios.',
    icon: Award,
    color: '#00C853',
    tags: ['Generative AI', 'LLMs', 'Deep Learning', 'Transformers'],
    achievement: 'LLM Specialization',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="relative section-padding">
      <div className="container-width" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mx-auto">Journey</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experience & <span className="gradient-text-mixed">Achievements</span>
          </h2>
          <p className="text-white/45 mt-4 max-w-lg mx-auto text-sm">
            From hackathons to research collaborations — building real impact.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px transform md:-translate-x-px"
            style={{ background: 'linear-gradient(to bottom, #00BFFF33, #00FFB333, #007BFF33, transparent)' }}
          />

          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30, x: isLeft ? -20 : 20 }}
                animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className={`relative flex gap-6 md:gap-0 mb-10 last:mb-0 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Node */}
                <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${exp.color}18`,
                      border: `1px solid ${exp.color}40`,
                      boxShadow: `0 0 20px ${exp.color}25`,
                    }}
                  >
                    <Icon size={20} style={{ color: exp.color }} />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div
                    className="card-glass group hover:scale-[1.01] transition-transform duration-300"
                    style={{
                      borderColor: 'rgba(255,255,255,0.06)',
                    }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <span
                          className="text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full mb-2 inline-block"
                          style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}25` }}
                        >
                          {exp.type}
                        </span>
                        <h3 className="font-bold text-white text-base leading-tight">{exp.title}</h3>
                        <p className="text-white/45 text-xs mt-0.5">{exp.organization}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-white/30 font-mono">{exp.period}</span>
                        <div
                          className="mt-1 text-xs font-semibold px-2 py-0.5 rounded-md"
                          style={{ background: `${exp.color}10`, color: exp.color }}
                        >
                          {exp.achievement}
                        </div>
                      </div>
                    </div>

                    <p className="text-white/55 text-sm leading-relaxed mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-lg text-white/45"
                          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
