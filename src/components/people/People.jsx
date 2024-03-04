import React, {useState} from "react";
import ReactCardFlip from "react-card-flip";
import "./people.css";

const People = ({ data }) => {
  const [flip, setFlip] = useState(false);
  return (
    <div className="people-container">
      <p className="h2 bold center">
        What the People Thinks <br></br> About Us
      </p>
      <div className="people">{data.map((person, index) => (
        <ReactCardFlip isFlipped={flip} flipDirection="vertical">
        <div><img onClick={() => setFlip(!flip)} src={person.profile} /></div>
        <div className="info" onClick={() => setFlip(!flip)}>
          <p className="h5 bold">{person.name}</p>
          <p className="text place">{person.place}</p>
          <div className='social-icons'>
                <img src='/fb.svg' />
                <img src='/twitter.svg' />
                <img src='/linkedin.svg' />
                <img src='/insta.svg' />
            </div>
          <p className="text">{person.contact}</p>
          <p className="text email">{person.email}</p>
        </div>
        </ReactCardFlip>
      ))}</div>
    </div>
  );
};

export default People;
