import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-info">
            <motion.h3 
              className="footer-name"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Pranav Varma Vatshavai
            </motion.h3>
            <p className="footer-tagline">
              Full Stack Web Developer | Tech Enthusiast | B.Tech IT Student
            </p>
          </div>
          
          <div className="footer-links">
            <motion.a 
              href="#home"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              Home
            </motion.a>
            <motion.a 
              href="#about"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              Projects
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              Contact
            </motion.a>
          </div>
          
          <div className="footer-copyright">
            <p>&copy; {currentYear} Pranav Varma Vatshavai. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 