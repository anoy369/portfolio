import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>PSD to Fully Responsive Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>XD to Fully Responsive Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Figma to Fully Responsive Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Image to Fully Responsive Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cloning Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website Redesign</p>
            </li>
          </ul>
        </article>
        
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Online Store</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Portals</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Management System</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Learning Management System</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Hotel Management System</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>API Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wordpress Theme Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wordpress Plugin Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Development Consulting</p>
            </li>
          </ul>
        </article>
        
        <article className="service">
          <div className="service__head">
            <h3>Others</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>API Integration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wordpress API Integration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wordpress Migration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wordpress Malware Cleaning</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wordpress Database Cleaning</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Speed Optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Onsite SEO</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website Customization</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services