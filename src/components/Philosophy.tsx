import React from 'react';
import { motion } from 'framer-motion';

const philosophies = [
  { 
    title: '第二生活空间', 
    desc: '这不仅是地理坐标的位移，更是生命重心的重构。我们为渴望逃离都市喧嚣的灵魂，提供一个可以“重新降落”的生命系统。', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/IMG_0003.jpg' 
  },
  { 
    title: '在地文化优先', 
    desc: '拒绝表象的符号堆砌。我们致力于考证式的手法，将土地深处的微光转译为可感知的场场域灵魂，让每一处空间都拥有时间的厚度。', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%A4%AA%E5%BA%A6%E6%9D%91%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97%E7%BE%A4/IMG_8726.jpg' 
  },
  { 
    title: '自然禅意', 
    desc: '空间是人与自然接榫的媒介。通过对气流、光影与木石的克制雕琢，我们构建出能够自发引导呼吸、抚平焦虑的生命磁场。', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/huwaishui.png' 
  },
  { 
    title: '长期主义', 
    desc: '我们不追求瞬间的视觉爆款。DAC的逻辑是构建可持续生长的生态闭环，让空间在时间的洗礼下，诱发出愈发醇厚的生命力。', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E4%B9%A1%E6%9D%91/%E4%B9%A1%E6%9D%91%E6%B0%91%E5%B1%85.jpg' 
  },
  { 
    title: '精神共振', 
    desc: '当所有的功能需求退居幕后，剩下的是对自我的面对。我们打造的极致留白与静谧，为动荡的时代提供一个可以妥帖安放灵魂的永恒角落。', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/IMG_0010.jpg' 
  }
];

const Philosophy: React.FC = () => {
  return (
    <section className="py-24 md:py-36 px-6 md:px-12 bg-transparent text-[#d4d4d4] overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 border-b border-white/5 pb-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] tracking-[0.5em] text-white/30 uppercase font-mono block">Vol. 03 / Philosophy</span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-sc leading-tight text-white/90">
                旅行的本质不是抵达到达目的地，<br />
                <span className="italic font-light text-[#c5a059] opacity-90">而是重新连接生活。</span>
              </h2>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="w-16 h-px bg-[#c5a059]/40" />
            </div>
          </div>
        </motion.div>

        <div className="space-y-28 md:space-y-36">
          {philosophies.map((p, index) => (
            <div 
              key={p.title}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center relative`}
            >
              {/* Large background numbers */}
              <div className={`absolute -top-16 ${index % 2 === 0 ? 'left-0' : 'right-0'} text-[120px] md:text-[180px] font-serif-sc font-bold text-white/[0.02] select-none pointer-events-none leading-none z-0`}>
                0{index + 1}
              </div>

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full lg:w-1/2 relative z-10"
              >
                <div className="aspect-[16/10] overflow-hidden bg-zinc-900 shadow-2xl border border-white/5 rounded-sm relative group">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover brightness-[0.85] hover:brightness-100 transition-all duration-1000"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/IMG_0003.jpg";
                    }}
                  />
                  {/* Decorative Inner Frame */}
                  <div className="absolute inset-3 border border-white/10 pointer-events-none group-hover:inset-4 transition-all duration-1000" />
                </div>
              </motion.div>

              {/* Text Content Section */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 25 : -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="w-full lg:w-1/2 space-y-6 z-10 px-4 md:px-8"
              >
                <span className="text-[#c5a059] text-xs font-mono tracking-widest uppercase">Pathway 0{index + 1}</span>
                <h3 className="text-2xl md:text-4xl font-serif-sc text-white/90 tracking-wide leading-tight">
                  {p.title}
                </h3>
                <p className="text-sm md:text-base text-white/50 leading-relaxed font-light tracking-wide max-w-xl">
                  {p.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
