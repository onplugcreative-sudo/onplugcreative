import { motion } from 'motion/react';

const events = [
  {
    year: '2024 - Present',
    title: 'Lead Creative Designer',
    company: 'OnePlug Creative',
    description: 'Spearheading visual strategy and brand identity for digital startups and content creators.'
  },
  {
    year: '2023 - 2024',
    title: 'Content Specialist',
    company: ' Bihar Digital Hub',
    description: 'Curating social media visuals and promotional content for local business development.'
  },
  {
    year: '2021 - 2023',
    title: 'Freelance Designer',
    company: 'Global Clients',
    description: 'Delivered 100+ projects ranging from YouTube thumbnails to full brand kits.'
  },
  {
    year: '2020 - 2021',
    title: 'Visual Arts Student',
    company: 'Creative Studio',
    description: 'Nurtured fundamental design principles and explored digital art mediums.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-cream text-matte-black grain">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-burnt-orange font-medium tracking-[0.2em] uppercase text-sm block mb-4">My Journey</span>
            <h2 className="text-5xl md:text-7xl font-serif italic leading-tight">
              A Creative <span className="not-italic font-sans font-bold">Odyssey</span>.
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-matte-black/10 -translate-x-1/2" />

          <div className="space-y-12">
            {events.map((event, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Dot */}
                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-mustard border-4 border-cream -translate-x-1/2 z-10 shadow-lg" />

                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`w-full md:w-[45%] ml-12 md:ml-0 bg-white p-8 asymmetric-rounding border border-matte-black/5 shadow-sm group hover:shadow-xl transition-all duration-500`}
                >
                  <span className="text-mustard font-serif italic text-lg mb-2 block">{event.year}</span>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-mustard transition-colors tracking-tight">{event.title}</h3>
                  <p className="text-[10px] font-bold opacity-30 uppercase tracking-[0.2em] mb-4">{event.company}</p>
                  <p className="text-matte-black/60 text-sm font-light leading-relaxed">
                    {event.description}
                  </p>
                </motion.div>

                {/* Empty space for layout balance */}
                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
