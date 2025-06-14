import React, { useState, useEffect } from 'react';
import { Music } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadingComplete, 500);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="mb-8">
          <div className="relative">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600
                          flex items-center justify-center animate-pulse">
              <Music size={40} className="text-white" />
            </div>
            <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full border-4 border-blue-500/30
                          animate-spin border-t-blue-500"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text 
                       bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500
                       tracking-wider animate-fade-in">
            BRUKLIN
          </h1>
          <p className="text-white/70 mt-2 text-lg">The Voice of a Generation</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="w-full bg-white/10 rounded-full h-2 mb-4">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/60 text-sm">Loading... {Math.round(progress)}%</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;