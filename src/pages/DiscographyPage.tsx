import React from 'react';
import { Play, ExternalLink, Calendar } from 'lucide-react';
import { FaSpotify, FaApple, FaYoutube } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';

const DiscographyPage: React.FC = () => {
  const releases = [
    {
      title: "Under Your Skin",
      type: "Single",
      year: "2024",
      duration: "3:00",
      description: "A haunting pop ballad that explores the depths of emotional connection and vulnerability.",
      cover: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400",
      links: {
        spotify: "https://open.spotify.com/track/1a2b3c4d5e6f7g8h9i0j",
        apple: "https://music.apple.com/us/artist/bruklin/1756535936",
        youtube: "https://www.youtube.com/@BruklinOfficial"
      }
    },
    {
      title: "Good Girl Bad Dreams",
      type: "Single",
      year: "2024",
      duration: "2:36",
      description: "An empowering anthem about breaking free from expectations and embracing your true self.",
      cover: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400",
      links: {
        spotify: "https://open.spotify.com/artist/4fjAtF6VmMxQHxKI5C3HPO",
        apple: "https://music.apple.com/us/artist/bruklin/1756535936",
        youtube: "https://www.youtube.com/@BruklinOfficial"
      }
    },
    {
      title: "Good Cry (Acoustic)",
      type: "Single",
      year: "2024",
      duration: "2:32",
      description: "A stripped-down, emotional version of the original that showcases raw vocal talent.",
      cover: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400",
      links: {
        spotify: "https://open.spotify.com/artist/4fjAtF6VmMxQHxKI5C3HPO",
        apple: "https://music.apple.com/us/artist/bruklin/1756535936",
        youtube: "https://www.youtube.com/@BruklinOfficial"
      }
    },
    {
      title: "Good Cry",
      type: "Single",
      year: "2023",
      duration: "2:18",
      description: "A cathartic pop track about healing and finding strength through emotional release.",
      cover: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400",
      links: {
        spotify: "https://open.spotify.com/artist/4fjAtF6VmMxQHxKI5C3HPO",
        apple: "https://music.apple.com/us/artist/bruklin/1756535936",
        youtube: "https://www.youtube.com/@BruklinOfficial"
      }
    },
    {
      title: "Daydreaming",
      type: "Single",
      year: "2023",
      duration: "2:33",
      description: "A dreamy, ethereal track that captures the essence of youthful imagination and hope.",
      cover: "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=400",
      links: {
        spotify: "https://open.spotify.com/artist/4fjAtF6VmMxQHxKI5C3HPO",
        apple: "https://music.apple.com/us/artist/bruklin/1756535936",
        youtube: "https://www.youtube.com/@BruklinOfficial"
      }
    },
    {
      title: "No Contact",
      type: "Single",
      year: "2023",
      duration: "2:08",
      description: "A bold statement about setting boundaries and prioritizing self-worth in relationships.",
      cover: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400",
      links: {
        spotify: "https://open.spotify.com/artist/4fjAtF6VmMxQHxKI5C3HPO",
        apple: "https://music.apple.com/us/artist/bruklin/1756535936",
        youtube: "https://www.youtube.com/@BruklinOfficial"
      }
    }
  ];

  return (
    <>
      <SEOHead
        title="Discography - Complete Music Collection by Bruklin"
        description="Explore Bruklin's complete discography including hit singles 'Under Your Skin', 'Good Girl Bad Dreams', and more. 7.8M+ Spotify streams and 17.3M+ YouTube views."
        keywords="Bruklin discography, Under Your Skin, Good Girl Bad Dreams, Good Cry, Daydreaming, No Contact, pop music, Spotify, Apple Music"
        url="/discography"
        type="website"
        musicData={{
          albumName: "Bruklin Singles Collection",
          artist: "Bruklin",
          releaseDate: "2023-2024",
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 
                          backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <h3 className="text-3xl font-bold text-green-400 mb-2">7.8M+</h3>
              <p className="text-white/80">Spotify Streams</p>
            </div>
            <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 
                          backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <h3 className="text-3xl font-bold text-red-400 mb-2">17.3M+</h3>
              <p className="text-white/80">YouTube Views</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 
                          backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <h3 className="text-3xl font-bold text-purple-400 mb-2">8</h3>
              <p className="text-white/80">Released Tracks</p>
            </div>
          </div>

          {/* Releases Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {releases.map((release, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden
                         border border-white/10 hover:border-white/20 
                         transition-all duration-300 group
                         hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
              >
                <div className="md:flex">
                  {/* Album Cover */}
                  <div className="md:w-48 md:h-48 relative overflow-hidden">
                    <img
                      src={release.cover}
                      alt={`${release.title} by Bruklin`}
                      className="w-full h-48 md:h-full object-cover transition-transform duration-300
                               group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 
                                  transition-all duration-300 flex items-center justify-center">
                      <Play size={32} className="text-white opacity-0 group-hover:opacity-100 
                                               transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={16} className="text-white/60" />
                      <span className="text-white/60 text-sm">{release.year}</span>
                      <span className="text-white/40">•</span>
                      <span className="text-white/60 text-sm">{release.type}</span>
                      <span className="text-white/40">•</span>
                      <span className="text-white/60 text-sm">{release.duration}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400
                                 transition-colors duration-300">
                      {release.title}
                    </h3>

                    <p className="text-white/70 mb-6 leading-relaxed">
                      {release.description}
                    </p>

                    {/* Platform Links */}
                    <div className="flex gap-3">
                      <a
                        href={release.links.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full
                                 bg-green-600 hover:bg-green-700 transition-all duration-300
                                 transform hover:scale-105"
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
                                 transform hover:scale-105"
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
                                 transform hover:scale-105"
                        aria-label={`Watch ${release.title} on YouTube`}
                      >
                        <FaYoutube size={16} className="text-white" />
                        <span className="text-white text-sm font-medium">YouTube</span>
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
              <h2 className="text-3xl font-bold text-white mb-4">More Music Coming Soon</h2>
              <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                Stay tuned for new releases and exclusive content. Follow me on your favorite platform to never miss a beat.
              </p>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscographyPage;