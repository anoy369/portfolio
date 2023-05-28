import React from 'react'
import './about.css'
import Me from '../../assets/me.avif'
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
              <small>3+ years Wordking</small>
            </article>
            
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>
            
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>            
          </div>

          <p>
          Seeking a challenging position as a web developer to leverage my 4 years of expertise in software development. Skilled in hand coding for web development using HTML, CSS, JavaScript, jQuery, Angular JS, React JS, Firebase, node js, PHP, MySQL, and WordPress, I aim to contribute my thorough knowledge of the UI design process and outputs throughout the development lifecycle. With a strong background in API integration and development, I am eager to utilize my skills and experience to create dynamic and innovative web solutions. My objective is to collaborate with a forward-thinking team to deliver exceptional user experiences and drive technological advancements in the field of web development.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About