import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { walkRoutes } from '../data/routes';
import RouteCard from './RouteCard';
import PixelMap from './PixelMap';
import { MapPin, ArrowRight, Share2, Heart } from 'lucide-react';

const InteractiveRoutes = () => {
  const [selectedRoute, setSelectedRoute] = useState(walkRoutes[0]);

  return (
    <div id="routes-section" className="min-h-screen bg-[#707070] py-20 px-4 md:px-8 xl:px-12 pixel-grid">
      <div className="max-w-[120rem] mx-auto">
        <div className="text-center mb-16 bg-mc-ui p-12 border-8 border-black shadow-mc inline-block w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-pixel mb-8 text-black uppercase"
          >
            任务列表: 城市探索
          </motion.h2>
          <p className="text-sm font-pixel text-gray-600 max-w-2xl mx-auto leading-loose">
            选择一个漫步任务。收集沿途的故事，获得“地道桂林人”成就。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8">
          {/* Routes Inventory */}
          <div className="lg:col-span-2 bg-mc-ui p-6 border-8 border-black shadow-mc h-fit">
            <h3 className="font-pixel text-base mb-8 text-black border-b-4 border-black pb-4 text-center">路线仓库</h3>
            <div className="space-y-6">
              {walkRoutes.map((route) => (
                <RouteCard 
                  key={route.id} 
                  route={route} 
                  isSelected={selectedRoute.id === route.id}
                  onClick={setSelectedRoute}
                />
              ))}
            </div>
          </div>

          {/* Map View - Even Larger Span */}
          <div className="lg:col-span-8 flex items-center justify-center">
            <div className="w-full h-full min-h-[600px] xl:min-h-[800px]">
              <PixelMap 
                activeRouteId={selectedRoute.id} 
                onPointClick={(id) => setSelectedRoute(walkRoutes.find(r => r.id === id))}
              />
            </div>
          </div>

          {/* Route Details (MC UI) */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRoute.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-mc-ui border-8 border-black shadow-mc p-8 h-full font-pixel"
              >
                <div className="mb-10">
                  <h3 className="text-base font-bold text-black mb-6 uppercase leading-relaxed text-center">{selectedRoute.title}</h3>
                  <div className="flex justify-center gap-4">
                    <div className="w-10 h-10 bg-mc-dirt border-4 border-black" />
                    <div className="w-10 h-10 bg-mc-stone border-4 border-black" />
                    <div className="w-10 h-10 bg-mc-gold border-4 border-black" />
                  </div>
                </div>

                <div className="space-y-8">
                  {selectedRoute.points.map((point, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative pl-8 before:content-['>'] before:absolute before:left-0 before:text-mc-dark-green before:text-sm"
                    >
                      <div className="flex flex-col gap-2 mb-2">
                        <h4 className="text-xs font-bold text-black leading-tight">{point.name}</h4>
                        <span className="text-[10px] bg-mc-stone/20 px-2 py-1 text-black/60 w-fit">{point.transport}</span>
                      </div>
                      <p className="text-[10px] text-gray-600 leading-relaxed font-readable">{point.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mc-button w-full text-xs mt-12 py-4"
                >
                  [ 查看攻略 ]
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveRoutes;
