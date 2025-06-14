import React from 'react';
import { Calendar, MapPin, Music, Award, Users, TrendingUp, Play, Mic, Star, Heart, Sparkles, Target } from 'lucide-react';
import { FaSpotify, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';
import LazyImage from '../components/LazyImage';

const MyJourneyPage: React.FC = () => {
  const milestones = [
    {
      year: '2020',
      title: 'The Spark',
      description: 'At 13, I discovered my passion for music in my bedroom in New York, writing my first songs about teenage life and dreams.',
      details: 'It all started with a guitar and a notebook. Growing up in New York, I was surrounded by incredible music and energy. I began writing songs as a way to process my feelings and experiences as a young teenager. Those first songs were raw, honest, and completely me.',
      icon: Sparkles,
      color: 'from-blue-500 to-cyan-400',
      stats: 'First original songs',
      achievement: 'Found my voice'
    },
    {
      year: '2021',
      title: 'Going Viral',
      description: 'Started sharing covers and original music on TikTok and Instagram, quickly gaining a following who connected with my authentic style.',
      details: 'I decided to be brave and share my music with the world. Starting with simple acoustic covers and original snippets on TikTok, I was amazed when people started connecting with my music. The comments and messages from fans around the world showed me that music really is a universal language.',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-400',
      stats: 'First viral moments',
      achievement: 'Built online community'
    },
    {
      year: '2022',
      title: 'Building My Tribe',
      description: 'Grew my social media presence to over 50K followers across platforms, learning the importance of authentic connection with fans.',
      details: 'This year was about building genuine relationships with my growing fanbase. I learned that being authentic and vulnerable in my music and social media posts created deeper connections. My followers weren\'t just numbers - they became a supportive community.',
      icon: Users,
      color: 'from-green-500 to-blue-400',
      stats: '50K+ followers gained',
      achievement: 'Community building'
    },
    {
      year: '2023',
      title: 'Professional Breakthrough',
      description: 'Connected with Grammy-winning producers Oak Felder and Tommy Brown, taking my sound to the next level with professional production.',
      details: 'This was a dream come true. Working with producers who have shaped the sound of pop music taught me so much about songwriting, production, and the music industry. Oak and Tommy believed in my vision and helped me refine my sound while keeping my authentic voice.',
      icon: Award,
      color: 'from-red-500 to-orange-400',
      stats: 'Grammy-winning team',
      achievement: 'Professional collaborations'
    },
    {
      year: '2024',
      title: 'Chart Success',
      description: 'Released breakthrough singles including "STAY FRIENDS," "Magic Show," and "Daydreaming" that accumulated millions of streams worldwide.',
      details: 'This was the year everything changed. Songs like "STAY FRIENDS" (1.9M streams), "Magic Show" (1.8M streams), and "Daydreaming" (1.5M streams) proved that authentic music resonates globally. Each release taught me more about my artistry and connected me with fans worldwide.',
      icon: Music,
      color: 'from-yellow-500 to-red-400',
      stats: '6M+ total streams',
      achievement: 'Mainstream breakthrough'
    },
    {
      year: '2025',
      title: 'Voice of a Generation',
      description: 'Released "Under Your Skin" and "Good Girl Bad Dreams," cementing my place as a rising pop star with over 17M YouTube views.',
      details: 'At 17, I\'m proud to be called "The Voice of a Generation." With songs that speak to young people\'s experiences and over 17.3M YouTube views, I\'m just getting started. My music is reaching people who need to hear that they\'re not alone in their struggles and dreams.',
      icon: Star,
      color: 'from-cyan-500 to-blue-400',
      stats: '17.3M+ YouTube views',
      achievement: 'Global recognition'
    }
  ];

  const achievements = [
    {
      number: '7.8M+',
      label: 'Spotify Streams',
      icon: FaSpotify,
      color: 'text-green-400',
      description: 'Total streams across all platforms'
    },
    {
      number: '17.3M+',
      label: 'YouTube Views',
      icon: FaYoutube,
      color: 'text-red-400',
      description: 'Music video views and counting'
    },
    {
      number: '79K+',
      label: 'Social Followers',
      icon: FaInstagram,
      color: 'text-pink-400',
      description: 'Across all social platforms'
    },
    {
      number: '8',
      label: 'Released Tracks',
      icon: Music,
      color: 'text-purple-400',
      description: 'Original songs and counting'
    }
  ];

  const currentProjects = [
    {
      title: 'Under Your Skin',
      description: 'My latest single exploring emotional vulnerability and deep connections',
      streams: '186K streams',
      year: '2025',
      status: 'Latest Release',
      color: 'from-blue-600/30 to-cyan-600/30'
    },
    {
      title: 'Good Girl Bad Dreams',
      description: 'An empowering anthem about breaking free from societal expectations',
      streams: '434K streams',
      year: '2025',
      status: 'Fan Favorite',
      color: 'from-purple-600/30 to-pink-600/30'
    }
  ];

  const personalStats = [
    { label: 'Age', value: '17', icon: Heart },
    { label: 'Based in', value: 'New York', icon: MapPin },
    { label: 'Years Creating', value: '5+', icon: Music },
    { label: 'Countries Reached', value: '50+', icon: Target }
  ];

  return (
    <>
      <SEOHead
        title="My Journey - From Bedroom Songwriter to Rising Pop Star"
        description="Discover Bruklin's musical journey from writing songs in her bedroom at 13 to becoming a rising pop star with millions of streams. Follow her authentic path from 2020 to 2025."
        keywords="Bruklin journey, pop star story, music career timeline, New York artist, teen musician, Oak Felder, Tommy Brown, viral TikTok, authentic music"
        url="/my-journey"
        type="article"
        publishedTime="2025-01-01T00:00:00Z"
        modifiedTime={new Date().toISOString()}
      />
      <div className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Background with Profile Photo */}
        <div className="absolute inset-0 z-0">
          <LazyImage
            src="/profilephoto.jpg" 
            alt="Bruklin" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="mb-6 sm:mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 
                             border border-blue-400/30 rounded-full text-blue-400 font-medium text-sm sm:text-base
                             backdrop-blur-sm">
                The Story So Far
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text 
                         bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 mb-4 sm:mb-6
                         tracking-wider leading-tight">
              My Journey
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4 mb-8">
              From bedroom songwriter to rising pop star - discover the authentic story behind the music
            </p>
            
            {/* Personal Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {personalStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <stat.icon size={16} className="text-cyan-400" />
                    <span className="text-xl sm:text-2xl font-bold text-white">{stat.value}</span>
                  </div>
                  <p className="text-white/70 text-xs sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Current Achievements */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10
                         hover:border-white/20 transition-all duration-300 text-center group
                         hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transform hover:scale-105"
              >
                <achievement.icon size={24} className={`${achievement.color} mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
                  {achievement.number}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm font-medium mb-1">{achievement.label}</p>
                <p className="text-white/60 text-xs leading-tight">{achievement.description}</p>
              </div>
            ))}
          </div>

          {/* Enhanced Timeline */}
          <div className="relative mb-12 sm:mb-16 lg:mb-20">
            {/* Timeline line - Enhanced for mobile */}
            <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-1 h-full 
                          bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

            {/* Milestones */}
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row lg:items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'
                  } pl-16 lg:pl-0`}>
                    <div className={`bg-gradient-to-br ${milestone.color} bg-opacity-20 
                                  backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10
                                  hover:border-white/20 transition-all duration-300 group
                                  hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transform hover:scale-[1.02]`}>
                      
                      {/* Year and Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${milestone.color} bg-opacity-20 
                                         flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <milestone.icon size={20} className="text-white" />
                          </div>
                          <span className="text-2xl sm:text-3xl font-bold text-white">{milestone.year}</span>
                        </div>
                        <span className="text-xs sm:text-sm text-white/60 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                          {milestone.achievement}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                        {milestone.title}
                      </h3>
                      
                      <p className="text-white/90 leading-relaxed mb-4 text-sm sm:text-base font-medium">
                        {milestone.description}
                      </p>
                      
                      <p className="text-white/80 leading-relaxed text-sm mb-4">
                        {milestone.details}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="text-cyan-400 text-sm font-semibold">
                          {milestone.stats}
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                          <span className="text-white text-sm">→</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot - Enhanced */}
                  <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 lg:w-6 lg:h-6">
                    <div className={`w-full h-full rounded-full bg-gradient-to-r ${milestone.color} 
                                  border-4 border-black shadow-lg z-10 relative
                                  hover:scale-125 transition-transform duration-300`}>
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${milestone.color} animate-ping opacity-20`}></div>
                    </div>
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Projects - Enhanced */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Latest Releases
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                My most recent songs that are connecting with fans around the world
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {currentProjects.map((project, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${project.color} 
                           backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10
                           hover:border-white/20 transition-all duration-300 group
                           hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transform hover:scale-[1.02]`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Play size={20} className="text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-purple-400 font-medium text-sm">{project.year}</span>
                    </div>
                    <span className="text-xs bg-purple-400/20 text-purple-400 px-3 py-1 rounded-full border border-purple-400/30">
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/80 mb-4 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-purple-400 font-semibold text-sm">
                      {project.streams}
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <TrendingUp size={14} />
                      <span>Growing</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 
                          backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10
                          hover:border-white/20 transition-all duration-300 group
                          hover:shadow-[0_0_50px_rgba(168,85,247,0.3)]">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Heart size={28} className="text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">The Journey Continues</h2>
              </div>
              <p className="text-white/90 text-base sm:text-lg lg:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                This is just the beginning of my story. At 17, I'm excited to continue creating music that connects with hearts 
                around the world, sharing my authentic journey, and growing alongside my incredible fanbase. Thank you for being part of this adventure.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                <a
                  href="https://open.spotify.com/artist/4fjAtF6VmMxQHxKI5C3HPO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 
                           text-white font-semibold py-3 px-6 rounded-xl 
                           transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <FaSpotify size={20} />
                  Follow on Spotify
                </a>
                <a
                  href="https://www.youtube.com/@BruklinOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 
                           text-white font-semibold py-3 px-6 rounded-xl 
                           transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <FaYoutube size={20} />
                  Subscribe on YouTube
                </a>
                <a
                  href="https://www.instagram.com/bruklin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600
                           hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl 
                           transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <FaInstagram size={20} />
                  Follow on Instagram
                </a>
              </div>
              
              {/* Quote */}
              <div className="border-t border-white/10 pt-6">
                <blockquote className="text-white/80 italic text-lg max-w-2xl mx-auto">
                  "Music has always been my way of connecting with people and sharing my truth. 
                  Every song is a piece of my heart, and I'm grateful for everyone who listens and feels something."
                </blockquote>
                <p className="text-white/60 mt-3 font-medium">- Bruklin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyJourneyPage;