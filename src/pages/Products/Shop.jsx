import React from 'react';
import '../Products/styles.css'
import GiftZone from '../GiftZone/GiftZone';

const Shop = () => {
  return (
    <>
      {/* Header */}
      <header>
        <a href="/" className="logo">
          SPROUTSWAP🌱<span className="leaf">🪴</span>
        </a>
        <div className="header-right">
          <a href="#">PLANT SUBSCRIPTION</a>
          <a href="#">ACCOUNT</a>
          <a href="#">SEARCH</a>
          <a href="#">CART (0)</a>
        </div>
      </header>

      {/* Shop Section */}
      <section className="shop-section">
        <div className="container">
          <h2>All Plants at a Glance</h2>
          <GiftZone></GiftZone>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div>
            <h3>Help</h3>
            <ul>
              <li><a href="#">Contact Us & FAQs</a></li>
              <li><a href="#">Shipping and Returns</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>
          <div>
            <h3>More</h3>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Climate Commitment</a></li>
            </ul>
          </div>
          <div>
            <h3>Let's Be Friends!</h3>
            <p>Subscribe to receive fun updates. No spam ever.</p>
            <form>
              <input type="email" placeholder="Enter your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div>
            <h3>Good Vibes</h3>
            <p>
              We started this company to share our love for plants with our
              friends, and we would love to have you in our circle. By sharing
              this contagiously good lifestyle with you, we hope you will do the
              same for others.
            </p>
            <div className="social-icons">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">© SproutSwap</div>
      </footer>
    </>
  );
};

export default Shop;
