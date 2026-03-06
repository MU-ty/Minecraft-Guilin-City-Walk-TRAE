import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ChevronDown } from 'lucide-react';

const Hero = ({ onExploreClick }) => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden bg-[#7eb355] pixel-grid border-b-8 border-mc-border">
      {/* Blocky clouds */}
      <div className="absolute top-20 left-10 w-40 h-10 bg-white shadow-mc opacity-60 animate-pulse" />
      <div className="absolute top-40 right-20 w-60 h-12 bg-white shadow-mc opacity-40 animate-pulse delay-75" />
      <div className="absolute top-10 right-40 w-32 h-8 bg-white shadow-mc opacity-50 animate-pulse delay-150" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 text-center px-4"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block mb-12"
        >
          <div className="w-24 h-24 bg-mc-gold border-8 border-black shadow-mc relative flex items-center justify-center">
            <MapPin size={48} className="text-black" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 border-4 border-black" />
          </div>
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter text-shadow-mc uppercase leading-tight">
           <span className="text-mc-gold">我的桂林</span>
        </h1>
        <p className="text-sm md:text-base text-white mb-12 max-w-2xl mx-auto font-pixel leading-loose bg-black/40 p-8 border-4 border-white/20">
          &gt; 欢迎来到像素桂林。在这里，每一块方块都藏着故事，每一次漫步都是一场冒险。准备好你的镐头，哦不，是心情，开启这段像素之旅。我们的目标是将桂林的历史、文化和自然融入到每一个像素中，让你在桂林的世界里感受到独特的体验。

        </p>

        <p className="text-sm md:text-base text-white mb-12 max-w-2xl mx-auto font-pixel leading-loose bg-black/40 p-8 border-4 border-white/20">
          
          &gt; 同时我们也通过此网站记录下 TRAE@Guilin 开发者的足迹，等待着你去发现。
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onExploreClick}
          className="mc-button text-xl font-pixel px-12 py-8"
        >
          [ 开始探索 ]
        </motion.button>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12"
      >
        <ChevronDown size={40} className="text-white opacity-80" />
      </motion.div>
    </div>
  );
};

export default Hero;
