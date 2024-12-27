import React, { useState, useCallback, useRef } from 'react';
import { TimeLeft } from '../types';
import { Sparkles, Stars, Heart, Gift, Music, Cake } from 'lucide-react';
import TimeUnit from './TimeUnit';
import BirthdayMessage from './BirthdayMessage';
import Celebration from './Celebration';

interface CountdownTimerProps {
  timeLeft: TimeLeft;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ timeLeft }) => {
  const [showCelebration, setShowCelebration] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleCelebration = useCallback(() => {
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 4000);
  }, []);

  const timeUnits = [
    { unit: 'days', icon: Cake, color: 'from-pink-500 to-red-500' },
    { unit: 'hours', icon: Gift, color: 'from-purple-500 to-indigo-500' },
    { unit: 'minutes', icon: Heart, color: 'from-indigo-500 to-blue-500' },
    { unit: 'seconds', icon: Stars, color: 'from-blue-500 to-purple-500' }
  ];

  return (
    <div ref={containerRef} className="relative min-h-[600px] overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm p-8">
      {showCelebration && <Celebration isActive={showCelebration} duration={3000} />}
      
      <div className="relative z-10">
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
          <button
            onClick={handleCelebration}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            <Music className="w-5 h-5 animate-bounce" />
            <span className="text-lg font-medium">
              Get ready for the celebration!
            </span>
            <Sparkles className="w-5 h-5 animate-spin-slow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;