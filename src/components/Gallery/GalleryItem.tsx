import React from 'react';
import { Heart } from 'lucide-react';
import { Photo } from '../../types';

interface GalleryItemProps {
  photo: Photo;
  index: number;
}

export const GalleryItem: React.FC<GalleryItemProps> = ({ photo, index }) => {
  const isFeatured = photo.featured;
  const spanClass = isFeatured ? 'md:col-span-2 md:row-span-2' : '';

  return (
    <div 
      className={`group relative ${spanClass}`}
      style={{ 
        opacity: 0,
        animation: `tiltIn 0.6s ease-out ${index * 0.15}s forwards`
      }}
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={photo.url}
          alt="Memory"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <Heart 
            className="text-white w-12 h-12 transform scale-0 group-hover:scale-100 transition-transform duration-500 hover:text-pink-400"
            style={{ filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.3))' }}
          />
        </div>
      </div>
    </div>
  );
};