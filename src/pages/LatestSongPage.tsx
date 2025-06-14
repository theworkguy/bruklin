import React from 'react';
import { Play, ExternalLink, Calendar, TrendingUp, Music, Eye, Clock } from 'lucide-react';
import { FaSpotify, FaApple, FaYoutube, FaAmazon } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';

const LatestSongPage: React.FC = () => {
  const latestSong = {
    title: "Under Your Skin",
    artist: "Bruklin",
    releaseDate: "2025",
    duration: "3:00",
    streams: "186K",
    description: "A haunting pop ballad that explores the depths of emotional connection and vulnerability. This latest release showcases Bruklin's evolution as an artist, blending raw emotion with polished production.",
    cover: "https://img.youtube.com/vi/3fMx4F9cYVw/0.jpg",
    links: {
      spotify: "https://open.spotify.com/track/1a2b3c4d5e6f7g8h9i0j",
      apple: "https://music.apple.com/us/artist/bruklin/1756535936",
      youtube: "https://www.youtube.com/watch?v=3fMx4F9cYVw",
      amazon: "https://music.amazon.com/artists/B0DPLCQGNH/bruklin"
    },
    lyrics: [
      "You get under my skin, like a tattoo that won't fade",
      "Marking every part of me with memories we made",
      "I try to wash you away, but you're deeper than the surface",
      "Every breath I take, you make it feel so worth it",
      "",
      "Under your skin, I'm living",
      "Under your skin, I'm breathing",
      "Can't escape this feeling",
      "You're the reason I believe in",
      "Something more than what I've been",
      "Under your skin, under your skin"
    ]
  };

  const platforms = [
    {
      name: "Spotify",
      icon: FaSpotify,
      url: latestSong.links.spotify,
      color: "from-green-600 to-green-700",
      hoverColor: "hover:from-green-700 hover:to-green-800"
    },
    {
      name: "Apple Music",
      icon: FaApple,
      url: latestSong.links.apple,
      color: "from-gray-700 to-gray-800",
      hoverColor: "hover:from-gray-800 hover:to-gray-900"
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: latestSong.links.youtube,
      color: "from-red-600 to-red-700",
      hoverColor: "hover:from-red-700 hover:to-red-800"
    },
    {
      name: "Amazon Music",
      icon: FaAmazon,
      url: latestSong.links.amazon,
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800"
    }
  ];

  return (
    <>
      <SEOHead
        title="Latest Song - Under Your Skin by Bruklin"
        description="Listen to Bruklin's latest single 'Under Your Skin' - a haunting pop ballad exploring emotional vulnerability. Available on Spotify, Apple Music, YouTube, and Amazon Music."
        keywords="Under Your Skin, Bruklin latest song, new music 2025, pop ballad, emotional vulnerability, Spotify, Apple Music"
        url="/latest-song"
        type="website"
        musicData={{
          albumName: "Under Your Skin",
          artist: "Bruklin",
          releaseDate: "2025",
          genre: "Pop",
          duration: "PT3M"
        }}
      />
      <div className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <TrendingUp size={28} className="text-blue-400 sm:w-8 sm:h-8" />
              <span className="text-blue-400 font-semibold text-lg sm:text-xl uppercase tracking-wide">
                Latest Release
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text 
                         bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 mb-4 sm:mb-6
                         tracking-wider leading-tight">
              {latestSong.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              The newest single from Bruklin - available now on all platforms
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
            {/* Album Cover & Video */}
            <div className="space-y-6 sm:space-y-8">
              <div className="relative group">
                <div className="aspect-square relative overflow-hidden rounded-2xl sm:rounded-3xl
                              border border-white/10 hover:border-white/20 transition-all duration-300
                              shadow-[0_0_50px_rgba(59,130,246,0.3)] hover:shadow-[0_0_80px_rgba(59,130,246,0.5)]">
                  <img
                    src={latestSong.cover}
                    alt={`${latestSong.title} by ${latestSong.artist}`}
                    className="w-full h-full object-cover transition-transform duration-500
                             group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Play Button Overlay */}
                  <a
                    href={latestSong.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center
                             opacity-0 group-hover:opacity-100 transition-all duration-500"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-red-600 hover:bg-red-500
                                  flex items-center justify-center transition-all duration-300
                                  transform hover:scale-110 shadow-2xl border-4 border-white/20">
                      <Play size={32} className="text-white ml-1 sm:w-9 sm:h-9" />
                    </div>
                  </a>

                  {/* Latest Badge */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white 
                                   text-sm sm:text-base font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wide
                                   shadow-lg backdrop-blur-sm border border-white/20">
                      🎵 Latest
                    </span>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
                    <div className="bg-black/80 backdrop-blur-sm text-white text-sm sm:text-base
                                  px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium border border-white/20">
                      {latestSong.duration}
                    </div>
                  </div>
                </div>
              </div>

              {/* Song Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 
                              backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10
                              hover:border-white/20 transition-all duration-300 text-center
                              hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">
                    {latestSong.streams}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm">Streams</p>
                </div>
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 
                              backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10
                              hover:border-white/20 transition-all duration-300 text-center
                              hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-400 mb-1 sm:mb-2">
                    {latestSong.releaseDate}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm">Release</p>
                </div>
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 
                              backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10
                              hover:border-white/20 transition-all duration-300 text-center
                              hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400 mb-1 sm:mb-2">
                    {latestSong.duration}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm">Duration</p>
                </div>
              </div>
            </div>

            {/* Song Info & Platforms */}
            <div className="space-y-6 sm:space-y-8">
              {/* Song Details */}
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10
                            hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <Music size={24} className="text-blue-400 sm:w-7 sm:h-7" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">Song Details</h2>
                </div>
                
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-center gap-3 text-white/70">
                    <Calendar size={16} className="text-blue-400 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Released in {latestSong.releaseDate}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <Clock size={16} className="text-blue-400 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">{latestSong.duration} minutes</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <TrendingUp size={16} className="text-blue-400 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">{latestSong.streams} streams and counting</span>
                  </div>
                </div>

                <p className="text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg">
                  {latestSong.description}
                </p>
              </div>

              {/* Streaming Platforms */}
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 
                            backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10
                            hover:border-white/20 transition-all duration-300">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
                  Listen Now
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {platforms.map((platform, index) => (
                    <a
                      key={index}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-3 sm:gap-4 
                                bg-gradient-to-r ${platform.color} ${platform.hoverColor}
                                text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl
                                transition-all duration-300 transform hover:scale-105
                                shadow-lg hover:shadow-xl text-sm sm:text-base`}
                      aria-label={`Listen to ${latestSong.title} on ${platform.name}`}
                    >
                      <platform.icon size={20} className="sm:w-6 sm:h-6" />
                      <span>{platform.name}</span>
                      <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Lyrics Section */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 
                          backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10
                          hover:border-white/20 transition-all duration-300">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
                Lyrics Preview
              </h2>
              
              <div className="max-w-2xl mx-auto">
                <div className="space-y-2 sm:space-y-3 text-center">
                  {latestSong.lyrics.map((line, index) => (
                    <p
                      key={index}
                      className={`text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg
                                ${line === '' ? 'mb-2 sm:mb-4' : ''}`}
                    >
                      {line || '\u00A0'}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 
                          backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10
                          hover:border-white/20 transition-all duration-300">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                Share the Music
              </h2>
              <p className="text-white/80 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Love "Under Your Skin"? Share it with your friends and follow me for more music updates!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={latestSong.links.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 
                           text-white font-semibold py-3 px-6 sm:px-8 rounded-xl 
                           transition-all duration-300 transform hover:scale-105
                           shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
                >
                  <FaSpotify size={20} />
                  Follow on Spotify
                </a>
                <a
                  href={latestSong.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 
                           text-white font-semibold py-3 px-6 sm:px-8 rounded-xl 
                           transition-all duration-300 transform hover:scale-105
                           shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
                >
                  <FaYoutube size={20} />
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestSongPage;