import React from 'react';
import '../Products/styles.css'
const DatesSection = () => (
  <section className="dates-section">
    <div className="container">
      <h2>EVENT ANNOUNCEMENT: PLANT EXCHANGE MARKET</h2>
      <p className="announcement">
        <strong>Mark your calendars!</strong> We’re thrilled to share the dates for the upcoming editions of the Plant Exchange Market.
      </p>
      <div className="dates">
        <h3>Upcoming Market Dates</h3>
        <p><strong>•🌿3rd Edition - 15 March, 2025</strong></p>
        <p><strong>•🌿4th Edition - 12 July, 2025</strong></p>
      </div>
      <p className="info-text">
        Whether you’re a shopper looking for new greenery or a seller eager to showcase your plants, we’ve got all the information you need.
      </p>
      <button className="learn-more">Learn More Here</button>
    </div>
  </section>
);

export default DatesSection;
