import React from 'react';
import MiniGallery from '../mini-gallery/MiniGallery.component';
import './AboutCard.styles.scss';

const AboutCard = () => {
  return (
    <div className="about">
      <div className="center-text margin-bottom-l">
        <h2 className="heading-secondary">
          Finding Rescues their Forever Home
        </h2>
      </div>
      <div className="row left-text">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary margin-bottom-s">
            Rescue Dogs from Transparent, No Kill Rescues
          </h3>
          <p className="paragraph">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <h3 className="heading-tertiary margin-bottom-s">
            Foster Dogs until They Find their Forever Home
          </h3>
          <p className="paragraph">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <a href="#" className="btn-text">Learn more &rarr;</a>
        </div>
        <div className="col-1-of-2">
          <MiniGallery />
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
