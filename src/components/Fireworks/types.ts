export const FIREWORK_COLORS = ['#ff69b4', '#9370db', '#87ceeb', '#ffd700'] as const;
export type FireworkColors = typeof FIREWORK_COLORS[number];

export interface FireworksProps {
  isActive: boolean;
  duration?: number;
  container?: React.RefObject<HTMLDivElement>;
}