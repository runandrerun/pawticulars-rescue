import React from 'react';

const FeatureCard = ({ type, title, copy}) => {
  return (
    <div className="feature-container">
      <i className={`feature-container__icon icon-basic-${type}`}></i>
      <h3 className="heading-tertiary margin-bottom-s">{title}</h3>
      <p className="feature-container__copy">
        {copy}
      </p>
    </div>
  );
};

export default FeatureCard;
