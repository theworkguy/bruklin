import React from 'react';
import { FaSpotify, FaApple, FaYoutube } from 'react-icons/fa';
import { SiAmazonmusic } from 'react-icons/si';
import { Play, Music, Calendar, TrendingUp } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import LazyImage from '../components/LazyImage';

const LatestSongPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Bruklin - The Voice of a Generation | Official Website"
        description="17-year-old pop sensation Bruklin from New York with 7.8M+ Spotify streams and 17.3M+ YouTube views. Listen to 'Under Your Skin' and 'Good Girl Bad Dreams' now."
        keywords="Under Your Skin, Bruklin latest song, new music 2025, pop ballad, emotional vulnerability, Spotify, Apple Music"
        url="/"
        type="website"
        musicData={{
          albumName: "Under Your Skin",
          artist: "Bruklin",
          releaseDate: "2025",
          genre: "Pop",
          duration: "PT3M"
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center px-4">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <LazyImage
              src="/profilephoto.jpg"
              alt="Bruklin"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Artist Name */}
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              BRUKLIN
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
              The Voice of a Generation
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm md:text-base">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">7.8M+</div>
                <div className="text-gray-400">Spotify Streams</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">17.3M+</div>
                <div className="text-gray-400">YouTube Views</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">79K+</div>
                <div className="text-gray-400">Social Followers</div>
              </div>
            </div>

            {/* Latest Release */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8 border border-white/20">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Music size={20} className="text-blue-400" />
                <span className="text-blue-400 font-semibold uppercase tracking-wide text-sm">
                  Latest Release
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Under Your Skin
              </h2>
              
              <div className="flex items-center justify-center gap-4 text-gray-400 text-sm mb-6">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>2025</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <TrendingUp size={14} />
                  <span>186K streams</span>
                </div>
                <span>•</span>
                <span>3:00</span>
              </div>

              {/* Streaming Links */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a
                  href="https://open.spotify.com/album/1E0QjiMao6MMzZnExxv5NP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-green-600 hover:bg-green-700 transition-colors duration-200"
                >
                  <FaSpotify size={24} className="text-white" />
                  <span className="text-white text-sm font-medium">Spotify</span>
                </a>

                <a
                  href="https://music.apple.com/us/artist/bruklin/1756535936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                >
                  <FaApple size={24} className="text-white" />
                  <span className="text-white text-sm font-medium">Apple Music</span>
                </a>

                <a
                  href="https://www.youtube.com/watch?v=3fMx4F9cYVw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-red-600 hover:bg-red-700 transition-colors duration-200"
                >
                  <FaYoutube size={24} className="text-white" />
                  <span className="text-white text-sm font-medium">YouTube</span>
                </a>

                <a
                  href="https://music.amazon.com/artists/B0DPLCQGNH/bruklin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                >
                  <SiAmazonmusic size={24} className="text-white" />
                  <span className="text-white text-sm font-medium">Amazon</span>
                </a>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/home"
                className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Explore Music
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestSongPage;