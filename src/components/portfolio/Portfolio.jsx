import React from 'react'
import './portfolio.css';
import dataProject from  '../../data/dataProject'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          dataProject.map((item,i)=>{
            return(
               <article key={i} className="portfolio__item">
              <div className="portfolio__item-image">
              <img src={item.image} alt="title" />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio__item-cta">
              <a href={item.github} target="_blank" className="btn" rel="noreferrer">Github</a>

              <a href={item.demo} target="_blank" className="btn btn-primary" rel="noreferrer">Live Demo</a>

              </div>
            </article>
            )})
}
      </div>
    </section>
  )
}

export default Portfolio