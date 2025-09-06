// Nav.jsx
import React, { useState } from 'react';
import './nav.css';

// Icons
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBriefcase, BiEnvelope } from 'react-icons/bi';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav role="navigation" aria-label="Main Navigation">
      <a
        href="#home"
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#home' ? 'active' : ''}
        aria-current={activeNav === '#home' ? 'page' : undefined}
        aria-label="Home"
      >
        <AiOutlineHome />
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
        aria-current={activeNav === '#about' ? 'page' : undefined}
        aria-label="About Me"
      >
        <AiOutlineUser />
      </a>

      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
        aria-current={activeNav === '#experience' ? 'page' : undefined}
        aria-label="Experience"
      >
        <BiBriefcase />
      </a>

      {/* Uncomment when Projects section is added */}
      {/* <a
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
        aria-label="Services"
      >
        <AiOutlineFundProjectionScreen />
      </a> */}

      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
        aria-current={activeNav === '#contact' ? 'page' : undefined}
        aria-label="Contact Me"
      >
        <BiEnvelope />
      </a>
    </nav>
  );
};

export default Nav;