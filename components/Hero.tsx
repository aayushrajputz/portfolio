'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    'Building Scalable Apps',
    'Mastering DSA',
    'Backend Engineer',
    'Problem Solver',
    'Full-Stack Engineer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20minimalist%20tech%20workspace%20with%20multiple%20monitors%20displaying%20code%2C%20dark%20ambient%20lighting%2C%20futuristic%20desk%20setup%2C%20sleek%20black%20and%20blue%20color%20scheme%2C%20professional%20developer%20environment%2C%20clean%20and%20organized%2C%20digital%20art%20style&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-text animate-float">Aayush Rajput</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 h-8"
          >
            <motion.span
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              {texts[currentText]}
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            B.Tech CSE Final Year Student | Targeting Top Product Companies
            <br />
            Passionate about Backend Development, Data Structures & Algorithms
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 neon-glow whitespace-nowrap cursor-pointer"
            >
              View My Work
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Get In Touch
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-12"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-green-400 text-sm font-medium">Currently Learning: DSA + Go Backend</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce-slow"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}