import React from 'react'
import './footer.css'
import{BsLinkedin} from'react-icons/bs'
import{FaGithub} from'react-icons/fa'
import{FaTwitter} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>SANDEEP</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#xperience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com"><BsLinkedin/></a>
        <a href="https://twitter.com"><FaTwitter/></a>
        <a href="https://github.com"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SANDEEP. All rights reserved</small>
      </div>
    </footer>
  )
}
