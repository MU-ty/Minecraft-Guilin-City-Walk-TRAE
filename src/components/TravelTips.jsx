import React from 'react';
import { motion } from 'framer-motion';
import { Sun, CloudRain, ShieldCheck, Map, CreditCard, Clock } from 'lucide-react';

const tips = [
  {
    icon: Sun,
    title: "最佳季节",
    content: "4月-10月是最佳旅游季节，气候宜人，漓江水位充足，风景最美。"
  },
  {
    icon: CloudRain,
    title: "携带装备",
    content: "桂林多雨，随身携带雨伞或雨衣。步行为主，请穿舒适的运动鞋。"
  },
  {
    icon: Map,
    title: "避坑指南",
    content: "景区周边拉客的“野导”较多，建议提前在正规平台预约门票和向导。"
  },
  {
    icon: CreditCard,
    title: "交通攻略",
    content: "市区内建议骑行共享单车或乘坐滴滴，远郊景点可选乘旅游大巴。"
  }
];

const TravelTips = () => {
  return (
    <section className="py-24 bg-[#707070] pixel-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 bg-mc-ui p-12 border-8 border-black shadow-mc">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-pixel mb-8 text-black uppercase"
          >
            生存手册
          </motion.h2>
          <p className="text-sm font-pixel text-gray-600 max-w-2xl mx-auto leading-loose">
            在像素桂林生存的必备知识。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-mc-ui p-10 border-8 border-black shadow-mc hover:shadow-mc-active transition-all"
            >
              <div className="w-16 h-16 bg-mc-dirt border-4 border-black text-white flex items-center justify-center mb-8 shadow-mc">
                <tip.icon size={32} />
              </div>
              <h3 className="text-sm font-pixel font-bold mb-6 text-black">{tip.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-readable">
                {tip.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelTips;
