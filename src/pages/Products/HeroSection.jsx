import React from 'react';
import '../Products/styles.css';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <section className="hero">
    <div className="text-content">
      <h1>WE CONNECT PEOPLE WITH PLANTS THAT ARE PERFECT FOR THEM!</h1>
      <p className="quote">
        <em>
          <h3>"The best place to BUY, SELL and EXCHANGE plants for yourself online"</h3>
        </em>
      </p>
      <div className="buttons">
        <Link to="/shop">
          <button className="btn">Shop</button>
        </Link>
      </div>
    </div>
    <div className="plant-images">
      <img
        src="0CE33E8A-5D92-465A-B4A6-5DC1A16A0A76_1_201_a.jpeg"
        alt="Plant 4"
        className="plant plant-4"
      />
    </div>
  </section>
);

export default HeroSection;
