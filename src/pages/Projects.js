import React, { useState, useEffect } from 'react';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  // Project data
  const allProjects = [
    {
      id: 1,
      title: "Hosteler's Rasoi",
      description: "A web-based system that helps students and hostelers manage their daily meals and find nearby mess services. Features include location-based mess search, food preferences (Veg/Non-Veg), monthly meal plans, ratings & reviews.",
      image: 'https://placehold.co/600x400/1e40af/FFFFFF/png?text=Hostelers+Rasoi',
      tags: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/Pranav7T',
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'SDG 16: Peace, Justice & Strong Institutions',
      description: 'A website advocating Sustainable Development Goal 16, focusing on peace and justice. Built the About section, integrated multimedia elements, and optimized UI for a better user experience.',
      image: 'https://placehold.co/600x400/1e40af/FFFFFF/png?text=SDG+16+Project',
      tags: ['HTML', 'CSS', 'Bootstrap'],
      category: 'Front End',
      githubUrl: 'https://github.com/Pranav7T',
      liveUrl: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio showcasing skills, projects, and contact information. Features dark mode, smooth animations, and mobile-friendly design.',
      image: 'https://placehold.co/600x400/1e40af/FFFFFF/png?text=Portfolio+Website',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      category: 'Front End',
      githubUrl: 'https://github.com/Pranav7T',
      liveUrl: '#'
    }
  ];

  const categories = ['All', 'Front End', 'Full Stack'];
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [isFiltering, setIsFiltering] = useState(false);

  // Filter projects when category changes
  useEffect(() => {
    setIsFiltering(true);
    
    const filtered = selectedCategory === 'All' 
      ? allProjects 
      : allProjects.filter(project => project.category === selectedCategory);
    
    // Add a small delay for animation to complete
    setTimeout(() => {
      setFilteredProjects(filtered);
      setIsFiltering(false);
    }, 300);
  }, [selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of web development projects. Each project showcases different skills and technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-lg flex items-center transition-all ${
                selectedCategory === category 
                  ? 'bg-primary-800 text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category === 'All' && <FiFilter className="mr-2" />}
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {isFiltering ? (
              <div className="flex justify-center py-20">
                <div className="animate-pulse text-gray-600 dark:text-gray-400">Loading projects...</div>
              </div>
            ) : (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredProjects.map(project => (
                  <motion.div 
                    key={project.id}
                    variants={itemVariants}
                    className="card overflow-hidden flex flex-col h-full transform transition-transform hover:scale-[1.02]"
                  >
                    <div className="relative overflow-hidden h-48">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-primary-800 text-white text-xs px-2 py-1 rounded">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                          <span 
                            key={index} 
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4 mt-auto">
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
                          <FiExternalLink className="mr-1" /> Live Demo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && !isFiltering && (
          <div className="text-center py-16">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found in this category. Try selecting a different category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects; 