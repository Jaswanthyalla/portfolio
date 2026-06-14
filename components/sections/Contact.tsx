'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';

const socials = [
  {
    label: 'Email',
    value: 'Jaswanthyalla123@gmail.com',
    href: 'mailto:Jaswanthyalla123@gmail.com',
    icon: Mail,
    color: '#00BFFF',
  },
  {
    label: 'GitHub',
    value: 'github.com/Jaswanthyalla',
    href: 'https://github.com/Jaswanthyalla',
    icon: Github,
    color: '#00FFB3',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jaswanth-yalla',
    href: 'https://linkedin.com/in/jaswanth-yalla',
    icon: Linkedin,
    color: '#007BFF',
  },
  {
    label: 'Phone',
    value: '+91 9347637152',
    href: 'tel:+919347637152',
    icon: Phone,
    color: '#00C853',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise(r => setTimeout(r, 1500));
    setStatus('sent');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="relative section-padding">
      <div className="container-width" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mx-auto">Get In Touch</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let's <span className="gradient-text-blue">Connect</span>
          </h2>
          <p className="text-white/45 mt-4 max-w-lg mx-auto text-sm">
            Open to internships, research collaborations, and exciting AI/ML projects.
            Let's build something intelligent together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="card-glass mb-2">
              <h3 className="font-semibold text-white mb-2">Seeking Opportunities</h3>
              <p className="text-white/55 text-sm leading-relaxed">
                Looking for Python Developer, ML Engineer, and AI Intern roles.
                Available for part-time and full-time internships.
              </p>
              <div className="flex items-center gap-1.5 mt-3 text-white/40 text-xs">
                <MapPin size={12} />
                <span>Srikakulam, Andhra Pradesh, India</span>
              </div>
            </div>

            {socials.map(({ label, value, href, icon: Icon, color }, i) => (
              <motion.a
                key={label}
                href={href}
                target={label !== 'Phone' && label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="card-glass flex items-center gap-3 group hover:scale-[1.02] transition-transform duration-300 no-underline"
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                >
                  <Icon size={16} style={{ color }} />
                </div>
                <div className="min-w-0">
                  <div className="text-white/35 text-xs font-medium">{label}</div>
                  <div className="text-white/80 text-xs truncate">{value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="card-glass">
              <h3 className="font-semibold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/40 font-medium mb-1.5 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 transition-all duration-300 outline-none focus:border-[#00BFFF]/50 focus:shadow-[0_0_15px_rgba(0,191,255,0.1)]"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 font-medium mb-1.5 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 transition-all duration-300 outline-none focus:border-[#00BFFF]/50 focus:shadow-[0_0_15px_rgba(0,191,255,0.1)]"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-white/40 font-medium mb-1.5 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Internship Opportunity / Collaboration"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 transition-all duration-300 outline-none focus:border-[#00BFFF]/50"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/40 font-medium mb-1.5 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about the opportunity or project..."
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 transition-all duration-300 outline-none resize-none focus:border-[#00BFFF]/50"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all duration-300"
                  style={{
                    background: status === 'sent'
                      ? 'linear-gradient(135deg, #00FFB3, #00C853)'
                      : 'linear-gradient(135deg, #00BFFF, #007BFF)',
                    boxShadow: status === 'sent'
                      ? '0 0 25px rgba(0,255,179,0.4)'
                      : '0 0 25px rgba(0,191,255,0.3)',
                    opacity: status === 'sending' ? 0.8 : 1,
                  }}
                >
                  {status === 'sending' && <Loader2 size={16} className="animate-spin" />}
                  {status === 'sent' && <CheckCircle size={16} />}
                  {status === 'idle' && <Send size={16} />}
                  {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
