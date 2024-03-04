import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import "./navbar.css";

const Navbar = () => {
  return (
    <div className=''>
      <div className='navbar'>
        <span className='logo'>
            <img className='logo-img' src="/Logo.svg" alt='logo' />
            <span className='h2'>Interno</span>
        </span>

        <ul className='menu'>
            <li className='h5'><Link className='link' to="/">Home</Link></li>
            <li className='h5'><Link className='link' to="/about"> About Us </Link></li>
            <li className='h5'><Link className='link' to="/services">Services</Link></li>
            <li className='h5'><Link className='link' to= "/ContactLink">Contact</Link></li>
            <li className='h5'>Project</li>
            <li className='h5'>Blog</li>
            
            <li><span><img src='/search.svg' alt='serach icon' /></span></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
