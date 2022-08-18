import React from 'react'
import './about.css'
import AboutMe from '../../assets/rosa.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { IoRocket } from 'react-icons/io5'

const About = () => {
  return (
   <section id="about">
    <h5>Get to know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={AboutMe} alt="AboutImage" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon"/>
            <h5>Experience</h5>
            <small>1+ Years Working</small>
          </article>
          <article className="about__card">
            <FiUsers className="about__icon"/>
            <h5>Client</h5>
            <small>10</small>
          </article>
          <article className="about__card">
            <IoRocket className="about__icon"/>
            <h5>Project</h5>
            <small>10+</small>
          </article>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Dicta sequi sapiente facere dolore laudantium cupiditate deserunt ab molestiae?
          Fuga velit reprehenderit quidem illo ex quasi quia assumenda recusandae excepturi doloribus.
        </p>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </div>
   </section>
  )
}

export default About