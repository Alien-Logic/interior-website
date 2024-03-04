import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'; 

import Hero from '../components/hero/Hero';
import { home } from "../data/home";
import Features from '../components/features/Features';
import Call from '../components/call/Call';
import Reviews from '../components/reviews/Reviews';
import Brands from '../components/brands/Brands';
import Projects from '../components/projects/Projects';
import Numbers from '../components/numbers/Numbers';
import Articles from '../components/articles/Articles';
import ContactLink from '../components/contactlink/ContactLink';

const Home = () => {
    
  return (
    <div>
      <Hero />
      <Features data={home.features} />
      <Call />
      <Reviews data={home.reviews} />
      <Brands data={home.brands} />
      <Projects data={home.projects} />
      <Numbers />
      <Articles data={home.articles} />
      <ContactLink />
    </div>
  )
}

export default Home;
