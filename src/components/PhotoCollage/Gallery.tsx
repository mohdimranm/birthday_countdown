import React from 'react';
import { GalleryItem } from './GalleryItem';
import type { Photo } from '../../types';

interface GalleryProps {
  photos: Photo[];
}

export const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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