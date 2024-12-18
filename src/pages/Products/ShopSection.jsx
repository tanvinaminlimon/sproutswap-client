import React from 'react';
import '../Products/styles.css'
import GiftZone from '../GiftZone/GiftZone';

const ShopSection = () => (
  <section className="shop-section">
    <div className="container">
      <h2>Popular Collections</h2>
      <GiftZone></GiftZone>
    </div>
  </section>
);

export default ShopSection;
