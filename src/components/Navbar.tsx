import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 group"
        >
          <div className="w-10 h-10 bg-mustard overflow-hidden rounded-full flex items-center justify-center transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 ring-1 ring-white/10">
            <img 
              src="https://i.ibb.co/b5dRyDSn/ff272a366751be8da7a4cf4e1535e2ec.jpg" 
              alt="Logo" 
              className="w-full h-full object-cover transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-[10px] tracking-[0.4em] font-bold hidden sm:block">RAGHAV KUMAR</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 bg-cream/5 backdrop-blur-md px-8 py-3 rounded-full border border-cream/10">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[10px] tracking-[0.2em] uppercase font-medium hover:text-mustard transition-colors relative group"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block bg-mustard text-forest px-6 py-2.5 rounded-none font-bold text-[10px] tracking-widest uppercase hover:bg-burnt-orange hover:text-white transition-all duration-300"
        >
          Let's Work
        </motion.button>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-cream"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-forest z-40 flex flex-col justify-center items-center gap-8 md:hidden"
          >
             <button 
              className="absolute top-8 right-6 text-cream"
              onClick={() => setIsOpen(false)}
            >
              <X size={40} />
            </button>
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-serif italic text-cream hover:text-mustard transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 bg-mustard text-forest px-12 py-4 rounded-full font-bold text-xl"
            >
              Let's Work
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
