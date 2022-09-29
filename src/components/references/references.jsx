import './references.css';
import dataTestimonials from '../../data/dataTestimonials';
import {BsLinkedin }from 'react-icons/bs'
// import Swiper core and required modules
import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from work and personal</h5>
      <h2>References</h2>
      <Swiper className="container testimonials__container" 
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      >
        {
          dataTestimonials.map((item, i)=> {
            return (
              <SwiperSlide key={i} className="testimonial">
              <div className="client__avatar">
                <img src={item.avatar} alt="avatarOne" />
              </div>
              <div>
                <h5 className="client__name">{item.name}</h5>
                <small className="client__review">{item.review}</small>
                <a href={item.link}><BsLinkedin/></a>
              </div>
            </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )

}

export default Testimonials