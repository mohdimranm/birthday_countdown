import React from 'react';

const Message: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        To My Dearest
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Happy Birthday! Every moment with you is a gift, and I'm grateful for all the memories we've created together. Your smile brightens my days, and your love makes my world complete. Here's to celebrating you and many more beautiful years together.
      </p>
      <p className="text-lg text-gray-700 mt-4">
        With all my love ❤️
      </p>
    </div>
  );
};

export default Message;