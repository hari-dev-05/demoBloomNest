import React from 'react';

const LoadingSpinner = ({ fullScreen = false, message = 'Loading...' }) => {
  const content = (
    <div className="flex flex-col items-center justify-center space-y-4 p-8">
      <div className="relative w-12 h-12">
        <div className="w-12 h-12 rounded-full border-4 border-sand-300 border-t-terracotta-500 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-forest-800"></div>
        </div>
      </div>
      {message && <p className="text-sm font-medium text-forest-800/70 tracking-wide animate-pulse">{message}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        {content}
      </div>
    );
  }

  return content;
};

export default LoadingSpinner;
