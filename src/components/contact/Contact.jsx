import React from 'react'
import './contact.css'

import { HiOutlineMail } from 'react-icons/hi'
import { PiTwitterLogoBold } from 'react-icons/pi'

export default function Contact() {
  return (
    <section id="contact">
      <h5>Get IN Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dummyegator@gmail.com</h5>
            <a href="mailto:sandeepkushwaha4531@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>sandeepkushwaha4531@gmail.com</h5>
            <a href="" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <PiTwitterLogoBold className='contact__option-icon'/>
            <h4>Twiter</h4>
            <h5>@twtsandeep</h5>
            <a href="" target='_blank'>Send a message</a>
          </article>
        </div>

        {/* form  */}


      {/* for defalut message sending we can use (emailjs) build in methods */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id=""  rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}
