import React from 'react';
import './experience.css';

const Experience = () => {
  const experience = [
    {
      logo: 'E',
      title: 'Software Engineer-2',
      company: 'Estuate Software Pvt Ltd | Sep 2021 - Present',
      info: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,
            quidem! Molestiae iste ipsam voluptates nihil. Quibusdam illum non
            voluptatibus, pariatur dignissimos animi ipsam, omnis natus, cum
            recusandae beatae perferendis ipsa.`,
    },
    {
      logo: 'I',
      title: 'Internship Trainee',
      company: 'Ironhawks Technologies | Mar 2021 - Aug 2021',
      info: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,
              quidem! Molestiae iste ipsam voluptates nihil. Quibusdam illum non
              voluptatibus, pariatur dignissimos animi ipsam, omnis natus, cum
              recusandae beatae perferendis ipsa.`,
    },
  ];

  return (
    <div id="experience">
      <h4>EXPERIENCE</h4>

      {experience.map((value) => {
        return (
          <div className="experience">
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
