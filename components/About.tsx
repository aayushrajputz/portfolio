
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: 'Fresher(Work on own projects)', label: 'Years Experience' },
    { number: '10+', label: 'Projects Built' },
    { number: '200+', label: 'DSA Problems Solved' },
    { number: '5+', label: 'Technologies Mastered' }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glassmorphism rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <img 
                  src="https://static.readdy.ai/image/165ee9e54de09866dedf0ffea24f4598/83a940386f15fd318ae6d334cab8462b.jfif"
                  alt="Aayush Rajput - Profile Picture"
                  className="w-20 h-20 rounded-full object-cover object-top mr-6"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Aayush Rajput</h3>
                  <p className="text-cyan-400 font-medium">B.Tech CSE Final Year Student</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate software engineer with a strong foundation in backend development and data structures. 
                Currently pursuing my B.Tech in Computer Science Engineering, I'm dedicated to mastering the skills 
                required for top product-based companies.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                My journey began with a fascination for solving complex problems through code. I specialize in 
                backend development using Go and Node.js, with extensive experience in building scalable applications. 
                I'm also deeply committed to competitive programming and have solved over 200+ DSA problems across 
                various platforms.
              </p>

              <div className="flex flex-wrap gap-3">
                {['Problem Solver', 'Backend Developer', 'DSA Enthusiast', 'Full-Stack Engineer'].map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-4"
            >
              <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer">
                <i className="ri-download-line w-5 h-5 flex items-center justify-center"></i>
                Download Resume
              </button>
              <button className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer">
                <i className="ri-chat-3-line w-5 h-5 flex items-center justify-center"></i>
                Let's Talk
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glassmorphism rounded-xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="glassmorphism rounded-xl p-6"
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <i className="ri-target-line mr-3 w-5 h-5 flex items-center justify-center text-cyan-400"></i>
                Current Goals
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 w-4 h-4 flex items-center justify-center text-green-400"></i>
                  Crack interviews at top product companies
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 w-4 h-4 flex items-center justify-center text-green-400"></i>
                  Master advanced system design concepts
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 w-4 h-4 flex items-center justify-center text-green-400"></i>
                  Build production-ready scalable applications
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 w-4 h-4 flex items-center justify-center text-green-400"></i>
                  Contribute to open-source projects
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="glassmorphism rounded-xl p-6"
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
                Currently Learning
              </h4>
              <p className="text-gray-300">
                Advanced Go patterns, Microservices architecture, Kubernetes, and competitive programming strategies 
                for solving complex algorithmic challenges.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
