import React from 'react';
import RescueList from '../../components/rescue-list/RescueList.component';
import Navbar from '../../components/navbar/Navbar.component';
import Hero from '../../components/hero/Hero.component';
import './Homepage.styles.scss';

const Homepage = () => {
  return (
    <section id="homepage">
      <Hero />
      <RescueList />
    </section>
  );
};

export default Homepage;