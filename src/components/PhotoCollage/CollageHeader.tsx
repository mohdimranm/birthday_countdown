import React from 'react';
import { Camera, Sparkles, Heart } from 'lucide-react';

export const CollageHeader: React.FC = () => {
  return (
    <div className="text-center space-y-6 mb-16">
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 blur-3xl opacity-30" />
        <div className="relative">
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-lg">
            <Camera className="w-5 h-5 text-pink-500" />
            <span className="text-lg font-medium bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Captured Moments
            </span>
          </div>
        </div>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 flex items-center justify-center gap-4">
        <Heart className="w-8 h-8 text-pink-500 animate-pulse" />
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Beautiful Memories
        </span>
        <Sparkles className="w-8 h-8 text-purple-500 animate-spin-slow" />
      </h2>
    </div>
  );
};