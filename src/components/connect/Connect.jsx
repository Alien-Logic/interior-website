import React from 'react';
import "./connect.css";
import { Link } from 'react-router-dom';

const Connect = () => {
  return (
    <div className='container connect-container'>
      <p className='h2 bold'>Create project? Let's have <br></br> a productive talk</p>
      <div className='inputs'>
      <input type='text' placeholder='Name' />
      <input type='text' placeholder='Email' />
      </div>
      <textarea type='text' placeholder='Hello I am Interested in..' />
      <Link to="/contact" className='link btn'>Send Now <span className='ar'><img src='/forward.svg' /></span></Link>
    </div>
  )
}

export default Connect
