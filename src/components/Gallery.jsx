import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Image as ImageIcon } from 'lucide-react';

const galleryItems = [
  { id: 1, title: "漓江渔火", category: "自然", color: "bg-blue-200" },
  { id: 2, title: "龙脊梯田", category: "人文", color: "bg-green-200" },
  { id: 3, title: "象山水月", category: "地标", color: "bg-yellow-200" },
  { id: 4, title: "西街灯火", category: "夜景", color: "bg-purple-200" },
  { id: 5, title: "十里画廊", category: "自然", color: "bg-emerald-200" },
  { id: 6, title: "独秀峰", category: "地标", color: "bg-red-200" },
];

const Gallery = () => {
  return (
    <section className="py-24 bg-[#707070] pixel-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-16 bg-mc-ui p-8 border-8 border-black shadow-mc">
          <div>
            <h2 className="text-2xl font-pixel text-black uppercase">截图存档</h2>
            <p className="text-[10px] font-pixel text-gray-600 mt-2">这些瞬间值得保存到你的相册中。</p>
          </div>
          <div className="flex items-center gap-2 text-mc-dark-green font-pixel text-[10px] animate-bounce">
            <Camera size={24} />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className={`aspect-square border-8 border-black ${item.color} flex flex-col items-center justify-center p-4 text-center group cursor-pointer relative overflow-hidden shadow-mc`}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-white/20 transition-colors" />
              <ImageIcon size={24} className="mb-2 text-black/20 group-hover:text-black transition-colors" />
              <h3 className="text-[8px] font-pixel text-black group-hover:bg-black group-hover:text-white p-1 transition-colors relative z-10">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
