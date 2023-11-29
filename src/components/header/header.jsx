import React from 'react'
import './header.css'
import CTA from './cta'
import ME from '../../assets/anoy369.webp'
import HeaderSocials from './headerSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        {/* <h5>Hello I'm</h5> */}
        <h1>Anoy Dey</h1>
        <h5 className="text-light">Full-stack Developer</h5>
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