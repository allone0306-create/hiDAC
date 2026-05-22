import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export interface ArticleItem {
  id: string;
  date: string;
  title: string;
  category: string;
  img?: string;
  image?: string;
  content: string;
}

export const articleData: ArticleItem[] = [
  { 
    id: 'escape-city',
    date: '2024.03.15', 
    title: '为什么“逃离城市”是一个伪命题？', 
    category: '空间哲学',
    image: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%A4%AA%E5%BA%A6%E6%9D%91%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97%E7%BE%A4/IMG_7182-3.jpg',
    content: `
      <p>在过去的十年里，我们听到了无数关于“逃离城市”的口号。从大理到阿那亚，从莫干山到山里的小镇，人们似乎一直在奔跑。但作为生活系统的构建者，我们发现了一个有趣的现象：大多数所谓的逃离，仅仅是物理位置的移动，而非生命状态的转场。</p>
      <p>真正的城市问题，不在于钢筋水泥本身，而在于其背后那套基于“效率”与“异化”的底层操作系统。如果我们把这套操作系统带入山野，那么山野仅仅是换了背景的办公室。</p>
      <h3>重构底层系统</h3>
      <p>我们提出的“第二生活”，并非是城市的对立面，而是城市的补充和完整。它关乎的是：当一个人剥离了社会角色赋予的枷锁后，如何重新定义自己与土地、与食物、与邻里、以及与时间的关系。</p>
      <p>在 DAC 的实践中，我们尝试在空间中植入“无用之用”。那些冗长的走廊、没有具体功能的留白、光影旋转的角落，都是为了让习惯了“有用”的现代人，被强制停下来，面对自己。</p>
      <h3>生活不是目的地</h3>
      <p>我们认为，文旅不应该是目的地的消费，而应该是另一种生活系统的预演。当一个人在我们的场域里住上七天，他带走的不仅是照片，而是一套可以带回城市的、关于如何更好生活的微型系统。</p>
    `
  },
  { 
    id: 'aman-to-songtsam',
    date: '2024.02.28', 
    title: '从安缦到松赞：奢华的尽头是在地的真实', 
    category: '文旅未来',
    image: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%AE%89%E6%9B%BC/%E5%A4%9A%E7%B1%B3%E5%B0%BC%E5%8A%A0.jpg',
    content: `
      <p>奢华的定义正在发生剧烈嬗变。如果说二十年前的奢华是昂贵的水晶吊灯和意大利大理石，那么今天的奢华则是：呼吸到未经工业污染的空气，以及与一段沉淀了千年的文化发生真实的连接。</p>
      <p>安缦教会了世界如何克制地重构在地性，而松赞则将这种克制推向了信仰的高度。这背后的逻辑是：空间不再是主角，土地的精神才是。</p>
      <h3>土地的叙事力</h3>
      <p>在 DAC 的逻辑中，我们从不尝试“美化”土地，我们只负责“翻译”。每一份土地都有其自有的叙事节奏。山西的黄土是厚重的、沉默的；重庆的江河是潮湿的、跃动的。</p>
      <p>我们的工作是触摸这些肌理，并用当代的建筑语言将其重组，让土地开口说话。</p>
    `
  },
  { 
    id: 'healing-economy',
    date: '2024.01.10', 
    title: '疗愈经济下，女性消费的新场域范式', 
    category: '精神消费',
    image: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E7%BE%8E%E5%88%A9%E4%BA%9A%E9%85%92%E5%BA%97/19.png',
    content: `
      <p>现代女性正处于前所未有的压力中心。这种压力不仅来自职场，更来自于多重角色切换中的自我消解。因此，“疗愈”不再是一个点缀，而是一种刚需。</p>
      <p>但我们发现，市场上的大多数疗愈产品依然停留在表层：一场 SPA，一节瑜伽课。这远远不够。</p>
      <h3>从身体疗愈到场域疗愈</h3>
      <p>真正的疗愈来自于场域的能量。一个被自然包裹的、安全的、具有美学感知的空间，能够自发地引导呼吸的节律。在我们的女性长住社区中，我们设计了大量的社交留白，剔除了一种“紧绷的社交”，让居住者在温柔的场域中自发完成深层修复。</p>
    `
  },
  { 
    id: 'culture-fragments',
    date: '2023.12.05', 
    title: '在地的碎片化与系统性重构', 
    category: '在地文化',
    image: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%8D%97%E5%B7%9D%E5%A4%A7%E8%A7%82%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97/%E5%A4%A7%E8%A7%82/%E5%8D%97%E5%B7%9D%E5%A4%A7%E8%A7%8220.jpg',
    content: `
      <p>中国不缺文化，缺的是文化的当代转译能力。我们看到了太多粗糙的模仿，或者是对传统符号的生搬硬套。这不仅是审美的悲哀，更是对文化内核理解的缺失。</p>
      <h3>重构系统</h3>
      <p>我们将在地文化拆解为：材质、光影、气味、食物、方言五个维度。通过系统性的重构，让传统文化以一种极其自然的方式进入现代人的生活。</p>
    `
  },
  { 
    id: 'long-stay-society',
    date: '2023.11.20', 
    title: '长住社会：当旅居变成生活本身', 
    category: '第二人生',
    image: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/IMG_0003.jpg',
    content: `
      <p>“打卡式”旅游正在死去，“数字游民”与“长住者”正在崛起。这意味着，酒店客房不能再仅仅是一个睡觉的地方，它必须具备“家”的所有功能，同时拥有“别处”的所有惊喜。</p>
      <p>在我们构建的长住系统中，核心课题是：如何建立一个不需要逃离的社区？让工作与生活有机交融，在自然中寻回心安。</p>
    `
  }
];

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articleData.find(a => a.id === id);

  if (!article) return <div className="pt-40 text-center text-white/45 font-light">文章不存在 / Article Not Found</div>;

  return (
    <main className="bg-black text-white min-h-screen pt-24 pb-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link to="/thoughts" className="inline-flex items-center gap-2 text-xs text-[#c5a059] hover:text-white tracking-widest uppercase transition-colors">
          <ArrowLeft size={14} /> 返回思想汇 / BACK TO THOUGHTS
        </Link>

        <div className="space-y-6 border-b border-white/5 pb-8">
          <div className="flex items-center gap-3 text-xs text-white/40 font-mono">
            <span>{article.date}</span>
            <div className="w-4 h-px bg-white/10" />
            <span className="text-[#c5a059]">{article.category}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif-sc text-white leading-tight font-bold">
            {article.title}
          </h1>
        </div>

        {article.image && (
          <div className="aspect-[21/9] w-full bg-zinc-900 border border-white/5 rounded-sm overflow-hidden shadow-lg">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover brightness-90"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/IMG_0010.jpg";
              }}
            />
          </div>
        )}

        <div 
          className="prose prose-invert max-w-none text-white/65 leading-relaxed font-light space-y-6 text-sm md:text-base
            prose-headings:font-serif-sc prose-headings:text-white/90 prose-headings:text-lg md:prose-headings:text-2xl prose-headings:mt-8 prose-headings:mb-4 prose-headings:font-semibold"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="pt-12 border-t border-white/5 flex justify-between items-center text-xs text-white/30">
          <span>达成文化 · 思想汇</span>
          <span>© DAC FUTURE 2026</span>
        </div>
      </div>
    </main>
  );
};

export default ArticleDetail;
