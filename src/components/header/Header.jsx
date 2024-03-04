import React from 'react';
import "./header.css";

const Header = ({img, title, path}) => {
  return (
    <div className='header-container'>
      <img src={img} />
      <div className='center header'>
        <p className='h4 bold'>{title}</p>
        <p className='text'>{path}</p>
      </div>
      </div>
  )
}

export default Header;
