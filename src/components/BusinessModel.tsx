import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const BusinessModel: React.FC = () => {
  return (
    <section className="py-24 md:py-36 px-6 md:px-12 bg-zinc-100 text-black">
      <div className="max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <span className="text-xs tracking-[0.3em] text-black/40 uppercase mb-4 block font-mono">New Business Logic</span>
          <h2 className="text-3xl md:text-5xl font-serif-sc leading-tight">
            我们不是一次性交付，<br />
            而是长期共生。
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Traditional Model */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 bg-white border border-black/5 flex flex-col justify-between rounded-sm shadow-sm"
          >
            <div>
              <h3 className="text-lg font-serif-sc mb-8 tracking-widest text-black/50 font-bold uppercase">传统设计 / 顾问公司</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <XCircle size={18} className="mt-1 flex-shrink-0 text-black/35" />
                  <div>
                    <p className="font-semibold text-black/70 text-sm md:text-base">一次性交付交易</p>
                    <p className="text-xs md:text-sm text-black/45 mt-1 leading-relaxed">项目完成即合作终止，无法应对市场后续变化与运营中的真实痛点。</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <XCircle size={18} className="mt-1 flex-shrink-0 text-black/35" />
                  <div>
                    <p className="font-semibold text-black/70 text-sm md:text-base">设计图纸收费制</p>
                    <p className="text-xs md:text-sm text-black/45 mt-1 leading-relaxed">仅对硬装图纸和效果图负责，完全不对项目的商业运营和生存结果负责。</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <XCircle size={18} className="mt-1 flex-shrink-0 text-black/35" />
                  <div>
                    <p className="font-semibold text-black/70 text-sm md:text-base">专业板块割裂</p>
                    <p className="text-xs md:text-sm text-black/45 mt-1 leading-relaxed">空间设计、品牌视觉、内容运营割裂由不同外包负责，缺乏系统性闭环。</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-10 pt-6 border-t border-black/5 italic text-black/30 text-xs font-light">
              短期交易，长期脱节
            </div>
          </motion.div>

          {/* DAC Model */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 md:p-10 bg-black text-white flex flex-col justify-between relative overflow-hidden rounded-sm shadow-md"
          >
            <div className="absolute -top-6 -right-6 p-8 opacity-[0.04] text-white pointer-events-none">
              <CheckCircle2 size={160} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-lg font-serif-sc mb-8 tracking-widest text-[#c5a059] font-bold uppercase">DAC 长期同行模式</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-[#c5a059]" />
                  <div>
                    <p className="font-semibold text-white/90 text-sm md:text-base">生命周期同行</p>
                    <p className="text-xs md:text-sm text-white/50 mt-1 leading-relaxed">深度参与项目生命周期，根据首批访客反馈和数据，持续迭代生活系统内容。</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-[#c5a059]" />
                  <div>
                    <p className="font-semibold text-white/90 text-sm md:text-base">商业利益绑定</p>
                    <p className="text-xs md:text-sm text-white/50 mt-1 leading-relaxed">将前期设计费与后续项目的核心商誉、真实营业流水深度挂钩，为结果买单。</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-[#c5a059]" />
                  <div>
                    <p className="font-semibold text-white/90 text-sm md:text-base">轻门槛接入 + 运营共赢</p>
                    <p className="text-xs md:text-sm text-white/50 mt-1 leading-relaxed">最大程度降低前期固定合作成本，通过中长期的运营分润完成价值回报与共享。</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-10 relative z-10">
              <Link to="/partnership" className="inline-flex items-center gap-2.5 text-xs md:text-sm tracking-widest hover:text-[#c5a059] transition-colors group text-[#c5a059] font-medium uppercase">
                了解合作模式 <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
