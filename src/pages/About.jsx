import React from 'react'
import AboutHero from '../components/aboutHero/AboutHero'
import AboutInfo from '../components/aboutInfo/AboutInfo';
import People from '../components/people/People';
import { about } from '../data/about';
import Connect from '../components/connect/Connect';
import Header from '../components/header/Header';

const About = () => {
  return (
    <div>
      <Header img="/about.svg" title="About Us" path = "Home / About Us" />
      <AboutHero />
      <AboutInfo />
      <People data = {about.people} />
      <Connect />
    </div>
  )
}

export default About
