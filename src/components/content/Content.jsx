import React from 'react';
import Image from 'next/image';

import './content.css';

const Content = () => {
  return (
    <div id="home" className="content">
      <div>
        <h4>Hello, Iam</h4>
        <h1>Kiran D Patkar</h1>
        <h4>I am Passionate Web Developer </h4>
        <p>
          I design and develop services for customers of all sizes, specializing
          in creating stylish, modern websites, web services and online stores.
        </p>
        <button className="download">Download CV</button>
      </div>
      <Image
        src="/images/image1.jpg"
        width={400}
        height={400}
        alt="Picture of the author"
      />
    </div>
  );
};

export default Content;
