import React from 'react';
import { motion } from 'framer-motion';

interface LivingModule {
  title: string;
  characteristic: string;
  summary: string;
  desc: string;
  img: string;
}

const modules: LivingModule[] = [
  { 
    title: '山居', 
    characteristic: '绝壁隐逸 · 云海听涛 · 真空场域',
    summary: '把建筑的尺度隐入峭壁的起伏，在山巅与云雾交汇处，完成人与大地最深刻的精神交锋。',
    desc: '在绝壁与高空之间构筑的悬托居住体系。核心在于利用地形高差营造宏大的视觉跨度，以极简风骨对传统乡土构架做当代转译，引导居住者的身心在绝对隐逸的物理高度上完成精神洗礼。', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%8D%97%E5%B7%9D%E8%89%AF%E7%91%9C%E5%85%BB%E7%94%9F%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97/IMG_7746.png' 
  },
  { 
    title: '湖居', 
    characteristic: '水平延伸 · 苍洱波光 · 时间留白',
    summary: '致力于捕捉水面的微波与宁静，将生活的喧嚣彻底消融在倒影中，实现空间与水天一色的水平共鸣。',
    desc: '基于水域生态的横向亲水居住系统。通过大面积落地透光与悬空池水平台设计，将苍山洱海的微妙日光折射过滤为室内的日常呼吸。这是一套主张“慢生活”的感官体系，消融建筑与自然的物理隔阂。', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E7%BE%8E%E5%88%A9%E4%BA%9A%E9%85%92%E5%BA%97/19.png' 
  },
  { 
    title: '村落', 
    characteristic: '农耕记忆 · 村社里弄 · 邻里烟火',
    summary: '重新拼凑破碎的泥土印记，在传统乡村的里弄肌理中，重建具备温情与人伦根骨的生命共同体。',
    desc: '复兴当代野逸乡野邻里关系的社会化居住体系。我们保留场地原生的农业植被景观与石瓦肌理，通过导入共享茶堂、社区窑房和手工织造坊等功能模块，打破孤岛状态，赋予其真实的乡土体温。', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E4%B9%A1%E6%9D%91/%E5%8D%97%E5%B9%B3%E6%B5%A6%E5%9F%8E.jpg' 
  },
  { 
    title: '康养', 
    characteristic: '呼吸节律 · 膳食美学 · 微气候调理',
    summary: '通过精细的微气候物理营造，将自然界温润的日光、风息转化为生命能量，打造身心自我修复的环境。',
    desc: '结合气候环境、中草药理和声学安抚的深度能量净化系统。引入多孔粘土墙与软性新风对流，根据日出日落智能调谐室内的照度与气味，从根源处疏解城市高压群落的慢性焦虑，调理失眠。', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%8D%97%E5%B7%9D%E8%89%AF%E7%91%9C%E5%85%BB%E7%94%9F%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97/IMG_7742.png' 
  },
  { 
    title: '艺术', 
    characteristic: '无用留白 · 先锋策展 · 博物居住',
    summary: '将居住演化为一场永不落幕的感官艺术实验，让日常器物成为美学直觉的延伸，无缝浸润身心。',
    desc: '以“空间即美术馆”为底层逻辑的创造性旅居系统。采用洄游式的非功能动线与高度戏剧性的冷暖光影对比，在克制的材质底色下，唤醒到访者对日常之美的敏感度与本真直觉。', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/63a0d73ccnb76e3298ba28cbdcaf4fe2.jpg' 
  },
  { 
    title: '自然疗愈', 
    characteristic: '温柔包裹 · 情绪安抚 · 自我重塑',
    summary: '以极致温润的细节关怀为基石，织就一座安全踏实的心灵包围圈，让健康与松弛自然发生. ',
    desc: '专为高压职业人群定制的心理修复居住系统。整体空间采用大比例弧形体量与自然矿物泥色调，消解尖锐硬朗。配套正念茶室与森林沐浴体验，在无功利干扰的松弛磁场里，帮助自我重新启程。', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E7%BE%8E%E5%88%A9%E4%BA%9A%E9%85%92%E5%BA%97/9.jpg' 
  }
];

const SecondLifeSystem: React.FC = () => {
  return (
    <main className="bg-[#0a0a0a] text-[#d4d4d4] min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end"
        >
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[10px] tracking-[0.6em] text-white/30 uppercase font-mono block"></span>
            <h1 className="text-4xl md:text-7xl font-serif-sc leading-tight text-white/90">
              定义未来的<br />
              <span className="italic font-light text-[#c5a059]">旅居生活方式。</span>
            </h1>
          </div>
          <div className="lg:col-span-4 border-l border-[#c5a059]/30 pl-6">
            <p className="text-xs md:text-sm tracking-[0.25em] text-white/40 uppercase leading-relaxed font-light">
              打破传统开发商只卖房子的狭隘逻辑，为现代都市社群提供一整套完整的精神栖息与生命能量重组方案。
            </p>
          </div>
        </motion.div>

        {/* Modules List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.08 }}
              className="bg-[#141414] border border-white/5 hover:border-[#c5a059]/30 rounded-sm overflow-hidden shadow-lg flex flex-col group"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <img 
                  src={m.img} 
                  alt={m.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover brightness-[0.8] group-hover:scale-105 group-hover:brightness-95 transition-all duration-[1.5s]"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = "https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/IMG_0003.jpg";
                  }}
                />
                <div className="absolute bottom-4 left-4 bg-black/55 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-sm">
                  <span className="text-[10px] font-mono text-white/60 tracking-widest">SYSTEM 0{i + 1}</span>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline">
                    <h2 className="text-2xl font-serif-sc text-white/95 font-bold group-hover:text-[#c5a059] transition-colors duration-500">
                      {m.title}
                    </h2>
                    <span className="text-[10px] text-white/30 tracking-widest uppercase font-mono font-light">
                      {m.characteristic.split(' · ')[0]}
                    </span>
                  </div>
                  
                  <p className="text-xs tracking-wider text-[#c5a059] border-b border-[#c5a059]/10 pb-3 font-medium">
                    {m.characteristic}
                  </p>
                  
                  <p className="text-sm text-white/85 font-medium leading-relaxed">
                    {m.summary}
                  </p>
                  
                  <p className="text-xs text-white/45 font-light leading-relaxed pt-2">
                    {m.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SecondLifeSystem;
