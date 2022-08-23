/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <section id="footer">
      <footer>
        <a href="#" className='footer__logo'>Rosa Moran Delgado</a>
        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          {/* <li><a href="#services">Services</a></li> */}
          <li><a href="#portfolio">Portfolio</a></li>
          
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__socials">
        <a href="https://www.linkedin.com/in/rosa-moran-a2b9a1151" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/RosaMoran?tab=repositories" target="_blank "><FaGithub/></a>
        </div>
        <div className="footer__copyright">
          <small>&copy; Rosa Moran Delgado. All right reserved</small>
        </div>
      </footer>
      </section>
  )
}

export default Footer