import React from 'react';

const VintageFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Outer decorative border */}
      <div className="absolute -inset-4 bg-gradient-to-br from-brown-900 to-brown-800 rounded-xl" />
      
      {/* Inner frame with wood-like texture */}
      <div className="relative p-8 bg-gradient-to-br from-brown-700 to-brown-800 rounded-lg shadow-2xl">
        <div className="absolute inset-0 bg-noise opacity-20" />
        
        {/* Content area */}
        <div className="relative bg-gray-50 p-8 rounded shadow-inner">
          <div className="absolute inset-0 bg-noise opacity-5" />
          {children}
        </div>
      </div>
    </div>
  );
};