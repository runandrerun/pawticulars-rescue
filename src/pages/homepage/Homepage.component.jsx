import React from 'react';
import RescueList from '../../components/rescue-list/RescueList.component';
import Navbar from '../../components/navbar/Navbar.component';

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <RescueList />
    </div>
  );
};

export default Homepage;
