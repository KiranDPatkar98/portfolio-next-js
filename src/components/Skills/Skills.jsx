import React from 'react';
import './skills.css';

const Skills = () => {
  const skillsData = [
    { name: 'JavaScript', rating: 9 },
    { name: 'React', rating: 9 },
    { name: 'Python', rating: 8 },
    { name: 'HTML', rating: 9 },
    { name: 'CSS', rating: 8 },
    { name: 'SQL', rating: 8 },
  ];
  return (
    <>
      <h4>EDUCATION & SKILLS</h4>
      <div className="skills-container">
        <div className="education">
          <div className="tile">
            <div className="time">2016-2020</div>
            <h4>Bachelor of engineering</h4>
            <div> NMAMIT Nitte, Udupi</div>
          </div>
          <div className="tile">
            <div className="time">2014-2016</div>
            <h4>Secondary education</h4>
            <div>St. Lawrence, Moodubelle</div>
          </div>
          <div className="tile">
            <div className="time">2011-2014</div>
            <h4>SSLC</h4>
            <div>GPUC, Bailore</div>
          </div>
        </div>
        <div className="skills">
          <h4>My skills</h4>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            repellendus nulla at quaerat consequuntur vitae. Neque libero,
            facilis, quasi doloremque at quas illo laborum nulla cupiditate
            dolores, eaque error beatae?
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
    </>
  );
};

export default Skills;
