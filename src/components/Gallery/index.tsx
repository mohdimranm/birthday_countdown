import React from 'react';
import { GalleryItem } from './GalleryItem';
import { Photo } from '../../types';

interface GalleryProps {
  photos: Photo[];
}

export const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8">
      {photos.map((photo, index) => (
        <GalleryItem
          key={index}
          photo={photo}
          index={index}
        />
      ))}
    </div>
  );
};