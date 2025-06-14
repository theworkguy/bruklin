import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Eye } from 'lucide-react';

interface Track {
  title: string;
  url: string;
}

interface MusicPlayerProps {
  tracks: Track[];
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ tracks }) => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [showAllTracks, setShowAllTracks] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      if (currentTrack < tracks.length - 1) {
        setCurrentTrack(currentTrack + 1);
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack, tracks.length]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const previousTrack = () => {
    setCurrentTrack(currentTrack > 0 ? currentTrack - 1 : tracks.length - 1);
  };

  const nextTrack = () => {
    setCurrentTrack(currentTrack < tracks.length - 1 ? currentTrack + 1 : 0);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const newTime = (parseFloat(e.target.value) / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="w-full">
      <audio
        ref={audioRef}
        src={tracks[currentTrack]?.url}
        onLoadStart={() => setCurrentTime(0)}
      />

      {/* Current Track Display */}
      <div className="text-center mb-6">
        <h4 className="text-lg font-semibold text-white mb-2">
          {tracks[currentTrack]?.title}
        </h4>
        <p className="text-white/60 text-sm">
          Track {currentTrack + 1} of {tracks.length}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <input
          type="range"
          min="0"
          max="100"
          value={duration ? (currentTime / duration) * 100 : 0}
          onChange={handleSeek}
          className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer
                   [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 
                   [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full 
                   [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:cursor-pointer"
        />
        <div className="flex justify-between text-white/60 text-sm mt-2">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <button
          onClick={previousTrack}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20
                   flex items-center justify-center transition-all duration-200"
        >
          <SkipBack size={20} className="text-white" />
        </button>

        <button
          onClick={togglePlay}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500
                   hover:from-blue-700 hover:to-cyan-600
                   flex items-center justify-center transition-all duration-200
                   transform hover:scale-105 shadow-lg"
        >
          {isPlaying ? (
            <Pause size={24} className="text-white" />
          ) : (
            <Play size={24} className="text-white ml-1" />
          )}
        </button>

        <button
          onClick={nextTrack}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20
                   flex items-center justify-center transition-all duration-200"
        >
          <SkipForward size={20} className="text-white" />
        </button>
      </div>

      {/* Volume Control */}
      <div className="flex items-center gap-3 mb-8">
        <Volume2 size={20} className="text-white/70" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="flex-1 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer
                   [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 
                   [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full 
                   [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer"
        />
      </div>

      {/* Track List */}
      <div className="space-y-2">
        {/* Latest Song - Always Visible */}
        <button
          onClick={() => setCurrentTrack(0)}
          className={`w-full text-left p-3 rounded-lg transition-all duration-200
                     ${0 === currentTrack 
                       ? 'bg-blue-600/30 text-white' 
                       : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                     }`}
        >
          <span className="text-sm font-medium">{tracks[0]?.title}</span>
        </button>

        {/* Show All Tracks When Expanded */}
        {showAllTracks && (
          tracks.slice(1).map((track, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentTrack(index + 1)}
              className={`w-full text-left p-3 rounded-lg transition-all duration-200
                         ${index + 1 === currentTrack 
                           ? 'bg-blue-600/30 text-white' 
                           : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                         }`}
            >
              <span className="text-sm font-medium">{track.title}</span>
            </button>
          ))
        )}

        {/* View All Button */}
        {tracks.length > 1 && (
          <button
            onClick={() => setShowAllTracks(!showAllTracks)}
            className="w-full mt-4 p-4 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20
                     border border-white/10 hover:border-white/20 text-white
                     flex items-center justify-center gap-3 transition-all duration-300
                     hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-purple-600/30
                     hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transform hover:scale-[1.02]"
          >
            <Eye size={18} />
            <span className="font-semibold">
              {showAllTracks ? 'Show Less' : `View All ${tracks.length} Tracks`}
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;