import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", level: 80 },
        { name: "C", level: 70 },
        { name: "Java", level: 60 },
        { name: "Python", level: 50 },
        { name: "C#", level: 25 }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "TypeScript", level: 20 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "REST APIs", level: 70 },
        { name: "JWT", level: 70 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 80 },
        { name: "Figma", level: 70 },
        { name: "Netlify", level: 85 }
      ]
    },
    {
      title: "Other Skills",
      skills: [
        { name: "Problem Solving", level: 85 },
        { name: "Team Collaboration", level: 90 },
        { name: "Agile/Scrum", level: 75 },
        { name: "Responsive Design", level: 90 },
        { name: "Performance Optimization", level: 80 }
      ]
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

  const categoryVariants = {
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

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="section-title"
            variants={categoryVariants}
          >
            Skills & Technologies
          </motion.h2>

          <motion.p 
            className="skills-intro"
            variants={categoryVariants}
          >
            I'm constantly learning and expanding my skill set to stay current with the latest technologies and best practices.
          </motion.p>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="skill-category glass-card"
                variants={categoryVariants}
              >
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      variants={skillVariants}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="skills-cta"
            variants={categoryVariants}
          >
            <p>Always eager to learn new technologies and take on challenging projects!</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 