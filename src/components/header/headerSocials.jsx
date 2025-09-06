// HeaderSocials.jsx
import React from 'react';
import { BsLinkedin, BsFacebook } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const HeaderSocials = () => {
  return (
    <div className="header__socials" aria-label="Social Media Links">
      <a
        href="https://www.linkedin.com/in/anoy-dey/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn Profile"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/anoy369"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub Profile"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.instagram.com/anoy369/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram Profile"
      >
        <AiFillInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;