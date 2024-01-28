import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import './content.css';

const Content = () => {
  return (
    <div id="home" className="home">
      <div className="description">
        <h4>Hello, I am</h4>
        <h1>Kiran D Patkar</h1>
        <h4>I am a Passionate Web Developer </h4>
        <p>
          I enjoy experimenting with HTML, CSS, JavaScript and React to create
          visually appealing and responsive web pages. Always curious, I seek
          new opportunities and connections in web development. Let's discuss
          emerging tech or collaborate on exciting web applications.
        </p>
        <Link href="images/Kiran-resume.pdf" download={true} target="__blank">
          <button className="download">Download CV</button>
        </Link>
      </div>
      <Image
        src="/images/profile.jpg"
        width={400}
        height={400}
        alt="Picture of the author"
      />
    </div>
  );
};

export default Content;
