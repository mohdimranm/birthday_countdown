export const COLORS = [
  '#FF69B4', // Pink
  '#FF1493', // Deep Pink
  '#FF6B81', // Light Pink
  '#FFA07A', // Light Salmon
  '#FF4500', // Orange Red
  '#9370DB', // Medium Purple
];

export const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

export const getRandomNumber = (min: number, max: number) => 
  Math.random() * (max - min) + min;