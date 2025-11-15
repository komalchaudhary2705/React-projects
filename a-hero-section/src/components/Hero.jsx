import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="fade-in">Hi, I am <span>Komal Kalsoom</span></h1>
        <h2 className="fade-in-delay">From Lahore, Pakistan</h2>
        <p className="hero-para">
          I’m a passionate <strong>Front-End Web Developer</strong> dedicated to crafting 
          clean, responsive, and user-friendly web experiences. I love turning ideas 
          into reality through elegant design and efficient code.
        </p>
        <button className="hire-btn">Hire Me</button>
      </div>
    </section>
  );
};

export default Hero;
