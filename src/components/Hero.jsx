import React from 'react';
import './Hero.css';

// We now accept 'props' to get the onBookClick function passed from App.jsx
function Hero(props) {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Trusted Scrap Collection and Waste Management</h1>
          <p>
            We handle only scrap and waste materials and offer convenient doorstep pickup and eco-friendly recycling services across Pune and PCMC.
          </p>
          {/* We trigger the function passed from the parent App.jsx */}
          <button className="btn btn-primary" onClick={props.onBookClick}>
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
