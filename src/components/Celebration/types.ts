export interface CelebrationProps {
  isActive: boolean;
  duration?: number;
}

export interface Particle {
  x: number;
  y: number;
  speed: number;
  rotation: number;
  scale: number;
  color: string;
}