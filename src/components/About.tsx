import { motion } from 'motion/react';
import { Mail, Phone, Instagram, MapPin } from 'lucide-react';

export default function About() {
  const infoItems = [
    { icon: <MapPin size={18} />, label: 'Location', value: 'Bihar, India' },
    { icon: <Mail size={18} />, label: 'Email', value: 'oneplugcreative@gmail.com' },
    { icon: <Phone size={18} />, label: 'Phone', value: '+91 6205790879' },
    { icon: <Instagram size={18} />, label: 'Instagram', value: '@onplug.creative' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-cream text-matte-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Image Section */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 asymmetric-rounding overflow-hidden shadow-2xl aspect-[4/5] border border-matte-black/5 bg-matte-black/5">
                <img 
                  src="https://i.ibb.co/fztWGXsf/1773493327284.png" 
                  alt="Raghav Kumar" 
                  className="w-full h-full object-cover brightness-90 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-8 -right-8 z-20 bg-matte-black text-cream p-10 asymmetric-rounding shadow-2xl hidden md:block max-w-[240px] border border-cream/10"
              >
                <div className="text-5xl font-serif italic mb-2 text-mustard">5+</div>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-50">Years crafting visual digital content.</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Text Section */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-mustard font-medium tracking-[0.2em] uppercase text-sm block mb-4">Editorial Portrait</span>
              <h2 className="text-5xl md:text-7xl font-serif italic leading-tight mb-8">
                Visualizing <span className="not-italic font-sans font-bold">Bold Stories</span> Through Design.
              </h2>
              
              <div className="space-y-6 text-lg text-matte-black/70 leading-relaxed font-light">
                <p>
                  Hi, I’m <span className="font-medium text-forest">Raghav Kumar</span>, a creative graphic designer and digital content creator from Bihar. I specialize in modern branding, poster design, social media creatives, anime-inspired visuals, and promotional content.
                </p>
                <p>
                  My work focuses on creating clean, eye-catching, and professional designs that help brands and creators stand out online with strong visual identity and engaging content. I believe in the power of visual storytelling to transform how messages are perceived.
                </p>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {infoItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-matte-black/5 bg-matte-black/[0.02] hover:bg-soft-beige transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-cream transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-0.5">{item.label}</p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
