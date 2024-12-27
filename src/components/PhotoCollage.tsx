import React from 'react';
import { Gallery } from './Gallery';
import { GalleryHeader } from './GalleryHeader';

const PhotoCollage: React.FC = () => {
  const photos = [
    {
      url: '/assets/pic1.png',
      featured: true
    },
    {
      url: '/assets/pic2.jpg'
    },
    {
      url: '/assets/pic3.jpg'
    },
    {
      url: '/assets/pic4.jpg',
      featured: true
    },
    {
      url: '/assets/pic5.jpg'
    },
    {
      url: '/assets/pic8.jpg'
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      <GalleryHeader />
      <Gallery photos={photos} />
    </section>
  );
};

export default PhotoCollage;