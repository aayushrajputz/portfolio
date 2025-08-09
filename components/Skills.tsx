
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState('languages');

  const skillCategories = {
    languages: {
      title: 'Programming Languages',
      icon: 'ri-code-line',
      skills: [
        { name: 'Java', level: 60, icon: 'ri-cup-line' },
        { name: 'Go', level: 75, icon: 'ri-go-line' },
        { name: 'JavaScript', level: 80, icon: 'ri-javascript-line' },
        { name: 'Python', level: 50, icon: 'ri-python-line' }
      ]
    },
    frameworks: {
      title: 'Frameworks & Libraries',
      icon: 'ri-stack-line',
      skills: [
        { name: 'Next.js', level: 70, icon: 'ri-nextjs-line' },
        { name: 'React.js', level: 75, icon: 'ri-reactjs-line' },
        { name: 'Express.js', level: 80, icon: 'ri-nodejs-line' },
        { name: 'Gin (Go)', level: 65, icon: 'ri-rocket-line' },
        { name: 'Vue.js', level: 60, icon: 'ri-vuejs-line' },
        { name: 'Tailwind CSS', level: 75, icon: 'ri-css3-line' }
      ]
    },
    databases: {
      title: 'Databases & Storage',
      icon: 'ri-database-2-line',
      skills: [
        { name: 'PostgreSQL', level: 80, icon: 'ri-database-line' },
        { name: 'MongoDB', level: 75, icon: 'ri-leaf-line' },
        { name: 'Redis', level: 60, icon: 'ri-database-2-line' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: 'ri-tools-line',
      skills: [
        { name: 'Docker', level: 70, icon: 'ri-container-line' },
        { name: 'Git', level: 70, icon: 'ri-git-branch-line' },
        { name: 'Postman', level: 50, icon: 'ri-send-plane-line' },
        { name: 'CI/CD', level: 50, icon: 'ri-loop-right-line' }
      ]
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Continuously learning and mastering technologies to build robust, scalable applications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <i className={`${category.icon} w-5 h-5 flex items-center justify-center`}></i>
              {category.title}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glassmorphism rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <i className={`${skill.icon} text-white w-5 h-5 flex items-center justify-center`}></i>
                  </div>
                  <h3 className="text-white font-semibold">{skill.name}</h3>
                </div>
                <span className="text-cyan-400 font-bold">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                  className="skill-bar h-3 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glassmorphism rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Always Learning</h3>
            <p className="text-gray-400 mb-6">
              Currently diving deeper into microservices architecture, and advanced DSA patterns to prepare for top-tier tech companies.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Microservices', 'Kubernetes', 'GraphQL', 'gRPC', 'Apache Kafka'].map((topic, index) => (
                <motion.span
                  key={topic}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium"
                >
                  {topic}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
