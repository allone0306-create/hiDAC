import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { articleData } from './ArticleDetail';

const Thoughts: React.FC = () => {
  return (
    <main className="bg-[#0a0a0a] text-[#d4d4d4] min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto space-y-16">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-white/5 pb-10">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[10px] tracking-[0.5em] text-[#c5a059] uppercase block font-mono">Vol. 08 / Thoughts & Column</span>
            <h1 className="text-4xl md:text-7xl font-serif-sc text-white leading-none">
              思想汇与专栏。
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs md:text-sm text-white/40 tracking-[0.2em] leading-relaxed uppercase font-light">
              记录我们在文旅浪潮、空间设计哲学以及精神消费新范式中的观察、实践心得与深层行业辩证。
            </p>
          </div>
        </div>

        {/* Article List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-36">
            <div className="w-12 h-px bg-[#c5a059]" />
            <h2 className="text-lg md:text-xl font-serif-sc text-white/80 leading-relaxed">
              以思辨促进行动，用哲学重塑日常。
            </h2>
            <div className="flex flex-wrap gap-2.5 pt-4">
              {['空间哲学', '文旅未来', '在地转译', '精神消费'].map(tag => (
                <span key={tag} className="text-[10px] border border-white/10 text-white/40 px-2.5 py-1 rounded-sm uppercase">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 space-y-10">
            {articleData.map((article, index) => (
              <motion.article 
                key={article.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="group border-b border-white/5 pb-10 hover:border-[#c5a059]/30 transition-colors duration-500"
              >
                <Link to={`/thoughts/${article.id}`} className="space-y-4 block">
                  <div className="flex items-center gap-3 text-[10px] font-mono text-white/35">
                    <span>{article.date}</span>
                    <div className="w-3 h-px bg-white/15" />
                    <span className="text-[#c5a059] tracking-widest uppercase">{article.category}</span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-serif-sc text-white/85 group-hover:text-[#c5a059] transition-all duration-500 leading-snug font-medium group-hover:translate-x-1">
                    {article.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-8 h-px bg-white/10 group-hover:w-16 group-hover:bg-[#c5a059] transition-all duration-700" />
                    <span className="text-[9px] tracking-[0.4em] uppercase text-white/20 group-hover:text-white/60 transition-colors">Read Insight / 阅读全文</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Thoughts;
