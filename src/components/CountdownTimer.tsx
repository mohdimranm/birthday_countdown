import React from 'react';
import { TimeLeft } from '../types';
import { Sparkles, Stars, Heart, Gift, Music, Cake } from 'lucide-react';
import TimeUnit from './TimeUnit';
import BirthdayMessage from './BirthdayMessage';

interface CountdownTimerProps {
  timeLeft: TimeLeft;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ timeLeft }) => {
  const timeUnits = [
    { unit: 'days', icon: Cake, color: 'from-pink-500 to-red-500' },
    { unit: 'hours', icon: Gift, color: 'from-purple-500 to-indigo-500' },
    { unit: 'minutes', icon: Heart, color: 'from-indigo-500 to-blue-500' },
    { unit: 'seconds', icon: Stars, color: 'from-blue-500 to-purple-500' }
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 via-purple-200/30 to-pink-200/30 blur-3xl transform -skew-y-6 animate-pulse" />
      
      <div className="relative">
        <BirthdayMessage />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {timeUnits.map(({ unit, icon: Icon, color }) => (
            unit !== 'total' && timeLeft[unit as keyof TimeLeft] !== undefined && (
              <TimeUnit
                key={unit}
                unit={unit}
                value={timeLeft[unit as keyof TimeLeft]}
                icon={Icon}
                gradientColor={color}
              />
            )
          ))}
        </div>

        <div className="mt-16 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-transform">
            <Music className="w-5 h-5 text-pink-500 animate-bounce" />
            <span className="text-lg text-gray-700 font-medium">
              Get ready for the celebration!
            </span>
            <Sparkles className="w-5 h-5 text-purple-500 animate-spin-slow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;