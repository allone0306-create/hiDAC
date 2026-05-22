import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <main className="bg-[#0a0a0a] text-[#d4d4d4] min-h-screen pt-32 pb-24 px-6 md:px-12 flex items-center">
      <div className="max-w-[1800px] mx-auto w-full space-y-16">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-white/5 pb-10">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[10px] tracking-[0.5em] text-[#c5a059] uppercase block font-mono">Vol. 09 / Contact Information</span>
            <h1 className="text-4xl md:text-7xl font-serif-sc text-white leading-none">
              联系与同行。
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs md:text-sm text-white/40 tracking-[0.2em] leading-relaxed uppercase font-light">
              期待与有远见、追求美学体面与商业长效增长的投资方建立战略合伙人伴行关系。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Text & Manifesto */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-4">
              <p className="text-lg text-[#c5a059] font-serif-sc italic leading-relaxed">
                “场域，时间的容器，<br />
                生活，自然的回音。”
              </p>
              <div className="w-12 h-px bg-white/20" />
            </div>

            <div className="space-y-8 pt-8">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#c5a059] transition-all">
                  <Phone size={16} className="text-[#c5a059]" />
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.4em] text-white/35 uppercase mb-1">电话 / Phone</p>
                  <a href="tel:18623113355" className="text-xl md:text-2xl tracking-wider text-white/80 hover:text-white transition-colors font-semibold">
                    186 2311 3355
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#c5a059] transition-all">
                  <Mail size={16} className="text-[#c5a059]" />
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.4em] text-white/35 uppercase mb-1">邮箱 / Email</p>
                  <a href="mailto:359016609@qq.com" className="text-xl md:text-2xl tracking-wider text-white/80 hover:text-white transition-colors lowercase">
                    359016609@qq.com
                  </a>
                </div>
              </div>

              <a 
                href="https://uri.amap.com/search?keyword=万邦国新中心" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-4 group cursor-pointer focus:outline-none"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#c5a059] transition-all">
                  <MapPin size={16} className="text-[#c5a059]" />
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.4em] text-white/35 uppercase mb-1 group-hover:text-[#c5a059] transition-colors">总部地址 / 导航前往</p>
                  <p className="text-lg md:text-xl font-serif-sc text-white/80 leading-snug group-hover:text-white transition-colors underline underline-offset-4 decoration-[#c5a059]/30">
                    中国·重庆·两江新区万邦国新中心V3元·创
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Side: Matrix & QR */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="lg:col-span-7 w-full"
          >
            <div className="bg-[#141414] border border-white/5 p-8 md:p-16 relative overflow-hidden rounded-sm">
              <div className="absolute inset-0 p-12 opacity-[0.01] pointer-events-none">
                <Globe className="w-full h-full object-contain" />
              </div>

              <div className="relative z-10 flex flex-col items-center space-y-8">
                <div className="aspect-square bg-white p-6 relative overflow-hidden shadow-2xl w-full max-w-[240px] rounded-sm group">
                  <img 
                    src="https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/erweima.png" 
                    alt="DAC WeChat Public Account"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain relative z-10"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src = "https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/erweima.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="space-y-2 text-center">
                  <h4 className="text-xl font-serif-sc tracking-[0.15em] text-white/95">DAC 官方微信</h4>
                  <p className="text-[9px] tracking-[0.4em] text-[#c5a059] uppercase font-bold font-mono">
                    扫码或搜索关注公众号 / Scan to Connect
                  </p>
                  <div className="w-8 h-px bg-white/10 mx-auto mt-4" />
                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-white/5 flex items-center justify-end">
                <div className="flex gap-2">
                   <div className="w-1 h-1 bg-white/10 rounded-full" />
                   <div className="w-1.5 h-1.5 bg-[#c5a059] rounded-full" />
                   <div className="w-1 h-1 bg-white/10 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
