import React from 'react'
import './about.css'
import ME from '../../assets/me1.avif'
import { BiAward } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { PiFoldersFill } from 'react-icons/pi'



export default function About() {
  return (
      <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me ">
            <div className='about__me-image'>
              <img src={ME} alt=" " />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <BiAward className='about__icon' />

                <h5>Experirence</h5>
                <small>1+ Years Working</small>
              </article>
              <article className="about__card">
                <FiUsers className='about__icon' />
                <h5>Clients</h5>
                <small>100+ Worldwide</small>
              </article>
              <article className="about__card">
                <PiFoldersFill className='about__icon' />
                <h5>Projects</h5>
                <small>20+</small>
              </article>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis aliquid similique praesentium rem perspiciatis vitae harum, necessitatibus iure aut ab odio eligendi voluptas fugit consequatur doloremque natus! Earum, expedita quam.</p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </section>
  )
}
