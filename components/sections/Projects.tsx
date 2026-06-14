'use client';

import { useRef, useState, Suspense } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import { ExternalLink, Github, X, Code2, Eye, Zap } from 'lucide-react';
import * as THREE from 'three';

const projects = [
  {
    id: 'traffic',
    title: 'Traffic Violation Detection System',
    subtitle: 'Real-Time Computer Vision',
    description:
      'A real-time traffic violation detection system using Python, OpenCV, and deep learning with CCTV integration. Identifies violations such as signal jumping with automated Twilio SMS alerts via Flask/FastAPI REST APIs.',
    tech: ['Python', 'OpenCV', 'Deep Learning', 'Flask', 'FastAPI', 'Twilio', 'REST API'],
    github: 'https://github.com/Jaswanthyalla',
    color: '#00BFFF',
    accentColor: '#007BFF',
    icon: '🚦',
    highlights: [
      'Real-time CCTV stream processing',
      'Signal jumping detection algorithm',
      'Automated SMS alerts via Twilio',
      'REST API for monitoring dashboard',
    ],
  },
  {
    id: 'coastal',
    title: 'Coastal Erosion Detection & Prediction',
    subtitle: 'Multi-Temporal Satellite Imagery + ML',
    description:
      'A shoreline analysis pipeline using 20+ years of Landsat and Sentinel satellite imagery processed through Google Earth Engine. Achieved 97% prediction accuracy with regression-based forecasting across 100+ coastal segments.',
    tech: ['Python', 'Scikit-learn', 'Google Earth Engine', 'Landsat', 'Sentinel', 'ML', 'Geospatial'],
    github: 'https://github.com/Jaswanthyalla',
    color: '#00FFB3',
    accentColor: '#00C853',
    icon: '🌊',
    highlights: [
      '97% prediction accuracy',
      '20+ years of satellite data analysis',
      '100+ coastal transect segments',
      'Mean change rate: 0.51 m/year',
    ],
  },
  {
    id: 'water',
    title: 'Water Quality Prediction',
    subtitle: 'ML-Based Environmental Analysis',
    description:
      'Machine learning model using Scikit-learn to predict water quality based on environmental parameters. Applied Logistic Regression and Random Forest classification with thorough EDA and feature engineering.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Random Forest', 'Logistic Regression', 'EDA'],
    github: 'https://github.com/Jaswanthyalla',
    color: '#007BFF',
    accentColor: '#00BFFF',
    icon: '💧',
    highlights: [
      'Multi-parameter environmental analysis',
      'Random Forest & Logistic Regression',
      'Comprehensive feature engineering',
      'Data preprocessing pipeline',
    ],
  },
];

function FloatingSphere({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0}
          metalness={0.8}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

function ProjectScene({ color }: { color: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color={color} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#ffffff" />
      <Stars radius={80} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      <FloatingSphere color={color} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(20px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.8, y: 40, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className="w-full max-w-5xl rounded-3xl overflow-hidden relative"
        style={{
          background: 'rgba(12,12,12,0.97)',
          border: `1px solid ${project.color}40`,
          boxShadow: `0 0 60px ${project.color}20, 0 40px 80px rgba(0,0,0,0.6)`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-all"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <X size={16} />
        </button>

        <div className="grid md:grid-cols-2">
          {/* 3D Scene */}
          <div className="h-56 md:h-full min-h-[300px] relative"
            style={{ background: `radial-gradient(circle at center, ${project.color}18 0%, #0A0A0A 70%)` }}>
            <Suspense fallback={
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full animate-spin border-2 border-transparent"
                  style={{ borderTopColor: project.color }} />
              </div>
            }>
              <ProjectScene color={project.color} />
            </Suspense>
            <div className="absolute bottom-4 left-4 text-6xl">{project.icon}</div>
          </div>

          {/* Content */}
          <div className="p-8 overflow-y-auto max-h-[600px]">
            <div className="mb-2">
              <span className="text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
                style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}>
                {project.subtitle}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mt-3 mb-4 leading-tight">{project.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">{project.description}</p>

            {/* Highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">Key Features</h4>
              <ul className="space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-white/70">
                    <Zap size={12} className="mt-0.5 flex-shrink-0" style={{ color: project.color }} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-medium text-white/70"
                    style={{ background: `${project.color}10`, border: `1px solid ${project.color}25` }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 flex-wrap">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
                style={{ background: `linear-gradient(135deg, ${project.color}, ${project.accentColor})`, boxShadow: `0 0 20px ${project.color}40` }}
              >
                <Github size={15} />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index, inView }: {
  project: typeof projects[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.15 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setModalOpen(true)}
        className="card-glass cursor-pointer relative overflow-hidden group"
        style={{
          transform: hovered
            ? 'perspective(1000px) rotateX(-2deg) rotateY(2deg) translateY(-8px)'
            : 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)',
          transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          border: hovered ? `1px solid ${project.color}50` : '1px solid rgba(255,255,255,0.06)',
          boxShadow: hovered ? `0 20px 60px ${project.color}20, 0 0 30px ${project.color}10` : 'none',
        }}
      >
        {/* Gradient overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
          style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}08 0%, transparent 60%)` }}
        />

        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              style={{ background: `${project.color}15`, border: `1px solid ${project.color}25` }}
            >
              {project.icon}
            </div>
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full"
                style={{ background: `${project.color}12`, color: project.color }}>
                {project.subtitle}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white transition-colors"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <Eye size={14} />
            </div>
          </div>
        </div>

        <h3 className="font-bold text-white text-lg leading-tight mb-2">{project.title}</h3>
        <p className="text-white/50 text-sm leading-relaxed mb-5 line-clamp-3">{project.description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-md text-xs text-white/50"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-xs"
              style={{ color: project.color, background: `${project.color}10` }}>
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.05]">
          <span className="text-xs text-white/30 flex items-center gap-1.5">
            <Code2 size={12} />
            Click to explore in 3D
          </span>
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{
              background: `linear-gradient(135deg, ${project.color}, ${project.accentColor})`,
              boxShadow: hovered ? `0 0 15px ${project.color}60` : 'none',
            }}
          >
            <ExternalLink size={12} className="text-white" />
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {modalOpen && (
          <ProjectModal project={project} onClose={() => setModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="relative section-padding">
      <div className="container-width" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mx-auto">Featured Work</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Projects & <span className="gradient-text-blue">Research</span>
          </h2>
          <p className="text-white/45 mt-4 max-w-lg mx-auto text-sm">
            Click any card for an immersive 3D experience — explore the tech, code, and insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
