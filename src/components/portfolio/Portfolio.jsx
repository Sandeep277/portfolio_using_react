import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
// import IMG2 from '../../assets/portfolio2.jpg'
// import IMG3 from '../../assets/portfolio3.jpg'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'

// We use method for generation multiple project item 
// leter work on that method

// Define an array of portfolio items
const portfolioItems = [
  {
    title: 'Portfolio Item 1',
    githubLink: 'https://github.com',
    liveDemoLink: 'https://dribbble.com/Alien_pixels',
    imageSrc: IMG1,
  },
  // Add more portfolio items as needed
];

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioItems.map((item, index) => (
          <article className="portfolio__item" key={index}>
            <div className="portfolio__item-image">
              <img src={item.imageSrc} alt="" />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              <a href={item.githubLink} className="btn" target='_blank' rel="noopener noreferrer">Github</a>
              <a href={item.liveDemoLink} className="btn btn-primary" target='_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
