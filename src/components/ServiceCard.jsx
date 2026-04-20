import React from 'react';

// React Props.
// The 'props' argument is an object containing all the properties we passed down from the parent (<Services />).
// Example: props.title will be "Door-To-Door Pickup" for the first card.
function ServiceCard(props) {
  return (
    <div className="service-card">
      {/* We use curly braces {} to dynamically inject JavaScript variables into our JSX */}
      <div className="service-icon">{props.icon}</div>
      <h3 className="service-title">{props.title}</h3>
      <p className="service-description">{props.description}</p>
    </div>
  );
}

export default ServiceCard;
