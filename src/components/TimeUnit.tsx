import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TimeUnitProps {
  unit: string;
  value: number;
  icon: LucideIcon;
  gradientColor: string;
}

const TimeUnit: React.FC<TimeUnitProps> = ({ unit, value, icon: Icon, gradientColor }) => {
  return (
    <div className="group perspective">
      <div className="relative transform transition-all duration-500 hover:scale-105">
        <div className="w-full aspect-square bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl 
                     flex flex-col items-center justify-center space-y-3
                     overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
               style={{ backgroundImage: `linear-gradient(${gradientColor})` }} />
          
          <Icon className="w-8 h-8 text-pink-500 group-hover:animate-spin-slow relative z-10" />
          
          <span className={`text-4xl md:text-6xl font-bold bg-gradient-to-br ${gradientColor} bg-clip-text text-transparent
                         transform transition-all duration-500 group-hover:scale-110`}>
            {value.toString().padStart(2, '0')}
          </span>
          
          <span className="text-sm md:text-base text-gray-600 capitalize font-medium">
            {unit}
          </span>

          <div className="absolute -bottom-1 -left-1 -right-1 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
               style={{ backgroundImage: `linear-gradient(${gradientColor})` }} />
        </div>
      </div>
    </div>
  );
}

export default TimeUnit;