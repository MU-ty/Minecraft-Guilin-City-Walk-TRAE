import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const TraeEventCard = ({ event, onClick, isSelected }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(event.id)}
      className={`cursor-pointer p-6 transition-all duration-100 border-4 border-black ${
        isSelected ? 'bg-purple-600 text-white shadow-mc-active' : 'bg-mc-ui text-black shadow-mc'
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <span className={`text-[8px] font-pixel px-2 py-1 border-2 border-black/20 ${
          event.isUpcoming ? 'bg-red-500' : 'bg-purple-900'
        }`}>
          {event.isUpcoming ? '即将到来' : '往期回顾'}
        </span>
        <div className="flex items-center text-[8px] font-pixel opacity-60">
          {event.type}
        </div>
      </div>
      
      <h3 className="text-sm font-bold mb-4 font-pixel leading-tight">{event.theme}</h3>
      
      <div className="flex flex-col gap-3 text-[10px] font-pixel opacity-60">
        <div className="flex items-center gap-3">
          <Calendar size={14} />
          {event.date}
        </div>
        <div className="flex items-center gap-3 font-readable">
          <MapPin size={14} />
          {event.location}
        </div>
      </div>
    </motion.div>
  );
};

export default TraeEventCard;
