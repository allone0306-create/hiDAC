import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-24 md:py-36 px-6 md:px-12 bg-transparent">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start text-[#d4d4d4]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="lg:col-span-5 space-y-16 md:space-y-24"
        >
          <div className="space-y-6">
            <span className="text-[10px] tracking-[0.5em] text-white/30 uppercase font-mono block">Profile / Introduction</span>
            <h2 className="text-4xl md:text-6xl font-serif-sc leading-tight text-white/90 underline underline-offset-[24px] decoration-[#c5a059]/20">
              我们不只是<br />设计公司。
            </h2>
          </div>
          
          <div className="space-y-10 text-base md:text-lg text-white/50 leading-relaxed font-light">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-md"
            >
              DAC 达成文化，是一个探索未来生活方式的区域实验平台。我们在这里重构土地、空间、艺术与生活的有机连接。
            </motion.p>
            
            <div className="space-y-6 pt-10 border-t border-white/5">
              <p className="text-[10px] tracking-widest text-white/30 uppercase font-mono">核心路径 / Core Pathways</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
                {['在地文化研究', '空间场域重构', '艺术系统介入', '文化战役策划', '长期运营路径'].map((item, i) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="flex items-center gap-3 text-[13px]"
                  >
                    <div className="w-1 h-[1px] bg-[#c5a059]" />
                    <span className="text-white/75 tracking-widest font-serif-sc">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
          className="lg:col-span-7 relative aspect-[16/10] bg-zinc-900 overflow-hidden shadow-2xl rounded-sm border border-white/5"
        >
          <img 
            src="https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/2024-12-05%20161021.jpg" 
            alt="DAC Atmosphere" 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover brightness-[0.85] hover:brightness-100 transition-all duration-[3s]"
            onError={(e) => {
              const target = e.currentTarget;
              target.onerror = null;
              target.src = "https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/2024-12-05%20161021.jpg";
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
