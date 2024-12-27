import React, { useEffect, useRef } from 'react';
import { Particle } from './Particle';
import { FireworksProps, FIREWORK_COLORS } from './types';

const Fireworks: React.FC<FireworksProps> = ({ isActive, duration = 3000, container }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!isActive || !canvasRef.current || !container?.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')!;
    const containerRect = container.current.getBoundingClientRect();
    
    canvas.width = containerRect.width;
    canvas.height = containerRect.height;

    const particles: Particle[] = [];
    let startTime = Date.now();

    const createFirework = (x: number, y: number) => {
      const color = FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)];
      for (let i = 0; i < 30; i++) {
        particles.push(new Particle(x, y, color));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.update();
        particle.draw(ctx);
        if (particle.alpha <= 0) {
          particles.splice(index, 1);
        }
      });

      if (Math.random() < 0.1) {
        createFirework(
          Math.random() * canvas.width,
          canvas.height * 0.8
        );
      }

      if (Date.now() - startTime < duration) {
        animationRef.current = requestAnimationFrame(animate);
      } else if (particles.length > 0) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [isActive, duration, container]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default Fireworks;