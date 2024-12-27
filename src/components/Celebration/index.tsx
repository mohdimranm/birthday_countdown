import React, { useEffect, useRef } from 'react';
import { CelebrationProps } from './types';
import { getRandomColor, getRandomNumber } from './utils';

interface Particle {
  x: number;
  y: number;
  speedY: number;
  rotation: number;
  scale: number;
  color: string;
  opacity: number;
}

const Celebration: React.FC<CelebrationProps> = ({ isActive, duration = 3000 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  // Constants
  const INITIAL_OPACITY = 1;
  const FADE_OUT_RATE = 0.02;
  const PARTICLE_SPAWN_RATE = 0.2; // Probability of spawning a new particle
  const MIN_SPEED_Y = 2;
  const MAX_SPEED_Y = 5;

  useEffect(() => {
    if (!isActive || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const containerWidth = canvas.offsetWidth;
    const containerHeight = canvas.offsetHeight;

    canvas.width = containerWidth;
    canvas.height = containerHeight;

    startTimeRef.current = Date.now();

    const createParticle = (): Particle => ({
      x: getRandomNumber(0, containerWidth),
      y: containerHeight + 20,
      speedY: getRandomNumber(MIN_SPEED_Y, MAX_SPEED_Y),
      rotation: getRandomNumber(-30, 30),
      scale: getRandomNumber(0.5, 1.5),
      color: getRandomColor(),
      opacity: INITIAL_OPACITY,
    });

    const drawHeart = (ctx: CanvasRenderingContext2D, scale: number, color: string) => {
      ctx.save();
      ctx.scale(scale, scale);
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(0, -15);
      ctx.bezierCurveTo(-12, -25, -25, 0, 0, 15);
      ctx.bezierCurveTo(25, 0, 12, -25, 0, -15);
      ctx.fill();
      ctx.restore();
    };

    const drawParticle = (particle: Particle) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate((particle.rotation * Math.PI) / 180);
      ctx.globalAlpha = particle.opacity; // Apply opacity
      drawHeart(ctx, particle.scale, particle.color);
      ctx.restore();
    };

    const animateParticles = () => {
      const now = Date.now();
      const elapsedTime = now - startTimeRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        particle.y -= particle.speedY;
        particle.opacity -= FADE_OUT_RATE; // Gradually fade out

        if (particle.y < -50 || particle.opacity <= 0) {
          particlesRef.current.splice(index, 1); // Remove dead particles
        } else {
          drawParticle(particle); // Draw alive particles
        }
      });

      // Spawn new particles based on elapsed time and spawn rate
      if (elapsedTime < duration - 200 && Math.random() < PARTICLE_SPAWN_RATE) {
        particlesRef.current.push(createParticle());
      }

      if (elapsedTime < duration) {
        animationRef.current = requestAnimationFrame(animateParticles);
      }
    };

    animateParticles();

    return () => {
      cancelAnimationFrame(animationRef.current!); // Cleanup animation frame
      particlesRef.current.length = 0; // Clear particles
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    };
    
  }, [isActive, duration]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default Celebration;
