export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

export interface Photo {
  url: string;
  featured?: boolean;
  caption?: string;
}