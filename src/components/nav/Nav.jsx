import React, { useState } from 'react';
import './nav.css';
import { AiFillHome, AiOutlineMessage } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';
import { GrUserExpert, GrServices } from 'react-icons/gr';

export default function Nav() {
  const [activeNav, setActiveNav] = useState('#');

  const handleClick = (nav) => {
    setActiveNav(nav);
  };

  return (
    <nav>
      <a
        href="#"
        onClick={() => handleClick('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        onClick={() => handleClick('about')}
        className={activeNav === 'about' ? 'active' : ''}
      >
        <FcAbout />
      </a>
      <a
        href="#experience"
        onClick={() => handleClick('experience')}
        className={activeNav === 'experience' ? 'active' : ''}
      >
        <GrUserExpert />
      </a>
      <a
        href="#services"
        onClick={() => handleClick('services')}
        className={activeNav === 'services' ? 'active' : ''}
      >
        <GrServices />
      </a>
      <a
        href="#contact"
        onClick={() => handleClick('contact')}
        className={activeNav === 'contact' ? 'active' : ''}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
}
