import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>                
                <h4>HTML</h4>
                <small>5+ years of Experience</small>
              </div>
            </article>
            
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small>5+ years of Experience</small>
              </div>
            </article>
            
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small>4+ years of Experience</small>
              </div>
            </article>
            
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Boostrap</h4>
                <small>5+ years of Experience</small>
              </div>
            </article>
            
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small>1+ years of Experience</small>
              </div>
            </article>
            
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Angular Js</h4>
                <small>2+ years of Experience</small>
              </div>
            </article>
            
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React Js</h4>
                <small>1+ years of Experience</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Wordpress</h4>
                <small>5+ years of Experience</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content"> 

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Firebase</h4>
                <small>2+ years of Experience</small>
              </div>
            </article>
            
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small>5+ years of Experience</small>
              </div>
            </article>
            
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small>5+ years of Experience</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Wordpress</h4>
                <small>5+ years of Experience</small>
              </div>
            </article>       
                
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node js</h4>
                <small>1+ years of Experience</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience