import React from 'react';

const ImageGallery = ({ images }) => (
  <div className='flex '>
    {images.map((image, id) => (
      <img key={id} src={image} alt={`Image ${id + 1}`} className='w-8 h-8 rounded-full border-2 border-white ml-[-10px]' />
    ))}
  </div>
);

export default ImageGallery;
