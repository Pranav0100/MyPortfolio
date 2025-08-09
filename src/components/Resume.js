// Removed unused ResumeDownload import
// import ResumeDownload from './ResumeDownload';
import React from 'react';
import './Resume.css';
import ResumeDownload from './ResumeDownload';

const internships = [
  {
    title: 'Cloud computing Intern',
    company: 'Hashtek Solutions',
    duration: 'June 2024 - July 2024',
    description: 'Worked on building and configuring cloud-based applications, focusing on scalability and performance optimization. Like EC2 instances and S3 storage and managed cloud resources effectively.'
  },
  {
    title: 'Web Development Intern',
    company: 'Prodigy Infotech',
    duration: 'August 2024 - September 2024',
    description: 'Developed and maintained web applications, contributed to project planning, and improved site performance.'
  }
];

// Removed unused skills variable

const Resume = () => {
  return (
    <section className="resume section" id="resume">
      <div className="resume-content">
        <div className="resume-grid">
          {/* Internships Timeline */}
          <div>
            <h3 className="resume-section-title">
              <span className="section-icon">💼</span> Internships
            </h3>
            <div className="timeline">
              {internships.map((item, idx) => (
                <div className="timeline-item" key={idx}>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{item.title}</h4>
                    <div className="institution">{item.company}</div>
                    <div className="duration">{item.duration}</div>
                    <div className="description">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
