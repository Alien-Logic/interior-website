import React from "react";
import { Link } from "react-router-dom";
import "./contactlink.css";

const ContactLink = () => {
  return (
    <div className="container contactlink-container">
      <p className="h2 bold">Wanna join the interno?</p>
      <p className="text">It is a long established fact will be distracted.</p>
      <Link className="primary-btn link" to="/contact">
        Contact With Us
        <span className="icon">
          <img src="/primary-arrow.svg" />
        </span>
      </Link>
    </div>
  );
};

export default ContactLink;
