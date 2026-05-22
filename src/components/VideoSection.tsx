import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Maximize2 } from 'lucide-react';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

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

  return (
    <section className="relative w-full bg-transparent py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3 lg:col-span-8"
        >
          <span className="text-[10px] tracking-[0.5em] text-white/30 uppercase block font-mono">Archive / Film</span>
          <h2 className="text-3xl md:text-5xl font-serif-sc tracking-tight leading-none text-white/90">
            我们预演未来的文明。
          </h2>
        </motion.div>
        
        <p className="text-white/40 text-xs md:text-sm max-w-sm leading-loose tracking-[0.2em] uppercase border-l border-[#c5a059]/30 pl-6 font-light">
          A cinematic document of the resonance between space and soul. The bio-system of second life begins here.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <motion.div 
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          onClick={togglePlay}
          className="relative w-full aspect-video bg-zinc-950 overflow-hidden shadow-2xl rounded-sm cursor-pointer group border border-white/5"
        >
          {/* High quality fallback cover image since video URL might be slow */}
          <video
            ref={videoRef}
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
            className={`w-full h-full object-cover transition-all duration-1000 ${!isPlaying ? 'brightness-[0.5] scale-105' : 'brightness-100 scale-100'}`}
            poster="https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/huwaishui.png"
          >
            {/* Custom high-quality architectural stock video stream */}
            <source 
              src="https://pub-7c93bbf1cacc4b48b9d4cb12a7b37539.r2.dev/DAC%20Design%E9%AB%98%E6%B8%85%E7%89%88%E7%89%88.mov" 
              type="video/quicktime" 
            />
            <source 
              src="https://pub-7c93bbf1cacc4b48b9d4cb12a7b37539.r2.dev/DAC%20Design%E9%AB%98%E6%B8%85%E7%89%88%E7%89%88.mov" 
              type="video/mp4" 
            />
          </video>

          <AnimatePresence>
            {!isPlaying && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#c5a059]/50 flex items-center justify-center text-white backdrop-blur-md bg-black/20">
                  <div className="ml-1.5 w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-[#c5a059] border-b-[8px] border-b-transparent" />
                </div>
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
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
