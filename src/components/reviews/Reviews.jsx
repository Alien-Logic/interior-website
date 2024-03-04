import React from "react";
import "./reviews.css";

const Reviews = ({ data }) => {
  return (
    <div className="reviews-container container">
      <p className="h1 center headline">What the People Thinks About Us</p>
      <div className="reviews">
        {data.map((review, index) => (
          <div className="review" key={index}>
            <div className="profile-align">
              <span>
                <img className="profile-pic" src={review.profile} />
              </span>
              <div>
                <div className="bold">{review.name}</div>
                <div>{review.place}</div>
              </div>
            </div>
            <div><p className="text">{review.review}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
