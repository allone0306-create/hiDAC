import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Target, Users, Award, ChevronRight, ShieldCheck } from 'lucide-react';
import ServiceMap from '../components/ServiceMap';

interface Pillar {
  title: string;
  desc: string;
  icon: React.ReactNode;
  detail: string;
}

const pillars: Pillar[] = [
  { 
    title: '在地文化转译', 
    desc: '深度考证土地断层，构建坚韧的精神IP资产。',
    icon: <Users className="w-5 h-5 text-[#c5a059]" />,
    detail: '我们拒绝生搬硬套廉价的符号拼贴。通过实地学术性考证与田野调查，提取代表性的生土、杉木格栅与扎染染料，转译为符合当代高品质客群审美所需要的空间物理细节，为商业开发打造稳固的美学壁垒。'
  },
  { 
    title: '空间场域构建', 
    desc: '以生活方式为导向，打造安顿身心的情绪容器。',
    icon: <Compass className="w-5 h-5 text-[#c5a059]" />,
    detail: '建筑即是生命的舞台。我们从“人在此处如何舒适地度过时间”出发，有机整合地表规划、日光折射与温湿控制，模糊室内与自然荒野的边界，放大居住者内心的充盈、宁静与精神留白。'
  },
  { 
    title: '内容运营导入', 
    desc: '长效社群内容灌注，维系项目生命活力。',
    icon: <Target className="w-5 h-5 text-[#c5a059]" />,
    detail: '硬装仅仅是容器，运营内容才是灵魂。在正式开业前后，我们持续导入艺术联展、手艺市集、正念禅修等长效内容，激活高凝聚力的品牌社群，确保场域能量长久地自发裂变。'
  },
  { 
    title: '长期资产增值', 
    desc: '轻固定成本合作，绑定营业额利益共赢。',
    icon: <Award className="w-5 h-5 text-[#c5a059]" />,
    detail: '我们深切反对割裂的设计交易。DAC 达成文化通过股权伴建或营业额流水抽成等合理分成机制，将自身专业成本与项目的长效商业表现深度绑定，派驻专业人才，大幅分担业主的投资风险。'
  }
];

const PartnerShip: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number | null>(null);

  return (
    <main className="bg-[#0a0a0a] text-[#d4d4d4] min-h-screen pt-32 pb-24 px-6 md:px-12 space-y-20">
      <div className="max-w-[1800px] mx-auto space-y-16">
        
        {/* Hero Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[10px] tracking-[0.5em] text-[#c5a059] uppercase block font-mono">Vol. 07 / 战略同行合伙</span>
            <h1 className="text-4xl md:text-7xl font-serif-sc text-white leading-none">
              长期伴行者。
            </h1>
          </div>
          <div className="lg:col-span-4 border-l border-[#c5a059]/30 pl-6">
            <p className="text-xs md:text-sm text-white/40 tracking-[0.2em] leading-relaxed uppercase font-light">
              打破传统“图纸交付即撤场”的设计交易，以共同合伙人的姿态深度介入，致力于文旅项目的长远扎根与业绩释放。
            </p>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-36">
            <span className="text-[10px] tracking-widest text-[#c5a059] font-mono uppercase">四大核心伴行支柱 / Pillars</span>
            <h2 className="text-2xl md:text-4xl font-serif-sc text-white/90 leading-snug">
              我们不局限于物理图纸，而是重组一整套生命线。
            </h2>
            <p className="text-xs md:text-sm text-white/30 leading-loose font-light">
              点击右侧核心支柱，了解我们如何多维度护航项目的商业资产表现与精神内核。
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {pillars.map((pillar, idx) => {
              const isOpen = activePillar === idx;
              return (
                <div 
                  key={pillar.title}
                  onClick={() => setActivePillar(isOpen ? null : idx)}
                  className={`p-6 md:p-8 rounded-sm border cursor-pointer transition-all duration-500 ${
                    isOpen 
                      ? 'bg-[#141414] border-[#c5a059]/60 shadow-xl' 
                      : 'bg-[#141414]/40 border-white/5 hover:border-white/25'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center border border-white/10">
                        {pillar.icon}
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg text-white/90 font-serif-sc font-bold">{pillar.title}</h3>
                        <p className="text-xs text-white/40 mt-0.5 font-light">{pillar.desc}</p>
                      </div>
                    </div>
                    <ChevronRight 
                      size={20} 
                      className={`text-white/30 transition-transform duration-500 ${isOpen ? 'rotate-90 text-[#c5a059]' : ''}`} 
                    />
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-6 border-t border-white/5 text-xs md:text-sm text-white/60 leading-relaxed font-light space-y-4">
                          <p>{pillar.detail}</p>
                          <div className="flex items-center gap-2 text-[10px] text-[#c5a059] font-mono tracking-widest uppercase">
                            <ShieldCheck size={12} /> Verified DAC Framework
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>



        {/* Sub-component */}
        <div className="pt-12">
          <ServiceMap />
        </div>

      </div>
    </main>
  );
};

export default PartnerShip;
