import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Sparkles, Eye, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GeomorphicSite {
  id: string;
  region: string;
  coordinates: string;
  medium: string;
  title: string;
  tags: string[];
  img: string;
  images: { url: string; label: string }[]; // Highly refined swiper label words
  preface: string;
  sensory: {
    tactile: string;
    acoustic: string;
    light: string;
  };
  narrative: string;
  content?: string;
  summary?: string;
}

export const geomorphicSites: GeomorphicSite[] = [
  {
    id: 'shanyi-yaodong',
    region: '晋陕高原 · 窑洞重生',
    coordinates: '37.57° N, 112.25° E',
    medium: '高密度夯粘土墙',
    title: '生土营造 —— 窑洞重生的阴翳美学与气候自适应',
    tags: ['原生态夯土', '地气对流机制', '深腔降噪'],
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E7%AA%91%E6%B4%9E/%E7%AA%91%E6%B4%9E2.png',
    images: [
      { url: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E7%AA%91%E6%B4%9E/%E7%AA%91%E6%B4%9E2.png', label: 'SPACE' },
      { url: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E7%AA%91%E6%B4%9E/%E7%AA%91%E6%B4%9E3.png', label: 'LIGHT' },
      { url: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E7%AA%91%E6%B4%9E/%E7%AA%91%E6%B4%9E4.png', label: 'SHADOW' },
      { url: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E7%AA%91%E6%B4%9E/%E7%AA%91%E6%B4%9E5.png', label: 'ZEN' }
    ],
    preface: '依山凿土，冬暖夏凉。我们利用现代工艺进行生土防潮重组，保留原始夯土粗砺的触感，将黄土腹地转化为静谧的疗愈场域。',
    sensory: {
      tactile: '生土夯实后温润且带微小沙质的质朴肌理',
      acoustic: '拱券空腔自然削减声波回响，深寂幽静',
      light: '垂直采光井将刺眼的高原日光柔化为漫射柔波'
    },
    narrative: '晋陕黄土窑洞是东方农耕文明对大地温差最智慧的顺应。DAC团队保留土窑的天然呼吸与恒温特性，并以现代生土加固技术解决漏尘返潮问题。光影从天井缓缓滑落，明暗阴翳在拱形拱顶上轮转，让时间退隐，身心复归大地的安稳。',
    summary: '将古老夯土窑洞天然温润、冬暖夏凉的物理特质，同当代的极简阴翳美学相嵌，在黄土之下唤醒宁静神圣的生命气场。',
    content: `
      <h3>夯土防剥与微呼吸</h3>
      <p>我们对其原始夯土结构进行了无尘固化重组，既保留了泥土天然的颗粒触感与呼吸性，又根治了传统空腔阴暗、潮湿的弊端。</p>
      <h3>阴翳天光物理潜望</h3>
      <p>在窑洞尽头开辟的反向采光天井，将刺眼的高原日光折射为舒缓的室内漫射柔光。这不仅是建筑的改造，更是一次回归大地母体的精神疗愈实验。</p>
    `
  },
  {
    id: 'chongqing-stilt',
    region: '巴蜀山地 · 川渝民居',
    coordinates: '29.56° N, 106.55° E',
    medium: '碳化杉木构架与灰砖',
    title: '结构悬挑 —— 峭壁吊脚楼的空间重构与空气对流',
    tags: ['悬挑大跨度', '碳化松杉木', '层叠挑台'],
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/AI/%E5%B1%B1%E5%9C%B0.png',
    images: [
      { url: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/AI/%E5%B1%B1%E5%9C%B0.png', label: 'CLIFF' },
      { url: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/AI/%E5%BB%BA%E7%AD%911.png', label: 'TIMBER' },
      { url: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/AI/%E6%9C%A8%E8%B4%A8.png', label: 'GRAIN' },
      { url: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/AI/%E7%A9%BA%E9%97%B4.png', label: 'VOID' }
    ],
    preface: '顺应大落差峡谷崖壁，解构传统穿斗架空骨架。运用隐形悬钢与炭化古杉木，建立与自然无界沟通的半户外露台系统。',
    sensory: {
      tactile: '古法烘烤炭化杉木略带粗糙的温暖木纹',
      acoustic: '绝壁深谷中松涛与山间穿堂风的风动共鸣',
      light: '细密木格栅随日照倾斜，洒下条幅状的静止光栅'
    },
    narrative: '川渝山地吊脚楼代表着人对陡峭地貌最聪慧的适应。我们放弃粗暴的大面积打桩，以高拉力悬挑钢梁轻盈附着于崖壁缝隙，搭配炭化松杉架设空中街巷。敞开式灰空间不仅强化了自然对流，更让层叠错落的露台成为承接山云野雾的呼吸界面。',
    summary: '解构传统吊脚楼悬空架空的“骨骼张力”。在高差剧烈的崖壁缝隙中，架设起大跨度多级空中街巷，融汇山野风烟。',
    content: `
      <h3>大跨度悬臂重组</h3>
      <p>我们采用轻量级的高强度黑色拉力悬挑钢梁，同老木匠手工打造的原生态碳化杉木构架紧密拼装，避免了对脆弱断崖的大面积打桩破坏。</p>
      <h3>多级灰空间漫步</h3>
      <p>空中街巷回廊穿插错层大平台，完美融入穿堂山风，使得室外壮阔的自然大雾与日落，以极其柔和温润的姿态流泄于居住者行走的每一步中。</p>
    `
  },
  {
    id: 'zigong-industrial',
    region: '川南矿床 · 工业遗迹',
    coordinates: '29.35° N, 104.77° E',
    medium: '耐候锈钢与古烧红砖',
    title: '铁骨红砖 —— 自贡旧盐仓的生态修复与时间剧场',
    tags: ['天车铁骨', '耐候锈钢板', '静水面反射'],
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/AI/%E5%8E%82%E6%88%BF.png',
    images: [
      { url: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/AI/%E5%8E%82%E6%88%BF.png', label: 'FACTORY' },
      { url: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/AI/%E5%8E%82%E6%88%BF%E5%85%89%E7%BA%BF.png', label: 'SHADOW' },
      { url: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/AI/%E5%8E%82%E6%88%BF%E6%88%B7%E5%A4%96.png', label: 'OUTDOOR' },
      { url: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/AI/%E7%BA%A2%E7%A0%96.png', label: 'BRICK' }
    ],
    preface: '保留高耸的天车木骨与老红砖墙体，引入镜水面水影的反射。在冷峻的废墟中注入温暖的艺术策展，将工业废旧矿床升华为精神客厅。',
    sensory: {
      tactile: '自然氧化锈钢板与粗糙烟熏老红砖的质感对比',
      acoustic: '超高挑空仓体自发形成的微弱空间混响，空灵沉静',
      light: '锈钢板的暗红同池水反射在旧红墙上交织'
    },
    narrative: '川南盐井天车与庞大的木构老盐仓是这片土地曾经机器沸腾的物化印记。我们引种耐盐碱的乔木进行地表生态缝合，悬空架设质朴黄铜走廊。阳光穿透破损的木屋顶，在黑金沙大理石水镜面上折返，将冰冷的工业废墟洗练为洗涤心神、沉淀浮躁的时间容器。',
    summary: '保留盐井遗址原有的斑驳天车铁骨、巨大盐仓体量，与大面积水波反射结合，将工业废墟编织为极具戏剧感的精神剧场。',
    content: `
      <h3>锈钢板与斑驳红砖的肌理对谈</h3>
      <p>我们原样封存了高耸的旧天车天线，在老红砖红墙上辅以做旧工艺氧化出来的铁锈暗红，产生极度深邃的时间刻度感。</p>
      <h3>地志生态缝合</h3>
      <p>在干燥盐碱的地表引入耐盐性高大树种与水生草垫；并在水塘中铺设平整的大理石，使水面如镜，把高耸天骨建筑倒影吸纳回大地的呼吸中。</p>
    `
  },
  {
    id: 'dali-lake',
    region: '洱海湖山 · 湖泊牧场',
    coordinates: '25.69° N, 100.16° E',
    medium: '蓼蓝扎染棉麻帘幕',
    title: '柔风布影 —— 苍山扎染布幔的强光过滤与水天一色',
    tags: ['手工扎染', '合院遮光', '水反射过滤'],
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E6%B9%96%E6%B3%8A%E7%89%A7%E5%9C%BA/%E5%90%88%E9%99%A2.png',
    images: [
      { url: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E6%B9%96%E6%B3%8A%E7%89%A7%E5%9C%BA/%E5%90%88%E9%99%A2.png', label: 'COURTYARD' },
      { url: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E6%B9%96%E6%B3%8A%E7%89%A7%E5%9C%BA/%E5%B8%83.jpeg', label: 'INDIGO' },
      { url: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E6%B9%96%E6%B3%8A%E7%89%A7%E5%9C%BA/%E5%B8%83%E6%B0%B4.png', label: 'REFLECTION' },
      { url: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E6%B9%96%E6%B3%8A%E7%89%A7%E5%9C%BA/%E5%B8%83%E8%89%BA%E6%B0%B4.png', label: 'HORIZON' }
    ],
    preface: '在中庭天井悬挂巨幅蓼蓝草木染帘幕，伴随洱海的湿润湖风与水景反射，将强烈的高原日光过滤为游动在墙壁的幽蓝涟漪。',
    sensory: {
      tactile: '草木蓼蓝染色粗织棉麻帘幕温润、蓬松的自然质感',
      acoustic: '海风吹拂布幔在水面拂动时微弱的沙沙声',
      light: '蓼蓝蓝色漫射，同静水波光反射映照出幽蓝光影'
    },
    narrative: '手工植物扎染的蓼蓝，是大理人对洱海波光最诗意的临摹。我们遵循白族三坊一照壁的院落逻辑，在中庭蓄水，大比例吊挂手工风动扎染棉麻。当洱海的湿润凉风吹过，帘幕与水影交叠起伏，高原刺眼烈日被重构过滤为静水之上的柔蓝微光，让人瞬间复归空灵虚静。',
    summary: '将非遗蓼蓝手工植物染色布艺悬挂于通高天井，结合水景光影反射，过滤强光为温润的柔蓝波纹，促进阻光。',
    content: `
      <h3>风动扎染表皮过滤</h3>
      <p>手工植物扎染棉麻布具有微细的多孔质感，垂坠悬挂不仅能阻隔70%的高原热浪，更能在对流风中微幅摆动，带来心静神松的舒缓白噪音。</p>
      <h3>水天一色阴翳水镜</h3>
      <p>将冷清池水蓄于天井正下方。微风拂过水镜，水流波光与蓝白帘幕的影子在白色灰泥内墙上二次投影出流动的幽蓝光晕，打造包裹感十足的精神原点。</p>
    `
  }
];

// Export cultureData as alias of geomorphicSites to fulfill imports in other pages
export const cultureData = geomorphicSites;

const CultureResearch: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const activeSite = geomorphicSites[activeIndex];

  const handleSiteChange = (index: number) => {
    setActiveIndex(index);
    setActiveImageIndex(0); // Reset image index when switching sites
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  // Horizontal Swipe Gestures for Mobile Touchscreen
  const handleDragEnd = (_event: any, info: any) => {
    // Delay releasing drag state slightly to avoid click registers
    setTimeout(() => setIsDragging(false), 50);
    
    const swipeThreshold = 40; // optimized mobile swiper drag sensitivity threshold
    if (info.offset.x < -swipeThreshold) {
      // Swiped left -> Next image
      setActiveImageIndex((prev) => (prev + 1) % activeSite.images.length);
    } else if (info.offset.x > swipeThreshold) {
      // Swiped right -> Previous image
      setActiveImageIndex((prev) => (prev - 1 + activeSite.images.length) % activeSite.images.length);
    }
  };

  // Secure image loading failure handler with recursion loopbreaker
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    target.onerror = null; // prevent infinite error trigger loop
    target.src = "https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/IMG_0003.jpg";
  };

  return (
    <main className="bg-[#0a0a0a] text-[#d4d4d4] min-h-screen pt-28 pb-24 px-4 md:px-8 relative overflow-hidden">
      
      {/* Header section */}
      <div className="max-w-3xl mx-auto space-y-4 border-b border-white/5 pb-6">
        <span className="text-[9px] tracking-[0.5em] text-[#c5a059] uppercase block font-mono">在地风土地志</span>
        <h1 className="text-2xl md:text-4xl font-serif-sc text-white leading-tight font-bold">
          风土地志与精神考古
        </h1>
        <p className="text-xs text-white/40 leading-relaxed font-light">
          摒弃浮华拼贴与同质化造景，我们探入土地的本源。系统考证生土夯墙的温湿、杉木构架的张力、耐候锈铁的时间回声与蓼蓝扎染的风动水影，在精密的重组中，唤醒具有历史温度与生命感知的第二生活场域。
        </p>
      </div>

      {/* Mobile-First Swiper Card Deck */}
      <div className="max-w-lg mx-auto mt-8 space-y-8 text-left">
        
        {/* Segmented selector buttons (Horizontal Tabs) */}
        <div className="flex justify-between bg-[#121212] border border-white/5 p-1.5 rounded-full overflow-x-auto scrollbar-none">
          {geomorphicSites.map((site, index) => {
            const isSelected = activeIndex === index;
            return (
              <button
                key={site.id}
                onClick={() => handleSiteChange(index)}
                className={`flex-1 py-2 px-4 text-center text-xs font-serif-sc font-bold rounded-full transition-all duration-500 whitespace-nowrap focus:outline-none ${
                  isSelected 
                    ? 'bg-[#c5a059] text-black shadow-lg font-semibold scale-105' 
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {site.region.split(' · ')[1]}
              </button>
            );
          })}
        </div>

        {/* Active Editorial Deck Card */}
        <div className="relative bg-[#121212] border border-white/5 rounded-sm p-6 space-y-6 shadow-2xl overflow-hidden">
          
          {/* Immersive Touch-Swiping Cover Image Box (Supporting Drag events) */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-white/10 group cursor-grab active:cursor-grabbing select-none">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              className="w-full h-full"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${activeSite.id}-${activeImageIndex}`}
                  src={activeSite.images[activeImageIndex].url}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  decoding="async"
                  className="w-full h-full object-cover brightness-[0.7] pointer-events-none"
                  alt={activeSite.title}
                  onError={handleImageError}
                />
              </AnimatePresence>
            </motion.div>
            
            {/* Floating Badge Overlays */}
            <div className="absolute top-4 left-4 bg-black/65 border border-[#c5a059]/30 px-3 py-1 rounded-sm z-10">
              <span className="text-[8px] font-mono text-[#c5a059] tracking-widest block">MEDIUM / 媒介</span>
              <span className="text-[10px] text-white font-serif-sc font-bold block mt-0.5">{activeSite.medium}</span>
            </div>

            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 border border-white/10 rounded-sm z-10">
              <span className="text-[8px] font-mono text-white/40 tracking-wider block">COORDINATES</span>
              <span className="text-[9px] font-mono text-white/80 block mt-0.5">{activeSite.coordinates}</span>
            </div>

            {/* Sequential Numbers indicator tabs (Mobile Swipe indicators) */}
            <div className="absolute bottom-4 left-4 flex gap-1.5 z-20 bg-black/50 backdrop-blur-sm p-1 border border-white/5 rounded-sm">
              {activeSite.images.map((img, imgIdx) => {
                const isImgActive = activeImageIndex === imgIdx;
                return (
                  <button
                    key={imgIdx}
                    onClick={() => {
                      if (!isDragging) setActiveImageIndex(imgIdx);
                    }}
                    className={`py-1 px-2 border rounded-sm flex items-center justify-center transition-all duration-300 focus:outline-none text-[7px] font-mono tracking-widest ${
                      isImgActive 
                        ? 'border-[#c5a059] bg-[#c5a059] text-black font-bold scale-105' 
                        : 'border-white/20 text-white/60 hover:opacity-100'
                    }`}
                  >
                    {img.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Title and Preface */}
          <div className="space-y-3">
            <h2 className="text-lg font-serif-sc text-white/90 font-bold leading-snug">
              {activeSite.title}
            </h2>
            <p className="text-xs text-white/50 leading-relaxed font-light pl-3 border-l border-[#c5a059]">
              “{activeSite.preface}”
            </p>
          </div>

          {/* Sensory specification dashboard inside card */}
          <div className="bg-black/30 border border-white/5 p-5 rounded-sm space-y-4 text-xs">
            <span className="text-[9px] tracking-[0.2em] text-[#c5a059] uppercase font-mono font-bold border-b border-white/5 pb-2 block">物性雷达 / Sensory Pulse</span>
            
            <div className="space-y-3 font-light text-white/70 leading-relaxed">
              <div className="flex items-start gap-2">
                <Shield size={14} className="text-[#c5a059] mt-0.5 flex-shrink-0" />
                <p><strong>触觉肌理:</strong> {activeSite.sensory.tactile}</p>
              </div>
              <div className="flex items-start gap-2">
                <Sparkles size={14} className="text-[#c5a059] mt-0.5 flex-shrink-0" />
                <p><strong>听觉静谧:</strong> {activeSite.sensory.acoustic}</p>
              </div>
              <div className="flex items-start gap-2">
                <Eye size={14} className="text-[#c5a059] mt-0.5 flex-shrink-0" />
                <p><strong>光影调谐:</strong> {activeSite.sensory.light}</p>
              </div>
            </div>
          </div>

          {/* Detailed Narrative Report */}
          <div className="space-y-3 border-t border-white/5 pt-5 text-xs text-white/45 leading-relaxed font-light">
            <div className="flex items-center gap-1 text-[#c5a059] font-mono font-bold uppercase tracking-wider mb-2">
              <BookOpen size={12} /> 考古转译研究报告 / Narrative
            </div>
            <p className="pb-2">{activeSite.narrative}</p>
            <div 
              className="prose prose-invert max-w-none space-y-4 border-t border-white/5 pt-4 text-white/40"
              dangerouslySetInnerHTML={{ __html: activeSite.content || "" }}
            />
          </div>

        </div>

        {/* Co-creation strategy banner */}
        <div className="bg-[#121212] border border-white/5 p-6 rounded-sm space-y-4 text-left">
          <div className="flex items-center gap-2 text-xs text-[#c5a059] font-mono font-bold">
            <BookOpen size={14} /> 在地文化活化机制 / Strategy
          </div>
          <h3 className="text-base md:text-lg font-serif-sc text-white/90 leading-snug">
            用考证式的严谨，还原被尘封的风土神性。
          </h3>
          <p className="text-xs text-white/30 leading-relaxed font-light">
            我们与地学、方志学研究员深度伴行，最大化还原泥土、杉木、老红砖与植物扎染中被忽略的时间刻度。
          </p>
          <div className="pt-2">
            <Link 
              to="/contact"
              className="w-full py-3 border border-[#c5a059]/30 text-[#c5a059] hover:bg-[#c5a059] hover:text-black hover:border-[#c5a059] transition-all duration-500 text-xs tracking-widest uppercase rounded-sm font-semibold flex items-center justify-center"
            >
              合作伴行开发
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
};

export default CultureResearch;
