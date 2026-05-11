import { motion } from 'motion/react';

const skills = [
  { name: 'Graphic Design', level: 95 },
  { name: 'Poster & Banner Design', level: 90 },
  { name: 'Social Media Creatives', level: 92 },
  { name: 'Brand Identity Design', level: 85 },
  { name: 'YouTube Thumbnail Design', level: 95 },
  { name: 'Anime Edit Design', level: 88 },
  { name: 'Visual Branding', level: 80 },
  { name: 'Adobe Photoshop', level: 90 },
  { name: 'Canva & AI Design Tools', level: 95 },
  { name: 'Content Marketing', level: 75 },
];

const tools = [
  'Adobe Photoshop', 'Canva', 'Illustrator', 'Lightroom', 'Figma', 'Midjourney', 'CapCut', 'Premiere Pro'
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-forest text-cream grain relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-mustard rounded-full opacity-5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-burnt-orange rounded-full opacity-5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-mustard font-medium tracking-[0.2em] uppercase text-sm block mb-4">Core Competencies</span>
            <h2 className="text-5xl md:text-7xl font-serif italic leading-tight">
              Mastering the <span className="not-italic font-sans font-bold">Art of Visuals</span>.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-right flex flex-col items-end"
          >
            <div className="text-mustard font-serif italic text-4xl">Creative Expertise</div>
            <p className="text-cream/50 max-w-xs text-sm mt-2">Combining technical precision with artistic intuition.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Skill Bars */}
          <div className="lg:col-span-7 space-y-8">
            {skills.map((skill, i) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="flex justify-between items-end mb-2">
                  <span className="text-lg font-medium group-hover:text-mustard transition-colors">{skill.name}</span>
                  <span className="text-sm font-serif italic text-mustard">{skill.level}%</span>
                </div>
                <div className="h-0.5 w-full bg-cream/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-mustard group-hover:bg-burnt-orange transition-colors"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools & Tech */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-cream/5 backdrop-blur-lg border border-cream/10 p-10 asymmetric-rounding"
            >
              <h3 className="text-[10px] tracking-[0.5em] uppercase font-bold opacity-40 mb-8">Selected Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, i) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(245, 181, 29, 0.2)' }}
                    className="px-5 py-2 border border-cream/10 bg-cream/5 text-[10px] tracking-widest uppercase font-bold transition-all cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 asymmetric-rounding border border-mustard/20 bg-mustard/5 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-serif italic mb-4">Geometric Balance</h3>
                <p className="text-cream/70 text-sm leading-relaxed font-light">
                  Always exploring the intersection of traditional design principles and modern AI creative tools to deliver cutting-edge visual solutions.
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-mustard rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
