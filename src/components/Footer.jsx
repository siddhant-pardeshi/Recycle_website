import React from 'react';
import './Footer.css';

function Footer() {
  // The Footer component wraps up the page layout.
  // It provides standard essential links, reinforcing that this page is structured 
  // like a real-world production website.
  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        
        {/* We use a CSS grid in Footer.css to automatically arrange these columns based on screen size */}
        <div className="footer-col">
          <h3>Pune Recyclers</h3>
          <p>Committed to sustainable scrap collection and a cleaner, greener Pune.</p>
        </div>
        
        <div className="footer-col">
          <h3>Contact Us</h3>
          <ul>
            <li>📞 +91 82083 83167</li>
            <li>📧 info@punerecyclers.com</li>
            <li>📍 Ambegaon BK, Pune 411046</li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Pune Recyclers. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
