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
          Are you in need of top-notch web application and software development services? Look no further! As a seasoned software engineer with four years of experience, I bring a wealth of expertise to the table. My skills span the entire web development stack, including hand coding using HTML, CSS, JavaScript, jQuery, Angular JS, React JS, Firebase, node.js, PHP, MySQL, and WordPress. With a strong focus on user interface design and a thorough understanding of the development lifecycle, I am committed to delivering exceptional results. I excel in seamlessly integrating APIs and developing robust solutions tailored to your specific requirements. Trust me to bring your ideas to life and create powerful web applications that will exceed your expectations. Let's collaborate and transform your vision into reality.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About