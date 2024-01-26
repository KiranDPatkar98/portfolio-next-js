import React from 'react';
import { Button } from 'react-bootstrap';
import Image from 'next/image';

import './content.css';

const Content = () => {
  return (
    <div className="content">
      <div>
        <h6>Hello, Iam</h6>
        <h1>Kiran D Patkar</h1>
        <h6>I am Passionate Web Developer </h6>
        <p>
          I design and develop services for customers of all sizes, specializing
          in creating stylish, modern websites, web services and online stores.
        </p>
        <Button className="download">Download CV</Button>
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
