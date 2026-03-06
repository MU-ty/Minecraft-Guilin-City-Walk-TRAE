import React from 'react';
import { motion } from 'framer-motion';
import { foodItems } from '../data/food';
import { Utensils, Star, ShoppingBag } from 'lucide-react';

const FoodSection = () => {
  return (
    <section id="food-section" className="py-24 bg-[#707070] overflow-hidden pixel-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6 bg-mc-ui p-12 border-8 border-black shadow-mc text-center md:text-left">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-3xl md:text-4xl font-pixel mb-8 text-black uppercase"
            >
              食物补给站
            </motion.h2>
            <p className="text-sm font-pixel text-gray-600 leading-loose">
              漫步需要体力。在这些补给站恢复你的饥饿值。
            </p>
          </div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-6 bg-mc-gold border-4 border-black text-black hidden md:block shadow-mc"
          >
            <Utensils size={48} />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {foodItems.map((food, index) => (
            <motion.div
              key={food.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-mc-ui p-8 border-8 border-black shadow-mc transition-all group flex flex-col"
            >
              <div className="mb-8 flex justify-between items-start border-b-4 border-black/10 pb-6">
                <span className="text-[10px] font-pixel text-mc-dark-green bg-mc-green/20 px-3 py-1 border-2 border-mc-dark-green/20">
                  {food.category}
                </span>
                <span className="text-black/40 font-pixel text-[10px]">{food.price}</span>
              </div>
              
              <h3 className="text-sm font-pixel font-bold mb-6 text-black group-hover:text-mc-dark-green transition-colors leading-tight">
                {food.name}
              </h3>
              <p className="text-xs text-gray-600 mb-10 leading-relaxed font-readable">
                {food.desc}
              </p>

              <div className="flex justify-between items-center mt-auto pt-6 border-t-4 border-black/10">
                <div className="flex items-center text-mc-gold gap-2">
                  <Star size={16} fill="currentColor" />
                  <span className="text-[10px] font-pixel">MAX</span>
                </div>
                <button className="mc-button p-3">
                  <ShoppingBag size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodSection;
