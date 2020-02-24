import React from 'react';
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
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h3 className="heading-tertiary margin-bottom-s">
            Foster Dogs until They Find their Forever Home
          </h3>
          <p className="paragraph">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <a href="javascript:void(0);" className="btn-text">Learn more &rarr;</a>
        </div>
        <div className="col-1-of-2">
         2
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
