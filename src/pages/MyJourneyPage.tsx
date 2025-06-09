import React from 'react';
import { Calendar, MapPin, Music, Award } from 'lucide-react';

const MyJourneyPage: React.FC = () => {
  const milestones = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Started writing songs in my bedroom in New York, discovering my passion for pop music.',
      icon: Music,
      color: 'from-blue-500 to-cyan-400'
    },
    {
      year: '2021',
      title: 'First Recording',
      description: 'Recorded my first demo tracks and began sharing music on social media platforms.',
      icon: Calendar,
      color: 'from-purple-500 to-pink-400'
    },
    {
      year: '2022',
      title: 'Viral Moment',
      description: 'My cover of a popular song went viral on TikTok, gaining thousands of followers overnight.',
      icon: Award,
      color: 'from-green-500 to-blue-400'
    },
    {
      year: '2023',
      title: 'Producer Collaborations',
      description: 'Started working with renowned producers Oak Felder and Tommy Brown on original music.',
      icon: MapPin,
      color: 'from-red-500 to-orange-400'
    },
    {
      year: '2024',
      title: 'Breakthrough Success',
      description: 'Released hit singles that accumulated millions of streams across all platforms.',
      icon: Award,
      color: 'from-yellow-500 to-red-400'
    },
    {
      year: '2025',
      title: 'Rising Star',
      description: 'Continuing to create music that touches souls worldwide at just 17 years old.',
      icon: Music,
      color: 'from-cyan-500 to-blue-400'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text 
                       bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 mb-6
                       tracking-wider">
            My Journey
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            From bedroom songwriter to rising pop star - discover the milestones that shaped my musical path
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full 
                        bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

          {/* Milestones */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className={`bg-gradient-to-br ${milestone.color} bg-opacity-20 
                                backdrop-blur-sm rounded-2xl p-6 border border-white/10
                                hover:border-white/20 transition-all duration-300
                                hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]`}>
                    <div className="flex items-center gap-3 mb-4">
                      <milestone.icon size={24} className="text-white" />
                      <span className="text-2xl font-bold text-white">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-white/80 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="w-2/12 flex justify-center">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${milestone.color} 
                                border-4 border-black shadow-lg z-10`}></div>
                </div>

                {/* Spacer */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 
                        backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">The Journey Continues</h2>
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
              This is just the beginning. Follow along as I continue to create music that connects with hearts around the world.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://open.spotify.com/artist/bruklin"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold 
                         py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Follow on Spotify
              </a>
              <a
                href="https://www.instagram.com/bruklin"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-600 
                         hover:from-purple-700 hover:to-pink-700 text-white font-semibold 
                         py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyJourneyPage;