import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Navigation, MapPin } from 'lucide-react';

const RouteCard = ({ route, onClick, isSelected }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(route)}
      className={`cursor-pointer p-6 transition-all duration-100 border-4 border-black ${
        isSelected ? 'bg-mc-gold shadow-mc-active' : 'bg-mc-ui shadow-mc'
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-pixel text-black/60">
          #{route.id}
        </span>
        <div className="flex items-center text-black/40 text-[10px] font-pixel">
          {route.distance}
        </div>
      </div>
      
      <h3 className="text-base font-bold mb-4 text-black font-pixel leading-tight">{route.title}</h3>
      
      <div className="flex items-center text-black/60 text-[10px] font-pixel">
        <Clock size={14} className="mr-2" />
        {route.duration}
      </div>
    </motion.div>
  );
};

export default RouteCard;
