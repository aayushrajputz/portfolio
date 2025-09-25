'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'Expense Tracker Pro',
      description: 'A comprehensive expense tracking application with advanced analytics, budget management, and real-time synchronization. Features include category-wise expense tracking, monthly reports, and multi-currency support.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20expense%20tracking%20dashboard%20interface%2C%20clean%20minimalist%20design%2C%20charts%20and%20graphs%20showing%20financial%20data%2C%20blue%20and%20green%20color%20scheme%2C%20mobile%20responsive%20layout%2C%20professional%20finance%20app%20UI&width=600&height=400&seq=expense-tracker&orientation=landscape',
      technologies: ['React.js', 'Next.js', 'Go', 'Gin', 'PostgreSQL', 'Docker', 'CI/CD'],
      features: [
        'Real-time expense tracking',
        'Advanced analytics & reports',
        'Budget planning & alerts',
        'Multi-currency support',
        'Data visualization',
        'Export functionality'
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/aayushrajputz/expense-tracker',
      category: 'Full-Stack'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Feature-rich e-commerce platform with integrated payment processing, inventory management, and admin dashboard. Supports multiple payment gateways including Razorpay and Stripe.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%2C%20product%20catalog%20layout%2C%20shopping%20cart%20functionality%2C%20payment%20integration%20UI%2C%20clean%20design%20with%20orange%20and%20blue%20accents%2C%20responsive%20web%20design&width=600&height=400&seq=ecommerce-platform&orientation=landscape',
      technologies: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'Razorpay', 'Stripe', 'JWT'],
      features: [
        'Product catalog management',
        'Shopping cart & checkout',
        'Payment gateway integration',
        'User authentication',
        'Order tracking',
        'Admin dashboard'
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/aayushrajputz/ecommerce',
      category: 'Full-Stack'
    },
    {
      id: 3,
      title: 'Smart Banking App',
      description: 'Secure banking application with account management, transaction processing, and financial insights. Built with modern security practices and real-time transaction monitoring.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20banking%20application%20interface%2C%20account%20dashboard%20with%20transaction%20history%2C%20financial%20charts%2C%20secure%20login%20design%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20fintech%20UI%20design&width=600&height=400&seq=banking-app&orientation=landscape',
      technologies: ['Vue.js', 'Go', 'PostgreSQL', 'Docker', 'Redis', 'JWT', 'WebSocket'],
      features: [
        'Account management',
        'Real-time transactions',
        'Financial analytics',
        'Security monitoring',
        'Multi-factor authentication',
        'Transaction history'
      ],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Full-Stack'
    },
    {
      "id": 4,
      "title": "Distributed Workflow System",
      "description": "A robust distributed workflow platform designed for managing complex tasks and processes efficiently. Enables real-time monitoring, task orchestration, and system observability using modern tools and best practices.",
      "image": "https://www.shutterstock.com/image-photo/aidriven-workflow-automating-data-management-260nw-2428568631.jpg",
      "technologies": [
        "Node.js",
        "React",
        "Next.js",
        "Express",
        "MongoDB",
        "Prometheus",
        "Grafana",
        "Slack"
      ],
      "features": [
        "Distributed task orchestration",
        "Real-time workflow monitoring",
        "Custom task pipelines",
        "Scalable microservices architecture",
        "Performance metrics via Prometheus",
        "Visual dashboards with Grafana",
        "Slack-based notifications",
        "Dynamic task scheduling"
      ],
      "liveUrl": "https://distributed-workflow.vercel.app",
      "githubUrl": "https://github.com/aayushrajputz/distributed-workflow",
      "category": "Full-Stack"
    },
    {
      "id": 5,
      "title": "Currency Exchange API",
      "description": "A high-performance currency exchange service providing live exchange rates with optimized caching and reliability. Built with clean architecture for maintainability and designed for seamless integration into financial systems.",
      "image": "https://www.shutterstock.com/image-photo/currency-exchange-service-providing-live-260nw-2428568631.jpg",
      "technologies": [
        "Go",
        "REST API",
        "Docker"
      ],
      "features": [
        "Live exchange rates from ExchangeRate-API.com",
        "Hourly cache refresh for fast responses",
        "Clean architecture for easy maintenance",
        "Input validation with clear error messages",
        "Health check endpoint",
        "Retry logic for API requests",
        "Docker support for containerized deployment"
      ],
      "liveUrl": "https://currency-exchange.vercel.app",
      "githubUrl": "https://github.com/aayushrajputz/currency-exchange",
      "category": "Backend"
    }
    
    
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my technical skills through real-world applications built with modern technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 xl:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="project-card rounded-2xl p-8 group"
            >
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative overflow-hidden rounded-xl mb-6 lg:mb-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-300 text-sm">
                          <i className="ri-check-line text-green-400 mr-2 w-4 h-4 flex items-center justify-center"></i>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tech-badge px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Link
                      href={project.liveUrl}
                      className="flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer"
                    >
                      <i className="ri-external-link-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                      Live Demo
                    </Link>
                    <Link
                      href={project.githubUrl}
                      className="flex items-center px-6 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-cyan-500 hover:text-cyan-500 transition-all duration-300 cursor-pointer"
                    >
                      <i className="ri-github-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                      Source Code
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer"
          >
            <i className="ri-code-s-slash-line mr-2 w-5 h-5 flex items-center justify-center"></i>
            Let's Build Something Together
          </Link>
        </motion.div>
      </div>
    </section>
  );
}