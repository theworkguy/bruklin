import React, { useState } from 'react';
import { FaSpotify } from 'react-icons/fa';
import { Play, Pause, Clock, Music, TrendingUp, Eye, Heart } from 'lucide-react';
import LazyImage from '../LazyImage';

const TracklistSection: React.FC = () => {
  const [showAllTracks, setShowAllTracks] = useState(false);
  const [playingTrack, setPlayingTrack] = useState<number | null>(null);

  const tracks = [
    { 
      title: "Under Your Skin", 
      duration: "3:00", 
      streams: "186K",
      spotifyUrl: "https://open.spotify.com/album/1E0QjiMao6MMzZnExxv5NP",
      isHit: false,
      releaseDate: "2025"
    },
    { 
      title: "Good Girl Bad Dreams", 
      duration: "2:36", 
      streams: "434K",
      spotifyUrl: "https://open.spotify.com/album/48R9mXpiOmqdLzdqTOOXM6",
      isHit: false,
      releaseDate: "2025"
    },
    { 
      title: "Good Cry (Acoustic)", 
      duration: "2:32", 
      streams: "48K",
      spotifyUrl: "https://open.spotify.com/album/2m7RXCL6BuAsIJcnOsNhEs",
      isHit: false,
      releaseDate: "2025"
    },
    { 
      title: "Good Cry", 
      duration: "2:18", 
      streams: "1.0M",
      spotifyUrl: "https://open.spotify.com/album/4FAs7QXWGgHABNLoumHew6",
      isHit: true,
      releaseDate: "2024"
    },
    { 
      title: "Daydreaming", 
      duration: "2:33", 
      streams: "1.5M",
      spotifyUrl: "https://open.spotify.com/album/2s5mdldGq2eNpv5Ma9eUwu",
      isHit: true,
      releaseDate: "2024"
    },
    { 
      title: "No Contact", 
      duration: "2:51", 
      streams: "878K",
      spotifyUrl: "https://open.spotify.com/album/2Tkl20l0m39EmgCPYlw1gl",
      isHit: false,
      releaseDate: "2024"
    },
    { 
      title: "Magic Show", 
      duration: "2:40", 
      streams: "1.8M",
      spotifyUrl: "https://open.spotify.com/album/6kgzBeRXBSCffM8zfm0lle",
      isHit: true,
      releaseDate: "2024"
    },
    { 
      title: "STAY FRIENDS", 
      duration: "2:40", 
      streams: "1.9M",
      spotifyUrl: "https://open.spotify.com/album/6MtKE4duJODVSVd9AkrtTf",
      isHit: true,
      releaseDate: "2024"
    },
  ];

  const handlePlayPause = (index: number) => {
    if (playingTrack === index) {
      setPlayingTrack(null);
    } else {
      setPlayingTrack(index);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-black/20">
      <div className="max-w-4xl mx-auto">
        {/* Header with Stats */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <FaSpotify size={32} className="text-green-400 sm:w-10 sm:h-10" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white
                         bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent
                         text-center leading-tight">
              My Tracklist on Spotify
            </h2>
          </div>
          
          {/* Stats Row */}
          <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            <div className="text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-400">
                7.8M+
              </div>
              <div className="text-white/60 text-xs sm:text-sm">Total Streams</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-400">{tracks.length}</div>
              <div className="text-white/60 text-xs sm:text-sm">Released Tracks</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-400">4</div>
              <div className="text-white/60 text-xs sm:text-sm">Hit Singles</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl 
                      border border-white/10 hover:border-white/20 transition-all duration-300
                      shadow-[0_0_30px_rgba(34,197,94,0.1)] hover:shadow-[0_0_50px_rgba(34,197,94,0.2)]">
          
          {/* Featured Track */}
          <div className="p-4 sm:p-6 lg:p-8 border-b border-white/10">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <TrendingUp size={16} className="text-green-400 sm:w-5 sm:h-5" />
              <span className="text-green-400 font-semibold text-xs sm:text-sm uppercase tracking-wide">
                Latest Release
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl
                         bg-gradient-to-r from-green-600/20 to-blue-600/20 
                         border border-green-500/30 hover:border-green-400/50
                         transition-all duration-300 group
                         hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              
              <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                {/* Play Button */}
                <button
                  onClick={() => handlePlayPause(0)}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-600 hover:bg-green-500
                           flex items-center justify-center transition-all duration-300
                           transform hover:scale-110 shadow-lg group-hover:shadow-green-500/30
                           flex-shrink-0"
                >
                  {playingTrack === 0 ? (
                    <Pause size={18} className="text-white sm:w-5 sm:h-5" />
                  ) : (
                    <Play size={18} className="text-white ml-0.5 sm:w-5 sm:h-5 sm:ml-1" />
                  )}
                </button>

                {/* Track Info */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 group-hover:text-green-400
                               transition-colors duration-300 truncate">
                    {tracks[0].title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 text-white/70 text-xs sm:text-sm">
                    <div className="flex items-center gap-1">
                      <Clock size={12} className="sm:w-3.5 sm:h-3.5" />
                      <span>{tracks[0].duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp size={12} className="sm:w-3.5 sm:h-3.5" />
                      <span>{tracks[0].streams} streams</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart size={12} className="sm:w-3.5 sm:h-3.5" />
                      <span>{tracks[0].releaseDate}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spotify Link */}
              <a
                href={tracks[0].spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full
                         bg-green-600 hover:bg-green-700 transition-all duration-300
                         transform hover:scale-105 shadow-lg hover:shadow-xl
                         w-full sm:w-auto flex-shrink-0"
              >
                <FaSpotify size={16} className="text-white sm:w-4.5 sm:h-4.5" />
                <span className="text-white font-semibold text-sm sm:text-base">Listen</span>
              </a>
            </div>
          </div>

          {/* Track List */}
          <div className="p-3 sm:p-4 lg:p-6">
            <div className="space-y-2 sm:space-y-3">
              {/* Show tracks only when expanded */}
              {showAllTracks && tracks.slice(1).map((track, index) => (
                <div
                  key={index + 1}
                  className="flex items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl
                           bg-white/5 hover:bg-white/10 transition-all duration-300
                           border border-white/5 hover:border-white/20 group
                           hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                    {/* Track Number & Play Button */}
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                      <div className="w-full h-full rounded-full bg-white/10 group-hover:bg-green-600/20
                                    flex items-center justify-center transition-all duration-300
                                    border border-white/20 group-hover:border-green-500/50">
                        {playingTrack === index + 1 ? (
                          <button
                            onClick={() => handlePlayPause(index + 1)}
                            className="text-green-400"
                          >
                            <Pause size={14} className="sm:w-4 sm:h-4" />
                          </button>
                        ) : (
                          <button
                            onClick={() => handlePlayPause(index + 1)}
                            className="text-white/70 group-hover:text-green-400 transition-colors duration-300"
                          >
                            <Play size={14} className="sm:w-4 sm:h-4" />
                          </button>
                        )}
                      </div>
                      <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1">
                        <span className="text-xs font-bold text-white/50">
                          {index + 2}
                        </span>
                      </div>
                    </div>

                    {/* Track Info */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-semibold group-hover:text-green-400
                                     transition-colors duration-300 text-sm sm:text-base truncate">
                          {track.title}
                        </h3>
                        {track.isHit && (
                          <span className="bg-gradient-to-r from-yellow-500 to-orange-500
                                         text-black text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full
                                         flex-shrink-0">
                            HIT
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 lg:gap-3 text-white/60 text-xs">
                        <span>{track.duration}</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="hidden sm:inline">{track.streams} streams</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{track.releaseDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Spotify Link */}
                  <a
                    href={track.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full
                             bg-green-600/20 hover:bg-green-600 transition-all duration-300
                             border border-green-600/30 hover:border-green-500
                             transform hover:scale-105 group/link flex-shrink-0"
                  >
                    <FaSpotify size={12} className="text-green-400 group-hover/link:text-white transition-colors duration-300 sm:w-3.5 sm:h-3.5" />
                    <span className="text-green-400 group-hover/link:text-white font-medium text-xs sm:text-sm transition-colors duration-300">
                      Play
                    </span>
                  </a>
                </div>
              ))}

              {/* View All Button */}
              <button
                onClick={() => setShowAllTracks(!showAllTracks)}
                className="w-full mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-green-600/20 to-blue-600/20
                         border border-white/10 hover:border-white/20 text-white
                         flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300
                         hover:bg-gradient-to-r hover:from-green-600/30 hover:to-blue-600/30
                         hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transform hover:scale-[1.02]
                         group"
              >
                <Eye size={16} className="group-hover:scale-110 transition-transform duration-300 sm:w-4.5 sm:h-4.5" />
                <span className="font-semibold text-sm sm:text-base">
                  {showAllTracks ? 'Show Less' : `View All ${tracks.length} Tracks`}
                </span>
              </button>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-4 sm:p-6 border-t border-white/10 bg-gradient-to-r from-green-600/10 to-blue-600/10">
            <div className="text-center">
              <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                Follow me on Spotify to never miss a new release
              </p>
              <a
                href="https://open.spotify.com/artist/4fjAtF6VmMxQHxKI5C3HPO?si=follow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 bg-green-600 hover:bg-green-700
                         text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl
                         transition-all duration-300 transform hover:scale-105
                         shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <FaSpotify size={16} className="sm:w-5 sm:h-5" />
                Follow on Spotify
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TracklistSection;