import React, { useState } from 'react';
// Importing our custom components from the components folder.
// This shows how React allows us to break down the UI into smaller, reusable pieces.
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import Footer from './components/Footer';

function App() {
  // We lift the state up to App.jsx! 
  // This allows us to trigger the modal from BOTH the Navbar and the Hero components.
  // This is a great concept to explain: "Lifting State Up".
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // The App component acts as the root or "parent" wrapper for our entire page.
  // We return JSX here, which looks like HTML but is actually JavaScript.
  return (
    <div>
      {/* 
        Stacking the components logically. 
        how the page is built, 
        each tag below corresponds to a specific imported function component. 
      */}
      <Navbar onBookClick={toggleModal} />
      <Hero onBookClick={toggleModal} />
      <Services />
      <Process />
      <About />
      <Footer />

      {/* 
        Conditional Rendering
        This syntax `{isModalOpen && (...)}` means: 
        If 'isModalOpen' is true, render the modal HTML. If false, render nothing.
      */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          {/* e.stopPropagation() prevents clicking inside the form from closing the modal */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={toggleModal}>&times;</button>
            <h2 style={{ marginBottom: '20px' }}>Book Appointment</h2>
            <form>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter phone number" />
              </div>
              <button type="button" className="btn btn-primary" style={{ width: '100%' }} onClick={() => {
                alert("Appointment request sent! (Mock)");
                toggleModal(); // Close the modal once submitted
              }}>
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
