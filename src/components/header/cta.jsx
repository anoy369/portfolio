import React from 'react'
import './header.css'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} className="btn" download>Download Resume</a>
        <a href="#contact" className="btn btn-primary">Let's talk</a>
    </div>
  )
}

export default CTA