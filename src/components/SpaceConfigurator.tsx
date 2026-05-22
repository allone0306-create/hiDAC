import React, { useState, useMemo } from 'react';
import { Sparkles, Shield, Eye } from 'lucide-react';

interface BaseOption {
  name: string;
  desc: string;
  physical: number;
  spiritual: number;
  culture: number;
}

const bases: BaseOption[] = [
  { name: '山居', desc: '壁立山巅，云遮雾罩，绝对隐逸的精神真空场域', physical: 95, spiritual: 85, culture: 55 },
  { name: '湖居', desc: '水平镜影，洱海波光，消融边界的时间留白处处', physical: 75, spiritual: 90, culture: 70 },
  { name: '村落', desc: '田园村社，烟火人情，复兴宗族邻里的有机生命力', physical: 65, spiritual: 75, culture: 95 }
];

const addOns = [
  { name: '自然疗愈', en: 'Mindfulness & Nature', cost: 15 },
  { name: '当代艺术介入', en: 'Art Installation', cost: 20 },
  { name: '在地风物IP化', en: 'Local Culture IP', cost: 25 }
];

const SpaceConfigurator: React.FC = () => {
  const [selectedBase, setSelectedBase] = useState<BaseOption>(bases[0]);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const metrics = useMemo(() => {
    let addOnPhysical = 0;
    let addOnSpiritual = 0;
    let addOnCulture = 0;

    if (selectedAddOns.includes('自然疗愈')) addOnSpiritual += 15;
    if (selectedAddOns.includes('当代艺术介入')) addOnSpiritual += 10;
    if (selectedAddOns.includes('在地风物IP化')) addOnCulture += 20;

    return {
      physical: Math.min(100, selectedBase.physical + addOnPhysical),
      spiritual: Math.min(100, selectedBase.spiritual + addOnSpiritual),
      culture: Math.min(100, selectedBase.culture + addOnCulture)
    };
  }, [selectedBase, selectedAddOns]);

  const toggleAddOn = (name: string) => {
    if (selectedAddOns.includes(name)) {
      setSelectedAddOns(selectedAddOns.filter(a => a !== name));
    } else {
      setSelectedAddOns([...selectedAddOns, name]);
    }
  };

  return (
    <div className="bg-[#121212] border border-white/5 rounded-sm p-6 md:p-10 space-y-8 shadow-2xl text-[#d4d4d4]">
      <div className="space-y-3">
        <span className="text-[10px] tracking-[0.4em] text-[#c5a059] uppercase font-mono font-bold block">人居系统自定义 / Configurator</span>
        <h3 className="text-xl md:text-3xl font-serif-sc text-white/90 font-bold leading-tight">
          编织您的第二生命生活系统
        </h3>
        <p className="text-xs text-white/40 leading-relaxed font-light">
          在这里，您可以模拟将不同的物理地貌基底与 DAC 达成文化独特的精神介入模组进行编织，即时演算对应的生活品质指数。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Configuration Panel */}
        <div className="lg:col-span-7 space-y-6">
          {/* Bases selection */}
          <div className="space-y-3">
            <label className="text-xs text-white/40 tracking-wider uppercase block font-mono">1. 选择地貌基底 Geomorphic Base</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {bases.map(base => {
                const isActive = selectedBase.name === base.name;
                return (
                  <button
                    key={base.name}
                    onClick={() => setSelectedBase(base)}
                    className={`p-4 border text-left transition-all duration-500 rounded-sm focus:outline-none ${
                      isActive 
                        ? 'border-[#c5a059] bg-[#c5a059]/5 text-white' 
                        : 'border-white/5 bg-[#1a1a1a]/35 text-white/60 hover:border-white/20'
                    }`}
                  >
                    <h4 className="text-sm font-serif-sc font-bold">{base.name}</h4>
                    <p className="text-[10px] text-white/40 mt-1.5 leading-relaxed line-clamp-2 font-light">{base.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Add-ons checkboxes */}
          <div className="space-y-3">
            <label className="text-xs text-white/40 tracking-wider uppercase block font-mono">2. 导入精神介入模组 Import Modules</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {addOns.map(addon => {
                const isSelected = selectedAddOns.includes(addon.name);
                return (
                  <button
                    key={addon.name}
                    onClick={() => toggleAddOn(addon.name)}
                    className={`p-4 border text-left transition-all duration-500 rounded-sm focus:outline-none ${
                      isSelected 
                        ? 'border-[#c5a059] bg-[#c5a059]/5 text-white' 
                        : 'border-white/5 bg-[#1a1a1a]/35 text-white/50 hover:border-white/20'
                    }`}
                  >
                    <h4 className="text-xs font-serif-sc font-bold leading-snug">{addon.name}</h4>
                    <p className="text-[8px] tracking-wider text-white/30 font-mono uppercase mt-1.5">{addon.en}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Real-time Dashboard metrics */}
        <div className="lg:col-span-5 bg-black/40 border border-white/5 p-6 rounded-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-5">
            <h4 className="text-xs text-[#c5a059] tracking-widest uppercase font-mono font-bold border-b border-white/5 pb-2">生命能量指数 Dashboard</h4>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="flex items-center gap-2 text-white/60"><Shield size={14} className="text-[#c5a059]" /> 空间体感安全感 (Physical Shield)</span>
                <span className="font-bold text-[#c5a059] font-mono">{metrics.physical}%</span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#c5a059] transition-all duration-500" style={{ width: `${metrics.physical}%` }} />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="flex items-center gap-2 text-white/60"><Sparkles size={14} className="text-[#c5a059]" /> 精神冥想共鸣度 (Spiritual Resonance)</span>
                <span className="font-bold text-[#c5a059] font-mono">{metrics.spiritual}%</span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#c5a059] transition-all duration-500" style={{ width: `${metrics.spiritual}%` }} />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="flex items-center gap-2 text-white/60"><Eye size={14} className="text-[#c5a059]" /> 土地风土文脉厚度 (Cultural Thickness)</span>
                <span className="font-bold text-[#c5a059] font-mono">{metrics.culture}%</span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#c5a059] transition-all duration-500" style={{ width: `${metrics.culture}%` }} />
              </div>
            </div>
          </div>

          <div className="text-[10px] text-white/30 leading-relaxed border-t border-white/5 pt-4 font-light italic">
            基于您选择的配置，我们已为您编译生成专属的“{selectedBase.name} + {selectedAddOns.length}重精神模组”第二人生体系方案。
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceConfigurator;
