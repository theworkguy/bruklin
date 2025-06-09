import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const AudioPreview: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://audio-previews.elements.envatousercontent.com/files/281404817/preview.mp3');
    audioRef.current.volume = 0.5;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={togglePlay}
      className="mb-8 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full
                flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
      aria-label={isPlaying ? 'Pause preview' : 'Play preview'}
    >
      {isPlaying ? (
        <Pause size={20} className="text-white" />
      ) : (
        <Play size={20} className="text-white" />
      )}
      <span className="text-white font-medium">Preview</span>
    </button>
  );
};

export default AudioPreview;