import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import WelcomeToast from '@/components/WelcomeToast';

const BackgroundEffects = dynamic(() => import('@/components/BackgroundEffects'), { ssr: false });
const Projects = dynamic(() => import('@/components/sections/Projects'), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A] overflow-x-hidden">
      <BackgroundEffects />
      <WelcomeToast />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
