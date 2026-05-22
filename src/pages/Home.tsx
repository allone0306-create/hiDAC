import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Interactive geomorphic base cards
const geomorphicAssets = [
  'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/huwaishui.png',
  'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/2024-12-05%20161021.jpg',
  'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%A4%AA%E5%BA%A6%E6%9D%91%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97%E7%BE%A4/IMG_8726.jpg',
  'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/IMG_0010.jpg'
];

const Home: React.FC = () => {
  const [activeAssetIndex, setActiveAssetIndex] = useState(0);
  const [selectedInsight, setSelectedInsight] = useState<string>('第二生活状态');

  // Video state hooks
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAssetIndex((prev) => (prev + 1) % geomorphicAssets.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.playbackRate = 0.85;
      videoEl.muted = true;

      const updateProgress = () => {
        if (videoEl) {
          const value = (videoEl.currentTime / videoEl.duration) * 100;
          setProgress(isNaN(value) ? 0 : value);
        }
      };

      videoEl.addEventListener('timeupdate', updateProgress);
      return () => {
        videoEl.removeEventListener('timeupdate', updateProgress);
      };
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        // Unmute and set volume to maximum when user taps to play the video
        videoRef.current.muted = false;
        videoRef.current.volume = 1.0;
        setIsMuted(false);
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleFullScreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (containerRef.current) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  const insights = [
    { label: '第二生活状态', val: '85%', en: 'Second Life', desc: '都市人群不再满足于浅表的打卡度假，而是渴望寻找一处可以长期安顿身心的精神归宿。' },
    { label: '长住生活趋势', val: '68%', en: 'Long-stay', desc: '自由办公与深度旅居模式的盛行，使人们对长周期高品质居住空间的需求日益紧迫。' },
    { label: '情感价值共鸣', val: '72%', en: 'Emotion Value', desc: '空间的功能性设计已退居幕后，能够舒缓焦虑、带来安稳体验的情感疗愈成为核心追求。' },
    { label: '禅意疗愈势能', val: '2.4x', en: 'Therapeutic', desc: '将日光气流、夯土古木等大自然风律融为一体的健康调理，已成为高端度假的核心溢价点。' },
    { label: '城市逃离浪潮', val: '82%', en: 'Urban Escape', desc: '旅人逃避的从来不是城市的便利，而是城市背后那套剥夺感官、压抑人性的高效运转系统。' },
    { label: '精神自留地', val: '76%', en: 'Spiritual Land', desc: '在喧嚣浮躁的尘世中开辟一处克制留白的真空角落，让疲惫的感官在松弛的阴翳中重获新生。' },
    { label: '银发养生群落', val: '+35%', en: 'Silver Living', desc: '财富丰厚且时间自由的银发一代，正主导着高品质长周期生命保养与度假产业的发展。' },
    { label: '自然生命共生', val: '95%', en: 'Natural Symbiosis', desc: '未来的建筑不应粗暴地侵占地表，而是顺应山势走向、水流节律与日光轨迹，完成自然共生。' }
  ];

  const philosophies = [
    { title: '第二生活空间', desc: '它不是日常生活的对立面，而是第一人生的重要补完，帮助现代人重新握住生命的主动权。' },
    { title: '第三空间系统', desc: '脱卸繁重的世俗职责与功利负担，为身心构筑一处可自由呼吸、宁静温润的精神避难所。' },
    { title: '在地风土优先', desc: '杜绝粗制滥造的民俗符号拼贴。我们如考古般挖掘风土基因，还原带有时间手作温度的材料体温。' },
    { title: '自然疗愈磁场', desc: '把日光的漫射、生土墙的呼吸、古木的松脂芬芳融入物理细节，成为安抚神经的天然微气候处方。' },
    { title: '长期主义践行', desc: '拒绝转瞬即逝的网红快餐视觉，顺应植物生长与时间的雕琢，让场域在时间的陈酿下愈发醇厚。' },
    { title: '极致留白美学', desc: '极尽克制地为物理空间做减法，退回到清水泥、木格栅的质朴底色，在阴翳光影中寻回心神宁静。' }
  ];

  const serviceMap = [
    { id: 'A', title: '在地文化研究', path: '/culture', en: 'Cultural Archeology' },
    { id: 'B', title: '文旅策划规划', path: '/partnership', en: 'Master Strategic Planning' },
    { id: 'C', title: '空间场域设计', path: '/cases', en: 'Spatial Frame Architecture' },
    { id: 'D', title: '艺术软装系统', path: '/living-system', en: 'Art & Object Intervention' },
    { id: 'E', title: '品牌视觉系统', path: '/partnership', en: 'Brand Identity Language' },
    { id: 'F', title: '内容运营系统', path: '/thoughts', en: 'Content & Community Operations' },
    { id: 'G', title: '长期运营陪跑', path: '/partnership', en: 'Long-term Joint Operations' },
    { id: 'H', title: '未来生活系统', path: '/living-system', en: 'Secondary Life Infrastructure' }
  ];

  return (
    <main className="space-y-20 md:space-y-32 max-w-[1800px] mx-auto px-4 md:px-8 pt-24 pb-24 text-[#a3a3a3]">
      
      {/* 01 | 首页 Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden rounded-sm bg-[#0a0a0a] border border-white/5">
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <img 
              src={geomorphicAssets[0]} 
              alt="DAC Portal - Worldview open" 
              fetchPriority="high"
              decoding="sync"
              className="w-full h-full object-cover brightness-[0.35] contrast-[1.05]"
              onError={(e) => {
                const target = e.currentTarget;
                target.onerror = null;
                target.src = "https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/huwaishui.png";
              }}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-16 pb-12 md:pb-20 space-y-6 max-w-4xl text-left">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif-sc leading-[1.2] text-white tracking-tight">
              未来的文旅，<br />
              苏活的本源，<br />
              是<span className="italic text-[#c5a059] font-light opacity-95">另一种生活。</span>
            </h1>
            <h2 className="text-lg md:text-2xl font-serif-sc text-white/60 tracking-wide leading-relaxed">
              我们正在构建第二生活系统。
            </h2>
          </div>
          
          <div className="w-12 h-px bg-[#c5a059] my-2" />
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-4 border-t border-white/10">
            <p className="text-[10px] md:text-xs tracking-[0.25em] text-white/45 uppercase max-w-sm leading-relaxed font-light">
              在土地的呼吸与时间的律动中，重组现代人的精神归宿。
            </p>
            <Link 
              to="/whitepaper" 
              className="inline-flex items-center gap-2 text-xs tracking-widest text-[#c5a059] hover:text-white transition-colors group font-semibold uppercase self-start sm:self-center"
            >
              阅读白皮书宣言 <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Ambient particles */}
        <div className="absolute inset-0 pointer-events-none z-5">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[2px] h-[2px] bg-[#c5a059]/20 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* 02 | 我们是谁 */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Left text column */}
        <div className="lg:col-span-5 flex flex-col justify-between py-4">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif-sc leading-tight text-white/90">
              我们不是<span className="underline underline-offset-8 decoration-[#c5a059]/35 block mt-2">设计公司。</span>
            </h2>
          </div>

          <div className="space-y-6 mt-10 lg:mt-0">
            <p className="text-sm md:text-base text-white/70 leading-relaxed font-light tracking-wide max-w-md">
              DAC达成文化，是一家以未来生活方式为核心的空间文化运营平台。
            </p>
            <div className="w-10 h-px bg-white/15" />
            <p className="text-xs md:text-sm text-white/45 leading-loose font-light">
              我们通过在地文化、空间场域、艺术系统、文旅策划、长期运营陪跑，帮助项目从“住宿空间”进化为“生活系统”。
            </p>
          </div>
        </div>

        {/* Right image carousel column */}
        <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-zinc-950 border border-white/5 rounded-sm shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeAssetIndex}
              src={geomorphicAssets[activeAssetIndex]}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover brightness-75"
              alt="DAC Practicing Geomorphics"
              onError={(e) => {
                const target = e.currentTarget;
                target.onerror = null;
                target.src = "https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/2024-12-05%20161021.jpg";
              }}
            />
          </AnimatePresence>
          
          {/* Frame Decoration */}
          <div className="absolute inset-4 border border-white/5 pointer-events-none" />
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm border border-white/10 px-3 py-1 text-[9px] font-mono tracking-widest text-white/55">
            场域系统实景预览 0{activeAssetIndex + 1}
          </div>
        </div>
      </section>

      {/* 02.5 | 时代画幅 / Immersive Film Section */}
      <section className="space-y-6">
        <div className="border-l-2 border-[#c5a059]/40 pl-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <h2 className="text-2xl md:text-4xl font-bold tracking-wider font-mono text-white leading-none">
            DAC<span className="text-[#c5a059]">.</span>
          </h2>
          <div className="hidden sm:block h-4 w-px bg-white/10" />
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-[9px] md:text-[11px] tracking-[0.3em] text-white/40 uppercase font-mono font-bold">
              DESIGN ART CULTURE
            </span>
            <span className="text-white/20 font-mono text-[10px]">|</span>
            <span className="text-sm md:text-lg font-serif-sc text-[#c5a059] font-bold tracking-widest">
              达成文化
            </span>
          </div>
        </div>

        <div 
          ref={containerRef}
          onClick={togglePlay}
          className="relative w-full aspect-video bg-zinc-950 overflow-hidden shadow-2xl rounded-sm cursor-pointer group border border-white/5"
        >
          <video
            ref={videoRef}
            muted={isMuted}
            loop
            playsInline
            webkit-playsinline="true"
            x5-video-player-type="h5-page"
            x5-video-player-fullscreen="true"
            preload="metadata"
            className={`w-full h-full object-cover transition-all duration-1000 transform-gpu will-change-transform backface-visibility-hidden ${!isPlaying ? 'brightness-[0.45] scale-105' : 'brightness-100 scale-100'}`}
            poster="https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/2024-12-05%20161021.jpg"
          >
            <source src="https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/5%E6%9C%8822%E6%97%A5.mp4" type="video/mp4" />
          </video>

          <AnimatePresence>
            {!isPlaying && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none space-y-4"
              >
                <div className="w-16 h-16 rounded-full border border-[#c5a059]/50 flex items-center justify-center text-white backdrop-blur-md bg-black/20">
                  <div className="ml-1.5 w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-[#c5a059] border-b-[8px] border-b-transparent" />
                </div>
                <span className="text-[10px] tracking-[0.4em] text-white/50 uppercase font-mono">点击播放沉浸式企业符号</span>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute top-4 right-4 z-20 flex gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <button onClick={toggleMute} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md text-white/60 hover:text-white hover:bg-[#c5a059]/20 transition-all" aria-label="Toggle Mute">
              {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
            </button>
            <button onClick={handleFullScreen} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md text-white/60 hover:text-white hover:bg-[#c5a059]/20 transition-all" aria-label="Maximize">
              <Maximize2 size={12} />
            </button>
          </div>

          {/* Progress bar */}
          <div 
            onClick={handleProgressClick}
            className="absolute bottom-0 left-0 w-full h-1 bg-white/10 hover:h-2 transition-all cursor-pointer z-20"
          >
            <div className="h-full bg-[#c5a059]" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </section>

      {/* 03 | 行业洞察 */}
      <section className="space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7 space-y-3">
            <h2 className="text-2xl md:text-5xl font-serif-sc leading-tight text-white/90">
              未来的文旅，<br />
              正在从<span className="italic text-[#c5a059] font-light">空间消费</span>转向<span className="italic text-[#c5a059] font-light">生活消费。</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-xs text-white/40 tracking-[0.2em] leading-relaxed pl-6 border-l border-[#c5a059]/30 uppercase font-light">
              破译高净值群落对于长住的心理诉求，将单一的住宿客房，升级为完整的第二人生栖居系统。
            </p>
          </div>
        </div>

        {/* Interactive trends layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-6">
          {/* Left interactive tabs column */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3">
            {insights.map(ins => {
              const isActive = selectedInsight === ins.label;
              return (
                <button
                  key={ins.label}
                  onClick={() => setSelectedInsight(ins.label)}
                  className={`p-5 border text-left transition-all duration-500 rounded-sm focus:outline-none ${
                    isActive 
                      ? 'border-[#c5a059] bg-[#c5a059]/5 text-white shadow-lg' 
                      : 'border-white/5 bg-[#141414]/30 text-white/50 hover:border-white/15'
                  }`}
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-xs md:text-sm font-semibold tracking-wider font-serif-sc">{ins.label}</h4>
                    <span className="text-[8px] tracking-widest uppercase opacity-30 font-mono">{ins.en}</span>
                  </div>
                  <div className="text-lg md:text-2xl font-serif-sc text-white/90 font-bold mt-3">{ins.val}</div>
                </button>
              );
            })}
          </div>

          {/* Right details visual display */}
          <div className="lg:col-span-5 bg-[#121212] border border-white/5 p-6 md:p-8 rounded-sm flex flex-col justify-between">
            {(() => {
              const data = insights.find(i => i.label === selectedInsight) || insights[0];
              return (
                <>
                  <div className="space-y-6">
                    <div className="flex justify-between items-baseline border-b border-white/5 pb-4">
                      <span className="text-[10px] tracking-widest text-[#c5a059] font-mono uppercase">核心洞察指标</span>
                      <span className="text-2xl font-serif-sc text-white font-bold">{data.val}</span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-serif-sc text-white font-bold">{data.label}</h3>
                      <p className="text-xs md:text-sm text-white/50 leading-relaxed font-light">{data.desc}</p>
                    </div>
                  </div>
                  
                  <div className="text-[10px] text-white/20 font-mono tracking-widest border-t border-white/5 pt-4 uppercase leading-relaxed">
                    * 达成文化未来研究院大数据调研中心提供支持 (2024-2026)
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* 04 | 我们的核心理念 */}
      <section className="space-y-12">
        <div className="border-b border-white/5 pb-6">
          <h2 className="text-2xl md:text-4xl font-serif-sc leading-tight text-white/90">
            我们相信，未来的人们旅行，<br />
            <span className="italic font-light text-[#c5a059] opacity-90">是为了重新生活。</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {philosophies.map((p) => (
            <div 
              key={p.title}
              className="p-8 md:p-10 bg-[#0d0d0d] hover:bg-[#141414] transition-all duration-500 space-y-6 min-h-[240px] flex flex-col justify-between group cursor-default"
            >
              <div className="space-y-1.5">
                <h3 className="text-lg font-serif-sc text-white group-hover:text-[#c5a059] transition-colors font-bold">{p.title}</h3>
              </div>
              <p className="text-xs text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 05 | 商业模式 */}
      <section className="space-y-12 bg-[#121212] border border-[#c5a059]/15 p-6 md:p-12 rounded-sm">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-5xl font-serif-sc leading-none text-white/95 tracking-tight">
            我们不是一次性交付，<br />
            而是<span className="italic font-light text-[#c5a059] opacity-95">长期共生。</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-6 border-t border-white/5">
          {/* Traditional */}
          <div className="lg:col-span-5 bg-black/30 border border-white/5 p-6 md:p-8 flex flex-col justify-between rounded-sm">
            <div className="space-y-6">
              <h3 className="text-xs text-white/35 tracking-widest font-mono uppercase border-b border-white/5 pb-3 font-bold">传统设计 / 顾问公司</h3>
              <ul className="space-y-4 text-xs text-white/50 leading-relaxed font-light">
                <li className="flex gap-2"><span className="text-[#c5a059]">✕</span> 一次性交付图纸即撤场，无法应对后期运营变化与商誉风险。</li>
                <li className="flex gap-2"><span className="text-[#c5a059]">✕</span> 仅对硬装与美学负责，完全不对项目的最终商业业绩负责。</li>
                <li className="flex gap-2"><span className="text-[#c5a059]">✕</span> 品牌视觉、空间美学与内容社群开发完全割裂，缺乏闭环。</li>
              </ul>
            </div>
            <span className="text-[9px] tracking-wider text-white/20 font-mono uppercase mt-10 block">短期交易模式</span>
          </div>

          {/* DAC Partner Mode */}
          <div className="lg:col-span-7 bg-black border border-[#c5a059]/30 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden rounded-sm">
            <div className="absolute top-0 right-0 p-10 text-[120px] font-serif-sc font-bold opacity-[0.01] select-none pointer-events-none">¥</div>
            
            <div className="space-y-6 relative z-10">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <h3 className="text-xs text-[#c5a059] tracking-widest font-mono uppercase font-bold">DAC 长期陪跑伴行</h3>
                <span className="text-[9px] bg-[#c5a059]/15 text-[#c5a059] border border-[#c5a059]/20 px-2 py-0.5 rounded-sm font-mono font-bold">商业创新</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-sm font-serif-sc text-white font-bold">利益共同体绑定</h4>
                  <p className="text-xs text-white/50 leading-relaxed font-light">我们将策划设计费用与后期营业流水、核心商誉深入挂钩，风雨共担，共谋长远。</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-serif-sc text-white font-bold">七折进场 + 营业额分成</h4>
                  <p className="text-xs text-white/50 leading-relaxed font-light">大幅降低投资方的初始固定费用门槛，由 DAC 团队长期伴行，在业绩释放中完成分成共赢。</p>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/5 flex justify-between items-baseline relative z-10">
              <span className="text-[9px] tracking-wider text-[#c5a059] font-mono uppercase">利益深度共赢</span>
              <Link to="/partnership" className="text-xs tracking-widest text-[#c5a059] hover:text-white transition-colors uppercase font-semibold inline-flex items-center gap-1.5">
                深入合作机制 <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 06 | 完整服务体系 */}
      <section className="space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end border-b border-white/5 pb-6">
          <div className="lg:col-span-7 space-y-3">
            <h2 className="text-2xl md:text-4xl font-serif-sc leading-none text-white/90">
              全生命周期服务矩阵
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-xs text-white/40 tracking-[0.2em] leading-relaxed uppercase font-light">
              点击各核心模块，了解我们如何全生命周期伴行项目，打通从文化考古到运营闭环的最后一公里。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {serviceMap.map((m) => (
            <Link
              key={m.id}
              to={m.path}
              className="p-6 bg-[#121212] hover:bg-[#1c1c1c] border border-white/5 hover:border-[#c5a059]/40 rounded-sm transition-all duration-500 group flex flex-col justify-between min-h-[160px]"
            >
              <div className="flex justify-between items-start">
                <span className="text-[8px] tracking-wider text-white/30 font-mono uppercase">{m.en}</span>
              </div>
              <div className="space-y-1.5 mt-6">
                <h3 className="text-base font-serif-sc text-white group-hover:text-[#c5a059] transition-colors font-bold">{m.title}</h3>
                <span className="text-[9px] tracking-widest text-[#c5a059] opacity-70 inline-flex items-center gap-1">
                  详情 <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
};

export default Home;
