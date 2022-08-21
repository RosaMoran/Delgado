import React from 'react';
import './about.css';
import AboutMe from '../../assets/avatar.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { IoRocket } from 'react-icons/io5';

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
            <small>3+ Years Working</small>
          </article>
          <article className="about__card">
            <FiUsers className="about__icon"/>
            <h5>CRM</h5>
            <small>Experience</small>
          </article>
          <article className="about__card">
            <IoRocket className="about__icon"/>
            <h5>Agile</h5>
            <small>10+</small>
          </article>
        </div>
        
        <p>Rosa is a girl who lives in Antwerpen, Belgium. She's from La Libertad, El Salvador a small country in Central-America but with big dreams.
        </p>
        <p>When She was in University. She coordinated a team of around 70 people in her class for a competition. Her colleagues chose her for
          that challenge and she decided to take the opportunity to prove to herself and her team that she can make it possible and 
          she did it not just once but twice. That was a challenge because her jury was a professor who is important and recognized at her University for his work and research.
          </p>
          <p className='letros'>Since she lives in Belgium. She decides to resume one of her dreams with computers. She decided to take a web developer course
            in Hack Your Future Belgium because she was always curious about the computer and although it was not easy at all 
            because there is a lot of content and sometimes she did not know where to start so she decided to start with: 
           <span className='letros1'> let name = "Hello this is Rosa, it's a pleasure"; console.log(name);</span>
          </p>
          <p>
            Rosa is a girl with a lot of passion, perseverance with strategic thinking and who faithfully believes that 
            if you have a dream, a goal, a vision, you can make it come true if you work at it.
          </p>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </div>
   </section>
  )
}

export default About