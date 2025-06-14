import React from 'react';
import { Play, ExternalLink, Calendar, TrendingUp, Music } from 'lucide-react';
import { FaSpotify, FaApple, FaYoutube, FaAmazon } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';

const DiscographyPage: React.FC = () => {
  const releases = [
    {
      title: "Under Your Skin",
      type: "Single",
      year: "2025",
      duration: "3:00",
      streams: "186,041",
      description: "A haunting pop ballad that explores the depths of emotional connection and vulnerability.",
      cover: "https://img.youtube.com/vi/3fMx4F9cYVw/0.jpg",
      links: {
        spotify: "https://open.spotify.com/track/1a2b3c4d5e6f7g8h9i0j",
        apple: "https://music.apple.com/us/artist/bruklin/1756535936",
        youtube: "https://www.youtube.com/watch?v=3fMx4F9cYVw",
        amazon: "https://music.amazon.com/artists/B0DPLCQGNH/bruklin"
      },
      isLatest: true
    },
    {
      title: "Good Girl Bad Dreams",
      type: "Single",
      year: "2025",
      duration: "2:36",
      streams: "433,747",
      description: "An empowering anthem about breaking free from expectations and embracing your true self.",
      cover: "https://img.youtube.com/vi/G9hbM-tRnBo/0.jpg",
      links: {
        spotify: "https://open.spotify.com/track/2b3c4d5e6f7g8h9i0j1a",
        apple: "https://music.apple.com/us/artist/bruklin/1756535936",
        youtube: "https://www.youtube.com/watch?v=G9hbM-tRnBo",
        amazon: "https://music.amazon.com/artists/B0DPLCQGNH/bruklin"
      },
      isLatest: false
    },
    {
      title: "Good Cry (Acoustic)",
      type: "Single",
      year: "2025",
      duration: "2:32",
      streams: "47,835",
      description: "A stripped-down, emotional version of the original that showcases raw vocal talent.",
      cover: "https://img.youtube.com/vi/GV8va3FTxIM/0.jpg",
      links: {
        spotify: "https://open.spotify.com/track/3c4d5e6f7g8h9i0j1a2b",
        apple: "https://music.apple.com/us/artist/bruklin/1756535936",
        youtube: "https://www.youtube.com/watch?v=GV8va3FTxIM",
        amazon: "https://music.amazon.com/artists/B0DPLCQGNH/bruklin"
      },
      isLatest: false
    },
    {
      title: "Good Cry",
      type: "Single",
      year: "2024",
      duration: "2:18",
      streams: "1,001,080",
      description: "A cathartic pop track about healing and finding strength through emotional release.",
      cover: "https://img.youtube.com/vi/FFwmasP0qRk/0.jpg",
      links: {
        spotify: "https://open.spotify.com/track/4d5e6f7g8h9i0j1a2b3c",
        apple: "https://music.apple.com/us/artist/bruklin/1756535936",
        youtube: "https://www.youtube.com/watch?v=FFwmasP0qRk",
        amazon: "https://music.amazon.com/artists/B0DPLCQGNH/bruklin"
      },
      isHit: true
    },
    {
      title: "Daydreaming",
      type: "Single",
      year: "2024",
      duration: "2:33",
      streams: "1,470,185",
      description: "A dreamy, ethereal track that captures the essence of youthful imagination and hope.",
      cover: "https://img.youtube.com/vi/-Ss_hxlRUM4/0.jpg",
      links: {
        spotify: "https://open.spotify.com/track/5e6f7g8h9i0j1a2b3c4d",
        apple: "https://music.apple.com/us/artist/bruklin/1756535936",
        youtube: "https://www.youtube.com/watch?v=-Ss_hxlRUM4",
        amazon: "https://music.amazon.com/artists/B0DPLCQGNH/bruklin"
      },
      isHit: true
    },
    {
      title: "No Contact",
      type: "Single",
      year: "2024",
      duration: "2:51",
      streams: "878,484",
      description: "A bold statement about setting boundaries and prioritizing self-worth in relationships.",
      cover: "https://img.youtube.com/vi/9TZJqvSS994/0.jpg",
      links: {
        spotify: "https://open.spotify.com/track/6f7g8h9i0j1a2b3c4d5e",
        apple: "https://music.apple.com/us/artist/bruklin/1756535936",
        youtube: "https://www.youtube.com/watch?v=9TZJqvSS994",
        amazon: "https://music.amazon.com/artists/B0DPLCQGNH/bruklin"
      },
      isHit: false
    },
    {
      title: "Magic Show",
      type: "Single",
      year: "2024",
      duration: "2:40",
      streams: "1,826,258",
      description: "An enchanting track that blends pop sensibilities with mystical storytelling elements.",
      cover: "https://img.youtube.com/vi/FMmNnxsuets/0.jpg",
      links: {
        spotify: "https://open.spotify.com/track/8h9i0j1a2b3c4d5e6f7g",
        apple: "https://music.apple.com/us/artist/bruklin/1756535936",
        youtube: "https://www.youtube.com/watch?v=FMmNnxsuets",
        amazon: "https://music.amazon.com/artists/B0DPLCQGNH/bruklin"
      },
      isHit: true
    },
    {
      title: "STAY FRIENDS",
      type: "Single",
      year: "2024",
      duration: "2:40",
      streams: "1,938,575",
      description: "A heartfelt exploration of complex relationships and the boundaries of friendship.",
      cover: "https://img.youtube.com/vi/AC3r8rQfPX8/0.jpg",
      links: {
        spotify: "https://open.spotify.com/track/7g8h9i0j1a2b3c4d5e6f",
        apple: "https://music.apple.com/us/artist/bruklin/1756535936",
        youtube: "https://www.youtube.com/watch?v=AC3r8rQfPX8",
        amazon: "https://music.amazon.com/artists/B0DPLCQGNH/bruklin"
      },
      isHit: true
    }
  ];

  // Calculate total streams
  const totalStreams = releases.reduce((sum, release) => {
    const streamCount = parseInt(release.streams.replace(/,/g, ''));
    return sum + streamCount;
  }, 0);

  const formatTotalStreams = (total: number) => {
    if (total >= 1000000) {
      return `${(total / 1000000).toFixed(1)}M`;
    }
    return `${Math.round(total / 1000)}K`;
  };

  const hitSingles = releases.filter(release => release.isHit).length;

  return (
    <>
      <SEOHead
        title="Discography - Complete Music Collection by Bruklin"
        description="Explore Bruklin's complete discography including hit singles 'Under Your Skin', 'Good Girl Bad Dreams', and more. 7.8M+ Spotify streams and 17.3M+ YouTube views."
        keywords="Bruklin discography, Under Your Skin, Good Girl Bad Dreams, Good Cry, Daydreaming, No Contact, Magic Show, STAY FRIENDS, pop music, Spotify, Apple Music"
        url="/discography"
        type="website"
        musicData={{
          albumName: "Bruklin Singles Collection",
          artist: "Bruklin",
          releaseDate: "2024-2025",
          genre: "Pop"
        }}
      />
      <div className="min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text 
                         bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-6
                         tracking-wider">
              Discography
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Explore my musical journey through every release, from heartfelt ballads to empowering anthems
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 
                          backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center
                          hover:border-white/20 transition-all duration-300
                          hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]">
              <h3 className="text-2xl font-bold text-green-400 mb-2">{formatTotalStreams(totalStreams)}+</h3>
              <p className="text-white/80 text-sm">Total Streams</p>
            </div>
            <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 
                          backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center
                          hover:border-white/20 transition-all duration-300
                          hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]">
              <h3 className="text-2xl font-bold text-red-400 mb-2">17.3M+</h3>
              <p className="text-white/80 text-sm">YouTube Views</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 
                          backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center
                          hover:border-white/20 transition-all duration-300
                          hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">{releases.length}</h3>
              <p className="text-white/80 text-sm">Released Tracks</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 
                          backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center
                          hover:border-white/20 transition-all duration-300
                          hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">{hitSingles}</h3>
              <p className="text-white/80 text-sm">Hit Singles</p>
            </div>
          </div>

          {/* Releases Grid */}
          <div className="space-y-8">
            {releases.map((release, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden
                         border border-white/10 hover:border-white/20 
                         transition-all duration-300 group
                         hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
              >
                <div className="lg:flex">
                  {/* Album Cover */}
                  <div className="lg:w-64 lg:h-64 relative overflow-hidden">
                    <img
                      src={release.cover}
                      alt={`${release.title} by Bruklin`}
                      className="w-full h-48 lg:h-full object-cover transition-transform duration-300
                               group-hover:scale-110"
                      loading="lazy"
                    />
                    <a
                      href={release.links.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-black/40 group-hover:bg-black/20 
                                transition-all duration-300 flex items-center justify-center
                                hover:bg-black/10"
                      aria-label={`Play ${release.title} on YouTube`}
                    >
                      <div className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-500
                                    flex items-center justify-center transition-all duration-300
                                    transform hover:scale-110 shadow-lg opacity-0 group-hover:opacity-100">
                        <Play size={24} className="text-white ml-1" />
                      </div>
                    </a>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {release.isLatest && (
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white 
                                       text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                          Latest
                        </span>
                      )}
                      {release.isHit && (
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black 
                                       text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                          Hit
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 lg:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div className="flex items-center gap-2 text-white/60 text-sm">
                        <Calendar size={16} />
                        <span>{release.year}</span>
                      </div>
                      <span className="text-white/40">•</span>
                      <span className="text-white/60 text-sm">{release.type}</span>
                      <span className="text-white/40">•</span>
                      <span className="text-white/60 text-sm">{release.duration}</span>
                      <span className="text-white/40">•</span>
                      <div className="flex items-center gap-1">
                        <TrendingUp size={14} className="text-green-400" />
                        <span className="text-green-400 text-sm font-medium">{release.streams} streams</span>
                      </div>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-purple-400
                                 transition-colors duration-300">
                      {release.title}
                    </h3>

                    <p className="text-white/70 mb-6 leading-relaxed text-lg">
                      {release.description}
                    </p>

                    {/* Platform Links */}
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={release.links.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full
                                 bg-green-600 hover:bg-green-700 transition-all duration-300
                                 transform hover:scale-105 shadow-lg"
                        aria-label={`Listen to ${release.title} on Spotify`}
                      >
                        <FaSpotify size={16} className="text-white" />
                        <span className="text-white text-sm font-medium">Spotify</span>
                      </a>

                      <a
                        href={release.links.apple}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full
                                 bg-gray-800 hover:bg-gray-700 transition-all duration-300
                                 transform hover:scale-105 shadow-lg"
                        aria-label={`Listen to ${release.title} on Apple Music`}
                      >
                        <FaApple size={16} className="text-white" />
                        <span className="text-white text-sm font-medium">Apple</span>
                      </a>

                      <a
                        href={release.links.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full
                                 bg-red-600 hover:bg-red-700 transition-all duration-300
                                 transform hover:scale-105 shadow-lg"
                        aria-label={`Watch ${release.title} on YouTube`}
                      >
                        <FaYoutube size={16} className="text-white" />
                        <span className="text-white text-sm font-medium">YouTube</span>
                      </a>

                      <a
                        href={release.links.amazon}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full
                                 bg-blue-600 hover:bg-blue-700 transition-all duration-300
                                 transform hover:scale-105 shadow-lg"
                        aria-label={`Listen to ${release.title} on Amazon Music`}
                      >
                        <FaAmazon size={16} className="text-white" />
                        <span className="text-white text-sm font-medium">Amazon</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 
                          backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Music size={32} className="text-purple-400" />
                <h2 className="text-3xl font-bold text-white">More Music Coming Soon</h2>
              </div>
              <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                Stay tuned for new releases and exclusive content. Follow me on your favorite platform to never miss a beat.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://open.spotify.com/artist/4fjAtF6VmMxQHxKI5C3HPO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 
                           text-white font-semibold py-3 px-6 rounded-xl 
                           transition-all duration-300 transform hover:scale-105"
                >
                  <FaSpotify size={20} />
                  Follow on Spotify
                </a>
                <a
                  href="https://www.youtube.com/@BruklinOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 
                           text-white font-semibold py-3 px-6 rounded-xl 
                           transition-all duration-300 transform hover:scale-105"
                >
                  <FaYoutube size={20} />
                  Subscribe on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscographyPage;