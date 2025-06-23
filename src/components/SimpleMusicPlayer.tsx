import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

interface Track {
  title: string;
  url: string;
}

interface SimpleMusicPlayerProps {
  tracks: Track[];
}

const SimpleMusicPlayer: React.FC<SimpleMusicPlayerProps> = ({ tracks }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isLoading, setIsLoading] = useState(false);
  const [canPlay, setCanPlay] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!tracks[0]?.url) return;

    // Create audio element
    const audio = new Audio();
    audioRef.current = audio;
    
    // Set audio properties for iOS compatibility
    audio.preload = 'metadata';
    audio.crossOrigin = 'anonymous';
    audio.volume = volume;
    
    // Event handlers
    const handleLoadStart = () => {
      setIsLoading(true);
      setError(null);
    };

    const handleCanPlay = () => {
      setCanPlay(true);
      setIsLoading(false);
      setError(null);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
      setIsLoading(false);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handleError = (e: Event) => {
      console.error('Audio error:', e);
      setError('Unable to load audio file');
      setIsLoading(false);
      setIsPlaying(false);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    // Add event listeners
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    // Set source
    audio.src = tracks[0].url;

    return () => {
      // Cleanup
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, [tracks, volume]);

  const togglePlay = async () => {
    if (!audioRef.current || !canPlay) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        setIsLoading(true);
        // For iOS, we need to handle the promise
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          await playPromise;
        }
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Play error:', error);
      setError('Playback failed. Please try again.');
      setIsLoading(false);
      setIsPlaying(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    
    const newTime = (parseFloat(e.target.value) / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || !isFinite(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getPlayButtonContent = () => {
    if (isLoading) {
      return <div className="w-2.5 h-2.5 border border-white border-t-transparent rounded-full animate-spin" />;
    }
    if (isPlaying) {
      return <Pause size={10} className="text-white" />;
    }
    return <Play size={10} className="text-white ml-0.5" />;
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 mb-4">
      {/* Error Message */}
      {error && (
        <div className="mb-2 p-2 bg-red-600/20 border border-red-500/30 rounded text-red-400 text-xs">
          {error}
        </div>
      )}

      {/* Compact Controls Row */}
      <div className="flex items-center gap-2">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          disabled={!canPlay || isLoading}
          className="w-6 h-6 rounded-full bg-blue-600 hover:bg-blue-700 
                   disabled:bg-gray-600 disabled:cursor-not-allowed
                   flex items-center justify-center transition-all duration-200 
                   transform hover:scale-110 flex-shrink-0"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {getPlayButtonContent()}
        </button>

        {/* Progress Bar */}
        <div className="flex-1 min-w-0">
          <input
            type="range"
            min="0"
            max="100"
            value={duration ? (currentTime / duration) * 100 : 0}
            onChange={handleSeek}
            disabled={!canPlay || !duration}
            className="w-full h-1 bg-white/20 rounded appearance-none cursor-pointer
                     disabled:cursor-not-allowed disabled:opacity-50
                     [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 
                     [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:rounded-full 
                     [&::-webkit-slider-thumb]:bg-blue-400 [&::-webkit-slider-thumb]:cursor-pointer
                     [&::-moz-range-thumb]:w-2 [&::-moz-range-thumb]:h-2 
                     [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-400 
                     [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:cursor-pointer"
          />
        </div>

        {/* Time Display */}
        <div className="text-white/70 text-xs font-mono flex-shrink-0 min-w-[35px]">
          {formatTime(currentTime)}
        </div>

        {/* Volume */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <Volume2 size={12} className="text-blue-400" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-8 h-1 bg-white/20 rounded appearance-none cursor-pointer
                     [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-1.5 
                     [&::-webkit-slider-thumb]:h-1.5 [&::-webkit-slider-thumb]:rounded-full 
                     [&::-webkit-slider-thumb]:bg-blue-400 [&::-webkit-slider-thumb]:cursor-pointer
                     [&::-moz-range-thumb]:w-1.5 [&::-moz-range-thumb]:h-1.5 
                     [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-400 
                     [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:cursor-pointer"
          />
        </div>
      </div>

      {/* Loading indicator */}
      {isLoading && !error && (
        <div className="mt-2 text-center">
          <span className="text-white/60 text-xs">Loading audio...</span>
        </div>
      )}

      {/* Track info */}
      {tracks[0] && (
        <div className="mt-2 text-center">
          <span className="text-white/80 text-xs font-medium">{tracks[0].title}</span>
        </div>
      )}
    </div>
  );
};

export default SimpleMusicPlayer;