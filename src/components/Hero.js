import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const roleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Profile Picture */}
          <motion.div 
            className="hero-image-container"
            variants={itemVariants}
          >
            <motion.div 
              className="profile-image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
                             <img 
                 src="/profile-picture.jpg" 
                 alt="Pranav Varma Vatshavai - Professional Profile" 
                 className="profile-img"
               />
              <div className="image-overlay"></div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting */}
            <motion.p 
              className="hero-greeting"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1 
              className="hero-name gradient-text neon-text"
              variants={itemVariants}
            >
              Pranav Varma Vatshavai
            </motion.h1>

            {/* Roles */}
            <motion.div 
              className="hero-roles"
              variants={itemVariants}
            >
              <motion.span 
                className="role"
                variants={roleVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Full Stack Web Developer
              </motion.span>
              <span className="separator">•</span>
              <motion.span 
                className="role"
                variants={roleVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                B.Tech IT Student
              </motion.span>
              <span className="separator">•</span>
              <motion.span 
                className="role"
                variants={roleVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Tech Enthusiast
              </motion.span>
            </motion.div>

            {/* Welcome Text */}
            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              Welcome to my portfolio! I'm passionate about creating innovative web solutions 
              and building smart applications. Let's build something amazing together.
            </motion.p>

            {/* Call to Action */}
            <motion.div 
              className="hero-cta"
              variants={itemVariants}
            >
              <motion.button 
                className="cta-button primary enhanced-button glow-effect"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </motion.button>
              <motion.button 
                className="cta-button secondary enhanced-button glow-effect"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Background decoration */}
        <motion.div 
          className="hero-bg-decoration"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="decoration-circle"></div>
          <div className="decoration-circle"></div>
          <div className="decoration-circle"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 