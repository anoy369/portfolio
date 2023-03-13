import React from 'react'
import './portfolio.css'
import portfolio from '../../assets/data/portfolio'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          portfolio.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">       
                  {github ? <a href={github} className="btn" target="_blank">Github</a> : ''}
                  {demo ? <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a> : ''}
                  
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio