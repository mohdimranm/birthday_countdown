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
    <div className="fixed bottom-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg">
      <audio
        ref={audioRef}
        src="/src/music/song.mp3"
        loop
      />
      <button
        onClick={togglePlay}
        className="flex items-center space-x-2 text-pink-500 hover:text-pink-600 transition-colors"
      >
        <Music className="w-5 h-5" />
        {isPlaying ? (
          <Pause className="w-5 h-5" />
        ) : (
          <Play className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
