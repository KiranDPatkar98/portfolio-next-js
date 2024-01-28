import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaAddressCard } from 'react-icons/fa6';
import './contact.css';

const Contact = () => {
  return (
    <div id="contact">
      <h4>GET IN TOUCH</h4>
      <div
        className="contact"
        style={{ background: '#0c0c14', padding: '20px' }}
      >
        <p>
          Open to freelance opportunities and eager to take on the right
          projects. Feel free to reach out!
        </p>
        <div className="contact-details">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <MdEmail size={24} style={{ marginRight: '20px' }} />
            kirandpatkar@gmail.com
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <FaPhoneAlt size={24} style={{ marginRight: '20px' }} /> +91
            9482911842
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <FaAddressCard size={24} style={{ marginRight: '20px' }} />{' '}
            Bangalore, Karnataka, India
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
