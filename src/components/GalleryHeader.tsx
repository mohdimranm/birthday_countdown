import React from 'react';
import { Sparkles } from 'lucide-react';

export const GalleryHeader: React.FC = () => {
  return (
    <div className="text-center space-y-4">
      <div className="inline-flex items-center justify-center space-x-2 bg-pink-50 px-4 py-2 rounded-full">
        <Sparkles className="w-4 h-4 text-pink-500" />
        <span className="text-sm font-medium text-pink-700">Our Memories</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Moments Frozen in Time
      </h2>
    </div>
  );
};