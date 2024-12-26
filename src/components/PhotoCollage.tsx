import React from 'react';
import { Gallery } from './Gallery';
import { GalleryHeader } from './GalleryHeader';

const PhotoCollage: React.FC = () => {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?auto=format&fit=crop&w=600&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      url: 'https://images.unsplash.com/photo-1537727365640-d9b9cbeeac34?auto=format&fit=crop&w=600&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1539841072057-c5bcbc805c0b?auto=format&fit=crop&w=600&q=80'
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