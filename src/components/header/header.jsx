import React from 'react'
import { useState, useEffect } from 'react'
import './header.css'
import CTA from './cta'
import ME from '../../assets/anoy369.png'
import HeaderSocials from './headerSocials'

const Header = () => {

  const [shouldHide, setShouldHide] = useState(false);

  // Event listener for scroll
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setShouldHide(true);
    } else {
      setShouldHide(false);
    }
  };

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={shouldHide ? 'hidden' : 'visible'}>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Anoy</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="Anoy Dey" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header