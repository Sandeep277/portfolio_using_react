import React from 'react'
import './experience.css'
import { AiOutlineCheckCircle } from 'react-icons/ai'

export default function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div><h4>JavaScript</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div><h4>ReactJs</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div><h4>Java</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
          </div>
        </div>

        {/* backend */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div><h4>NodeJs</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div><h4>Express</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div><h4>Java</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div><h4>MongoDB</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div><h4>ReactJs</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div><h4>Java</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
