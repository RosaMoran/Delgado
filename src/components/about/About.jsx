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
        <p>When She was in University. She coordinated a team of around 70 people in her class for a competition. The competition was about
          reading a book about Marketing entitled "The Black Book of Marketing". The jury would qualify the criteria such as: better leadership, 
          coordination, creativity, handling of the topic, better answers to precise questions, among others.
          Her colleagues chose her for that challenge and she decided to take the opportunity to probe to herself and her team that she can make it possible and with her team she made it. That was a challenge because her jury was a professor named Carlos Rolando Barrios who is important and recognized at her University for his work and research.
          </p>
          <p className='letros'>Since she lives in Belgium. She decided to take a web developer course in Hack Your Future Belgium because 
          she was always curious about computer software.
          That was a great challenge because after studying a marketing-oriented profession, now she would challenge an area of 
          computer science where the months would pass and the love for learning to program would increase and 
          where she would realize that she was in love with this area, so she pushed herself to successfully finish her course 
          and be certified as a web programmer at Hack Your Future Belgium.
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