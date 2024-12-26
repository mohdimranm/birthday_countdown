import React from 'react';
import { Heart } from 'lucide-react';

const FloatingHearts: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <Heart
          key={i}
          className={`absolute text-pink-400/30 animate-float-${i % 5}`}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * 20 + 10}px`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;