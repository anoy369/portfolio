// CTA.jsx
import React from 'react';
import CV from '../../assets/cv.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn btn-outline" download="Anoy_Dey_Resume.pdf" aria-label="Download Resume">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary" aria-label="Contact Me">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;