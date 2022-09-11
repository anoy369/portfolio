import React from 'react'
import './footer.css'
import {FaFacebookF, FaLinkedinIn, FaGithubAlt} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Anoy</a>

      <ul className="parmalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        {/* <a href="https://www.facebook.com/anoy.dey/"><FaFacebookF /></a> */}
        <a href="https://www.instagram.com/anoy369/"><AiFillInstagram /></a>
        <a href="https://www.linkedin.com/in/anoy-dey/"><FaLinkedinIn /></a>
        <a href="https://github.com/anoy369"><FaGithubAlt /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Anoy Dey. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer