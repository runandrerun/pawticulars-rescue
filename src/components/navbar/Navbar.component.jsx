import React from 'react';
import { PawticularsLogo } from '../../_assets/img/dog.png';
import './Navbar.styles.scss';

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="logo-container">
        <img className="logo" src={require('../../_assets/img/dog.png')} alt="Pawticulars Rescue" />
        <div className="logo-title">
          Pawticulars Rescue
        </div>
      </div>
      <div className="options">
        <div className="option">
          Home
        </div>
        <div className="option">
          About
        </div>
      </div>
    </div>
  );
};

export default Navbar;
