import React from 'react';
import './header.css';
import CTA from  './CTA';
import ME from '../../assets/rosa.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <div className='waviy'>
          <span >R</span>
          <span >o</span>
          <span >s</span>
          <span >a </span>
          <span> </span>
          <span >M</span>
          <span >o</span>
          <span >r</span>
          <span >a</span>
          <span >n</span>
          </div>
        
        <h5 className="text-light">Front-end & back-end</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="mee">
          <img src={ME} alt="me" />
          </div>
          <a href="#contact" className="scroll__down">Scroll Down</a>          
      </div>
    </header>
  )
}

export default Header