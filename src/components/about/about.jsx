// About.jsx
import React from 'react';
import './about.css'
import Me from '../../assets/anoy.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* Left Side - Image */}
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="Anoy Dey - About Me" />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="about__content">
          {/* Stats Cards */}
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <p>7+ Years</p>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <p>30+ Worldwide</p>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <p>200+ Completed</p>
            </article>
          </div>

          {/* Bio */}
          <p>
            Experienced Full-Stack Developer with over 7+ years of expertise in building scalable web applications.
            Proficient in modern frontend and backend technologies including React, Node.js, Firebase, PHP, and WordPress.
            Passionate about clean code, performance optimization, and delivering exceptional user experiences.
            Always eager to tackle new challenges and drive innovation in web development.
          </p>

          {/* Call to Action */}
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;