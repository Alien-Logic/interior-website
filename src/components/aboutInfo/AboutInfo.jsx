import React from "react";
import { Link } from "react-router-dom";
import "./aboutinfo.css";

const AboutInfo = () => {
  return (
    <div className="container about-container">
      <div className="about-info">
        <div className="item">
          <p className="h2 bold">What We Do</p>
          <p className="text">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <Link className="link btn" to="/services">Our Concept <span className="ar"><img src="/forward.svg" /></span></Link>
        </div>
        <div className="image">
          <img src="/about1.svg" />
        </div>
      </div>
      <div className="about-info">
      <div className="image">
          <img src="/about2.svg" />
        </div>
        <div className="item">
          <p className="h2 bold">Our End Result</p>
          <p className="text">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <Link className="link btn" to="/services">Our Portfolio <span className="ar"><img src="/forward.svg" /></span></Link>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
