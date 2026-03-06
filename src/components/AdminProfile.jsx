import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Code, MessageSquare, MapPin, Coffee, Github, Heart, X, Mail } from 'lucide-react';

const AdminProfile = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <section id="admin-profile" className="py-24 bg-[#707070] pixel-grid">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-mc-ui border-8 border-black shadow-mc p-12 md:p-16 relative overflow-hidden">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-mc-gold/10 -rotate-45 translate-x-16 -translate-y-16 border-4 border-black/20" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Steve Avatar / Figure */}
            <div className="md:col-span-4 flex flex-col items-center">
              <motion.div 
                whileHover={{ y: -10 }}
                className="w-48 h-48 bg-[#55FF55] border-8 border-black shadow-mc relative mb-8 flex items-center justify-center overflow-hidden group"
              >
                {/* Simplified Steve Head Pixel Art Style */}
                <div className="absolute inset-0 bg-[#2D5A27] opacity-20 group-hover:opacity-40 transition-opacity" />
                <User size={80} className="text-black relative z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-mc-dirt" />
              </motion.div>
              <div className="text-center">
                <h3 className="text-xl font-pixel text-black mb-2">史蒂夫 (Steve)</h3>
                <div className="bg-black/80 text-white text-[10px] font-pixel px-3 py-1 shadow-mc">
                  MU-ty | TRAE Fellow
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-8 space-y-8 font-pixel">
              <div className="space-y-4">
                <h2 className="text-2xl text-mc-dark-green uppercase">管理员介绍</h2>
                <p className="text-sm text-gray-700 leading-loose">
                  我是史蒂夫，一名来自 <span className="text-mc-gold bg-black px-2 py-1">桂林电子科技大学</span> 的开发者。
                  作为一名 <span className="text-purple-600">TRAE Fellow @ 桂林</span>，我致力于将科技与这片山水相融合。
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-white/40 border-4 border-black shadow-mc hover:bg-white/60 transition-colors">
                  <div className="flex items-center gap-3 mb-4 text-mc-dark-green">
                    <Code size={20} />
                    <h4 className="text-xs font-bold uppercase">提交 PR</h4>
                  </div>
                  <p className="text-[10px] text-gray-600 leading-relaxed font-readable">
                    欢迎任何人使用 AI 提交 PR！你不必拥有深厚的技术背景，只要你拥有“想要创造”的技术即可。
                  </p>
                </div>

                <div className="p-6 bg-white/40 border-4 border-black shadow-mc hover:bg-white/60 transition-colors">
                  <div className="flex items-center gap-3 mb-4 text-mc-gold">
                    <MessageSquare size={20} />
                    <h4 className="text-xs font-bold uppercase">提交 Issue</h4>
                  </div>
                  <p className="text-[10px] text-gray-600 leading-relaxed font-readable">
                    有任何好的建议或发现 Bug？请随时提交 Issue，让我们共同完善这个像素桂林。
                  </p>
                </div>
              </div>

              <div className="p-8 bg-mc-stone/20 border-4 border-black/10 leading-loose italic text-xs text-gray-500">
                "最后的最后，欢迎线下『面基』交流。我希望每一个来到这里的你，都能成为 Steve、Alex…… 成为那个改变世界的像素方块。"
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="https://github.com/MU-ty" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mc-button text-[10px] flex items-center gap-2"
                >
                  <Github size={16} /> [ GitHub ]
                </a>
                <button 
                  onClick={() => setShowContactModal(true)}
                  className="mc-button text-[10px] flex items-center gap-2 bg-mc-gold text-black border-mc-border"
                >
                  <Coffee size={16} /> [ coffee chat ]
                </button>
                <div className="ml-auto flex items-center gap-2 text-red-500 animate-pulse">
                  <Heart size={16} fill="currentColor" />
                  <span className="text-[8px]">Powered by TRAE & AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal (MC Style) */}
      <AnimatePresence>
        {showContactModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContactModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-mc-ui border-8 border-black shadow-mc p-10 max-w-md w-full font-pixel"
            >
              <button 
                onClick={() => setShowContactModal(false)}
                className="absolute -top-4 -right-4 bg-red-600 text-white p-2 border-4 border-black shadow-mc hover:bg-red-500 transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-mc-gold border-4 border-black mx-auto mb-6 flex items-center justify-center shadow-mc">
                  <Mail size={32} className="text-black" />
                </div>
                <h3 className="text-lg text-black mb-6 uppercase leading-tight">联系管理员</h3>
                <div className="p-6 bg-white/40 border-4 border-black mb-8">
                  <p className="text-xs text-gray-500 mb-4 uppercase">请发送邮件至:</p>
                  <p className="text-sm text-black select-all break-all underline decoration-2 underline-offset-4">
                    3417633465@qq.com
                  </p>
                </div>
                <button 
                  onClick={() => setShowContactModal(false)}
                  className="mc-button w-full py-4 text-xs"
                >
                  [ 知道了 ]
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AdminProfile;
