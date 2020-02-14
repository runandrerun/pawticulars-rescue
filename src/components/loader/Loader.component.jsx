import React from 'react';
import './Loader.styles.scss';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader" role="status"></div>
    </div>
  );
};

export default Loader;
