import React from 'react';
import RescueCard from '../rescue-card/RescueCard.component';
import './Rescues.styles.scss';

const Rescues = () => {
  return (
    <section className="section-rescues">
      <div className="center-text margin-bottom-l">
        <div className="heading-secondary">
          Meet Your Local Rescues
        </div>
      </div>
      <div class="row">
        <div class="col-1-of-3">
          <RescueCard />
        </div>
        <div class="col-1-of-3">
          <RescueCard />
        </div>
        <div class="col-1-of-3">
          <RescueCard />
        </div>
      </div>
    </section>
  );
};

export default Rescues;
