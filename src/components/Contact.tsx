import { motion } from 'motion/react';
import { Send, Instagram, Mail, Phone, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-matte-black text-cream grain relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen flex flex-col justify-center select-none pointer-events-none opacity-[0.03]">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={`text-[20vw] leading-none font-serif italic whitespace-nowrap ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
            LET'S WORK TOGETHER
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-mustard font-medium tracking-[0.2em] uppercase text-sm block mb-4">Start a conversation</span>
            <h2 className="text-5xl md:text-8xl font-serif italic leading-[0.9] mb-12">
              Let's create something <span className="not-italic text-mustard">Powerful</span> together.
            </h2>
            
            <div className="space-y-12 mt-16">
              <a 
                href="mailto:oneplugcreative@gmail.com" 
                className="group block"
              >
                <p className="text-cream/40 text-xs uppercase tracking-widest font-bold mb-2">Email Me</p>
                <div className="flex items-center gap-4 text-2xl md:text-4xl font-serif italic group-hover:text-mustard transition-colors">
                  oneplugcreative@gmail.com
                  <ArrowUpRight className="opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={32} />
                </div>
              </a>

              <a 
                href="tel:+916205790879" 
                className="group block"
              >
                <p className="text-cream/40 text-xs uppercase tracking-widest font-bold mb-2">Call Me</p>
                <div className="flex items-center gap-4 text-2xl md:text-4xl font-serif italic group-hover:text-mustard transition-colors">
                  +91 6205790879
                  <ArrowUpRight className="opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={32} />
                </div>
              </a>

              <div className="flex gap-6 pt-8">
                {[
                  { icon: <Instagram size={24} />, href: 'https://instagram.com/onplug.creative' },
                  { icon: <Mail size={24} />, href: 'mailto:oneplugcreative@gmail.com' },
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    href={social.href}
                    whileHover={{ y: -5, backgroundColor: '#F5B51D', color: '#111' }}
                    className="w-14 h-14 rounded-full border border-cream/20 flex items-center justify-center transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 asymmetric-rounding space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Raghav Kumar"
                    className="w-full bg-transparent border-b border-white/20 pb-4 outline-none focus:border-mustard transition-colors text-lg font-light"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com"
                    className="w-full bg-transparent border-b border-white/20 pb-4 outline-none focus:border-mustard transition-colors text-lg font-light"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Subject</label>
                <input 
                  type="text" 
                  placeholder="Website Design Project"
                  className="w-full bg-transparent border-b border-white/20 pb-4 outline-none focus:border-mustard transition-colors text-lg font-light"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your vision..."
                  className="w-full bg-transparent border-b border-white/20 pb-4 outline-none focus:border-mustard transition-colors text-lg resize-none font-light"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-mustard text-forest py-6 rounded-none font-bold text-lg tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-cream transition-colors group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
