import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { traeEvents } from '../data/traeEvents';
import { Calendar, MapPin, User, Presentation, ExternalLink, Award, Archive } from 'lucide-react';
import PixelMap from './PixelMap';
import TraeEventCard from './TraeEventCard';

const TraeEventsSection = () => {
  const [selectedEventId, setSelectedEventId] = useState(traeEvents[0].id);
  const selectedEvent = traeEvents.find(e => e.id === selectedEventId);

  return (
    <section id="trae-events" className="py-24 bg-[#707070] pixel-grid">
      <div className="max-w-[120rem] mx-auto px-4 md:px-12 xl:px-20">
        <div className="text-center mb-16 bg-mc-ui p-12 border-8 border-black shadow-mc inline-block w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-pixel mb-8 text-black uppercase flex items-center justify-center gap-4"
          >
            <Award size={40} className="text-purple-600" />
            TRAE 活动切换页
          </motion.h2>
          <p className="text-sm font-pixel text-gray-600 max-w-2xl mx-auto leading-loose">
            回顾往期精彩，预约未来灵感。通过左侧列表或地图方块，切换不同的 TRAE 活动记录。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
          {/* Event Inventory Sidebar */}
          <div className="lg:col-span-3 bg-mc-ui p-8 border-8 border-black shadow-mc h-fit">
            <h3 className="font-pixel text-base mb-8 text-black border-b-4 border-black pb-4 text-center flex items-center justify-center gap-2">
              <Archive size={20} className="text-purple-600" />
              活动存档
            </h3>
            <div className="space-y-6">
              {traeEvents.map((event) => (
                <TraeEventCard 
                  key={event.id} 
                  event={event} 
                  isSelected={selectedEventId === event.id}
                  onClick={setSelectedEventId}
                />
              ))}
            </div>
          </div>

          {/* Events Map */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full h-full min-h-[600px] xl:min-h-[800px]">
              <PixelMap 
                activeEventId={selectedEventId}
                onEventClick={setSelectedEventId}
              />
            </div>
          </div>

          {/* Event Details Panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedEvent.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-mc-ui border-8 border-black shadow-mc p-10 h-full font-pixel"
              >
                <div className="mb-10 border-b-4 border-black pb-8">
                  <div className="flex gap-2 mb-4">
                    <div className={`text-white text-[10px] px-3 py-1 shadow-mc ${selectedEvent.isUpcoming ? 'bg-red-600' : 'bg-purple-600'}`}>
                      {selectedEvent.isUpcoming ? '即将到来' : '往期回顾'}
                    </div>
                    <div className="bg-mc-stone text-white text-[10px] px-3 py-1 shadow-mc">
                      {selectedEvent.type}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4 leading-tight">{selectedEvent.theme}</h3>
                  <div className="flex items-center gap-2 text-gray-500 text-[10px]">
                    <Calendar size={14} />
                    <span>{selectedEvent.date}</span>
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="w-16 h-16 bg-mc-dirt border-4 border-black flex items-center justify-center shrink-0 shadow-mc text-white">
                      <MapPin size={32} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-black mb-2 uppercase">活动地点</h4>
                      <p className="text-sm text-gray-600 font-readable">{selectedEvent.location}</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-16 h-16 bg-mc-gold border-4 border-black flex items-center justify-center shrink-0 shadow-mc text-black">
                      <User size={32} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-black mb-2 uppercase">特邀嘉宾</h4>
                      <p className="text-sm text-gray-600 font-readable">{selectedEvent.guest}</p>
                    </div>
                  </div>

                  <div className="p-6 bg-black/5 border-4 border-black/10">
                    <h4 className="text-xs font-bold text-black mb-4 flex items-center gap-2">
                      <Presentation size={16} className="text-purple-600" />
                      精彩回顾
                    </h4>
                    <p className="text-xs text-gray-500 leading-loose font-readable mb-6">
                      {selectedEvent.description}
                    </p>
                    {!selectedEvent.isUpcoming ? (
                      <a 
                        href={selectedEvent.pptUrl}
                        className="mc-button w-full text-[10px] flex items-center justify-center gap-2 py-4"
                      >
                        [ 下载演讲 PPT ]
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <button className="mc-button w-full text-[10px] flex items-center justify-center gap-2 py-4 bg-mc-gold text-black border-mc-border shadow-mc-active cursor-default">
                        [ 预约活动详情 ]
                        <Calendar size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraeEventsSection;
