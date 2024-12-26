import React from 'react';
import { Photo } from '../../types';

interface PolaroidFrameProps {
  photo: Photo;
  style?: React.CSSProperties;
  rotation?: number;
  size?: 'small' | 'large';
}

const PolaroidFrame: React.FC<PolaroidFrameProps> = ({ photo, style, rotation = 0, size = 'small' }) => {
  const sizeClasses = {
    small: 'w-48 h-48',
    large: 'w-64 h-64'
  };

  return (
    <div 
      className={`group absolute bg-white p-4 shadow-xl transition-all duration-500 
                hover:scale-105 hover:z-50 hover:shadow-2xl cursor-pointer`}
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: 'center',
        ...style
      }}
    >
      <div className="relative overflow-hidden">
        <img
          src={photo.url}
          alt={photo.caption}
          className={`${sizeClasses[size]} object-cover`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      {photo.caption && (
        <p className="mt-4 text-center font-handwriting text-lg text-gray-700">
          {photo.caption}
        </p>
      )}
    </div>
  );
};

export default PolaroidFrame;