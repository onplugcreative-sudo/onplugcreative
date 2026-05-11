import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="py-12 bg-cream text-matte-black border-t border-matte-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-serif italic tracking-tight">
              Raghav <span className="font-sans not-italic font-light opacity-60">Kumar</span>
            </h3>
            <p className="text-sm opacity-50 max-w-[280px]">
              Creative visuals crafted with passion and modern storytelling.
            </p>
          </div>

          <div className="flex gap-8">
            {['Instagram', 'Dribbble', 'Behance', 'Twitter'].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-sm font-medium hover:text-mustard transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mustard transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="text-right">
            <p className="text-xs uppercase tracking-widest font-bold opacity-30">
              © {new Date().getFullYear()} Raghav Kumar. <br /> All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
