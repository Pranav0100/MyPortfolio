import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  // Animation variants for scroll-triggered animations
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="education" className="education section">
      <div className="container">
        <motion.div
          className="education-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="section-title"
            variants={itemVariants}
          >
            Education
          </motion.h2>

          <motion.div 
            className="education-timeline"
            variants={itemVariants}
          >
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>Bachelor of Technology in Information Technology</h4>
                  <p className="institution">GMRIT</p>
                  <p className="duration">2022 - 2026</p>
                  <p className="description">
                    Currently pursuing BTech in IT with focus on web development, 
                    software engineering, and modern technologies.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>Intermediate (12th Standard)</h4>
                  <p className="institution">Sri Chaitanya Junior College</p>
                  <p className="duration">2020 - 2022</p>
                  <p className="description">
                    Completed intermediate education with focus on science stream 
                    and preparation for engineering entrance examinations.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>Secondary School (10th Standard)</h4>
                  <p className="institution">St. Joseph's High School</p>
                  <p className="duration">2020</p>
                  <p className="description">
                    Completed secondary education with strong foundation in 
                    mathematics, science, and computer studies.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 