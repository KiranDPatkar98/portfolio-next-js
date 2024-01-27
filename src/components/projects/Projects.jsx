import React from 'react';
import Image from 'next/image';
import './projects.css';
import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      src: '/images/image1.jpg',
      title: 'YouTube Clone',
      info: `Video-sharing platform replicating core YouTube functionality`,
      source: 'https://github.com/KiranDPatkar98/yt-clone',
      url: 'https://kiran-yt-cloning.web.app',
    },
    {
      src: '/images/image1.jpg',
      title: 'Blood Bank',
      info: `Web application overseeing blood collection, donation, and requests`,
      source: 'https://github.com/KiranDPatkar98/Blood-Bank',
      url: '',
    },
  ];
  return (
    <div id="projects">
      <h4>Personal Projects</h4>

      {projects.map((value) => {
        return (
          <div className="projects">
            <Image
              src={value.src}
              width={300}
              height={300}
              alt="Picture of the author"
            />
            <div className="projects-info">
              <div className="title">{value.title}</div>
              <div>{value.info} </div>
              <div>
                Souce code: <Link href={value.source}>{value.source}</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
