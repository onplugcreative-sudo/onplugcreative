import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center overflow-hidden bg-forest text-cream grain">
      {/* Background Typography */}
      <div className="absolute inset-0 flex flex-col justify-center select-none pointer-events-none overflow-hidden opacity-10">
        <motion.div 
          animate={{ x: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-[25vw] leading-none whitespace-nowrap font-serif italic"
        >
          CREATIVE DESIGNER
        </motion.div>
        <motion.div 
          animate={{ x: [-100, 0, -100] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="text-[25vw] leading-none whitespace-nowrap font-sans font-black outline-text text-transparent border-white/20"
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
        >
          VISUAL STORYTELLER
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full pt-20">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col justify-center relative">
          <div className="absolute -left-12 top-0 opacity-5 font-serif italic text-[150px] md:text-[200px] leading-none select-none pointer-events-none">Artistic</div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <p className="text-mustard text-xs md:text-sm tracking-[0.4em] uppercase mb-8 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-mustard"></span> Based in Bihar, IN
            </p>
            <h1 className="font-serif italic text-[70px] md:text-[100px] lg:text-[120px] leading-[0.85] tracking-tight mb-8">
              Graphic <br/>
              <span className="text-mustard">Designer</span> &
              <br/>Creator
            </h1>
            <p className="max-w-md text-cream/70 leading-relaxed text-sm md:text-base mb-10 font-light">
              Designing bold visuals and modern digital experiences with creativity, style, and strong visual storytelling for global brands and creators.
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex -space-x-4">
                {['Ps', 'Ai', 'Cv'].map((tool, i) => (
                  <motion.div 
                    key={tool}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className={`w-12 h-12 rounded-full border-2 border-forest flex items-center justify-center font-bold text-xs ${
                      i === 0 ? 'bg-burnt-orange' : i === 1 ? 'bg-olive' : 'bg-mustard text-matte-black'
                    }`}
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
              <span className="text-[10px] tracking-widest opacity-50 uppercase font-bold">Expert in Industry Tools</span>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Profile Card */}
        <div className="lg:col-span-5 flex flex-col justify-center min-h-[500px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative group h-full"
          >
            <div className="relative w-full aspect-[3/4] bg-matte-black asymmetric-rounding overflow-hidden border border-cream/10 group shadow-2xl">
              <div className="absolute inset-0 bg-burnt-orange/10 mix-blend-overlay z-10"></div>
              
              <img 
                src="https://i.ibb.co/fztWGXsf/1773493327284.png" 
                alt="Raghav Kumar" 
                className="absolute inset-0 w-full h-full object-cover brightness-90 contrast-110 group-hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 bg-gradient-to-t from-matte-black via-matte-black/20 to-transparent z-20 transition-all duration-700 group-hover:from-forest/90">
                <div className="flex justify-between items-end translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h2 className="font-serif italic text-4xl md:text-5xl mb-2 text-cream drop-shadow-lg">Raghav Kumar</h2>
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-mustard"></span>
                        <p className="text-[10px] tracking-[0.3em] text-mustard uppercase font-bold">Visual Architect</p>
                      </div>
                    </motion.div>
                  </div>
                  <div className="w-14 h-14 rounded-full border border-cream/10 bg-white/5 backdrop-blur-sm flex items-center justify-center rotate-45 group-hover:bg-mustard group-hover:text-forest group-hover:border-mustard group-hover:rotate-0 transition-all duration-700 shadow-xl">
                    <span className="text-2xl transition-transform group-hover:scale-110">→</span>
                  </div>
                </div>
              </div>

              {/* Floating Meta Label */}
              <div className="absolute top-12 right-0 bg-mustard text-forest px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase z-30">
                Creative Journey
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll Down</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
}
