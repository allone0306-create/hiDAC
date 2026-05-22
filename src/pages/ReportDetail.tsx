import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, Share2 } from 'lucide-react';

export interface ReportItem {
  id: string;
  year: string;
  category: string;
  title: string;
  author: string;
  summary: string;
  content: string;
  image: string;
  stats: { label: string; value: string }[];
}

export const reportData: ReportItem[] = [
  {
    id: 'industry-migration-2024',
    year: '2024',
    category: '行业趋势',
    title: '中国文旅行业：从民宿到生活系统的结构性回归',
    author: 'DAC 未来研究院',
    summary: '本报告深入探讨了中国文旅市场在后疫情时代的深层逻辑演化，分析了消费者如何从简单的“目的地打卡”转向追求“完整的第二生活系统”。',
    image: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/IMG_0010.jpg',
    stats: [
      { label: '市场增长率', value: '+24%' },
      { label: '长住意向', value: '68%' },
      { label: '情感消费比', value: '45%' }
    ],
    content: `
      <h3>01 范式转换：从空间消费到时间消费</h3>
      <p>传统的文旅开发是基于“空间”的，即如何通过华丽的硬件设施吸引游客的眼球。然而，新一代消费者更关注的，是在特定空间内“如何度过时间”。这意味着，运营内容 and 生活系统的构建，其重要性已远超物理建筑本身。</p>
      <h3>02 “第二生活”的全面崛起</h3>
      <p>随着混合办公模式和数字游民产业的普及，城市精英阶层正在积极寻找介于“城市”与“荒野”之间的长期栖息地。这并非是短暂的度假需求，而是一种结构性的居住大迁徙——在自然温润的环境下，重建工作与生活的健康平衡。</p>
      <h3>03 商业模式的跃迁：从交易到共生</h3>
      <p>报告指出，未来的成功文旅案例将摒弃门票、短租的单次交易逻辑，转而通过高认同感的社群运营，实现长期消费与价值共生。这也正是 DAC 提倡的长期同行战略的理论依据。</p>
    `
  },
  {
    id: 'escapees-atlas-2023',
    year: '2023',
    category: '用户研究',
    title: '第二生活空间白皮书：城市逃离者的精神图谱',
    author: 'DAC 未来研究院',
    summary: '通过对上万名高净值用户的深度调研，我们描摹出当代“城市逃离者”的真实心理动因：他们逃离的不是城市本身，而是异化和高压的生存节奏。',
    image: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/IMG_0003.jpg',
    stats: [
      { label: '调研样本', value: '10,000+' },
      { label: '核心焦虑', value: '高压/异化' },
      { label: '禅修偏好', value: '92%' }
    ],
    content: `
      <h3>精神母题：归属感与自我重建</h3>
      <p>调研数据显示，超过72%的城市精英渴望在第二生活空间中找到“精神锚点”。这包括对在地文化的深度参与、对自然物理的无阻触碰，以及高质量的社交连接。空间设计必须从治愈与重建的维度出发。</p>
      <h3>女性决策者的主导地位</h3>
      <p>在“第二生活”的决策链路中，女性拥有超过80%的主导权。女性对于场域的包裹感、安全度、材质温润性以及美学厚度，有着极高且敏锐的要求，这构成了新禅意文旅的消费底层。</p>
    `
  },
  {
    id: 'culture-model-2023',
    year: '2023',
    category: '商业逻辑',
    title: '在地文化的商业转化率模型：以山西窑洞为例',
    author: 'DAC 未来研究院',
    summary: '以山西窑洞改建项目为范本，用数据模型剖析如何将粗糙的土特产与地方民俗，升华为具备国际化美学水准 of 文旅精神IP资产。',
    image: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%A4%AA%E5%BA%A6%E6%9D%91%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97%E7%BE%A4/IMG_8726.jpg',
    stats: [
      { label: '平均停留天数', value: '3.2天' },
      { label: '溢价率', value: '1.8x' },
      { label: '复购率', value: '15%' }
    ],
    content: `
      <h3>转译逻辑：从粗砺符号到高维感官</h3>
      <p>在地文化不能照搬照抄。在山西项目中，我们提炼了黄土高原夯土的微气候调控原理，并辅以极简漫射光影，使本来压抑的空腔重塑为庄严神圣的冥想场场域。这种高维度转译是带来美学高溢价的核心。</p>
      <h3>数据论证：文化资产的盈利优势</h3>
      <p>数据显示，注入深度文化考古价值的文旅项目，其综合溢价能力较传统标准民宿高出80%以上，非客房消费比重（文创、餐饮、艺术衍生品）提升至42%，有效抵御了淡旺季波动风险。</p>
    `
  },
  {
    id: 'modular-future-2022',
    year: '2022',
    category: '空间研究',
    title: '未来人居：长住与移动办公场景下的空间模块化设计',
    author: 'DAC 未来研究院',
    summary: '前瞻性研判未来十年旅居空间的变革趋势，探索如何通过“办公-冥想-社群”多合一模块系统，兼顾工业化预制效率与在地手工艺的温润平衡。',
    image: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/2024-12-05%20161021.jpg',
    stats: [
      { label: '施工周期降幅', value: '-40%' },
      { label: '材料回收率', value: '90%' },
      { label: '体感满意度', value: '95%' }
    ],
    content: `
      <h3>多维变动空间：移动游牧的物理载体</h3>
      <p>未来的长住空间必须具备高适应性。设计方案通过可伸缩或快速切换的软性模块，使同一套客房能在“极客办公”、“深度禅休”和“小型聚会”模式下无缝切换，极大地提高了每平米的利用率。</p>
      <h3>工业预制与手工精神的黄金配比</h3>
      <p>我们倡导高精度的底盘与管线由工厂标准化预制，而表皮覆盖与家具陈设则邀请地方匠人手工打造，在保证施工效率与质量的前提下，完好地保留了“带有体温的工艺肌理”。</p>
    `
  }
];

const ReportDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const report = reportData.find(r => r.id === id);

  if (!report) {
    return <div className="pt-40 text-center text-white/40 font-light">报告未找到 / Report Not Found</div>;
  }

  const handleDownload = () => {
    alert('报告 PDF 下载已准备就绪，达成未来研究院研究员将会在稍后与您联系。');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('链接已成功复制到剪贴板，可直接与同业分享。');
  };

  return (
    <main className="bg-black text-white min-h-screen pt-28 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link to="/lab" className="inline-flex items-center gap-2 text-xs text-[#c5a059] hover:text-white tracking-widest uppercase transition-colors">
          <ArrowLeft size={14} /> 返回未来研究院 / BACK TO LAB
        </Link>

        <div className="relative aspect-[21/9] w-full bg-zinc-900 border border-white/10 rounded-sm overflow-hidden shadow-xl">
          <img 
            src={report.image} 
            alt={report.title} 
            className="w-full h-full object-cover brightness-75"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/IMG_0010.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="bg-[#0d0d0d] border border-[#c5a059]/20 p-6 md:p-12 space-y-8 rounded-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
            <div className="space-y-1">
              <span className="text-xs text-[#c5a059] font-mono tracking-widest uppercase">{report.year} / {report.category}</span>
              <h1 className="text-2xl md:text-4xl font-serif-sc text-white/95 font-bold leading-tight">{report.title}</h1>
            </div>
            <div className="flex gap-2">
              <button onClick={handleDownload} className="p-3 rounded-full border border-white/10 hover:bg-[#c5a059] hover:text-black hover:border-[#c5a059] transition-all" aria-label="Download PDF">
                <Download size={16} />
              </button>
              <button onClick={handleShare} className="p-3 rounded-full border border-white/10 hover:bg-[#c5a059] hover:text-black hover:border-[#c5a059] transition-all" aria-label="Share Link">
                <Share2 size={16} />
              </button>
            </div>
          </div>

          {/* Key statistics list */}
          <div className="grid grid-cols-3 gap-4 bg-white/[0.02] border border-white/5 p-6 text-center">
            {report.stats.map(st => (
              <div key={st.label} className="space-y-1">
                <div className="text-2xl md:text-4xl font-serif-sc text-[#c5a059] font-bold">{st.value}</div>
                <div className="text-[9px] tracking-wider text-white/40 uppercase">{st.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h4 className="text-xs tracking-widest text-white/30 uppercase font-mono font-bold">摘要 / Summary</h4>
            <p className="text-sm md:text-base text-white/75 leading-relaxed font-light italic">
              “{report.summary}”
            </p>
          </div>

          <div 
            className="prose prose-invert max-w-none text-white/60 leading-relaxed font-light space-y-6 text-sm md:text-base
              prose-headings:font-serif-sc prose-headings:text-white/95 prose-headings:text-lg md:prose-headings:text-xl prose-headings:mt-8 prose-headings:mb-4 prose-headings:font-semibold"
            dangerouslySetInnerHTML={{ __html: report.content }}
          />

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-white/30">
            <span>作者: {report.author}</span>
            <span className="max-w-md leading-relaxed text-[10px] text-right font-light">
              © DAC Future Lab. 本报告版权归达成文化所有。未经书面许可，不得以任何形式转载或用于商业用途。
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReportDetail;
