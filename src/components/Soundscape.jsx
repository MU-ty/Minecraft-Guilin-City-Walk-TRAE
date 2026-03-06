import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Volume2, VolumeX, Waves, Bird, Wind } from 'lucide-react';

const Soundscape = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSound, setActiveSound] = useState('river');

  const sounds = [
    { id: 'river', icon: Waves, label: '流水', color: 'bg-mc-water' },
    { id: 'birds', icon: Bird, label: '鸟鸣', color: 'bg-mc-dark-green' },
    { id: 'wind', icon: Wind, label: '清风', color: 'bg-mc-stone' },
  ];

  return (
    <div className="fixed bottom-8 left-8 z-50 flex items-end gap-4 font-pixel">
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-mc-ui p-2 border-4 border-black shadow-mc flex gap-2"
          >
            {sounds.map((sound) => (
              <motion.button
                key={sound.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveSound(sound.id)}
                className={`p-2 border-2 border-black transition-all ${
                  activeSound === sound.id 
                    ? `${sound.color} text-white shadow-mc-active` 
                    : 'bg-gray-300 text-gray-600 hover:bg-gray-400'
                }`}
                title={sound.label}
              >
                <sound.icon size={16} />
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsPlaying(!isPlaying)}
        className={`w-12 h-12 border-4 border-black flex items-center justify-center shadow-mc transition-all ${
          isPlaying ? 'bg-mc-green text-black' : 'bg-mc-ui text-gray-600'
        }`}
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </motion.button>
      
      {isPlaying && (
        <div className="absolute -top-10 left-0 right-0 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[8px] font-bold text-white bg-black/60 px-2 py-1 border-2 border-white/20 whitespace-nowrap"
          >
            播放中: {sounds.find(s => s.id === activeSound)?.label}
          </motion.span>
        </div>
      )}
    </div>
  );
};

export default Soundscape;
