// Testimonials.jsx
import React from 'react';
import './testimonials.css';
// Sample data (ensure this path is correct)
import testimonials from '../../assets/data/testimonials';

// Swiper components
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="testimonials__container"
      >
        {testimonials.map(({ id, avatar, name, review }) => (
          <SwiperSlide key={id} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt={`${name} - Client`} />
            </div>
            <h5>{name}</h5>
            <small className="client__review">"{review}"</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;