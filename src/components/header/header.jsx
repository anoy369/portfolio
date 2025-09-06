// Header.jsx
import React from 'react';

import './header.css'
import CTA from './cta';
import HeaderSocials from './headerSocials';
import ME from '../../assets/anoy369.webp';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <div>
          <h1>Anoy Dey</h1>
          <h5 className="text-light">Full-Stack Developer</h5>
          <CTA />
          <HeaderSocials />
        </div>

        <div className="me">
          <img src={ME} alt="Anoy Dey - Full Stack Developer" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;