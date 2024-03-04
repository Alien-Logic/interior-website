import React from 'react';
import "./brands.css";

const Brands = ({data}) => {
  return (
    <div className='container'>
        <div className='brands'>
      {data.map((brand, index) => (
        <div key={index}><img src={brand.img} /></div>
      ))}
      </div>
    </div>
  )
}

export default Brands
