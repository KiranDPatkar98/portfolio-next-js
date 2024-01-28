import React from 'react';
import './skills.css';

const Skills = () => {
  const education = [
    {
      time: '2016-2020',
      title: 'Bachelor of engineering',
      place: 'NMAMIT Nitte, Udupi',
      marks: '8.30 CGPA',
    },
    {
      time: '2014-2016',
      title: 'Pre-university course',
      place: 'St. Lawrence, Moodubelle',
      marks: '89.76%',
    },
    {
      time: '2011-2014',
      title: 'SSLC',
      place: 'GPUC, Bailore',
      marks: '89.66%',
    },
  ];

  const skillsData = [
    { name: 'JavaScript', rating: 9 },
    { name: 'React', rating: 9 },
    { name: 'Python', rating: 8 },
    { name: 'HTML', rating: 9 },
    { name: 'CSS', rating: 8 },
    { name: 'SQL', rating: 8 },
  ];
  return (
    <div id="skills">
      <h4>EDUCATION & SKILLS</h4>
      <div className="skills-container">
        <div className="education">
          {education.map((value) => (
            <div className="tile" key={value.title}>
              <div className="time">{value.time}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4>{value.title}</h4>
                <h4>{value.marks}</h4>
              </div>
              <div>{value.place}</div>
            </div>
          ))}
        </div>
        <div className="skills">
          <h4>My skills</h4>
          <div>
            I'm a Frontend Developer with over 3 years of experience. I code and
            create web elements for amazing people around the world. I like to
            work with new people. New people, new Experiences.
            {skillsData.map((skill, index) => (
              <div key={index} className="skill-item">
                <p>{skill.name}</p>
                <div className="skill-progress-bar" data-rating={skill.rating}>
                  <div className="progress-bar-inner">
                    <span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
