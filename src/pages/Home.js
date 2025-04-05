import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiArrowRight, FiExternalLink, FiSend, FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  // Placeholder data for featured projects
  const featuredProjects = [
    {
      id: 1,
      title: "Hosteler's Rasoi",
      description: "A web-based system that helps students and hostelers manage their daily meals and find nearby mess services.",
      image: 'https://placehold.co/600x400/1e40af/FFFFFF/png?text=Hostelers+Rasoi',
      tags: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL'],
      githubUrl: 'https://github.com/Pranav7T/Mess_management',
      liveUrl: 'https://mess-management-dusky.vercel.app/'
    },
    {
      id: 2,
      title: 'Todo App',
      description: 'A feature-rich task management application with CRUD operations, task priorities, and filtering capabilities.',
      image: 'https://placehold.co/600x400/1e40af/FFFFFF/png?text=Todo+App',
      tags: ['HTML', 'JavaScript', 'CSS', 'LocalStorage'],
      githubUrl: 'https://github.com/Pranav7T/todo-app',
      liveUrl: 'https://pranav7t-todo-app.vercel.app/'
    },
    {
      id: 3,
      title: 'SDG 16: Peace, Justice & Strong Institutions',
      description: 'A website advocating Sustainable Development Goal 16, focusing on peace and justice.',
      image: 'https://placehold.co/600x400/1e40af/FFFFFF/png?text=SDG+16+Project',
      tags: ['HTML', 'CSS', 'Bootstrap'],
      githubUrl: 'https://github.com/Pranav7T',
      liveUrl: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio showcasing skills, projects, and contact information.',
      image: 'https://placehold.co/600x400/1e40af/FFFFFF/png?text=Portfolio+Website',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/Pranav7T',
      liveUrl: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 pb-16">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <p className="text-primary-800 dark:text-primary-400 text-lg font-medium mb-4">Hi there! I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-5">
              Pranav Sononi
            </h1>
            <div className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 h-14">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'UI/UX Enthusiast',
                  2000,
                  'React Developer',
                  2000,
                  'Web Designer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: 'inherit', fontWeight: '500', display: 'inline-block' }}
                repeat={Infinity}
              />
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-lg mb-8">
              A Full Stack Developer designs and implements both front-end
              and back-end solutions, ensuring seamless integration and
              functionality across applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:sononipranav@gmail.com" className="btn btn-primary">
                Hire Me
                <FiArrowRight className="ml-2" />
              </a>
              <Link to="/projects" className="btn btn-outline">
                View Projects
              </Link>
              <a 
                href="/resume/pranav_sononi_resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline flex items-center justify-center"
              >
                Resume
                <FiDownload className="ml-2" />
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <p className="text-gray-700 dark:text-gray-300 mb-3">Find me on:</p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Pranav7T" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/pranav-sononi-4804782a2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <img 
              src="/assets/pranav-profile.jpg"
              alt="Pranav Sononi" 
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover ring-4 ring-primary-800 ring-opacity-50 shadow-xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/600x600/1e40af/FFFFFF/png?text=Pranav+Sononi';
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Check out some of my recent work. These projects showcase my skills and expertise in full stack development.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                className="card overflow-hidden flex flex-col h-full bg-white dark:bg-gray-700 shadow-md rounded-lg"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-center border-b pb-2 border-gray-200 dark:border-gray-600">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-5 min-h-[80px] flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 text-xs font-medium rounded-full shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 pt-2 border-t border-gray-200 dark:border-gray-600">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors flex items-center"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <FiGithub className="mr-1" /> Code
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors flex items-center"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <FiExternalLink className="mr-1" /> Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <Link 
              to="/projects" 
              className="btn btn-outline flex items-center mx-auto"
            >
              View All Projects <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="mailto:sononipranav@gmail.com" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary-800 rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Email Me
                <FiSend className="ml-2" size={20} />
              </motion.a>
              <motion.a 
                href="/resume/pranav_sononi_resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium border-2 border-primary-800 text-primary-800 dark:text-white dark:border-white rounded-lg hover:bg-primary-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
                <FiDownload className="ml-2" size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home; 