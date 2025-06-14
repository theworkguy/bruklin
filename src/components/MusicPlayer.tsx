import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Eye, Music, Clock } from 'lucide-react';

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
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => {
      setDuration(audio.duration);
      setIsLoading(false);
    };
    const handleLoadStart = () => setIsLoading(true);
    const handleEnded = () => {
      if (currentTrack < tracks.length - 1) {
        setCurrentTrack(currentTrack + 1);
      } else {
        setIsPlaying(false);
        setCurrentTrack(0);
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('loadstart', handleLoadStart);
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
    if (isNaN(time)) return '0:00';
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

  const handleTrackSelect = (index: number) => {
    setCurrentTrack(index);
    setIsPlaying(false);
  };

  return (
    <div className="w-full">
      <audio
        ref={audioRef}
        src={tracks[currentTrack]?.url}
        onLoadStart={() => setCurrentTime(0)}
      />

      {/* Now Playing Display */}
      <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-6 mb-6 border border-white/10
                    hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 
                        flex items-center justify-center shadow-lg">
            <Music size={20} className="text-white" />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-white mb-1">
              {tracks[currentTrack]?.title}
            </h4>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Clock size={14} />
              <span>Track {currentTrack + 1} of {tracks.length}</span>
              {isLoading && <span>• Loading...</span>}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="relative">
            <input
              type="range"
              min="0"
              max="100"
              value={duration ? (currentTime / duration) * 100 : 0}
              onChange={handleSeek}
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer
                       [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 
                       [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full 
                       [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-blue-500 
                       [&::-webkit-slider-thumb]:to-cyan-400 [&::-webkit-slider-thumb]:cursor-pointer
                       [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:border-2
                       [&::-webkit-slider-thumb]:border-white"
            />
            <div 
              className="absolute top-0 left-0 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg pointer-events-none"
              style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
            />
          </div>
          <div className="flex justify-between text-white/60 text-sm mt-2">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={previousTrack}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20
                     flex items-center justify-center transition-all duration-200
                     hover:scale-110 active:scale-95 border border-white/10 hover:border-white/20"
          >
            <SkipBack size={20} className="text-white" />
          </button>

          <button
            onClick={togglePlay}
            disabled={isLoading}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500
                     hover:from-blue-700 hover:to-cyan-600
                     flex items-center justify-center transition-all duration-200
                     transform hover:scale-110 active:scale-95 shadow-lg
                     disabled:opacity-50 disabled:cursor-not-allowed
                     hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : isPlaying ? (
              <Pause size={24} className="text-white" />
            ) : (
              <Play size={24} className="text-white ml-1" />
            )}
          </button>

          <button
            onClick={nextTrack}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20
                     flex items-center justify-center transition-all duration-200
                     hover:scale-110 active:scale-95 border border-white/10 hover:border-white/20"
          >
            <SkipForward size={20} className="text-white" />
          </button>
        </div>
      </div>

      {/* Volume Control */}
      <div className="flex items-center gap-3 mb-6 bg-gradient-to-r from-white/5 to-white/10 rounded-lg p-3 border border-white/10">
        <Volume2 size={18} className="text-blue-400" />
        <div className="flex-1 relative">
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer
                     [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 
                     [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full 
                     [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-blue-500
                     [&::-webkit-slider-thumb]:to-cyan-400 [&::-webkit-slider-thumb]:cursor-pointer
                     [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:border
                     [&::-webkit-slider-thumb]:border-white/20"
          />
          <div 
            className="absolute top-0 left-0 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg pointer-events-none"
            style={{ width: `${volume * 100}%` }}
          />
        </div>
        <span className="text-blue-400 text-sm w-8 font-medium">{Math.round(volume * 100)}</span>
      </div>

      {/* Track List */}
      <div className="space-y-2">
        {/* Current Track - Always Visible */}
        <div className={`p-4 rounded-lg transition-all duration-200 border
                       ${0 === currentTrack 
                         ? 'bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]' 
                         : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                       }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center
                             ${0 === currentTrack ? 'bg-gradient-to-r from-blue-500 to-cyan-400' : 'bg-white/20'}`}>
                <span className="text-white text-sm font-medium">1</span>
              </div>
              <span className="text-white font-medium">{tracks[0]?.title}</span>
            </div>
            <button
              onClick={() => handleTrackSelect(0)}
              className="text-blue-400 hover:text-cyan-400 transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
            >
              <Play size={16} />
            </button>
          </div>
        </div>

        {/* Additional Tracks - Show When Expanded */}
        {showAllTracks && (
          tracks.slice(1).map((track, index) => (
            <div
              key={index + 1}
              className={`p-4 rounded-lg transition-all duration-200 border cursor-pointer
                         ${index + 1 === currentTrack 
                           ? 'bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]' 
                           : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                         }`}
              onClick={() => handleTrackSelect(index + 1)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center
                                 ${index + 1 === currentTrack ? 'bg-gradient-to-r from-blue-500 to-cyan-400' : 'bg-white/20'}`}>
                    <span className="text-white text-sm font-medium">{index + 2}</span>
                  </div>
                  <span className="text-white font-medium">{track.title}</span>
                </div>
                <Play size={16} className="text-white/60 hover:text-blue-400 transition-colors duration-200" />
              </div>
            </div>
          ))
        )}

        {/* View All Button */}
        {tracks.length > 1 && (
          <button
            onClick={() => setShowAllTracks(!showAllTracks)}
            className="w-full mt-4 p-4 rounded-xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20
                     border border-white/10 hover:border-white/20 text-white
                     flex items-center justify-center gap-3 transition-all duration-300
                     hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-cyan-600/30
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