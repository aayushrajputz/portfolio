
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function DSAProgress() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const topicProgress = [
    { topic: 'Arrays & Strings', progress: 55, problems: 40, color: 'from-green-500 to-emerald-600' },
    { topic: 'Linked Lists', progress: 56, problems: 35, color: 'from-blue-500 to-cyan-600' },
    { topic: 'Trees & Graphs', progress: 42, problems: 38, color: 'from-purple-500 to-violet-600' },
    { topic: 'Dynamic Programming', progress: 35, problems: 35, color: 'from-orange-500 to-red-600' },
    { topic: 'Sorting & Searching', progress: 52, problems: 45, color: 'from-teal-500 to-green-600' },
    { topic: 'Backtracking', progress: 30, problems: 35, color: 'from-pink-500 to-rose-600' },
    { topic: 'Greedy Algorithms', progress: 45, problems: 42, color: 'from-indigo-500 to-blue-600' }
  ];

  const csTopics = [
    { topic: 'Operating Systems', progress: 85, subtopics: ['Process Management', 'Memory Management', 'File Systems', 'Concurrency'] },
    { topic: 'Computer Networks', progress: 78, subtopics: ['OSI Model', 'TCP/IP', 'HTTP/HTTPS', 'Network Security'] },
    { topic: 'Database Management', progress: 90, subtopics: ['SQL', 'ACID Properties', 'Indexing', 'Normalization'] }
  ];

  const achievements = [
    { title: '200+ Problems Solved', icon: 'ri-medal-line', date: 'Nov 2024' },
     { title: 'CodeChef 3-Star Rating', icon: 'ri-award-line', date: 'Sep 2024'}
  ];

  return (
    <section id="dsa" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">DSA & CS Fundamentals</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Systematic approach to mastering Data Structures, Algorithms, and Computer Science fundamentals
          </p>
        </motion.div>

        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glassmorphism rounded-2xl p-8 max-w-lg"
          >
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <i className="ri-award-line mr-3 w-6 h-6 flex items-center justify-center text-cyan-400"></i>
              Recent Achievements
            </h3>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-center p-4 bg-gray-800/50 rounded-xl"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <i className={`${achievement.icon} text-white w-5 h-5 flex items-center justify-center`}></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">{achievement.title}</h4>
                    <p className="text-gray-400 text-sm">{achievement.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
                <h4 className="text-green-400 font-semibold">Current Goal</h4>
              </div>
              <p className="text-gray-300">
                Solving 2-3 problems daily • Target: 500+ problems 
              </p>
              <div className="mt-4 flex items-center text-sm text-gray-400">
                <i className="ri-calendar-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                Daily streak: 45 days
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Topic-wise Progress</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topicProgress.map((topic, index) => (
              <motion.div
                key={topic.topic}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glassmorphism rounded-xl p-6 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${topic.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{topic.progress}%</span>
                </div>
                <h4 className="text-white font-semibold mb-2">{topic.topic}</h4>
                <p className="text-gray-400 text-sm">{topic.problems} problems solved</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${topic.progress}%` } : {}}
                    transition={{ duration: 1.5, delay: 0.8 + index * 0.1 }}
                    className={`bg-gradient-to-r ${topic.color} h-2 rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Computer Science Fundamentals</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {csTopics.map((cs, index) => (
              <motion.div
                key={cs.topic}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glassmorphism rounded-xl p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-semibold text-white">{cs.topic}</h4>
                  <span className="text-cyan-400 font-bold">{cs.progress}%</span>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${cs.progress}%` } : {}}
                    transition={{ duration: 1.5, delay: 1 + index * 0.1 }}
                    className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full"
                  />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {cs.subtopics.map((subtopic, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {subtopic}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
