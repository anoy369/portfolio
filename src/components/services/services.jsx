// Services.jsx
import React from 'react';
import './services.css'
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* Frontend Development */}
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
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
              <p>Website Cloning</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website Redesign</p>
            </li>
          </ul>
        </article>

        {/* Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Online Store Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Portals</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Management Systems (CMS)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Learning Management Systems (LMS)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Hotel Management Systems</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom API Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>WordPress Theme Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>WordPress Plugin Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Development Consulting</p>
            </li>
          </ul>
        </article>

        {/* Other Services */}
        <article className="service">
          <div className="service__head">
            <h3>Additional Services</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Third-Party API Integration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>WordPress REST API Integration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>WordPress Migration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Malware Removal & Security Hardening</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Database Optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Performance & Speed Optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>On-Page SEO Implementation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom Website Enhancements</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;