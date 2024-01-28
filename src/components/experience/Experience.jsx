import React from 'react';
import './experience.css';

const Experience = () => {
  const experience = [
    {
      logo: 'E',
      title: 'Software Engineer-2',
      company: 'Estuate Software Pvt Ltd | Sep 2021 - Present',
      info: 'As a Frontend Developer at Estuate, Inc., I create cutting-edge solutions and interactive designs for a variety of clients and projects. I leverage my skills in  Javascript, React, Python, and CSS to build user-friendly and responsive web applications that meet the needs and expectations of the end-users.',
    },
    {
      logo: 'I',
      title: 'Internship Trainee',
      company: 'Ironhawks Technologies | Mar 2021 - Aug 2021',
      info: 'Specialized in crafting engaging web pages with HTML, CSS, and JavaScript. Emphasized responsive design, cross-browser compatibility, and collaborative project execution.',
    },
  ];

  return (
    <div id="experience">
      <h4>EXPERIENCE</h4>

      {experience.map((value) => {
        return (
          <div className="experience" key={value.company}>
            <div className="letter-3d">{value.logo}</div>
            <div className="exp-info">
              <div className="title">{value.title}</div>
              <p>{value.company}</p>
              <div>{value.info} </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
