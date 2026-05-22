import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const location = useLocation();

  // Lock background page body overflow scrolling when bottom drawer sheet is opened
  React.useEffect(() => {
    if (isSheetOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isSheetOpen]);

  // Primary quick-access tabs in the bottom dock (Pure bilingual text, no icons)
  const dockLinks = [
    { name: '首页', en: 'Home', path: '/' },
    { name: '风土', en: 'Culture', path: '/culture' },
    { name: '生活', en: 'Living', path: '/living-system' },
    { name: '实践', en: 'Practice', path: '/cases' },
  ];

  // Secondary assets in the bottom-up sheet (Pure bilingual text, no icons)
  const sheetLinks = [
    { name: '战略合伙伴行', en: 'Partnership', path: '/partnership' },
    { name: '思想汇专栏', en: 'Column & Thoughts', path: '/thoughts' },
    { name: '时代人居宣言', en: 'Whitepaper', path: '/whitepaper' },
    { name: '创始人视点', en: 'Founder Profile', path: '/founder' },
    { name: '合作同行咨询', en: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* Elegant Top Logo Brand Mark (Static & Non-obtrusive) */}
      <div className="fixed top-6 left-6 right-6 z-40 flex justify-between items-center pointer-events-none">
        <Link to="/" className="pointer-events-auto flex items-baseline gap-2 bg-black/45 backdrop-blur-md border border-white/5 px-4 py-2 rounded-full">
          <span className="text-sm font-bold tracking-widest text-white font-mono">DAC.</span>
          <span className="text-[7px] tracking-[0.25em] text-[#c5a059] uppercase font-mono font-bold">DESIGN ART CULTURE</span>
        </Link>

        <Link to="/contact" className="pointer-events-auto text-xs tracking-[0.15em] text-white/85 hover:text-[#c5a059] bg-black/50 backdrop-blur-md border border-[#c5a059]/25 px-4.5 py-2 rounded-full transition-luxury font-serif-sc font-bold">
          伴行咨询
        </Link>
      </div>

      {/* 01 | Poetic Floating Bottom Dock Nav (Bilingual text only, no icons) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md">
        <div className="bg-[#0d0d0d]/90 backdrop-blur-xl border border-white/5 shadow-2xl px-6 py-3 rounded-full flex justify-between items-center gap-2">
          {dockLinks.map(link => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className="flex-1 flex flex-col items-center justify-center relative py-1 group"
              >
                {/* Active dot glow indicator */}
                {isActive && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute -top-1 w-1 h-1 bg-[#c5a059] rounded-full" 
                  />
                )}
                
                <span className={`text-xs font-serif-sc transition-colors duration-300 ${
                  isActive ? 'text-[#c5a059] font-bold' : 'text-white/70 group-hover:text-white'
                }`}>
                  {link.name}
                </span>
                <span className={`text-[7px] tracking-widest uppercase font-mono mt-0.5 transition-colors duration-300 ${
                  isActive ? 'text-[#c5a059]/70 font-semibold' : 'text-white/30'
                }`}>
                  {link.en}
                </span>
              </Link>
            );
          })}

          {/* Divider */}
          <div className="h-6 w-px bg-white/10 mx-2" />

          {/* More Trigger Tab */}
          <button
            onClick={() => setIsSheetOpen(true)}
            className="flex-1 flex flex-col items-center justify-center py-1 focus:outline-none group"
          >
            <span className="text-xs font-serif-sc text-white/70 group-hover:text-[#c5a059] transition-colors font-bold">
              更多
            </span>
            <span className="text-[7px] tracking-widest uppercase font-mono mt-0.5 text-white/30 group-hover:text-[#c5a059]/70 transition-colors">
              MORE
            </span>
          </button>
        </div>
      </div>

      {/* 02 | Bottom-up Half-Screen Sheet Menu */}
      <AnimatePresence>
        {isSheetOpen && (
          <>
            {/* Dimmed Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSheetOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] cursor-pointer"
            />

            {/* Sliding Bottom Sheet */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="fixed bottom-0 left-0 right-0 bg-[#0d0d0d] border-t border-white/10 rounded-t-3xl z-[101] p-6 pb-10 shadow-2xl text-left max-w-lg mx-auto"
            >
              {/* Center pull bar */}
              <div className="w-12 h-1 bg-white/10 rounded-full mx-auto mb-6 cursor-pointer" onClick={() => setIsSheetOpen(false)} />

              <div className="flex justify-between items-center mb-8">
                <div className="space-y-1">
                  <span className="text-[9px] tracking-[0.4em] text-[#c5a059] uppercase font-mono block">Ecosystem Explorer / 精神坐标</span>
                  <h4 className="text-lg font-serif-sc text-white font-bold">时代人居文明构建者</h4>
                </div>
                <button
                  onClick={() => setIsSheetOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/55 hover:text-[#c5a059]"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Sheet Link Stack */}
              <div className="space-y-2.5">
                {sheetLinks.map(link => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsSheetOpen(false)}
                    className="w-full p-4 bg-[#141414] hover:bg-[#1a1a1a] border border-white/5 hover:border-[#c5a059]/30 rounded-sm flex items-center justify-between group transition-all duration-300"
                  >
                    <div>
                      <span className="text-sm font-serif-sc text-white/90 font-bold group-hover:text-[#c5a059] transition-colors">{link.name}</span>
                      <span className="text-[8px] tracking-widest text-white/30 font-mono uppercase block mt-0.5">{link.en}</span>
                    </div>
                    <div className="text-[#c5a059] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-xs font-mono">→</div>
                  </Link>
                ))}
              </div>

              <div className="pt-8 mt-8 border-t border-white/5 text-center text-[9px] tracking-[0.35em] text-white/25 uppercase font-mono">
                达成文化 · 达成于心 · 成功于行
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
