import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <p className="h1">Let Your Home Be Unique</p>
        <p className="h4">
          There are many variations of teh passages of lorem lpsum from
          available, majority
        </p>
        <Link className="btn h5" to="/about">
          Get Started
          <span>
            <img src="/forward.svg" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
