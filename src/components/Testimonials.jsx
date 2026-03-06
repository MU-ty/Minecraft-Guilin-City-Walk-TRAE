import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "李先生",
    role: "摄影爱好者",
    content: "跟随这份指引，我在逍遥楼捕捉到了最美的日落。路线规划非常合理，避开了人潮，体验极佳！",
    rating: 5,
    avatar: "bg-blue-100 text-blue-600"
  },
  {
    id: 2,
    name: "Sarah W.",
    role: "Digital Nomad",
    content: "The Two Rivers and Four Lakes walk was magical at night. This guide made navigating the local spots so easy. Highly recommend!",
    rating: 5,
    avatar: "bg-purple-100 text-purple-600"
  },
  {
    id: 3,
    name: "王小萌",
    role: "资深吃货",
    content: "西山公园周边的米粉攻略真的绝了！那家隐藏在巷子里的老店，味道是我这辈子吃过最正宗的。",
    rating: 5,
    avatar: "bg-green-100 text-green-600"
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-[#707070] overflow-hidden pixel-grid">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-block bg-mc-ui p-8 border-8 border-black shadow-mc mb-16 w-full">
          <h2 className="text-2xl font-pixel uppercase">玩家留言板</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-mc-ui border-8 border-black p-12 md:p-16 shadow-mc font-pixel"
            >
              <div className="flex justify-center gap-2 mb-8 text-mc-gold">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-sm md:text-lg text-black leading-relaxed mb-12">
                "{testimonials[index].content}"
              </p>
              
              <div className="flex flex-col items-center">
                <div className={`w-16 h-16 border-4 border-black flex items-center justify-center font-bold text-xl mb-4 shadow-mc ${testimonials[index].avatar}`}>
                  {testimonials[index].name[0]}
                </div>
                <h4 className="text-xs font-bold text-black">{testimonials[index].name}</h4>
                <p className="text-[8px] text-gray-500 mt-2">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-12">
            <button 
              onClick={prev}
              className="mc-button p-4"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="mc-button p-4"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
