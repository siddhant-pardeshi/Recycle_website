import React from 'react';
import './Process.css';

function Process() {
  // Another example of Data Mapping.
  // Just like in Services.jsx, we define our step data as a JavaScript array 
  // and map over it to render the step boxes dynamically.
  // This makes it extremely easy to add or remove steps later without copying and pasting HTML.
  const steps = [
    { title: "Registration", desc: "Register your old vehicle with us for assessment." },
    { title: "Hassle-Free Pickup", desc: "We schedule a safe pickup from your location." },
    { title: "Verification", desc: "We handle all RTO documentation smoothly." },
    { title: "Eco Dismantling", desc: "Safe disposal and recycling of materials." }
  ];

  return (
    <section className="process-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Vehicle Scrapping Procedure</h2>
          <p style={{ marginBottom: '40px', color: 'var(--text-light)' }}>
            Government authorized 2 & 4 wheeler scrapping steps.
          </p>
        </div>
        
        <div className="process-steps">
          {steps.map((step, index) => (
            <div className="step-box" key={index}>
              {/* We use (index + 1) because array indexes start at 0, but we want to display step numbers starting at 1. */}
              <div className="step-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
