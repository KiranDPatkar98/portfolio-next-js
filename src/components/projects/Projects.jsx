import React from 'react';
import Image from 'next/image';
import './projects.css';
import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      src: '/videos/YouTube.mp4',
      title: 'YouTube Clone',
      info: `Video-sharing platform replicating core YouTube functionality`,
      source: 'https://github.com/KiranDPatkar98/yt-clone',
      url: 'https://kiran-yt-cloning.web.app',
    },
    {
      src: '/videos/blood-bank.mp4',
      title: 'Blood Bank',
      info: `Web application managing blood collections, donations and requests`,
      source: 'https://github.com/KiranDPatkar98/Blood-Bank',
      url: '',
    },
  ];
  return (
    <div id="projects">
      <h4>PERSONAL PROJECTS</h4>

      {projects.map((value) => {
        return (
          <div className="projects" key={value.title}>
            <video width="350" controls>
              <source src={value.src} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
            <div className="projects-info">
              <h1 className="title">{value.title}</h1>
              <div className="info">{value.info} </div>
              <div>
                Souce: <Link href={value.source}>{value.source}</Link>
              </div>
              {value.url && (
                <div>
                  URL: <Link href={value.url}>{value.url}</Link>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
