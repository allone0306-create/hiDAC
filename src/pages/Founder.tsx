import React from 'react';
import { motion } from 'framer-motion';

const Founder: React.FC = () => {
  return (
    <main className="bg-[#0a0a0a] text-[#a3a3a3] pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="lg:col-span-5 aspect-[3/4] overflow-hidden bg-zinc-950 border border-white/5 relative group rounded-sm shadow-xl"
        >
          <img 
            src="https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/7976446a6868fab1ddec02c021c2075e.jpg" 
            alt="Founder 未山" 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover grayscale brightness-90 contrast-[1.1] group-hover:scale-105 transition-transform duration-1000"
            onError={(e) => {
              const target = e.currentTarget;
              target.onerror = null;
              target.src = "https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/7976446a6868fab1ddec02c021c2075e.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </motion.div>

        {/* Content Section */}
        <div className="lg:col-span-7 space-y-12 lg:pl-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xl font-serif-sc text-white font-bold">未山 / WEI SHAN</span>
              <div className="w-8 h-px bg-[#c5a059]/40" />
              <span className="text-[10px] tracking-[0.4em] text-[#c5a059] uppercase font-mono font-bold">Founder & Lead Architect</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-serif-sc leading-snug text-white/90 tracking-tight italic">
              “人不是在逃避都市，而在寻找本真的自我。”
            </h1>
          </motion.div>
          
          <div className="space-y-6 text-sm md:text-base text-white/50 leading-relaxed font-light">
            <p>
              在创立达成文化（DAC FUTURE）之前，我经常在思考一个问题：为什么现代都市人拥有了极其奢华的物理空间，内心却感到越来越不可遏制的荒芜与孤独？
            </p>
            <p>
              过去的传统文旅设计，往往过度沉溺于冰冷浮夸的石材堆砌、地标大屋顶和短暂的视觉感官刺激，却完全忽略了空间深处“人在此刻度过时间”的本质。
            </p>
            <p className="text-[#c5a059] text-base font-medium italic">
              “DAC的使命，是为被狂澜裹挟的现代精英，提供一个可以‘安全降落’的第二生活系统。”
            </p>
            <p>
              我们所追求的设计，从来不是虚荣的装饰，而是如月光掠过林梢般的克制。我们关注夕阳射入走廊的最佳角度，关注天然夯土墙面带来的温润摩挲，关注一盏香茶如何熨帖起日常的呼吸节奏。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-white/5">
            <div className="space-y-2">
              <span className="text-[10px] tracking-widest text-white/30 uppercase font-mono">Core Pathway / 核心路径</span>
              <p className="text-xs md:text-sm text-white/70 font-serif-sc font-medium">
                人与自然的亲密交互、在地传统工序的当代重构。
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] tracking-widest text-white/30 uppercase font-mono">Philosophy / 思考信条</span>
              <p className="text-xs md:text-sm text-white/70 font-serif-sc font-medium">
                空间即容器，时间即共鸣，生活是自然最温柔的折射。
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Founder;
