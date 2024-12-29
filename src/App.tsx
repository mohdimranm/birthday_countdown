import React, { useState, useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';
import CountdownTimer from './components/CountdownTimer';
import PhotoCollage from './components/PhotoCollage';
import Message from './components/Message';
import FloatingHearts from './components/FloatingHearts';
import ParticleBackground from './components/ParticleBackground';
import MusicPlayer from './components/MusicPlayer';
import { calculateTimeLeft } from './utils/timeUtils';

function App() {
  const [isComplete, setIsComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const targetTimeRef = useRef(new Date(Date.now() + 500));
  // const targetTimeRef = useRef(new Date('2024-12-31T00:00:00'));

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetTimeRef.current));

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeLeft(targetTimeRef.current);
      setTimeLeft(remaining);

      if (remaining.total <= 0) {
        setIsComplete(true);
        clearInterval(timer);
        setTimeout(() => setShowContent(true), 1000);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 overflow-hidden">
      <ParticleBackground />
      <FloatingHearts />

      <div className="container mx-auto px-4 py-12 relative">
        <header className="text-center mb-16">
          <Heart className="inline-block text-pink-500 w-16 h-16 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mt-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500">
            Happy Birthday Anjali!
          </h1>
        </header>

        {!isComplete ? (
          <CountdownTimer timeLeft={timeLeft} />
        ) : (
          <div
            className={`transition-all duration-1000 ${
              showContent
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <Message />
            <PhotoCollage />
          </div>
        )}
      </div>

      <MusicPlayer />
    </div>
  );
}

export default App;
