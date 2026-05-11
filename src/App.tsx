/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);
    return () => window.removeEventListener('mousemove', mouseMove);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-mustard selection:text-forest bg-forest geometric-grid">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-mustard z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Left Vertical Rail */}
      <div className="fixed left-0 top-0 bottom-0 w-12 border-r border-cream/10 hidden xl:flex flex-col justify-between py-10 items-center z-[60]">
        <div className="rotate-[270deg] text-[10px] tracking-[0.4em] uppercase whitespace-nowrap opacity-40">Creative Identity . 2026</div>
        <div className="flex flex-col gap-6">
          <div className="w-1 h-1 rounded-full bg-mustard animate-pulse"></div>
          <div className="w-1 h-1 rounded-full bg-cream/20"></div>
          <div className="w-1 h-1 rounded-full bg-cream/20"></div>
        </div>
        <div className="rotate-[270deg] text-[10px] tracking-[0.4em] uppercase whitespace-nowrap opacity-40">Raghav Kumar</div>
      </div>

      {/* Custom Cursor */}
      <motion.div
        className="hidden lg:block fixed top-0 left-0 w-8 h-8 rounded-full border border-mustard pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
      />
      <motion.div
        className="hidden lg:block fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-mustard pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 450, mass: 0.1 }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
