import React from 'react';
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='container'>
        <div className='footer-container'>
        <div className='indi'>
      <span className='logo'>
            <img className='logo-img' src="/Logo.svg" alt='logo' />
            <span className='h2'>Interno</span>
            <p>It is a long established fact that a reader will be distracted lookings.</p>
            <div className='social-icons'>
                <img src='/fb.svg' />
                <img src='/twitter.svg' />
                <img src='/linkedin.svg' />
                <img src='/insta.svg' />
            </div>
        </span>
        </div>
        <div className='indi'>
            <ul>
                <li className='text bold'>Pages</li>
                <li><Link className='link' to="/about">About Us</Link></li>
                <li>Our Projects</li>
                <li>Our Team</li>
                <li>Contact Us</li>
                <li><Link className='link' to="/services">Services</Link></li>
            </ul>
        </div>
        <div className='indi'>
            <ul>
                <li className='text bold'>Services</li>
                <li><Link className='link' to="/about">About Us</Link></li>
                <li>Our Projects</li>
                <li>Our Team</li>
                <li>Contact Us</li>
                <li><Link className='link' to="/services">Services</Link></li>
            </ul>
        </div>
        <div className='indi'>
            <ul>
                <li className='text bold'>Contact</li>
                <li>55 East Birchwood Ave.<br></br> Brooklyn, New York 11201</li>
                <li>contact@interno.com</li>
                <li>(123) 456 - 7890</li>
            </ul>
        </div>
        </div>
        <p className='copyright'>Copyright &copy; Interno | Designed by Thejaswini C E - Powered by Webflow</p>
    </div>
  )
}

export default Footer
