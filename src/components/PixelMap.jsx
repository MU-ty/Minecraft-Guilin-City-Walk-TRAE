import React from 'react';
import { motion } from 'framer-motion';
import { traeEvents } from '../data/traeEvents';

const PixelMap = ({ activeRouteId, onPointClick, activeEventId, onEventClick }) => {
  // Center: Guilin (250, 250) in a 500x500 space
  const center = { x: 250, y: 250 };
  
  const mapPoints = [
    { id: 0, x: center.x, y: center.y, name: "桂林", color: "bg-mc-gold", isCenter: true },
    
    // North Route (ID: 1)
    { id: 1, x: center.x, y: 180, name: "正阳街", parentId: 0, routeId: 1, color: "bg-mc-dirt" },
    { id: 11, x: center.x, y: 120, name: "东西巷", parentId: 1, routeId: 1, color: "bg-mc-dirt" },
    { id: 12, x: center.x, y: 60, name: "逍遥楼", parentId: 11, routeId: 1, color: "bg-mc-dirt" },
    
    // Northeast Route (ID: 2)
    { id: 2, x: 320, y: 200, name: "象鼻山", parentId: 0, routeId: 2, color: "bg-mc-water" },
    { id: 21, x: 380, y: 150, name: "日月双塔", parentId: 2, routeId: 2, color: "bg-mc-water" },
    { id: 22, x: 440, y: 100, name: "两江四湖", parentId: 21, routeId: 2, color: "bg-mc-water" },
    
    // Northwest Route (ID: 3)
    { id: 3, x: 150, y: 180, name: "龙脊梯田", parentId: 0, routeId: 3, color: "bg-mc-grass" },
    { id: 31, x: 100, y: 120, name: "黄洛瑶寨", parentId: 3, routeId: 3, color: "bg-mc-grass" },
    { id: 32, x: 50, y: 60, name: "金坑大寨", parentId: 31, routeId: 3, color: "bg-mc-grass" },
    
    // West Route (ID: 4)
    { id: 4, x: 180, y: 320, name: "西街", parentId: 0, routeId: 4, color: "bg-mc-wood" },
    { id: 41, x: 120, y: 380, name: "十里画廊", parentId: 4, routeId: 4, color: "bg-mc-wood" },
    
    // Southeast Route (ID: 5)
    { id: 5, x: 350, y: 300, name: "大圩古镇", parentId: 0, routeId: 5, color: "bg-mc-stone" },
  ];

  // TRAE Events Points
  const eventPoints = traeEvents.map(event => ({
    id: event.id,
    x: event.coords.x,
    y: event.coords.y,
    name: `TRAE: ${event.location}`,
    color: "bg-purple-600",
    isEvent: true
  }));

  const connections = mapPoints.filter(p => p.parentId !== undefined).map(p => {
    const parent = mapPoints.find(mp => mp.id === p.parentId);
    return { from: parent, to: p, routeId: p.routeId };
  });

  return (
    <div className="relative w-full aspect-square bg-[#7eb355] border-8 border-black overflow-hidden shadow-mc pixel-grid">
      {/* Background Grid & Textures */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-black w-2 h-2" 
            style={{ 
              top: `${(i % 5) * 25}%`, 
              left: `${Math.floor(i / 5) * 25}%` 
            }} 
          />
        ))}
      </div>

      {/* Connection Lines (Dashed MC Style) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
        {connections.map((conn, i) => (
          <motion.line
            key={i}
            x1={conn.from.x}
            y1={conn.from.y}
            x2={conn.to.x}
            y2={conn.to.y}
            stroke={activeRouteId === conn.routeId ? "#000" : "#00000044"}
            strokeWidth="4"
            strokeDasharray="8 8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
        ))}
      </svg>

      {/* Route Points */}
      {mapPoints.map((pt) => (
        <motion.button
          key={pt.id}
          whileHover={{ scale: 1.2, zIndex: 30 }}
          onClick={() => pt.routeId && onPointClick(pt.routeId)}
          className={`absolute w-6 h-6 ${pt.color} border-4 border-black shadow-mc flex items-center justify-center cursor-pointer transition-all group ${
            activeRouteId === pt.routeId ? 'ring-4 ring-white z-20' : ''
          }`}
          style={{ 
            left: `${(pt.x / 500) * 100}%`, 
            top: `${(pt.y / 500) * 100}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          {/* Label positioned to the side to avoid covering routes */}
          <div className={`absolute left-8 bg-black/80 text-white text-[10px] font-pixel px-2 py-1 border-2 border-white/20 whitespace-nowrap transition-all pointer-events-none opacity-0 group-hover:opacity-100 ${
            activeRouteId === pt.routeId ? 'opacity-100 -translate-y-1' : ''
          }`}>
            {pt.name}
          </div>
          {pt.isCenter && (
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-3 h-3 bg-white shadow-sm"
            />
          )}
        </motion.button>
      ))}

      {/* TRAE Event Points */}
      {eventPoints.map((pt) => (
        <motion.button
          key={pt.id}
          whileHover={{ scale: 1.2, zIndex: 40 }}
          onClick={() => onEventClick && onEventClick(pt.id)}
          className={`absolute w-8 h-8 ${pt.color} border-4 border-white shadow-mc flex items-center justify-center cursor-pointer transition-all group ${
            activeEventId === pt.id ? 'ring-4 ring-mc-gold z-30' : ''
          }`}
          style={{ 
            left: `${(pt.x / 500) * 100}%`, 
            top: `${(pt.y / 500) * 100}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <motion.div 
            animate={{ rotate: [0, 90, 180, 270, 360] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="w-3 h-3 bg-mc-gold"
          />
          <div className={`absolute left-10 bg-purple-900 text-white text-[10px] font-pixel px-2 py-1 border-2 border-mc-gold whitespace-nowrap transition-all pointer-events-none opacity-0 group-hover:opacity-100 ${
            activeEventId === pt.id ? 'opacity-100' : ''
          }`}>
            {pt.name}
          </div>
        </motion.button>
      ))}

      {/* Legend (MC UI) */}
      <div className="absolute top-6 left-6 bg-mc-ui p-4 border-4 border-black text-[10px] font-pixel space-y-3 shadow-mc z-5">
        <div className="flex items-center gap-3"><div className="w-4 h-4 bg-mc-gold border-2 border-black" /> 中心城</div>
        <div className="flex items-center gap-3"><div className="w-4 h-4 bg-purple-600 border-2 border-white" /> TRAE 活动</div>
        <div className="flex items-center gap-3"><div className="w-4 h-4 bg-mc-dirt border-2 border-black" /> 人文历史</div>
        <div className="flex items-center gap-3"><div className="w-4 h-4 bg-mc-water border-2 border-black" /> 自然风光</div>
      </div>
    </div>
  );
};

export default PixelMap;
