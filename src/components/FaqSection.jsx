import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: "什么时候是桂林最适合 City Walk 的时间？",
    answer: "通常是春季（3-5月）和秋季（9-11月）。春季可以看到烟雨漓江的梦幻，秋季则气候干爽，银杏金黄。避开盛夏的酷暑和梅雨季节是明智的选择。"
  },
  {
    question: "这些路线适合带小孩或老人吗？",
    answer: "我们的大部分路线（如两江四湖和东西巷）都非常平坦且设有无障碍通道。东西巷路线由于主要是步行街，非常适合全家出游。"
  },
  {
    question: "如果下雨了，有什么室内替代方案吗？",
    answer: "如果遇到大雨，推荐参观靖江王府内部展厅，或者前往东西巷的传统手工艺馆。另外，乘船游览两江四湖也是雨天的浪漫选择。"
  },
  {
    question: "这些路线需要购买门票吗？",
    answer: "大部分漫步区域是免费开放的（如榕杉湖、东西巷）。但部分景点如靖江王府、象鼻山公园、日月双塔等需要购买门票，建议提前在线预订。"
  }
];

const FaqItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b-4 border-black/10 last:border-0 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left hover:bg-black/5 transition-colors px-6"
      >
        <span className="text-base font-pixel text-black pr-10 leading-relaxed">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`p-3 border-4 border-black shadow-mc ${isOpen ? 'bg-mc-green text-black' : 'bg-gray-100 text-gray-400'}`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="px-6 pb-10 text-gray-600 leading-loose text-sm font-readable">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq-section" className="py-24 bg-[#707070] pixel-grid">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 bg-mc-ui p-12 border-8 border-black shadow-mc">
          <h2 className="text-3xl font-pixel mb-8 text-black uppercase">任务向导 FAQ</h2>
          <p className="text-sm font-pixel text-gray-500 leading-loose">
            在像素世界冒险的常见疑问。
          </p>
        </div>

        <div className="bg-mc-ui border-8 border-black shadow-mc p-6 md:p-10">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="mc-button text-sm flex items-center gap-4 mx-auto px-8 py-4">
            <MessageCircle size={20} />
            [ 发送私人消息 ]
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
