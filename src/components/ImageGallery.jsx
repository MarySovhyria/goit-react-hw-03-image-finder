import React from 'react';
import PropTypes from 'prop-types';
import { List } from './styledComponents/ImageGallery.styled';

import ImageGalleryItem from './ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <List>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </List>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;