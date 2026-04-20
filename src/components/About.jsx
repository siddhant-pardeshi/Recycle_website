import React from 'react';
import './About.css';

function About() {
  // Encapsulating sections into their own files.
  // By moving the 'About Us' section into its own component, we keep App.jsx very clean.
  // This is the core philosophy of React: Component-based architecture.
  return (
    <section className="about-section" id="about">
      <div className="container about-container">
        <div className="about-content">
          {/* Using semantic HTML5 elements like <section>, <h2>, <ul> helps with SEO and accessibility. */}
          <h2 className="section-title">Trusted Waste Management with 25 Years of Experience</h2>
          <p>
            At Pune Recyclers, we bring over three decades of expertise in sustainable waste disposal and recycling. From residential pickups to large-scale industrial waste management, our eco-driven solutions are designed to make waste collection easy, efficient, and impactful.
          </p>
          <ul className="about-features">
            <li>✅ 100% Satisfaction Guaranteed</li>
            <li>✅ Expert & Experienced Team</li>
            <li>✅ Flexible Work Hours</li>
            <li>✅ 24/7 Support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
