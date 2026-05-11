import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const categories = [
  'All', 'Branding', 'Social Media', 'Design', 'Creative', 'Visuals'
];

const projects = [
  {
    id: 1,
    title: 'Urban Aesthetics',
    category: 'Branding',
    image: 'https://i.ibb.co/931253fs/f2798d4c5a4c7198e9db84fca24b79ad.jpg',
    description: 'A modern exploration of urban visual identity and street culture.'
  },
  {
    id: 2,
    title: 'Dynamic Motion',
    category: 'Social Media',
    image: 'https://i.ibb.co/1Yr2gxLd/4b9307631ddc8adc9c0366fb6e242da2.jpg',
    description: 'High-energy social media assets designed for maximum engagement.'
  },
  {
    id: 3,
    title: 'Minimalist Structure',
    category: 'Design',
    image: 'https://i.ibb.co/VWPSJtDc/8164418549f62ece95a8bdc09e562b1c.jpg',
    description: 'Clean, architectural layouts focusing on whitespace and typography.'
  },
  {
    id: 4,
    title: 'Vibrant Narrative',
    category: 'Creative',
    image: 'https://i.ibb.co/Kx2b0kNy/6513c869a556d9c9a56d9bbf18a7a4d5.jpg',
    description: 'Storytelling through bold colors and expressive visual elements.'
  },
  {
    id: 5,
    title: 'Digital Texture',
    category: 'Visuals',
    image: 'https://i.ibb.co/HpDQGgsk/be512dd92e7ff9413ef6ff6ffd2edfdd.jpg',
    description: 'Exploring the intersection of digital artifacts and organic textures.'
  },
  {
    id: 6,
    title: 'Future Heritage',
    category: 'Branding',
    image: 'https://i.ibb.co/tpc0GLvn/2a0fd9a7b6eb866fa745749d811f45c7.jpg',
    description: 'Combining traditional motifs with futuristic design systems.'
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 md:py-32 bg-cream text-matte-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-mustard font-medium tracking-[0.2em] uppercase text-sm block mb-4">Portfolio Showcase</span>
            <h2 className="text-5xl md:text-7xl font-serif italic leading-tight">
              Featured <span className="not-italic font-sans font-bold">Creations</span>.
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 md:gap-4"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-forest text-cream' 
                    : 'bg-matte-black/5 hover:bg-matte-black/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="relative aspect-[4/5] overflow-hidden asymmetric-rounding bg-forest/5 border border-matte-black/5 group-hover:border-mustard/30 transition-colors duration-500">
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover brightness-90 contrast-110 transition-all duration-1000 group-hover:scale-110 group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-8 text-cream z-10">
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-[1px] bg-mustard"></span>
                        <span className="text-mustard font-bold text-[10px] tracking-[0.3em] uppercase">{project.category}</span>
                      </div>
                      <h3 className="text-4xl font-serif italic mb-2">{project.title}</h3>
                      <p className="text-[11px] opacity-80 font-medium leading-relaxed max-w-[240px]">{project.description}</p>
                      <button className="flex items-center gap-3 text-[10px] font-bold tracking-[0.4em] uppercase bg-mustard text-forest px-8 py-4 mt-6 hover:bg-cream transition-all duration-500 shadow-xl active:scale-95">
                        View Case <ExternalLink size={14} className="group-hover:rotate-12 transition-transform" />
                      </button>
                    </motion.div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-mustard/0 group-hover:bg-mustard/10 transition-all duration-700 pointer-events-none" />
                </div>
                
                {/* Visual Label (Visible on Mobile/Initially) */}
                <div className="mt-6 flex justify-between items-center group-hover:opacity-0 transition-opacity px-2">
                  <div>
                    <h4 className="font-serif italic text-2xl">{project.title}</h4>
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-30 mt-1">{project.category}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-matte-black/10 flex items-center justify-center rotate-45 opacity-40 group-hover:opacity-100 group-hover:bg-mustard group-hover:text-forest group-hover:border-mustard transition-all duration-500">
                    <span className="text-xl">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center gap-4 text-2xl font-serif italic group">
            <span className="relative">
              Explore More Work
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-matte-black/20 group-hover:bg-mustard group-hover:h-0.5 transition-all" />
            </span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="text-mustard" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
