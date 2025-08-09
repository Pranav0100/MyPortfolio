import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Food Delivery Website",
      description: "Full-stack application for online food ordering with modern design and user-friendly interface.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "Full-Stack"
    },
    {
      id: 2,
      title: "World Health Records",
      description: "A MERN app with doctor and patient dashboards for managing health records and appointments.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      category: "Full-Stack"
    },
    {
      id: 3,
      title: "Hotel Booking Website",
      description: "Calendar-based hotel room booking system with real-time availability and reservation management.",
      technologies: ["React", "Node.js", "MongoDB", "Calendar API"],
      category: "Full-Stack"
    },
    {
      id: 4,
      title: "College Alumni Site",
      description: "A real-time platform for alumni interaction with networking features and event management.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      category: "Full-Stack"
    },
    {
      id: 5,
      title: "IRCTC Web Design",
      description: "Comprehensive Figma design for IRCTC railway booking system with wireframes, user flows, and modern UI/UX.",
      technologies: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
      category: "Design"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="section-title"
            variants={projectVariants}
          >
            My Projects
          </motion.h2>

          <motion.div 
            className="projects-grid"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card glass-card glow-effect"
                variants={projectVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className={`project-category ${project.category.toLowerCase()}`}>{project.category}</span>
                </div>
                
                <p className="project-description">
                  {project.description}
                </p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-actions">
                  {project.category === "Design" ? (
                    <>
                      <motion.a 
                        href="https://www.behance.net/gallery/231763789/IRCTC-Websie-Prototype"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        Behance
                      </motion.a>
                      <motion.a 
                        href="https://github.com/Pranav0100"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        GitHub
                      </motion.a>
                    </>
                  ) : (
                    <motion.a 
                      href="https://github.com/Pranav0100"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      GitHub
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 