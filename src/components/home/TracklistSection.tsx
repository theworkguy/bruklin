import React, { useState } from 'react';
import { FaSpotify } from 'react-icons/fa';
import { Play, Pause, Clock, Music, TrendingUp, Eye, Heart } from 'lucide-react';

const TracklistSection: React.FC = () => {
  const [showAllTracks, setShowAllTracks] = useState(false);
  const [playingTrack, setPlayingTrack] = useState<number | null>(null);

  const tracks = [
    { 
      title: "Under Your Skin", 
      duration: "3:00", 
      streams: "2.1M",
      spotifyUrl: "https://open.spotify.com/track/1a2b3c4d5e6f7g8h9i0j",
      isHit: true,
      releaseDate: "2024"
    },
    { 
      title: "Good Girl Bad Dreams", 
      duration: "2:36", 
      streams: "1.8M",
      spotifyUrl: "https://open.spotify.com/track/2b3c4d5e6f7g8h9i0j1a",
      isHit: true,
      releaseDate: "2024"
    },
    { 
      title: "Good Cry (Acoustic)", 
      duration: "2:32", 
      streams: "1.2M",
      spotifyUrl: "https://open.spotify.com/track/3c4d5e6f7g8h9i0j1a2b",
      isHit: false,
      releaseDate: "2024"
    },
    { 
      title: "Good Cry", 
      duration: "2:18", 
      streams: "950K",
      spotifyUrl: "https://open.spotify.com/track/4d5e6f7g8h9i0j1a2b3c",
      isHit: false,
      releaseDate: "2023"
    },
    { 
      title: "Daydreaming", 
      duration: "2:33", 
      streams: "780K",
      spotifyUrl: "https://open.spotify.com/track/5e6f7g8h9i0j1a2b3c4d",
      isHit: false,
      releaseDate: "2023"
    },
    { 
      title: "No Contact", 
      duration: "2:08", 
      streams: "650K",
      spotifyUrl: "https://open.spotify.com/track/6f7g8h9i0j1a2b3c4d5e",
      isHit: false,
      releaseDate: "2023"
    },
    { 
      title: "Stay Friends", 
      duration: "2:40", 
      streams: "520K",
      spotifyUrl: "https://open.spotify.com/track/7g8h9i0j1a2b3c4d5e6f",
      isHit: false,
      releaseDate: "2023"
    },
    { 
      title: "Magic Show", 
      duration: "2:40", 
      streams: "480K",
      spotifyUrl: "https://open.spotify.com/track/8h9i0j1a2b3c4d5e6f7g",
      isHit: false,
      releaseDate: "2023"
    },
  ];

  const handlePlayPause = (index: number) => {
    if (playingTrack === index) {
      setPlayingTrack(null);
    } else {
      setPlayingTrack(index);
    }
  };

  const totalStreams = tracks.reduce((sum, track) => {
    const streamCount = parseFloat(track.streams.replace(/[KM]/g, ''));
    const multiplier = track.streams.includes('M') ? 1000000 : 1000;
    return sum + (streamCount * multiplier);
  }, 0);

  const formatTotalStreams = (total: number) => {
    if (total >= 1000000) {
      return `${(total / 1000000).toFixed(1)}M`;
    }
    return `${Math.round(total / 1000)}K`;
  };

  return (
    <section className="py-20 px-6 bg-black/20">
      <div className="max-w-5xl mx-auto">
        {/* Header with Stats */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FaSpotify size={40} className="text-green-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white
                         bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              My Tracklist on Spotify
            </h2>
          </div>
          
          {/* Stats Row */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{formatTotalStreams(totalStreams)}+</div>
              <div className="text-white/60 text-sm">Total Streams</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{tracks.length}</div>
              <div className="text-white/60 text-sm">Released Tracks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">2</div>
              <div className="text-white/60 text-sm">Hit Singles</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm rounded-3xl 
                      border border-white/10 hover:border-white/20 transition-all duration-300
                      shadow-[0_0_50px_rgba(34,197,94,0.1)] hover:shadow-[0_0_80px_rgba(34,197,94,0.2)]">
          
          {/* Featured Track */}
          <div className="p-8 border-b border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp size={20} className="text-green-400" />
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wide">
                Latest Hit
              </span>
            </div>
            
            <div className="flex items-center justify-between p-6 rounded-2xl
                         bg-gradient-to-r from-green-600/20 to-blue-600/20 
                         border border-green-500/30 hover:border-green-400/50
                         transition-all duration-300 group
                         hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]">
              
              <div className="flex items-center gap-6">
                {/* Play Button */}
                <button
                  onClick={() => handlePlayPause(0)}
                  className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-500
                           flex items-center justify-center transition-all duration-300
                           transform hover:scale-110 shadow-lg group-hover:shadow-green-500/30"
                >
                  {playingTrack === 0 ? (
                    <Pause size={20} className="text-white" />
                  ) : (
                    <Play size={20} className="text-white ml-1" />
                  )}
                </button>

                {/* Track Info */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-green-400
                               transition-colors duration-300">
                    {tracks[0].title}
                  </h3>
                  <div className="flex items-center gap-4 text-white/70">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{tracks[0].duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp size={14} />
                      <span>{tracks[0].streams} streams</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart size={14} />
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
                className="flex items-center gap-3 px-6 py-3 rounded-full
                         bg-green-600 hover:bg-green-700 transition-all duration-300
                         transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FaSpotify size={18} className="text-white" />
                <span className="text-white font-semibold">Listen</span>
              </a>
            </div>
          </div>

          {/* Track List */}
          <div className="p-6">
            <div className="space-y-3">
              {/* Visible Tracks */}
              {tracks.slice(1, showAllTracks ? tracks.length : 3).map((track, index) => (
                <div
                  key={index + 1}
                  className="flex items-center justify-between p-4 rounded-xl
                           bg-white/5 hover:bg-white/10 transition-all duration-300
                           border border-white/5 hover:border-white/20 group
                           hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                >
                  <div className="flex items-center gap-4">
                    {/* Track Number & Play Button */}
                    <div className="relative w-10 h-10">
                      <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-green-600/20
                                    flex items-center justify-center transition-all duration-300
                                    border border-white/20 group-hover:border-green-500/50">
                        {playingTrack === index + 1 ? (
                          <button
                            onClick={() => handlePlayPause(index + 1)}
                            className="text-green-400"
                          >
                            <Pause size={16} />
                          </button>
                        ) : (
                          <button
                            onClick={() => handlePlayPause(index + 1)}
                            className="text-white/70 group-hover:text-green-400 transition-colors duration-300"
                          >
                            <Play size={16} />
                          </button>
                        )}
                      </div>
                      <div className="absolute -top-1 -right-1">
                        <span className="text-xs font-bold text-white/50">
                          {index + 2}
                        </span>
                      </div>
                    </div>

                    {/* Track Info */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-semibold group-hover:text-green-400
                                     transition-colors duration-300">
                          {track.title}
                        </h3>
                        {track.isHit && (
                          <span className="bg-gradient-to-r from-yellow-500 to-orange-500
                                         text-black text-xs font-bold px-2 py-1 rounded-full">
                            HIT
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-white/60 text-sm">
                        <span>{track.duration}</span>
                        <span>•</span>
                        <span>{track.streams} streams</span>
                        <span>•</span>
                        <span>{track.releaseDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Spotify Link */}
                  <a
                    href={track.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full
                             bg-green-600/20 hover:bg-green-600 transition-all duration-300
                             border border-green-600/30 hover:border-green-500
                             transform hover:scale-105 group/link"
                  >
                    <FaSpotify size={14} className="text-green-400 group-hover/link:text-white transition-colors duration-300" />
                    <span className="text-green-400 group-hover/link:text-white font-medium text-sm transition-colors duration-300">
                      Play
                    </span>
                  </a>
                </div>
              ))}

              {/* View All Button */}
              {tracks.length > 3 && (
                <button
                  onClick={() => setShowAllTracks(!showAllTracks)}
                  className="w-full mt-6 p-4 rounded-xl bg-gradient-to-r from-green-600/20 to-blue-600/20
                           border border-white/10 hover:border-white/20 text-white
                           flex items-center justify-center gap-3 transition-all duration-300
                           hover:bg-gradient-to-r hover:from-green-600/30 hover:to-blue-600/30
                           hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transform hover:scale-[1.02]
                           group"
                >
                  <Eye size={18} className="group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold">
                    {showAllTracks ? 'Show Less' : `View All ${tracks.length} Tracks`}
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-6 border-t border-white/10 bg-gradient-to-r from-green-600/10 to-blue-600/10">
            <div className="text-center">
              <p className="text-white/80 mb-4">
                Follow me on Spotify to never miss a new release
              </p>
              <a
                href="https://open.spotify.com/artist/bruklin?si=follow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700
                         text-white font-semibold py-3 px-6 rounded-xl
                         transition-all duration-300 transform hover:scale-105
                         shadow-lg hover:shadow-xl"
              >
                <FaSpotify size={20} />
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