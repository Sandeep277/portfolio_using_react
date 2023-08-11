import React from 'react';
import './contact.css';

import { HiOutlineMail } from 'react-icons/hi';
import { FaTwitter } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dummyegator@gmail.com</h5>
            <a href="mailto:sandeepkushwaha4531@gmail.com" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>sandeepkushwaha4531@gmail.com</h5>
            <a href="mailto:sandeepkushwaha4531@gmail.com" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>@twtsandeep</h5>
            <a href="https://twitter.com/twtsandeep" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>
        </div>

        {/* Form for default message sending */}
        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message"></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
