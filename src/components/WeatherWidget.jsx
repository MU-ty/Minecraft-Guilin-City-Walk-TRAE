import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Cloud, CloudRain, CloudLightning, Wind, Clock } from 'lucide-react';

const WeatherWidget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed top-24 right-8 z-40 hidden lg:block font-pixel">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-mc-ui p-4 border-4 border-black shadow-mc flex flex-col items-center gap-2 min-w-[120px]"
      >
        <div className="flex items-center gap-1 text-black/40 text-[8px] mb-1">
          <Clock size={12} />
          <span>服务器时间</span>
        </div>
        
        <div className="text-sm font-bold text-black tracking-tighter">
          {formatTime(time)}
        </div>

        <div className="w-full h-1 bg-black/10 my-1" />

        <div className="flex flex-col items-center gap-1">
          <motion.div
            animate={{ rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-mc-gold"
          >
            <Sun size={24} />
          </motion.div>
          <div className="text-[10px] font-bold text-black">22°C</div>
          <div className="text-[6px] text-mc-dark-green uppercase">天气: 晴</div>
        </div>
      </motion.div>
    </div>
  );
};

export default WeatherWidget;
