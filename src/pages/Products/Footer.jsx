import React from 'react';
import '../Products/styles.css'

const Footer = () => (
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
        <p>We started this company to share our love for plants with our friends, and we would love to have you in our circle.</p>
      </div>
    </div>
    <div className="footer-bottom">
      © SproutSwap
    </div>
  </footer>
);

export default Footer;
