import React from 'react';
import { Heart } from 'lucide-react';

interface PhotoProps {
  photo: {
    url: string;
    size: 'small' | 'large';
  };
  index: number;
}

const PhotoCard: React.FC<PhotoProps> = ({ photo, index }) => {
  const isLarge = photo.size === 'large';
  const gridClass = isLarge ? 'md:col-span-2 md:row-span-2' : '';
  const heightClass = isLarge ? 'h-96' : 'h-64';

  return (
    <div 
      className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl ${gridClass}`}
      style={{ 
        opacity: 0,
        animation: `fadeIn 0.5s ease-out ${index * 0.2}s forwards`
      }}
    >
      <div className={`relative ${heightClass} transition-transform duration-500 group-hover:scale-105`}>
        <img
          src={photo.url}
          alt="Memory"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center justify-end">
            <Heart className="text-pink-500 w-6 h-6 group-hover:animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;