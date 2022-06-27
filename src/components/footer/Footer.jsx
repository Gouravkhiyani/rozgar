import React from 'react';
import logo from '../../assets/logo.png';
import './footer.css';

const Footer = () => (
  <div className="footer section__padding">
    <div className="footer-links">
      <div className="footer-links_logo">
        <img src={logo} alt="logo" />
        <p>Sadar Bazar (Bhopal), <br /> All Rights Reserved</p>
      </div>
      <div className="footer-links_div">
        <h4>Social Media Links</h4>
        <p>LinkedIn</p>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Twitter</p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact us</p>
      </div>
      <div className="footer-links_div">
        <h4>Get in touch</h4>
        <p>Sadar Bazar (Bhopal)</p>
        <p>1234567890</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>@2022 DainikRozgar. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;