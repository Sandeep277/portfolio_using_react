import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'



// hav to do some work on pagination (swiperjs)


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro',
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae.Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?"
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Modi alias animi dolorem aliquam ea eum heatae maiores, consectetur praesentium quibusdam, commodi velit porro'
  },
  {
    avatar: AVTR4,
    name: 'Kwame Despite-2',
    review: 'Modi alias animi dolorem aliquam ea eum heatae maiores, consectetur praesentium quibusdam, commodi velit porro'
  }
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container">
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}
