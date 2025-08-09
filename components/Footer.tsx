'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: 'ri-linkedin-line', name: 'LinkedIn', url: 'https://www.linkedin.com/in/aayush-rajput-38142827b/' },
    { icon: 'ri-github-line', name: 'GitHub', url: 'https://github.com/aayushrajputz' },
    { icon: 'ri-twitter-line', name: 'Twitter', url: 'https://x.com/Aayushrajput63' },
    { icon: 'ri-mail-line', name: 'Email', url: 'aayushpratapsingh001@gmail.com' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-2"
          >
            <Link href="/" className="text-2xl font-bold gradient-text mb-4 inline-block">
              Aayush Rajput
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Passionate software engineer building scalable applications and mastering data structures & algorithms. 
              Ready to contribute to innovative products at top tech companies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all duration-300 cursor-pointer"
                >
                  <i className={`${social.icon} w-5 h-5 flex items-center justify-center`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <i className="ri-map-pin-line mr-3 w-4 h-4 flex items-center justify-center text-cyan-400"></i>
                Delhi, India
              </div>
              <div className="flex items-center text-gray-400">
                <i className="ri-mail-line mr-3 w-4 h-4 flex items-center justify-center text-cyan-400"></i>
                <a href="mailto:aayushpratapsingh001@gmail@example.com" className="hover:text-cyan-400 transition-colors duration-300">
                  aayushpratapsingh001@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <i className="ri-phone-line mr-3 w-4 h-4 flex items-center justify-center text-cyan-400"></i>
                <a href="tel:+916398794538" className="hover:text-cyan-400 transition-colors duration-300">
                  +91 6398794538
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Aayush Rajput. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
            >
              <i className="ri-arrow-up-line mr-2 w-4 h-4 flex items-center justify-center"></i>
              Back to Top
            </motion.button>
            
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <motion.i
                className="ri-heart-fill mx-1 text-red-500 w-4 h-4 flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              ></motion.i>
              <span>using Next.js & Tailwind</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}