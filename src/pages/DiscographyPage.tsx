import React, { useState } from 'react';
import { Play, ExternalLink, Calendar, TrendingUp, Music, Clock, Eye, Heart, Award, Download } from 'lucide-react';
import { FaSpotify, FaApple, FaYoutube, FaAmazon } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';
import LazyImage from '../components/LazyImage';

const DiscographyPage: React.FC = () => {
  const [selectedRelease, setSelectedRelease] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'singles' | 'hits'>('all');

  const releases = [
    {
      title: "Kinda Like",
      type: "Single",
      year: "2025",
      duration: "2:44",
      streams: "111,536",
      description: "An energetic, catchy pop track blending powerful vocals with a pulsing beat, \"Kinda Like\" captures the rush of unexpected attraction.",
      cover: "https://img.youtube.com/vi/CEwKFU3l1z0/0.jpg",
      links: {
        spotify: "https://open.spotify.com/album/5uwHcTv2yXjrzTcCaGRUx8",
        apple: "https://music.apple.com/us/artist/bruklin/1756535936",
        youtube: "https://www.youtube.com/watch?v=CEwKFU3l1z0",
        amazon: "https://music.amazon.com/artists/B0DPLCQGNH/bruklin"
      },
      isLatest: true,
      isHit: false,
      color: 'from-pink-600 to-red-500',
      mood: 'Upbeat',
      producers: ['Oak Felder', 'Sebastian Cole'],
      lyrics: 'Energetic and catchy'
    },
    {
      title: "Echo",
      type: "Single",
      year: "2025",
      duration: "2:33",
      streams: "317,023",
      description: "An emotive and atmospheric track, \"Echo\" blends haunting melodies with heartfelt lyrics, echoing themes of love and loss.",
      cover: "https://img.youtube.com/vi/j43BFx9Ipdg/0.jpg",
      links: {
        spotify: "https://open.spotify.com/album/41WDnb9UzGRXDrIsw324UT",
        apple: "https://music.apple.com/us/artist/bruklin/1756535936",
        youtube: "https://www.youtube.com/watch?v=j43BFx9Ipdg",
        amazon: "https://music.amazon.com/artists/B0DPLCQGNH/bruklin"
      },
      isLatest: false,
      isHit: true,
      color: 'from-indigo-600 to-purple-500',
      mood: 'Emotional',
      producers: ['Oak Felder', 'Sebastian Cole'],
      lyrics: 'Haunting and heartfelt'
    },
    {
      title: "Under Your Skin",
      type: "Single",
      year: "2025",
      duration: "3:00",
      streams: "466,410",
      description: "A haunting pop ballad that explores the depths of emotional connection and vulnerability. This deeply personal track showcases Bruklin's evolved artistry and emotional maturity.",
      cover: "https://img.youtube.com/vi/3fMx4F9cYVw/0.jpg",
      links: {
        spotify: "https://open.spotify.com/album/1E0QjiMao6MMzZnExxv5NP",
        apple: "https://music.apple.com/us/artist/bruklin/1756535936",
        youtube: "https://www.youtube.com/watch?v=3fMx4F9cYVw",
        amazon: "https://music.amazon.com/artists/B0DPLCQGNH/bruklin"
      },
      isLatest: false,
      isHit: true,
      color: 'from-blue-600 to-cyan-500',
      mood: 'Emotional',
      producers: ['Oak Felder', 'Sebastian Cole'],
      lyrics: 'Vulnerable and introspective'
    },
    {
      title: "Good Girl Bad Dreams",
      type: "Single",
      year: "2025",
      duration: "2:36",
      streams: "735,801",
      description: "An empowering anthem about breaking free from expectations and embracing your true self. A bold statement that resonates with young people worldwide.",
      cover: "https://img.youtube.com/vi/G9hbM-tRnBo/0.jpg",
      links: {
        spotify: "https://open.spotify.com/album/48R9mXpiOmqdLzdqTOOXM6",
        apple: "https://music.apple.com/us/artist/bruklin/1756535936",
        youtube: "https://www.youtube.com/watch?v=G9hbM-tRnBo",
        amazon: "https://music.amazon.com/artists/B0DPLCQGNH/bruklin"
      },
      isLatest: false,
      isHit: false,
      color: 'from-purple-600 to-pink-500',
      mood: 'Empowering',
      producers: ['Oak Felder', 'Sebastian Cole'],
      lyrics: 'Bold and rebellious'
    },
    {
      title: "Good Cry (Acoustic)",
      type: "Single",
      year: "2025",
      duration: "2:32",
      streams: "53,984",
      description: "A stripped-down, emotional version of the original that showcases raw vocal talent and intimate storytelling in its purest form.",
      cover: "https://img.youtube.com/vi/GV8va3FTxIM/0.jpg",
      links: {
        spotify: "https://open.spotify.com/album/2m7RXCL6BuAsIJcnOsNhEs",
        apple: "https://music.apple.com/us/artist/bruklin/1756535936",
        youtube: "https://www.youtube.com/watch?v=GV8va3FTxIM",
        amazon: "https://music.amazon.com/artists/B0DPLCQGNH/bruklin"
      },
      isLatest: false,
      isHit: false,
      color: 'from-amber-600 to-orange-500',
      mood: 'Intimate',
      producers: ['Acoustic Session'],
      lyrics: 'Raw and honest'
    },
    {
      title: "Good Cry",
      type: "Single",
      year: "2024",
      duration: "2:18",
      streams: "1,069,040",
      description: "A cathartic pop track about healing and finding strength through emotional release. This breakthrough single established Bruklin as a voice for her generation.",
      cover: "https://img.youtube.com/vi/FFwmasP0qRk/0.jpg",
      links: {
        spotify: "https://open.spotify.com/album/4FAs7QXWGgHABNLoumHew6",
        apple: "https://music.apple.com/us/artist/bruklin/1756535936",
        youtube: "https://www.youtube.com/watch?v=FFwmasP0qRk",
        amazon: "https://music.amazon.com/artists/B0DPLCQGNH/bruklin"
      },
      isHit: true,
      color: 'from-emerald-600 to-teal-500',
      mood: 'Cathartic',
      producers: ['Oak Felder', 'Sebastian Cole'],
      lyrics: 'Healing and hopeful'
    },
    {
      title: "Daydreaming",
      type: "Single",
      year: "2024",
      duration: "2:33",
      streams: "1,661,488",
      description: "A dreamy, ethereal track that captures the essence of youthful imagination and hope. This fan-favorite showcases Bruklin's versatility and dreamy vocals.",
      cover: "https://img.youtube.com/vi/-Ss_hxlRUM4/0.jpg",
      links: {
        spotify: "https://open.spotify.com/album/2s5mdldGq2eNpv5Ma9eUwu",
        apple: "https://music.apple.com/us/artist/bruklin/1756535936",
        youtube: "https://www.youtube.com/watch?v=-Ss_hxlRUM4",
        amazon: "https://music.amazon.com/artists/B0DPLCQGNH/bruklin"
      },
      isHit: true,
      color: 'from-violet-600 to-purple-500',
      mood: 'Dreamy',
      producers: ['Oak Felder', 'Sebastian Cole'],
      lyrics: 'Whimsical and hopeful'
    },
    {
      title: "No Contact",
      type: "Single",
      year: "2024",
      duration: "2:51",
      streams: "909,625",
      description: "A bold statement about setting boundaries and prioritizing self-worth in relationships. An anthem for anyone learning to put themselves first.",
      cover: "https://img.youtube.com/vi/9TZJqvSS994/0.jpg",
      links: {
        spotify: "https://open.spotify.com/album/2Tkl20l0m39EmgCPYlw1gl",
        apple: "https://music.apple.com/us/artist/bruklin/1756535936",
        youtube: "https://www.youtube.com/watch?v=9TZJqvSS994",
        amazon: "https://music.amazon.com/artists/B0DPLCQGNH/bruklin"
      },
      isHit: false,
      color: 'from-red-600 to-rose-500',
      mood: 'Empowering',
      producers: ['Oak Felder', 'Sebastian Cole'],
      lyrics: 'Strong and assertive'
    },
    {
      title: "Magic Show",
      type: "Single",
      year: "2024",
      duration: "2:40",
      streams: "1,847,032",
      description: "An enchanting track that blends pop sensibilities with mystical storytelling elements. This hit single showcases Bruklin's creative storytelling abilities.",
      cover: "https://img.youtube.com/vi/FMmNnxsuets/0.jpg",
      links: {
        spotify: "https://open.spotify.com/album/6kgzBeRXBSCffM8zfm0lle",
        apple: "https://music.apple.com/us/artist/bruklin/1756535936",
        youtube: "https://www.youtube.com/watch?v=FMmNnxsuets",
        amazon: "https://music.amazon.com/artists/B0DPLCQGNH/bruklin"
      },
      isHit: true,
      color: 'from-indigo-600 to-blue-500',
      mood: 'Mystical',
      producers: ['Oak Felder', 'Sebastian Cole'],
      lyrics: 'Magical and enchanting'
    },
    {
      title: "STAY FRIENDS",
      type: "Single",
      year: "2024",
      duration: "2:40",
      streams: "1,976,034",
      description: "A heartfelt exploration of complex relationships and the boundaries of friendship. This emotional track became an instant fan favorite and streaming hit.",
      cover: "https://img.youtube.com/vi/AC3r8rQfPX8/0.jpg",
      links: {
        spotify: "https://open.spotify.com/album/6MtKE4duJODVSVd9AkrtTf",
        apple: "https://music.apple.com/us/artist/bruklin/1756535936",
        youtube: "https://www.youtube.com/watch?v=AC3r8rQfPX8",
        amazon: "https://music.amazon.com/artists/B0DPLCQGNH/bruklin"
      },
      isHit: true,
      color: 'from-pink-600 to-rose-500',
      mood: 'Heartfelt',
      producers: ['Oak Felder', 'Sebastian Cole'],
      lyrics: 'Complex and emotional'
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

  const filteredReleases = releases.filter(release => {
    if (filter === 'hits') return release.isHit;
    if (filter === 'singles') return release.type === 'Single';
    return true;
  });

  const formatStreams = (streams: string) => {
    const num = parseInt(streams.replace(/,/g, ''));
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return streams;
  };

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
      <div className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Background with Profile Photo */}
        <div className="absolute inset-0 z-0">
          <LazyImage
            src="/profilephoto.jpg" 
            alt="Bruklin" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="mb-6 sm:mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 
                             border border-purple-400/30 rounded-full text-purple-400 font-medium text-sm sm:text-base
                             backdrop-blur-sm">
                Complete Collection
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text 
                         bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4 sm:mb-6
                         tracking-wider leading-tight">
              Discography
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
              Explore my musical journey through every release, from heartfelt ballads to empowering anthems
            </p>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 
                          backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 text-center
                          hover:border-white/20 transition-all duration-300 group
                          hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transform hover:scale-105">
              <TrendingUp size={24} className="text-green-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400 mb-1 sm:mb-2">9.1M+</h3>
              <p className="text-white/80 text-xs sm:text-sm font-medium">Total Streams</p>
            </div>
            <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 
                          backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 text-center
                          hover:border-white/20 transition-all duration-300 group
                          hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] transform hover:scale-105">
              <Eye size={24} className="text-red-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-400 mb-1 sm:mb-2">22.3M+</h3>
              <p className="text-white/80 text-xs sm:text-sm font-medium">YouTube Views</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 
                          backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 text-center
                          hover:border-white/20 transition-all duration-300 group
                          hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transform hover:scale-105">
              <Music size={24} className="text-purple-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-400 mb-1 sm:mb-2">10</h3>
              <p className="text-white/80 text-xs sm:text-sm font-medium">Released Tracks</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 
                          backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 text-center
                          hover:border-white/20 transition-all duration-300 group
                          hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transform hover:scale-105">
              <Award size={24} className="text-yellow-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400 mb-1 sm:mb-2">6</h3>
              <p className="text-white/80 text-xs sm:text-sm font-medium">Hit Singles</p>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 sm:mb-16">
            {[
              { key: 'all', label: 'All Releases', count: releases.length },
              { key: 'hits', label: 'Hit Singles', count: hitSingles },
              { key: 'singles', label: 'Singles', count: releases.filter(r => r.type === 'Single').length }
            ].map((filterOption) => (
              <button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key as any)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2
                           ${filter === filterOption.key
                             ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                             : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/20'
                           }`}
              >
                <span>{filterOption.label}</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  {filterOption.count}
                </span>
              </button>
            ))}
          </div>

          {/* Featured Release */}
          {filter === 'all' && (
            <div className="mb-12 sm:mb-16 lg:mb-20">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <TrendingUp size={24} className="text-blue-400" />
                <span className="text-blue-400 font-semibold text-lg uppercase tracking-wide">
                  Latest Release
                </span>
              </div>
              
              <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm 
                           rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/30 
                           transition-all duration-500 group
                           shadow-[0_0_50px_rgba(59,130,246,0.1)] hover:shadow-[0_0_80px_rgba(59,130,246,0.3)]">
                <div className="lg:flex">
                  {/* Album Cover */}
                  <div className="lg:w-1/2 relative aspect-square lg:aspect-auto overflow-hidden">
                    <LazyImage
                      src={releases[0].cover}
                      alt={`${releases[0].title} by Bruklin`}
                      className="w-full h-full object-cover transition-transform duration-500
                               group-hover:scale-110"
                      loading="eager"
                      fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Play Button Overlay */}
                    <a
                      href={releases[0].links.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center group/play"
                    >
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-blue-600/80 backdrop-blur-sm
                                    flex items-center justify-center transition-all duration-300
                                    transform group-hover/play:scale-110 shadow-2xl border-4 border-white/20
                                    group-hover/play:bg-blue-500">
                        <Play size={32} className="text-white ml-1" />
                      </div>
                    </a>
                    
                    {/* Badges */}
                    <div className="absolute top-6 left-6 flex flex-col gap-3">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white 
                                     text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wide
                                     shadow-lg backdrop-blur-sm border border-white/20">
                        ✨ Latest
                      </span>
                      <span className="bg-black/80 backdrop-blur-sm text-white 
                                     text-sm font-medium px-3 py-1 rounded-full border border-white/20">
                        {releases[0].mood}
                      </span>
                    </div>
                    
                    {/* Stream Count */}
                    <div className="absolute bottom-6 right-6">
                      <div className="bg-black/80 backdrop-blur-sm text-white text-sm 
                                    px-4 py-2 rounded-full font-medium border border-white/20 flex items-center gap-2">
                        <TrendingUp size={14} className="text-green-400" />
                        <span>{formatStreams(releases[0].streams)} streams</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <div className="mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider
                                       bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
                          {releases[0].type}
                        </span>
                        <span className="text-white/60 text-sm">{releases[0].year}</span>
                        <span className="text-white/60 text-sm">{releases[0].duration}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 group-hover:text-blue-400
                                 transition-colors duration-300 leading-tight">
                      {releases[0].title}
                    </h3>
                    
                    <p className="text-white/80 mb-8 leading-relaxed text-lg">
                      {releases[0].description}
                    </p>
                    
                    {/* Producers */}
                    <div className="mb-8">
                      <p className="text-white/60 text-sm mb-2">Produced by:</p>
                      <div className="flex flex-wrap gap-2">
                        {releases[0].producers.map((producer, idx) => (
                          <span key={idx} className="bg-white/10 text-white text-sm px-3 py-1 rounded-full">
                            {producer}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Platform Links */}
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={releases[0].links.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-3 rounded-xl
                                 bg-green-600 hover:bg-green-700 transition-all duration-300
                                 transform hover:scale-105 shadow-lg"
                      >
                        <FaSpotify size={18} className="text-white" />
                        <span className="text-white font-medium">Spotify</span>
                      </a>

                      <a
                        href={releases[0].links.apple}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-3 rounded-xl
                                 bg-gray-800 hover:bg-gray-700 transition-all duration-300
                                 transform hover:scale-105 shadow-lg"
                      >
                        <FaApple size={18} className="text-white" />
                        <span className="text-white font-medium">Apple</span>
                      </a>

                      <a
                        href={releases[0].links.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-3 rounded-xl
                                 bg-red-600 hover:bg-red-700 transition-all duration-300
                                 transform hover:scale-105 shadow-lg"
                      >
                        <FaYoutube size={18} className="text-white" />
                        <span className="text-white font-medium">YouTube</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Releases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {(filter === 'all' ? filteredReleases.slice(1) : filteredReleases).map((release, index) => (
              <div
                key={index}
                className="group bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden
                         border border-white/10 hover:border-white/20 
                         transition-all duration-300 transform hover:scale-[1.02]
                         hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] cursor-pointer"
                onClick={() => setSelectedRelease(selectedRelease === index ? null : index)}
              >
                {/* Album Cover */}
                <div className="relative aspect-square overflow-hidden">
                  <LazyImage
                    src={release.cover}
                    alt={`${release.title} by Bruklin`}
                    className="w-full h-full object-cover transition-transform duration-300
                             group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                                group-hover:from-black/60 transition-all duration-300" />
                  
                  {/* Play Button */}
                  <a
                    href={release.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100
                             transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm
                                  flex items-center justify-center transition-all duration-300
                                  transform hover:scale-110 border border-white/30">
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
                    <span className="bg-black/80 backdrop-blur-sm text-white 
                                   text-xs font-medium px-2 py-1 rounded-full border border-white/20">
                      {release.mood}
                    </span>
                  </div>
                  
                  {/* Duration & Streams */}
                  <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                    <div className="bg-black/80 backdrop-blur-sm text-white text-xs 
                                  px-2 py-1 rounded font-medium border border-white/20">
                      {release.duration}
                    </div>
                    <div className="bg-green-600/80 backdrop-blur-sm text-white text-xs 
                                  px-2 py-1 rounded font-medium border border-white/20 flex items-center gap-1">
                      <TrendingUp size={10} />
                      {formatStreams(release.streams)}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-3 text-sm text-white/60">
                    <Calendar size={14} />
                    <span>{release.year}</span>
                    <span>•</span>
                    <span>{release.type}</span>
                    <span>•</span>
                    <span className="text-green-400 font-medium">{formatStreams(release.streams)} streams</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-purple-400
                               transition-colors duration-300 line-clamp-1">
                    {release.title}
                  </h3>

                  <p className="text-white/70 mb-4 leading-relaxed text-sm line-clamp-2">
                    {release.description}
                  </p>

                  {/* Producers */}
                  <div className="mb-4">
                    <p className="text-white/50 text-xs mb-1">Produced by:</p>
                    <div className="flex flex-wrap gap-1">
                      {release.producers.slice(0, 2).map((producer, idx) => (
                        <span key={idx} className="bg-white/10 text-white text-xs px-2 py-1 rounded">
                          {producer}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Platform Links */}
                  <div className="flex gap-2">
                    <a
                      href={release.links.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 rounded-lg
                               bg-green-600/20 border border-green-500/30 hover:bg-green-600/30
                               transition-all duration-300 flex-1 justify-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaSpotify size={14} className="text-green-400" />
                      <span className="text-green-400 text-xs font-medium">Spotify</span>
                    </a>
                    <a
                      href={release.links.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 rounded-lg
                               bg-red-600/20 border border-red-500/30 hover:bg-red-600/30
                               transition-all duration-300 flex-1 justify-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaYoutube size={14} className="text-red-400" />
                      <span className="text-red-400 text-xs font-medium">YouTube</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 
                          backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/10
                          hover:border-purple-500/30 transition-all duration-300 group
                          shadow-[0_0_50px_rgba(168,85,247,0.1)]">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Music size={32} className="text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white">More Music Coming Soon</h2>
              </div>
              <p className="text-white/90 text-lg sm:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                This is just the beginning of my musical journey. Stay tuned for new releases, collaborations, 
                and exclusive content. Follow me on your favorite platform to never miss a beat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="https://open.spotify.com/artist/4fjAtF6VmMxQHxKI5C3HPO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 
                           text-white font-semibold py-4 px-8 rounded-xl 
                           transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <FaSpotify size={20} />
                  Follow on Spotify
                </a>
                <a
                  href="https://www.youtube.com/@BruklinOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 
                           text-white font-semibold py-4 px-8 rounded-xl 
                           transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <FaYoutube size={20} />
                  Subscribe on YouTube
                </a>
                <a
                  href="https://music.apple.com/us/artist/bruklin/1756535936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gray-800 hover:bg-gray-700 
                           text-white font-semibold py-4 px-8 rounded-xl 
                           transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <FaApple size={20} />
                  Listen on Apple Music
                </a>
              </div>
              
              {/* Stats Summary */}
              <div className="border-t border-white/10 pt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-400">9.1M+</div>
                    <div className="text-white/60 text-sm">Total Streams</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-400">22.3M+</div>
                    <div className="text-white/60 text-sm">YouTube Views</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">10</div>
                    <div className="text-white/60 text-sm">Songs Released</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">6</div>
                    <div className="text-white/60 text-sm">Hit Singles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscographyPage;