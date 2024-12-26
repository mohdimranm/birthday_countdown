import React, { useState } from 'react';
import { Heart, ZoomIn } from 'lucide-react';
import type { Photo } from '../../types';

interface GalleryItemProps {
  photo: Photo;
  index: number;
}

export const GalleryItem: React.FC<GalleryItemProps> = ({ photo, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isFeatured = photo.featured;
  const spanClass = isFeatured ? 'md:col-span-2 md:row-span-2' : '';

  return (
    <div 
      className={`group relative ${spanClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        opacity: 0,
        animation: `tiltIn 0.6s ease-out ${index * 0.15}s forwards`
      }}
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-lg transition-transform duration-500 group-hover:scale-[1.02]">
        <img
          src={photo.url}
          alt={photo.caption}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {photo.caption && (
              <p className="text-white text-xl font-semibold text-center mb-4 text-shadow">
                {photo.caption}
              </p>
            )}
            
            <div className="flex items-center justify-center space-x-4">
              <button className="p-3 bg-white/90 rounded-full transform hover:scale-110 transition-transform duration-300 group">
                <Heart className="w-6 h-6 text-pink-500 group-hover:text-red-500 transition-colors duration-300" />
              </button>
              <button className="p-3 bg-white/90 rounded-full transform hover:scale-110 transition-transform duration-300 group">
                <ZoomIn className="w-6 h-6 text-purple-500 group-hover:text-indigo-500 transition-colors duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};