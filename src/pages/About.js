import React from 'react';
import { FiDownload, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'Bootstrap', level: 85 },
    { name: 'React.js', level: 75 },
    { name: 'PHP', level: 70 },
    { name: 'MySQL', level: 65 },
    { name: 'Git/GitHub', level: 75 },
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: "KCE's Institute of Management & Research",
      location: 'Jalgaon, India',
      period: '2022 - 2025',
      description: 'Currently pursuing BCA with a GPA of 9.0. Focused on computer science fundamentals, web development, and database management.'
    }
  ];

  const experience = [
    {
      position: 'Front-End Development Intern',
      company: 'IBM SkillsBuild',
      location: 'Remote',
      period: 'June 2024 - July 2024',
      description: 'Participated in the IBM SkillsBuild program focusing on front-end development. Worked on real-world projects and learned industry best practices.',
      achievements: [
        'Designed and optimized user-friendly web interfaces using HTML, CSS, and JavaScript',
        'Developed responsive, mobile-first designs, enhancing mobile usability by 30%',
        'Collaborated using Git & CI/CD workflows, ensuring smooth version control'
      ]
    }
  ];

  const certifications = [
    'IBM SkillsBuild – Front End Development (Hands-on training in modern web technologies)',
    'Infosys Student Development Program (SDP) (Enhanced technical & professional skills, Agile methodologies)'
  ];

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
        duration: 0.4
      }
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know more about my background, skills, and experience as a front-end developer.
          </p>
        </div>

        {/* Bio and Skills Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Bio & Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                My Journey
              </h2>
              <div className="prose prose-lg dark:prose-invert mb-6">
                <p>
                  Hello! I'm Pranav Sitaram Sononi, a passionate front-end developer based in Jalgaon, India. 
                  I have a strong interest in creating beautiful, responsive, and user-friendly websites.
                </p>
                <p>
                  I'm currently pursuing my Bachelor of Computer Applications (BCA) with a 9.0 GPA, where I've 
                  developed a solid foundation in computer science principles and web development technologies.
                </p>
                <p>
                  I believe in writing clean, maintainable code and creating intuitive user experiences. 
                  My goal is to build websites that not only look great but also provide exceptional 
                  functionality and performance across all devices.
                </p>
              </div>
              <a 
                href="/resume.pdf" 
                className="btn btn-primary flex items-center w-fit"
                download
              >
                <FiDownload className="mr-2" /> Download Resume
              </a>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Skills & Technologies
              </h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-primary-800 dark:bg-primary-600 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education and Experience */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Education
              </h2>
              <motion.div 
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
                  >
                    <div className="flex justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <span className="text-sm bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 py-1 px-2 rounded-md">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      {edu.institution}, {edu.location}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Experience
              </h2>
              <motion.div 
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {experience.map((exp, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
                  >
                    <div className="flex justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.position}
                      </h3>
                      <span className="text-sm bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 py-1 px-2 rounded-md">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      {exp.company}, {exp.location}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <FiCheckCircle className="text-primary-800 dark:text-primary-400 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Certifications
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((certification, index) => (
                <li key={index} className="flex items-start">
                  <FiCheckCircle className="text-primary-800 dark:text-primary-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{certification}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 