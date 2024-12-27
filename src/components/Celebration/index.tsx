import React, { useEffect, useRef } from 'react';
import { CelebrationProps } from './types';
import { getRandomColor, getRandomNumber } from './utils';

const Celebration: React.FC<CelebrationProps> = ({ isActive, duration = 3000 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>(0);
  const particlesRef = useRef<any[]>([]);

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

    const createParticle = () => ({
      x: getRandomNumber(0, containerWidth),
      y: containerHeight + 20,
      speedY: getRandomNumber(2, 5),
      rotation: getRandomNumber(-30, 30),
      scale: getRandomNumber(0.5, 1.5),
      color: getRandomColor(),
      opacity: 1, // Initial opacity for fading effect
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

    const drawParticle = (particle: any) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate((particle.rotation * Math.PI) / 180);
      drawHeart(ctx, particle.scale, particle.color);
      ctx.globalAlpha = particle.opacity; // Apply opacity
      ctx.restore();
    };

    const animate = () => {
      const now = Date.now();
      const elapsedTime = now - startTimeRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        particle.y -= particle.speedY;
        particle.opacity -= 0.02; // Gradually fade out
        if (particle.y < -50 || particle.opacity <= 0) {
          particlesRef.current.splice(index, 1);
        } else {
          drawParticle(particle);
        }
      });

      // Stop creating new particles slightly before the animation ends
      if (elapsedTime < duration - 200 && Math.random() < 0.2) {
        particlesRef.current.push(createParticle());
      }

      if (elapsedTime < duration) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      particlesRef.current = [];
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
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
