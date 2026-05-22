import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.04, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-full h-full"
        >
          <img 
            src="https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/huwaishui.png" 
            alt="DAC Future Living - Outdoor Water" 
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover brightness-[0.45] contrast-[1.05]"
            onError={(e) => {
              const target = e.currentTarget;
              target.onerror = null;
              target.src = "https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/huwaishui.png";
            }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#1a1a1a]" />
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-8 md:px-16 flex items-end pb-24 md:pb-32 h-full">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 md:space-y-12"
          >
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.6em] text-white/45 uppercase block font-mono">Vol. 01 / Manifesto</span>
              <motion.h1 
                className="text-4xl sm:text-6xl md:text-8xl font-serif-sc leading-[1.15] text-white max-w-5xl tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              >
                未来的文旅，<br />
                不是目的地，<br />
                而是另一种<span className="italic font-light text-[#c5a059] opacity-90">生活。</span>
              </motion.h1>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/10 pt-8 md:pt-12">
               <p className="text-xs md:text-sm tracking-[0.25em] text-white/50 uppercase max-w-lg leading-relaxed font-light">
                 Architecting secondary systems of existence in the resonance of nature and time.
               </p>
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 1.5, duration: 1 }}
                 className="flex items-center gap-6"
               >
                 <span className="text-[9px] tracking-[0.5em] text-white/40 uppercase font-mono">Scroll to explore</span>
                 <div className="w-12 h-px bg-[#c5a059]/50" />
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#c5a059]/30 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{ 
              y: [null, "-80%"],
              opacity: [0, 0.6, 0]
            }}
            transition={{ 
              duration: Math.random() * 15 + 12, 
              repeat: Infinity, 
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#c5a059] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
