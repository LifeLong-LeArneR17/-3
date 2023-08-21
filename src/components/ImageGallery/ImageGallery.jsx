
import React from 'react';
import "./ImageGallery.css"
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ photos, openModal  }) => {
  return <ul className="ImageGallery">
      <ImageGalleryItem/>
 
  </ul>;
};