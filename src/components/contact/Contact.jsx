import React from 'react';
import './contact.css';
import { MdOutlineMailOutline } from 'react-icons/md';
import { SiMessenger, SiWhatsapp } from 'react-icons/si';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs.sendForm('service_2ns8exe', 'template_pr04j8s', form.current, 'X9qdx3dF5xpIs0iAV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
    }
    return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5 className='mail'>rosa.moran.delgado@gmail.com</h5>
            <a href="mailto:rosa.moran.delgado@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <SiMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Rosa Moran Delgado</h5>
            <a href="https://m.me/rosa.mopan" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <SiWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+32 499 15 07 84</h5>
            <a href="https://api.whatsapp.com/send?phone=32499150784" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF OPTIONS */}
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name'/>
            <input type="email" name="email" placeholder='You Email' />
            <textarea name="message"  rows="7" placeholder='Your Message'></textarea>
            <button type='submit' className='btn btn-primary'>Send me</button>
          </form>
        </div>
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact