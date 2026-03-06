// Minecraft Guilin City Walk - Last Updated: 2026-03-06
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import InteractiveRoutes from './components/InteractiveRoutes';
import FoodSection from './components/FoodSection';
import TravelTips from './components/TravelTips';
import Gallery from './components/Gallery';
import Soundscape from './components/Soundscape';
import Testimonials from './components/Testimonials';
import WeatherWidget from './components/WeatherWidget';
import FaqSection from './components/FaqSection';
import TraeEventsSection from './components/TraeEventsSection';
import AdminProfile from './components/AdminProfile';
import { Compass, Menu, X, Phone, Utensils, Map, Camera, HelpCircle, Award, UserCircle } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuLinks = [
    { label: '首页', href: '#hero' },
    { label: '任务', href: '#routes-section' },
    { label: 'TRAE', href: '#trae-events' },
    { label: '补给', href: '#food-section' },
    { label: '管理员', href: '#admin-profile' },
    { label: '手册', href: '#tips-section' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-mc-ui border-b-8 border-black shadow-mc py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4 cursor-pointer" onClick={(e) => handleLinkClick(e, '#hero')}>
          <div className={`p-3 border-4 border-black shadow-mc ${isScrolled ? 'bg-mc-gold text-black' : 'bg-white text-black'}`}>
            <Compass size={32} />
          </div>
          <span className={`text-lg font-pixel tracking-tighter ${isScrolled ? 'text-black' : 'text-white text-shadow-mc'}`}>
            桂林漫步
          </span>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex gap-10 font-pixel text-sm ${isScrolled ? 'text-black' : 'text-white text-shadow-mc'}`}>
          {menuLinks.map(link => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-mc-gold transition-colors"
            >
              [{link.label}]
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a 
            href="https://github.com/MU-ty" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mc-button text-sm px-6 py-3 inline-block"
          >
            [ 联系向导 ]
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} className="text-black" /> : <Menu size={28} className={isScrolled ? 'text-black' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-mc-ui border-b-8 border-black p-8 absolute top-full left-0 right-0 shadow-xl font-pixel"
        >
          <div className="flex flex-col gap-8 text-sm">
            {menuLinks.map(link => (
              <a key={link.label} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-black">[{link.label}]</a>
            ))}
            <a 
              href="https://github.com/MU-ty" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mc-button w-full text-sm py-4 text-center inline-block"
            >
              联系向导
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer id="footer" className="bg-[#1a1a1a] text-white py-20 px-6 border-t-8 border-black pixel-grid font-pixel">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-6 mb-10">
          <div className="p-3 bg-mc-gold border-4 border-black shadow-mc text-black">
            <Compass size={40} />
          </div>
          <span className="text-2xl font-bold uppercase tracking-tighter">桂林漫步</span>
        </div>
        <p className="text-gray-400 text-xs leading-loose max-w-sm mb-10 font-readable">
          致力于为每一位来到桂林的玩家提供最地道、最深度的像素风城市漫步体验。
          不只是路过，更是生存。
        </p>
      </div>
      <div>
        <h4 className="font-bold text-base mb-10 text-mc-gold uppercase">快速跳转</h4>
        <ul className="space-y-6 text-gray-400 text-xs font-readable">
          <li><a href="#" className="hover:text-mc-green transition-colors font-pixel">&gt; 热门任务</a></li>
          <li><a href="#" className="hover:text-mc-green transition-colors font-pixel">&gt; 食物补给</a></li>
          <li><a href="#" className="hover:text-mc-green transition-colors font-pixel">&gt; 截图存档</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-base mb-10 text-mc-gold uppercase">联系管理员</h4>
        <ul className="space-y-6 text-gray-400 text-xs font-readable">
          <li>坐标：桂林市秀峰区东西巷</li>
          <li>邮件：mc@guilinwalk.com</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto border-t-4 border-white/10 mt-20 pt-10 text-center text-gray-500 text-[10px]">
      © 2026 桂林漫步 | Minecraft Style Edition
    </div>
  </footer>
);

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToRoutes = () => {
    document.getElementById('routes-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-yellow-400 origin-left z-[60]"
        style={{ scaleX }}
      />
      <Navbar />
      <WeatherWidget />
      <Soundscape />
      <div id="hero">
        <Hero onExploreClick={scrollToRoutes} />
      </div>
      <InteractiveRoutes />
      <TraeEventsSection />
      <FoodSection />
        <AdminProfile />
        <div id="tips-section">
        <TravelTips />
      </div>
      <Testimonials />
      <Gallery />
      <FaqSection />

      <Footer />
    </div>
  );
}

export default App;
