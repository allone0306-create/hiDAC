import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Target, Compass } from 'lucide-react';
import { casesData } from './CaseArchives';

const CaseReportDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = casesData.find(c => c.slug === slug);

  if (!data) {
    return <div className="pt-40 text-center text-white/40 font-light">档案未找到 / Case Archive Not Found</div>;
  }

  return (
    <main className="bg-black text-white min-h-screen pt-24 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Back Link */}
        <Link to="/cases" className="inline-flex items-center gap-2 text-xs text-[#c5a059] hover:text-white tracking-widest uppercase transition-colors">
          <ArrowLeft size={14} /> 返回案例档案 / BACK TO CASES
        </Link>

        {/* Title Header */}
        <div className="space-y-4 border-b border-white/5 pb-8">
          <div className="flex items-center gap-3 text-xs text-white/40 font-mono">
            <span className="bg-[#c5a059]/20 text-[#c5a059] px-2.5 py-0.5 border border-[#c5a059]/30 rounded-sm font-bold uppercase">{data.type}</span>
            <span>00{data.id}</span>
            <span>/</span>
            <span className="tracking-wider text-white/60">{data.category}</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-serif-sc leading-tight text-white/90 font-bold">
            {data.title}
          </h1>
          
          <div className="flex items-center gap-2 text-xs text-white/40">
            <MapPin size={14} className="text-[#c5a059]" />
            <span>中国 · 达成文化重点伴行场域</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="aspect-[21/9] w-full bg-zinc-900 border border-white/5 rounded-sm overflow-hidden shadow-xl">
          <img 
            src={data.img} 
            alt={data.title} 
            className="w-full h-full object-cover brightness-90"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/IMG_0003.jpg";
            }}
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Left Metrics Box */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#141414] border border-white/5 p-6 space-y-6 rounded-sm">
              <h4 className="text-xs tracking-[0.2em] text-[#c5a059] uppercase font-mono font-bold border-b border-white/5 pb-3">核心指标 Metrics</h4>
              <div className="space-y-5">
                {data.metrics.map(st => (
                  <div key={st.label} className="space-y-1">
                    <div className="text-[10px] text-white/30 uppercase tracking-wider font-light">{st.label}</div>
                    <div className="text-xl md:text-2xl font-serif-sc text-white/90 font-bold">{st.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#141414]/40 border border-white/5 p-6 space-y-4 rounded-sm text-xs text-white/50 leading-relaxed font-light">
              <p className="flex gap-2"><Target size={14} className="text-[#c5a059] flex-shrink-0 mt-0.5" /> <strong>面临挑战:</strong> {data.challenge}</p>
              <p className="flex gap-2"><Compass size={14} className="text-[#c5a059] flex-shrink-0 mt-0.5" /> <strong>达成方案:</strong> {data.solution}</p>
            </div>
          </div>

          {/* Right Editorial Prose */}
          <div className="lg:col-span-8 space-y-8">
            <div className="prose prose-invert max-w-none text-white/60 leading-relaxed font-light text-sm md:text-base space-y-6">
              <h3 className="text-lg md:text-2xl font-serif-sc text-white/90 font-bold">设计复盘 & 场域洞察</h3>
              <p className="italic text-white/80 border-l-2 border-[#c5a059]/40 pl-4 my-6">
                “{data.designerView}”
              </p>
              
              <h3 className="text-lg md:text-2xl font-serif-sc text-white/90 font-bold pt-4">在地生态与商业的完美融合</h3>
              <p>
                在这项实践中，DAC 研究院不仅是图纸的绘制者，更是生活方式的编写者。我们从项目的选址测绘、在地材质采购、施工监理，一直陪伴到正式开业后的首批高端社群导入。
              </p>
              <p>
                通过轻门槛的伴行分润合作，我们大幅降低了业主的先期投入门槛。将设计成果的价值变现，托付于真实的客房流量表现，实现商业与美学维度的共同稳健成长。
              </p>
            </div>

            <div className="pt-8 border-t border-white/5 flex justify-between items-center text-[11px] text-white/30">
              <span>DAC 达成文化 · 伴行案例库</span>
              <span>© 2026 DAC FUTURE</span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default CaseReportDetail;
