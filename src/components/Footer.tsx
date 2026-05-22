import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Footer: React.FC = () => {
  const [showWeChat, setShowWeChat] = useState(false);

  return (
    <footer className="bg-[#0d0d0d] border-t border-white/5 pt-20 pb-12 px-6 md:px-12 text-white relative">
      {/* WeChat Overlay Popup */}
      <AnimatePresence>
        {showWeChat && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowWeChat(false)}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#141414] p-8 max-w-sm w-full text-center space-y-6 relative shadow-2xl border border-white/10 rounded-sm"
            >
              <button 
                onClick={() => setShowWeChat(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="space-y-2">
                <h4 className="text-lg font-serif-sc tracking-widest text-white/90">微信联系 DAC</h4>
                <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono">Scan to connect with our team</p>
              </div>
              
              <div className="aspect-square bg-[#1a1a1a] flex items-center justify-center border border-white/5 p-6 rounded-sm">
                <img 
                  src="https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/erweima.png" 
                  alt="DAC WeChat Public Account QR" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/erweima.png";
                  }}
                />
              </div>
              
              <p className="text-[11px] text-white/50 leading-relaxed font-light">
                长按识别二维码 或 微信搜索公众号<br />
                <span className="font-bold text-[#c5a059] tracking-widest uppercase block mt-1">DAC FUTURE</span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-wider text-white">DAC.</span>
                <span className="text-[9px] font-serif-sc tracking-[0.35em] text-[#c5a059] whitespace-nowrap mt-1">达成文化</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="flex flex-col">
                <span className="text-[8px] tracking-[0.4em] font-light opacity-30 uppercase text-white">Design · Art · Culture</span>
                <span className="text-[9px] font-serif-sc tracking-[0.4em] text-white/60 mt-0.5">达于心 · 成于行</span>
              </div>
            </div>
            
            <p className="text-white/40 max-w-sm leading-relaxed text-sm font-light tracking-wide">
              我们不仅是在设计房屋物理空间，而是在为人类寻找第二种存在的可能性。让灵魂在自然与在地文化中，找到诗意的栖所。
            </p>
            
            <div className="flex gap-4">
              <button 
                onClick={() => setShowWeChat(true)}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#c5a059] hover:text-black hover:border-[#c5a059] transition-all duration-500 shadow-sm"
                aria-label="WeChat Connect"
              >
                <MessageSquare size={16} />
              </button>
              <a 
                href="mailto:359016609@qq.com" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#c5a059] hover:text-black hover:border-[#c5a059] transition-all duration-500 shadow-sm"
                aria-label="Email Connect"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs tracking-[0.3em] uppercase text-white/40 font-mono font-bold">探索 / Explore</h4>
            <ul className="space-y-3 text-sm text-white/50 font-light">
              <li>
                <Link to="/living-system" className="hover:text-[#c5a059] transition-colors tracking-widest">生活系统 / Second Life</Link>
              </li>
              <li>
                <Link to="/culture" className="hover:text-[#c5a059] transition-colors tracking-widest">在地文化 / Culture Research</Link>
              </li>
              <li>
                <Link to="/cases" className="hover:text-[#c5a059] transition-colors tracking-widest">案例档案 / Case Archives</Link>
              </li>
              <li>
                <Link to="/lab" className="hover:text-[#c5a059] transition-colors tracking-widest">未来研究 / Future Lab</Link>
              </li>
              <li>
                <Link to="/founder" className="hover:text-[#c5a059] transition-colors tracking-widest">创始人 / Founder Profile</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs tracking-[0.3em] uppercase text-white/40 font-mono font-bold">联系与地址 / Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/50 font-light">
              <li>
                <a 
                  href="https://uri.amap.com/search?keyword=万邦国新中心" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start gap-3 group focus:outline-none"
                >
                  <MapPin size={16} className="mt-0.5 text-[#c5a059] flex-shrink-0" />
                  <div className="text-xs md:text-sm leading-relaxed">
                    <p className="text-white/80 group-hover:text-[#c5a059] transition-colors">DAC·达成文化总部 / 导航前往</p>
                    <p className="text-white/40 mt-0.5 font-light group-hover:text-white transition-colors underline underline-offset-2 decoration-[#c5a059]/20">中国·重庆·两江新区万邦国新中心B栋3层V3元·创</p>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#c5a059] flex-shrink-0" />
                <span className="text-xs md:text-sm">186 2311 3355</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#c5a059] flex-shrink-0" />
                <span className="text-xs md:text-sm">359016609@qq.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/30 tracking-widest uppercase">
          <p>© 2026 DAC FUTURE (达成文化). ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link to="/whitepaper" className="hover:text-[#c5a059] transition-colors">文化白皮书</Link>
            <Link to="/partnership" className="hover:text-[#c5a059] transition-colors">战略同行协议</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
