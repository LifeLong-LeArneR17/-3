import React from 'react';
import './ImageGalleryItem.css';
export const ImageGalleryItem = ({ smallImg, largeImg, openModal  }) => {
  return (
    <li className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" alt="" />
    </li>
  );
};