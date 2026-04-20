import React from 'react';
import ServiceCard from './ServiceCard'; // Importing the child component
import './Services.css';

function Services() {
  // Working with Data Arrays.
  // Instead of hardcoding HTML 3 times, we define the data structure once as an array of objects.
  const servicesData = [
    {
      title: "Door-To-Door Pickup",
      description: "Convenient doorstep scrap collection for homes and housing societies.",
      icon: "🚛"
    },
    {
      title: "Waste Collection",
      description: "Efficient waste management solutions ensuring a cleaner environment.",
      icon: "♻️"
    },
    {
      title: "Vehicle Scrapping",
      description: "Government authorized 2 & 4 wheeler scrapping with full documentation.",
      icon: "🚗"
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">How Can We Help You?</h2>
          <p style={{ marginBottom: '40px', color: 'var(--text-light)' }}>
            We offer sustainable scrap pickup, recycling, and zero-waste solutions for homes, societies, and industries in Pune.
          </p>
        </div>
        
        <div className="services-grid">
          {/* 
            Rendering Lists in React & Passing Props.
            We use the `.map()` function to loop through our 'servicesData' array.
            For every object in the array, we generate a <ServiceCard /> component.
            We pass the specific 'title', 'description', and 'icon' down to the child component as "Props" (properties).
            React requires a unique 'key' when mapping over elements, so we use the index.
          */}
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
