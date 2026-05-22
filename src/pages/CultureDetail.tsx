import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { cultureData } from './CultureResearch';
import { ArrowLeft } from 'lucide-react';

const CultureDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const data = cultureData.find(c => c.id === id);

  if (!data) return <div className="pt-40 text-center text-white/40 font-light">内容档案不存在 / Archive Not Found</div>;

  return (
    <main className="bg-black text-white min-h-screen pt-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-full h-[60vh] relative overflow-hidden"
      >
        <img 
          src={data.img} 
          alt={data.title}
          className="w-full h-full object-cover brightness-[0.7] hover:brightness-90 transition-all duration-1000"
          onError={(e) => {
            const target = e.currentTarget;
            target.onerror = null;
            target.src = "https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E7%AA%91%E6%B4%9E/%E7%AA%91%E6%B4%9E2.png";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0d0d0d]" />
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 pb-24 relative -mt-32 z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#0d0d0d] border border-[#c5a059]/20 p-8 md:p-16 shadow-2xl rounded-sm"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6 border-b border-white/5 pb-6">
            <span className="text-xs tracking-[0.4em] text-[#c5a059] uppercase font-mono">{data.region} / ARCHAEOLOGY</span>
            <div className="w-6 h-px bg-white/10" />
            <div className="flex flex-wrap gap-2 md:gap-4">
              {data.tags.map(tag => (
                <span key={tag} className="text-[10px] text-white/40 uppercase tracking-wider font-light">#{tag}</span>
              ))}
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-serif-sc leading-tight mb-12 text-white/90">
            {data.title}
          </h1>

          <div 
            className="prose prose-invert max-w-none text-white/65 leading-relaxed font-light space-y-6 text-sm md:text-base 
              prose-headings:font-serif-sc prose-headings:text-white/90 prose-headings:text-lg md:prose-headings:text-2xl prose-headings:mt-8 prose-headings:mb-4 prose-headings:font-semibold"
            dangerouslySetInnerHTML={{ __html: data.content || "" }}
          />

          <div className="mt-16 pt-8 border-t border-white/5">
            <Link to="/culture" className="text-xs tracking-widest uppercase inline-flex items-center gap-2.5 group text-[#c5a059] hover:text-white transition-colors">
              <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-300" /> Back to Database / 返回在地数据库
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default CultureDetail;
