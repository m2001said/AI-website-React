import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer section__padding">
      <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1>

      <button>Request Early Access</button>

      <div className="footer-container">
        <div className="footer-container-logo-content">
          <img alt="logo-img" src={logo} />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="footer-container-information-content">
          <h5>Links</h5>
          <ul>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-container-information-content">
          <h5>Company</h5>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-container-information-content">
          <h5>Get in touch</h5>
          <ul>
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
          </ul>
        </div>
      </div>

      <p>© 2021 GPT-3. All rights reserved.</p>
    </div>
  );
};

export default Footer;
