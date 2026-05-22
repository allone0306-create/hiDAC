import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { reportData } from './ReportDetail';

const FutureLab: React.FC = () => {
  return (
    <main className="bg-[#0a0a0a] text-[#d4d4d4] pt-32 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-[1800px] mx-auto space-y-16 md:space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] tracking-[0.5em] text-[#c5a059] uppercase block font-mono">Intelligence Platform / 研究院</span>
            <h1 className="text-4xl md:text-7xl font-serif-sc text-white leading-none">
              未来研究院。
            </h1>
          </div>
          <div className="lg:col-span-5 border-l border-[#c5a059]/30 pl-6">
            <p className="text-xs md:text-sm text-white/40 tracking-[0.2em] leading-relaxed uppercase font-light">
              通过社会学、生活美学与文旅消费趋势的交叉考证，我们为长期伴行项目与行业提供敏锐的前瞻性思想给养。
            </p>
          </div>
        </div>

        {/* List of Reports */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-36">
            <div className="w-12 h-px bg-[#c5a059]" />
            <h2 className="text-xl md:text-2xl font-serif-sc text-white/80 leading-relaxed">
              破解时代焦虑下，旅人最真实的精神归处与第二生命系统。
            </h2>
            <p className="text-xs md:text-sm text-white/30 leading-loose font-light">
              数据是有温度的，每一份白皮书都是我们对乡村田野及高净值社群心理底色的深刻侧写。
            </p>
          </div>

          <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-white/5 pt-8 lg:pt-0 lg:pl-16 space-y-6">
            {reportData.map((report, index) => (
              <Link 
                key={report.id}
                to={`/lab/${report.id}`}
                className="block group border-b border-white/5 pb-8 hover:border-[#c5a059]/30 transition-colors"
              >
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4"
                >
                  <div className="space-y-3 max-w-xl">
                    <span className="text-[9px] tracking-widest text-white/30 uppercase font-mono block">
                      {report.year} / {report.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-serif-sc text-white/85 group-hover:text-[#c5a059] transition-colors duration-300 font-medium">
                      {report.title}
                    </h3>
                    <p className="text-xs text-white/40 line-clamp-2 leading-relaxed font-light">
                      {report.summary}
                    </p>
                  </div>

                  <span className="text-[9px] tracking-widest uppercase border border-white/15 px-4 py-2 rounded-sm group-hover:bg-[#c5a059] group-hover:text-black group-hover:border-[#c5a059] transition-all duration-300 self-start sm:self-center font-mono">
                    Read Report
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quote box */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white/[0.01] border border-white/5 p-10 md:p-20 text-center space-y-6 relative overflow-hidden rounded-sm"
        >
          <div className="absolute -top-10 -left-4 p-8 text-[180px] font-serif-sc font-bold opacity-[0.01] select-none leading-none pointer-events-none">“</div>
          <h2 className="text-xl md:text-3xl font-serif-sc italic text-white/90 leading-relaxed">
            “数据是冰冷的，但人心所向的生活是有温度的。”
          </h2>
          <p className="text-xs md:text-sm text-white/40 max-w-lg mx-auto font-light leading-relaxed">
            我们拒绝迎合流量的平庸报告。这里的每一份考证都建立在对土地的真诚热爱和对人性的深刻观察之上。
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default FutureLab;
