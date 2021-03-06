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
        <div className="heading-primary">
          <div className="heading-primary--main">
            pawticulars
          </div>
          <div className="heading-primary--sub">
            fosters to the rescue
          </div>
          <a href="#" className="btn btn--white btn--animated">Learn more</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
