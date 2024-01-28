import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdHome } from 'react-icons/io';
import { MdContactMail, MdCastForEducation } from 'react-icons/md';
import { GrUserManager, GrProjects } from 'react-icons/gr';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="half-circle"></div>
      <div className="profile">
        <Image
          src="/images/image2.jpg"
          width={90}
          height={90}
          alt="Picture of the author"
        />
        <h4>Kiran D Patkar</h4>
      </div>
      <ul>
        <li>
          <Link href="#home">
            <IoMdHome size={24} />
            <span>HOME</span>
          </Link>
        </li>
        <li>
          <Link href="#skills">
            <MdCastForEducation size={24} />
            <span>EDUCATION & SKILLS</span>
          </Link>
        </li>
        <li>
          <Link href="#experience">
            <GrUserManager size={24} />
            <span>EXPERIENCE</span>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <GrProjects size={24} />
            <span>PROJECTS</span>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <MdContactMail size={24} />
            <span>CONTACT ME</span>
          </Link>
        </li>
      </ul>
      <div className="social-media">
        <Link
          href="https://www.linkedin.com/in/kiran-d-patkar-019425157/"
          target="__blank"
        >
          <FaLinkedin size={24} />
        </Link>
        <Link href="https://github.com/KiranDPatkar98" target="__blank">
          <FaGithub size={24} />
        </Link>
        <Link href="https://twitter.com/Kirandpatkar1" target="__blank">
          <FaTwitter size={24} />
        </Link>
        <Link href="https://www.instagram.com/_mr_kirik/" target="__blank">
          <FaInstagram size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
