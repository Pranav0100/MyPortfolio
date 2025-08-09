import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
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
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="section-title"
            variants={itemVariants}
          >
            About Me
          </motion.h2>

                     <div className="about-grid">
             <motion.div 
               className="about-text"
               variants={itemVariants}
             >
               <p className="about-description">
                 I'm currently pursuing BTech in IT. I'm passionate about full-stack development 
                 and building smart web solutions.
               </p>
               
               <p className="about-details">
                 As a dedicated student and aspiring developer, I love exploring the intersection 
                 of technology and innovation. My journey in web development has taught me the 
                 importance of creating user-centric solutions that not only look great but also 
                 solve real-world problems.
               </p>
             </motion.div>

             <motion.div 
               className="about-visual"
               variants={itemVariants}
             >
               <div className="visual-container">
                 <div className="code-block">
                   <div className="code-header">
                     <span className="dot red"></span>
                     <span className="dot yellow"></span>
                     <span className="dot green"></span>
                   </div>
                   <div className="code-content">
                     <pre><code>{`const developer = {
           name: "Pranav Varma Vatshavai",
   role: "Web Developer",
   education: "B.Tech IT",
   passion: "Full-Stack Development",
   skills: ["React", "Node.js", "Modern Web"],
   goal: "Build amazing solutions"
 };`}</code></pre>
                   </div>
                 </div>
               </div>
             </motion.div>
           </div>

           <div className="passion-section">
             <motion.div 
               className="passion-content"
               variants={itemVariants}
             >
               <h3>What I'm passionate about:</h3>
               <div className="passion-grid">
                 <motion.div 
                   className="passion-item"
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.2 }}
                 >
                   <span className="passion-icon">💻</span>
                   <span>Full-Stack Development</span>
                 </motion.div>
                 <motion.div 
                   className="passion-item"
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.2 }}
                 >
                   <span className="passion-icon">⚡</span>
                   <span>Modern Technologies</span>
                 </motion.div>
                 <motion.div 
                   className="passion-item"
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.2 }}
                 >
                   <span className="passion-icon">🌐</span>
                   <span>Web Solutions</span>
                 </motion.div>
                 <motion.div 
                   className="passion-item"
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.2 }}
                 >
                   <span className="passion-icon">🎯</span>
                   <span>Problem Solving</span>
                 </motion.div>
               </div>
             </motion.div>

             <motion.div 
               className="passion-code"
               variants={itemVariants}
             >
               <div className="code-block passion-code-block">
                 <div className="code-header">
                   <span className="dot red"></span>
                   <span className="dot yellow"></span>
                   <span className="dot green"></span>
                 </div>
                 <div className="code-content">
                   <pre><code>{`const passions = {
  development: "Full-Stack",
  technologies: "Modern Web",
  solutions: "User-Centric",
  approach: "Problem-Solving"
};`}</code></pre>
                 </div>
               </div>
             </motion.div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 