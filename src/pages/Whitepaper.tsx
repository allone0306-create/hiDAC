import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Compass, ShieldCheck } from 'lucide-react';

const Whitepaper: React.FC = () => {
  return (
    <main className="bg-[#0a0a0a] text-[#d4d4d4] min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Navigation Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-xs text-[#c5a059] hover:text-white tracking-widest uppercase transition-colors">
          <ArrowLeft size={14} /> 返回首页 / BACK TO HOME
        </Link>

        {/* Page Header */}
        <div className="space-y-6 border-b border-white/5 pb-8">
          <span className="text-xs text-[#c5a059] font-mono tracking-widest uppercase block">DAC FUTURE LAB / 达成未来研究院</span>
          <h1 className="text-3xl sm:text-5xl font-serif-sc leading-tight text-white/95 font-bold">
            新文旅时代的生活重塑宣言
          </h1>
          <p className="text-sm text-[#c5a059] tracking-widest font-light font-serif-sc italic">
            告别流量幻象，回归人本初心
          </p>
          <p className="text-xs text-white/30 font-mono tracking-wider uppercase">
            PUBLISHED BY DAC FUTURE LAB · 2026 EDITION
          </p>
        </div>

        {/* Immersive Preface Blockquote */}
        <div className="bg-white/[0.01] border-l-2 border-[#c5a059] p-6 md:p-8 text-white/80 text-sm md:text-base leading-relaxed space-y-4 rounded-sm">
          <p>
            当中国文旅产业站在<span className="text-[#c5a059] font-semibold">“十五五”开局的历史节点</span>，回望过去十余年的狂飙突进，一场深刻的范式革命正加速到来。从“打卡式观光”到“沉浸式体验”，从“流量至上”到“价值内生”，行业告别了千城一面的地标竞赛、同质化小镇的盲目复制，以及重资产投入下的空心化困局。
          </p>
        </div>

        {/* High-level overview columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-[#141414] border border-white/5 rounded-sm flex gap-3">
            <BookOpen className="w-6 h-6 text-[#c5a059] flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="text-xs font-bold text-white/90 font-serif-sc tracking-widest uppercase">消费与精神共振</h3>
              <p className="text-[10px] text-white/40 font-light leading-relaxed">Z世代成为主力，中青年渴望情绪疗愈，大众旅行诉求从“到此一游”转向“心灵栖居”。</p>
            </div>
          </div>
          <div className="p-6 bg-[#141414] border border-white/5 rounded-sm flex gap-3">
            <Compass className="w-6 h-6 text-[#c5a059] flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="text-xs font-bold text-white/90 font-serif-sc tracking-widest uppercase">国家战略引领</h3>
              <p className="text-[10px] text-white/40 font-light leading-relaxed">文化强国、旅游强国建设深入推进，“以文塑旅、以旅彰文”定位幸福支柱产业。</p>
            </div>
          </div>
          <div className="p-6 bg-[#141414] border border-white/5 rounded-sm flex gap-3">
            <ShieldCheck className="w-6 h-6 text-[#c5a059] flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="text-xs font-bold text-white/90 font-serif-sc tracking-widest uppercase">产业深度重构</h3>
              <p className="text-[10px] text-white/40 font-light leading-relaxed">数字化、绿色化浪潮席卷行业，长效运营、内容深耕、人本价值成为生存核心。</p>
            </div>
          </div>
        </div>

        {/* Article Editorial Content */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-invert max-w-none text-white/65 leading-relaxed font-light text-sm md:text-base space-y-10"
        >
          <p>
            DAC未来研究院立足中国时代脉搏、行业变革与产业趋势，坚定宣告：<span className="text-[#c5a059] font-semibold">新文旅的终极命题，绝非打造短暂的目的地，而是构建可共生、可栖居、可成长的第二生活系统。</span>空间不再是拍照的背景板，而是承载文化根脉、调谐生命韵律、安放精神乡愁的能量磁场，让每一次旅居，都成为生活的重塑与生命的回归。
          </p>

          {/* CHAPTER 1 */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-[#c5a059] rounded-full" />
              <h2 className="text-xl md:text-2xl font-serif-sc text-white/95 font-bold tracking-wide">
                深植在地根脉，重塑文化表达 —— 考证式文化活化
              </h2>
            </div>
            <p>
              文化是文旅的灵魂，在地文化是一方水土的精神密码。当下行业仍普遍存在文化符号生搬硬套、仿古造景千篇一律、非遗传承流于表面的痛点，割裂了土地与人的情感联结，丧失了文化的原生生命力。
            </p>
            <p>
              根植于中华优秀传统文化创造性转化、创新性发展的时代要求，<span className="text-[#c5a059] font-semibold">DAC倡导考证式在地文化挖掘与活化，拒绝符号化堆砌，追求根脉性共生：</span>
            </p>
            
            {/* Chapter 1 sub-sections */}
            <div className="space-y-6 pl-4 border-l border-white/5 mt-6">
              <div className="space-y-2">
                <h4 className="text-sm text-white font-semibold font-serif-sc">风土肌理溯源（Geomorphic Origin）</h4>
                <p className="text-xs md:text-sm text-white/50 leading-relaxed font-light">
                  敬畏自然禀赋，系统考察地域地质构成、土壤特性、主导风向、日照轨迹、水文脉络，甄选本土天然石材、原生植被与在地建材，<span className="text-[#c5a059]">让建筑与空间生长于土地肌理之上</span>，践行“天人合一”的东方智慧，契合双碳目标下的绿色低碳发展理念。
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm text-white font-semibold font-serif-sc">生活文脉深潜（Cultural Deep-dive）</h4>
                <p className="text-xs md:text-sm text-white/50 leading-relaxed font-light">
                  深耕村社千年历史、宗族记忆、地方工序、民俗礼仪与市井烟火，打捞散落在时光里的生活智慧，挖掘非遗技艺、传统节庆、民间故事的精神内核，拒绝浅表化复刻，<span className="text-[#c5a059]">将文化底蕴转译为符合当代人审美与生活习惯的设计语言</span>，让文化可感、可触、可体验。
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm text-white font-semibold font-serif-sc">材质体温留存（Material Tactility）</h4>
                <p className="text-xs md:text-sm text-white/50 leading-relaxed font-light">
                  摒弃过度工业化、标准化的冰冷材质，广泛应用手工夯土、原木格栅、古法砖瓦、天然织物等承载匠人体温的材料，保留材质原生肌理与手工痕迹，传递土地的温度与时光的厚重，<span className="text-[#c5a059]">让空间成为承载文化记忆、唤醒情感共鸣的精神容器</span>。
                </p>
              </div>
            </div>
          </div>

          {/* CHAPTER 2 */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-[#c5a059] rounded-full" />
              <h2 className="text-xl md:text-2xl font-serif-sc text-white/95 font-bold tracking-wide">
                构建第二生活场域，回归生命本真 —— 人本化栖居标准
              </h2>
            </div>
            <p>
              中国城镇化进程中，都市人群深陷快节奏、高压力、碎片化的生存困境，焦虑、失眠、精神内耗成为普遍痛点，对松弛感、归属感、疗愈感的需求空前迫切。新文旅的核心，正是回应这一时代焦虑，打造区别于都市快节奏生活的<span className="text-[#c5a059] font-semibold">第二生活场域</span>——它不是第一生活的简单位移，而是远离喧嚣、回归本真、疗愈身心的生活转场与自我重建。
            </p>
            <p>
              DAC融合东方养生智慧与现代空间设计，建立第二生活场域人本化标准，让空间服务于人的生命健康与精神丰盈：
            </p>

            {/* Chapter 2 sub-sections */}
            <div className="space-y-6 pl-4 border-l border-white/5 mt-6">
              <div className="space-y-2">
                <h4 className="text-sm text-white font-semibold font-serif-sc">微气候自然调谐（Micro-climatic Alignment）</h4>
                <p className="text-xs md:text-sm text-white/50 leading-relaxed font-light">
                  顺应地域气候特征，科学规划建筑朝向、遮阳挑檐与通风风道，结合地源热泵、自然采光、雨水回收等绿色技术，摒弃工业化空调的生硬调节，维持人体最舒适的温湿度与空气流通，<span className="text-[#c5a059]">打造四季宜人、生态共生的自然微气候</span>，践行绿色文旅理念。
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm text-white font-semibold font-serif-sc">心流照明情绪疗愈（Circadian Lighting）</h4>
                <p className="text-xs md:text-sm text-white/50 leading-relaxed font-light">
                  拒绝炫目的强光直射与商业霓虹，遵循人体生理节律，采用间接漫射光、暖调柔光、水纹光影等柔和照明系统，模拟自然光影变化，激活副交感神经，舒缓神经紧张，调理失眠焦虑，<span className="text-[#c5a059]">让光线成为安抚情绪、滋养心灵的温柔力量</span>。
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm text-white font-semibold font-serif-sc">情感包裹安全共生（Emotional Envelopment）</h4>
                <p className="text-xs md:text-sm text-white/50 leading-relaxed font-light">
                  设计洄游动线、私密庭院、温润触觉的羊毛布艺、原木家具，营造如母体般安心、松弛的物理空间，隔绝外界喧嚣与压力；融合在地烟火气与人文温度，<span className="text-[#c5a059]">打造邻里共生、自然共生、身心共生的情感场场域</span>，让旅居者找回归属感、安全感与幸福感，实现从“观光客”到“生活者”的身份转变。
                </p>
              </div>
            </div>
          </div>

          {/* CHAPTER 3 */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-[#c5a059] rounded-full" />
              <h2 className="text-xl md:text-2xl font-serif-sc text-white/95 font-bold tracking-wide">
                长期价值共生，共创产业未来 —— 伙伴式运营革新
              </h2>
            </div>
            <p>
              中国文旅产业正告别“重开发、轻运营”的粗放时代，进入“内容为王、运营致胜”的价值深耕期。大量项目因重资产投入、短期化思维、运营能力缺失，陷入“开业即巅峰、后期即衰败”的困境，固定资产折旧负债高企，难以实现可持续发展。
            </p>
            <p>
              DAC打破设计行业“交付图纸即结束”的传统模式，顺应文旅产业“长期主义、价值共生”的发展趋势，创新提出<span className="text-[#c5a059] font-semibold">战略同行·长期伴行商业逻辑</span>，以伙伴式思维，与项目共担风险、共享价值、共谋长远：
            </p>

            {/* Chapter 3 sub-sections */}
            <div className="space-y-6 pl-4 border-l border-white/5 mt-6">
              <div className="space-y-2">
                <h4 className="text-sm text-white font-semibold font-serif-sc">利益深度绑定，共担发展责任（Co-shared Capital）</h4>
                <p className="text-xs md:text-sm text-white/50 leading-relaxed font-light">
                  摒弃一次性设计收费模式，<span className="text-[#c5a059]">将专业服务成本与项目长期商誉、周度真实营收流水深度挂钩</span>，建立精细化运营分成机制，从“设计服务商”转变为“价值共创伙伴”，与投资方、运营方共同面对市场挑战，共担生存与发展责任。
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm text-white font-semibold font-serif-sc">专业人才驻场，深耕内容运营（On-site Curation）</h4>
                <p className="text-xs md:text-sm text-white/50 leading-relaxed font-light">
                  派驻专业策展、文化运营、客群服务人才长期入驻场域，深耕在地文化内容、策划沉浸式体验活动、搭建高净值客群服务体系，<span className="text-[#c5a059]">推动流量向“留量”转化</span>，实现客群长期循环与价值沉淀。
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm text-white font-semibold font-serif-sc">长期价值共生，赋能产业升级（Ecosystem Optimization）</h4>
                <p className="text-xs md:text-sm text-white/50 leading-relaxed font-light">
                  立足文旅产业高质量发展目标，以文化为内核、内容为支撑、运营为保障，助力项目摆脱同质化竞争，构建不可复制的核心竞争力；<span className="text-[#c5a059]">推动文旅与乡村振兴、康养产业、文化创意深度融合</span>，赋能区域经济发展，共创文旅产业长期价值与美好未来。
                </p>
              </div>
            </div>
          </div>

          {/* EPILOGUE / CONCLUSION */}
          <div className="space-y-4 pt-8 border-t border-white/10">
            <h2 className="text-xl md:text-2xl font-serif-sc text-white/95 font-bold tracking-wide">
              以生活重塑，赴时代之约
            </h2>
            <p>
              新文旅时代，不是目的地的竞争，而是生活方式的重塑；不是流量的追逐，而是价值的坚守；不是符号的堆砌，而是文化的共生。
            </p>
            <p className="italic text-white/80">
              “站在文化强国、旅游强国建设的时代浪潮中，DAC始终坚信：文旅的本质，是以人为本，是文化回归，是生活重塑。我们愿以在地文化为根，以人本空间为体，以长期运营为翼，与所有同行者一道，告别浮躁幻象，深耕价值本心，打造承载文化根脉、安放精神乡愁、滋养生命成长的第二生活系统，让每一处文旅空间，都成为人们心之所向、身之所栖、情之所归的理想家园，共同书写中国文旅高质量发展的新篇章。”
            </p>
          </div>
        </motion.article>

        {/* Bottom footer credit */}
        <div className="pt-12 border-t border-white/5 text-center text-xs text-white/35 font-mono">
          © 2026 DAC FUTURE LAB. ALL RIGHTS RESERVED.
        </div>

      </div>
    </main>
  );
};

export default Whitepaper;
