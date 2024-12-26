import React from 'react';
import { Sparkles, Heart, Star } from 'lucide-react';

const BirthdayMessage: React.FC = () => {
  return (
    <div className="text-center mb-12 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-pink-200/30 rounded-full blur-3xl" />
      
      <div className="relative">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Star className="w-6 h-6 text-yellow-500 animate-spin-slow" />
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Anjali's Special Day
          </h2>
          <Star className="w-6 h-6 text-yellow-500 animate-spin-slow" />
        </div>

        <div className="flex items-center justify-center gap-2 text-lg text-gray-700 font-medium">
          <Sparkles className="w-5 h-5 text-purple-500" />
          <p>Counting down to the most magical moment...</p>
          <Heart className="w-5 h-5 text-pink-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default BirthdayMessage;