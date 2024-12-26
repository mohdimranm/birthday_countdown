import React from 'react';
import VintageFrame from './VintageFrame';
import PolaroidFrame from './PolaroidFrame';
import { photos } from './photos';

const PhotoCollage: React.FC = () => {
  // More dynamic and overlapping positions
  const positions = [
    { left: '50%', top: '50%', rotation: 0, size: 'large', transform: 'translate(-50%, -50%)' },
    { left: '15%', top: '10%', rotation: -12, zIndex: 2 },
    { right: '10%', top: '15%', rotation: 8, zIndex: 3 },
    { left: '5%', top: '40%', rotation: -5, zIndex: 4 },
    { right: '15%', bottom: '20%', rotation: 15, zIndex: 5 },
    { left: '25%', bottom: '10%', rotation: -8, zIndex: 6 },
    { right: '25%', top: '35%', rotation: 10, zIndex: 7 },
    { left: '40%', bottom: '15%', rotation: -15, zIndex: 8 },
    { right: '30%', bottom: '30%', rotation: 5, zIndex: 9 }
  ];

  return (
    <section className="w-full py-16 px-4">
      <VintageFrame>
        <div className="relative w-full h-[800px] bg-gradient-to-br from-gray-100 to-gray-200">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-pink-200" />
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-200" />
          </div>

          {/* Photos */}
          {photos.map((photo, index) => (
            <PolaroidFrame
              key={index}
              photo={photo}
              style={{
                ...positions[index],
                zIndex: positions[index].zIndex || 1
              }}
              rotation={positions[index].rotation}
              size={index === 0 ? 'large' : 'small'}
            />
          ))}
        </div>
      </VintageFrame>
    </section>
  );
}

export default PhotoCollage;