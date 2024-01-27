import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdHome } from 'react-icons/io';
import { MdContactMail } from 'react-icons/md';
import { GrUserManager, GrProjects } from 'react-icons/gr';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="half-circle"></div>
      <div className="profile">
        <Image
          src="/images/image1.jpg"
          width={90}
          height={90}
          alt="Picture of the author"
        />
        <h6>Kiran D Patkar</h6>
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
            <GrUserManager size={24} />
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
        <Link href="">
          <FaLinkedin />
        </Link>
        <Link href="">
          <FaGithub />
        </Link>
        <Link href="">
          <FaTwitter />
        </Link>
        <Link href="">
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
