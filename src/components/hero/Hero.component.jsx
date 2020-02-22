import React from 'react';
import { ReactComponent as PawticularsLogo } from '../../_assets/img/pawticulars-paw.svg';
import './Hero.styles.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__logo-container">
        <PawticularsLogo className="logo"/>
      </div>
      <div className="hero__heading-container">
        <div className="heading">
          <div className="heading--primary">
            pawticulars
          </div>
          <div className="heading--sub">
            fosters to the rescue
          </div>
          <a href="#" className="btn btn--white btn--animated">Learn more</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
