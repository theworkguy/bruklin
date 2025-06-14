import React from 'react';
import { Calendar, MapPin, Music, Award, Users, TrendingUp, Play, Mic, Star } from 'lucide-react';
import { FaSpotify, FaYoutube, FaInstagram } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';

const MyJourneyPage: React.FC = () => {
  const milestones = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Started writing songs in my bedroom in New York, discovering my passion for creating music that connects with people\'s hearts.',
      details: 'At just 13, I picked up my first guitar and began writing songs about my experiences growing up in New York. What started as a way to express my feelings became the foundation of my musical journey.',
      icon: Music,
      color: 'from-blue-500 to-cyan-400',
      stats: 'First songs written'
    },
    {
      year: '2021',
      title: 'Finding My Voice',
      description: 'Began sharing my music on social media platforms, connecting with fans who resonated with my authentic storytelling.',
      details: 'I started posting covers and original songs on TikTok and Instagram. The response was incredible - people were connecting with my music in ways I never expected.',
      icon: Mic,
      color: 'from-purple-500 to-pink-400',
      stats: 'First viral moments'
    },
    {
      year: '2022',
      title: 'Building Community',
      description: 'My social media presence grew as fans connected with my authentic approach to music and life as a teenager.',
      details: 'Building a community of over 79K followers across platforms, I learned the importance of staying true to myself while sharing my journey with the world.',
      icon: Users,
      color: 'from-green-500 to-blue-400',
      stats: '79K+ total followers'
    },
    {
      year: '2023',
      title: 'Professional Breakthrough',
      description: 'Started collaborating with Grammy-winning producers Oak Felder and Tommy Brown, elevating my sound to new heights.',
      details: 'Working with industry legends taught me so much about the craft of songwriting and production. These collaborations shaped the artist I am today.',
      icon: Award,
      color: 'from-red-500 to-orange-400',
      stats: 'Grammy-winning collaborations'
    },
    {
      year: '2024',
      title: 'Chart Success',
      description: 'Released hit singles including "STAY FRIENDS," "Magic Show," "Daydreaming," and "Good Cry" that accumulated millions of streams.',
      details: 'This was the year everything changed. Songs like "STAY FRIENDS" (1.9M streams) and "Magic Show" (1.8M streams) proved that authentic music resonates globally.',
      icon: TrendingUp,
      color: 'from-yellow-500 to-red-400',
      stats: '7.8M+ Spotify streams'
    },
    {
      year: '2025',
      title: 'Voice of a Generation',
      description: 'Released "Under Your Skin" and "Good Girl Bad Dreams," cementing my place as a rising pop star with 17.3M+ YouTube views.',
      details: 'At 17, I\'m proud to be called "The Voice of a Generation." With over 17.3M YouTube views and growing, I\'m just getting started on this incredible journey.',
      icon: Star,
      color: 'from-cyan-500 to-blue-400',
      stats: '17.3M+ YouTube views'
    }
  ];

  const achievements = [
    {
      number: '7.8M+',
      label: 'Spotify Streams',
      icon: FaSpotify,
      color: 'text-green-400'
    },
    {
      number: '17.3M+',
      label: 'YouTube Views',
      icon: FaYoutube,
      color: 'text-red-400'
    },
    {
      number: '79K+',
      label: 'Social Followers',
      icon: FaInstagram,
      color: 'text-pink-400'
    },
    {
      number: '8',
      label: 'Released Tracks',
      icon: Music,
      color: 'text-purple-400'
    }
  ];

  const currentProjects = [
    {
      title: 'Under Your Skin',
      description: 'Latest single exploring emotional vulnerability',
      streams: '186K streams',
      year: '2025'
    },
    {
      title: 'Good Girl Bad Dreams',
      description: 'Empowering anthem about breaking expectations',
      streams: '434K streams',
      year: '2025'
    }
  ];

  return (
    <>
      <SEOHead
        title="My Journey - From Bedroom Songwriter to Rising Pop Star"
        description="Discover Bruklin's musical journey from writing songs in her bedroom to becoming a rising pop star with millions of streams. Follow her path from 2020 to 2025."
        keywords="Bruklin journey, pop star story, music career timeline, New York artist, teen musician, Oak Felder, Tommy Brown, viral TikTok"
        url="/my-journey"
        type="article"
        publishedTime="2025-01-01T00:00:00Z"
        modifiedTime={new Date().toISOString()}
      />
      <div className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text 
                         bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 mb-4 sm:mb-6
                         tracking-wider leading-tight">
              My Journey
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
              From bedroom songwriter to rising pop star - discover the milestones that shaped my musical path
            </p>
          </div>

          {/* Current Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10
                         hover:border-white/20 transition-all duration-300 text-center
                         hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transform hover:scale-105"
              >
                <achievement.icon size={24} className={`${achievement.color} mx-auto mb-2 sm:mb-3`} />
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
                  {achievement.number}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm">{achievement.label}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative mb-12 sm:mb-16 lg:mb-20">
            {/* Timeline line - Hidden on mobile, visible on larger screens */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full 
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
                  }`}>
                    <div className={`bg-gradient-to-br ${milestone.color} bg-opacity-20 
                                  backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10
                                  hover:border-white/20 transition-all duration-300
                                  hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transform hover:scale-[1.02]`}>
                      
                      {/* Mobile year badge */}
                      <div className="flex items-center justify-between mb-4 lg:hidden">
                        <div className="flex items-center gap-3">
                          <milestone.icon size={20} className="text-white" />
                          <span className="text-xl sm:text-2xl font-bold text-white">{milestone.year}</span>
                        </div>
                        <span className="text-xs sm:text-sm text-white/60 bg-white/10 px-2 py-1 rounded-full">
                          {milestone.stats}
                        </span>
                      </div>

                      {/* Desktop layout */}
                      <div className="hidden lg:flex items-center gap-3 mb-4">
                        <milestone.icon size={24} className="text-white" />
                        <span className="text-2xl font-bold text-white">{milestone.year}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                        {milestone.title}
                      </h3>
                      
                      <p className="text-white/80 leading-relaxed mb-4 text-sm sm:text-base">
                        {milestone.description}
                      </p>
                      
                      <p className="text-white/70 leading-relaxed text-sm mb-4">
                        {milestone.details}
                      </p>

                      <div className="hidden lg:block text-white/60 text-sm font-medium">
                        {milestone.stats}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot - Only visible on desktop */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${milestone.color} 
                                  border-4 border-black shadow-lg z-10`}></div>
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Projects */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
              Latest Releases
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {currentProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 
                           backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10
                           hover:border-white/20 transition-all duration-300
                           hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transform hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Play size={20} className="text-purple-400" />
                    <span className="text-purple-400 font-medium text-sm">{project.year}</span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/80 mb-4 text-sm sm:text-base">
                    {project.description}
                  </p>
                  
                  <div className="text-purple-400 font-medium text-sm">
                    {project.streams}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 
                          backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10
                          hover:border-white/20 transition-all duration-300">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">The Journey Continues</h2>
              <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                This is just the beginning. At 17, I'm excited to continue creating music that connects with hearts 
                around the world and sharing my journey with you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://open.spotify.com/artist/4fjAtF6VmMxQHxKI5C3HPO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 
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
                  className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 
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

export default MyJourneyPage;