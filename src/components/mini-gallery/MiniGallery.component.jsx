import React from 'react';
import './MiniGallery.styles.scss';

const MiniGallery = () => {
  return (
    <div className="image-gallery">
      <img src={require("../../_assets/img/dog-1.jpg")} alt="" className="image-gallery__image image-gallery__image--i1" />
      <img src={require("../../_assets/img/dog-4.jpg")} alt="" className="image-gallery__image image-gallery__image--i2" />
      <img src={require("../../_assets/img/dog-2.jpg")} alt="" className="image-gallery__image image-gallery__image--i3" />
    </div>
  );
};

export default MiniGallery;
