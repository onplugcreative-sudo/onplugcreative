import { motion } from 'motion/react';
import { Palette, Share2, Layers, Video, Zap, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: <Palette size={32} />,
    title: 'Branding Design',
    description: 'Crafting unique visual identities that tell your brand story and connect with your audience.'
  },
  {
    icon: <Layers size={32} />,
    title: 'Poster Design',
    description: 'Dynamic and eye-catching editorial posters for events, brands, and cinematic visuals.'
  },
  {
    icon: <Share2 size={32} />,
    title: 'Social Media Creatives',
    description: 'Modern, high-engagement visual content tailored for Instagram, Twitter, and Facebook.'
  },
  {
    icon: <Zap size={32} />,
    title: 'Anime Style Editing',
    description: 'Creative and stylized anime-inspired visuals and edits for creators and communities.'
  },
  {
    icon: <Video size={32} />,
    title: 'Thumbnail Design',
    description: 'High-CTR YouTube thumbnails that drive clicks and maintain brand consistency.'
  },
  {
    icon: <MessageSquare size={32} />,
    title: 'Promotional Design',
    description: 'Direct and effective promotional materials that convert viewers into customers.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-off-white text-matte-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-burnt-orange font-medium tracking-[0.2em] uppercase text-sm block mb-4">My Services</span>
            <h2 className="text-5xl md:text-7xl font-serif italic leading-tight mb-8">
              Visual Solutions for <span className="not-italic font-sans font-bold">Modern Creators</span>.
            </h2>
            <p className="text-lg text-matte-black/60 font-light max-w-xl">
              I provide a comprehensive range of creative services designed to elevate your digital presence and visual identity.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 asymmetric-rounding border border-matte-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-cream flex items-center justify-center asymmetric-rounding text-forest mb-8 group-hover:bg-mustard group-hover:text-forest transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif italic mb-4 group-hover:text-mustard transition-colors">{service.title}</h3>
              <p className="text-matte-black/60 text-sm font-light leading-relaxed">
                {service.description}
              </p>
              
              <motion.div 
                className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-mustard opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Learn More <ArrowRight size={14} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
