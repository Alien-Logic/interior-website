import React from "react";
import { Link } from "react-router-dom";
import "./call.css";

const Call = () => {
  return (
    <div className="container call-container">
      <div className="item">
        <p className="h1">We Create The Art Of Stylish Living Stylishly</p>
        <p className="desc">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using that it has a more-or-less normal.
        </p>
        <div className="call">
          <span>
            <img className="call-icon" src="/Call.svg" />
          </span>
          <div>
            <div className="bold">012345678</div>
            <div>Call Us Anytime</div>
          </div>
        </div>
        <Link className="btn h6" to="/about">
          Get Free Estimate
          <span>
            <img src="/forward.svg" />
          </span>
        </Link>
      </div>
      <div>
        <img className="inter" src="/inter.svg" />
      </div>
    </div>
  );
};

export default Call;
