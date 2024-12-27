import React, { useState, useRef } from 'react';
import { Music, Pause, Play } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-8 right-8 animate-bounce-slow">
      <div className="relative">
        {!isPlaying && (
          <div className="absolute -top-16 right-0 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <p className="text-sm text-pink-600 whitespace-nowrap">Click to play music! 🎵</p>
          </div>
        )}
        <button
          onClick={togglePlay}
          className="flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <Music className="w-6 h-6" />
          {isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6" />
          )}
        </button>
      </div>
      <audio
        ref={audioRef}
        src="/assets/song.mp3"
        loop
      />
    </div>
  );
};

export default MusicPlayer;