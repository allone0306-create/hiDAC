import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  desc: string;
  detail: string;
}

const services: Service[] = [
  { 
    id: 'A', 
    title: '在地文化研究', 
    desc: '地志精神核芯的挖掘与IP转译',
    detail: '深入土地的微观生活历史，通过田野调查、文献考证与非遗访谈，建立土地文化基因库。我们将碎裂的文化符号，转译为具备商业延展力与独特美学高度的精神IP资产，为项目注入独一无二的灵魂内核。'
  },
  { 
    id: 'B', 
    title: '文旅战略策划', 
    desc: '以生活方式为导向的顶层设计',
    detail: '拒绝同质化的开发逻辑。我们从未来的生活需求出发，进行项目顶层战略规划与产品业态构建。通过对客流、商流与情感流的精细推演，打造具备自发裂变与长期生存能力的复合场域生态。'
  },
  { 
    id: 'C', 
    title: '空间场域设计', 
    desc: '构建具备情绪共鸣与物理深度的实体场域',
    detail: '空间是情绪的容器。我们整合了总体建筑规划、室内陈设以及景观设计，重点关注日光倾泻的动线、天然材质的触感与视野的开合。在克制介入的前提下，通过精湛的设计转译，实现人与建筑的深度交谈。'
  },
  { 
    id: 'D', 
    title: '艺术系统介入', 
    desc: '艺术介入生活系统的完整叙事',
    detail: '艺术不是空间的点缀，而是底层体验的驱动器。我们整合国内外先锋艺术家资源，为项目量身定制公共艺术装置、主题展陈与美学沙龙。让居住空间升级为可感知的沉浸式美术馆，激发到访者的美学直觉。'
  },
  { 
    id: 'E', 
    title: '品牌视觉识别', 
    desc: '当代高拟真设计与多端情感连接',
    detail: '基于当代审美高度与新媒体传播的底层逻辑，构建完整的品牌视觉形象。从标志设计、物料规范到数字化介面体验，用先锋的视觉语言和极简的美学风骨，传达项目背后蕴含的生活理念。'
  },
  { 
    id: 'F', 
    title: '内容运营系统', 
    desc: '链接人与空间的持续生长机制',
    detail: '物理空间的建成仅仅是故事的序章，长效的内容灌注才是生命的维系。我们协助项目策划和运营艺术展览、在地市集、生活节庆等长效内容产品。打造具备深度认同感与自发创造力的社群连接器。'
  },
  { 
    id: 'G', 
    title: '长期联合同行', 
    desc: '以利益共同体姿态深度护航',
    detail: '我们打破传统咨询公司一锤子买卖的模式，通过合理的股权共建、运营分成等机制，将前期的策划设计成本转化为项目的长期股权。派驻专业运营骨干深度入局，根据运营数据动态调整，为商业成败保驾护航。'
  },
  { 
    id: 'H', 
    title: '未来生活系统', 
    desc: '定义第二生命的品质标尺',
    detail: '整合度假民宿、长租公寓、康养营地等多重业态，导入DAC专属的生命康健方案。通过科技与自然手法的融合（如微气候控制、声学安抚系统、膳食美学等），为现代都市高压社群提供一套系统化的解压与康养处方。'
  }
];

const ServiceMap: React.FC = () => {
  const [activeService, setActiveService] = useState<Service | null>(null);

  const phases = [
    { name: 'Research / 考古探索', indexes: [0, 1] },
    { name: 'Creation / 空间构筑', indexes: [2, 3] },
    { name: 'Identity / 精神传达', indexes: [4, 5] },
    { name: 'Operation / 长期同行', indexes: [6, 7] }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0a0a0a] overflow-hidden relative border-t border-white/5">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <span className="text-[9px] tracking-[0.6em] text-white/30 uppercase block font-mono">Vol. 04 / Services</span>
            <h2 className="text-3xl md:text-5xl font-serif-sc leading-tight text-white/90">
              从文化考古到长期伴行<br />
              <span className="italic font-light text-[#c5a059] opacity-90">全生命周期闭环。</span>
            </h2>
          </motion.div>
          <p className="text-white/45 text-xs md:text-sm tracking-[0.2em] uppercase max-w-xs leading-loose font-light border-l border-[#c5a059]/30 pl-6">
            通过模块化整合，为文旅及第二生活空间注入深度的灵魂与高维度的商业价值。
          </p>
        </div>

        {/* Phase Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, pIndex) => (
            <div key={phase.name} className="space-y-6">
              <div className="text-[10px] tracking-[0.3em] text-white/35 font-mono uppercase border-b border-white/10 pb-3">
                Phase 0{pIndex + 1} / {phase.name}
              </div>
              <div className="space-y-4">
                {phase.indexes.map((index) => {
                  const service = services[index];
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (pIndex * 2 + index % 2) * 0.08 }}
                      onClick={() => setActiveService(service)}
                      className="p-6 bg-[#141414] hover:bg-[#1c1c1c] border border-white/5 hover:border-[#c5a059]/40 rounded-sm cursor-pointer transition-all duration-500 group flex flex-col justify-between min-h-[180px]"
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-mono text-white/30 group-hover:text-[#c5a059] transition-colors">0{index + 1}</span>
                        <ArrowUpRight size={14} className="text-white/20 group-hover:text-[#c5a059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                      </div>
                      <div className="space-y-2 mt-8">
                        <h3 className="text-base md:text-lg font-serif-sc text-white/90 font-semibold group-hover:text-[#c5a059] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs text-white/40 line-clamp-2 font-light leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Overlay Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setActiveService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#141414] max-w-xl w-full p-8 md:p-10 border border-[#c5a059]/30 rounded-sm space-y-6 relative text-left shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveService(null)}
                className="absolute top-6 right-6 text-white/40 hover:text-[#c5a059] transition-colors"
              >
                <X size={20} />
              </button>

              <div className="space-y-1.5">
                <span className="text-xs font-mono text-[#c5a059] tracking-widest block uppercase">SERVICE MODULE {activeService.id}</span>
                <h3 className="text-2xl md:text-3xl font-serif-sc text-white/95 font-bold">
                  {activeService.title}
                </h3>
              </div>

              <div className="w-12 h-0.5 bg-[#c5a059]" />

              <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                {activeService.detail}
              </p>

              <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                <span className="text-[9px] tracking-widest text-white/30 uppercase font-mono">DAC Ecosystem</span>
                <button 
                  onClick={() => setActiveService(null)}
                  className="text-xs text-[#c5a059] hover:underline tracking-wider"
                >
                  Close / 关闭
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServiceMap;
