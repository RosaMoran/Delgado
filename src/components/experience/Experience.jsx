import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { RiHtml5Fill, RiVuejsFill } from 'react-icons/ri';
import { DiCss3, DiJavascript1, DiBootstrap } from 'react-icons/di';
import { SiMaterialui, SiMysql } from 'react-icons/si';
import { FaNodeJs, FaPhp, FaPython, FaReact } from 'react-icons/fa';


const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-End Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>HTML <RiHtml5Fill className="details-icon"/>/CSS <DiCss3 className="details-icon"/></h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>JavaScript <DiJavascript1 className="details-icon"/></h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Bootstrap <DiBootstrap className="details-icon"/></h4>
              <small className="text-light">Experienced</small>
              </div>
              
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Material UI <SiMaterialui className="details-icon"/></h4>
              <small className="text-light">Experienced</small>
              </div>
              
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>React.js <FaReact className="details-icon"/></h4>
              <small className="text-light">Experienced</small>
              </div>
              
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Vue.js <RiVuejsFill className="details-icon"/></h4>
              <small className="text-light">Experienced</small>
              </div>
             
            </article>
          </div>
        </div>
        {/* END PF FRONT-END */}
        <div className="experience__backend">
        <h3>Back-End Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Node.js  <FaNodeJs className="details-icon"/></h4>
              <small className="text-light">Experienced</small>
              </div>
              
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>MySQL <SiMysql className="details-icon"/></h4>
              <small className="text-light">Experienced</small>
              </div>
             
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>PHP <FaPhp className="details-icon"/></h4>
              <small className="text-light">Experienced</small>
              </div>
              
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Python <FaPython className="details-icon"/></h4>
              <small className="text-light">Experienced</small>
              </div>
              
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience