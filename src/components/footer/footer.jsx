// Footer.jsx
import React from 'react';
import './footer.css';
import { FaLinkedinIn, FaGithubAlt } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__container">
        {/* Logo */}
        <a href="#home" className="footer__logo">
          Anoy
        </a>

        {/* Navigation */}
        <ul className="parmalinks">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          {/* <li><a href="#services">Services</a></li> */}
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="footer__socials">
          <a
            href="https://www.instagram.com/anoy369/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/anoy-dey/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/anoy369"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithubAlt />
          </a>
        </div>

        {/* Copyright */}
        <div className="footer__copyright">
          <small>&copy; Anoy Dey | All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;