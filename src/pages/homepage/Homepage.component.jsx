import React from 'react';
import RescueList from '../../components/rescue-list/RescueList.component';
import Navbar from '../../components/navbar/Navbar.component';
import Hero from '../../components/hero/Hero.component';
import AboutCard from '../../components/about-card/AboutCard.component';
import Features from '../../components/features/Features.component';
import './Homepage.styles.scss';

const Homepage = () => {
  return (
    <section id="homepage">
      <Hero />
      <AboutCard />
      <Features />
      <RescueList />
    </section>
  );
};

export default Homepage;
