import React from 'react';
import './Navbar.css';

// We now accept 'props' to get the onBookClick function passed down from App.jsx
function Navbar(props) {
  // Simple Functional Component displaying static HTML (JSX).
  // Anchor links use 'href="#id"' to smoothly scroll to other components on the page.
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="nav-logo">
          <span className="logo-icon">🌿</span>
          Pune Recyclers
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        {/* We reuse the global button CSS classes here to maintain a consistent style */}
        <button className="btn btn-primary nav-btn" onClick={props.onBookClick}>Book Now</button>
      </div>
    </nav>
  );
}

export default Navbar;
