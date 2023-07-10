import React from 'react'
import './about.css'
import Me from '../../assets/anoy.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="Anoy Dey" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <p>5+ years</p>
            </article>
            
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <p>100+ Worldwide</p>
            </article>
            
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <p>200+ Completed</p>
            </article>            
          </div>

          <p>Experienced Web Developer with 5+ years of expertise in web development, skilled in HTML, CSS, JavaScript, jQuery, Angular JS, React JS, Firebase, Node.js, PHP, MySQL, and WordPress.Seeking challenging opportunities to drive technological advancements in web development.</p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About