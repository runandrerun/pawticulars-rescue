import React from 'react';
import FeatureCard from '../feature-card/FeatureCard.component';
import './Features.styles.scss';

const Features = () => {
  return (
    <section className="section-features">
      <div className="row">
        <div className="col-1-of-4">
          <FeatureCard
            type={"heart"}
            title={"Love"}
            copy={"Lorem ipsum"}
          />
        </div>
        <div className="col-1-of-4">
          <FeatureCard
            type={"compass"}
            title={"Love"}
            copy={"Lorem ipsum"}
          />
        </div>
        <div className="col-1-of-4">
          <FeatureCard
            type={"world"}
            title={"Love"}
            copy={"Lorem ipsum"}
          />
        </div>
        <div className="col-1-of-4">
          <FeatureCard
            type={"heart"}
            title={"Love"}
            copy={"Lorem ipsum"}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
