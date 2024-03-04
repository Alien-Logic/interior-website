import React from 'react'
import { Link } from 'react-router-dom';
import "./features.css";

const Features = ({data}) => {
    // console.log(data)
  return (
    <div className='container'>
      <div className='features'>
        {data.map((feature, index) => (
            <div className='feature' key={index}>
                <p className='h5'>{feature.title}</p>
                <p>{feature.desc}</p>
                <Link className='link' to={feature.linkto}>{feature.more} <span className='icon'><img src='/forward.svg' /></span></Link>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Features
