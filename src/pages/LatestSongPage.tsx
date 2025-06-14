import React from 'react';
import SEOHead from '../components/SEOHead';
import Profile from '../components/Profile';
import SimpleMusicPlayer from '../components/SimpleMusicPlayer';
import LinkSection from '../components/LinkSection';

const LatestSongPage: React.FC = () => {
  // Define tracks for the music player
  const tracks = [
    {
      title: "Under Your Skin",
      url: "https://audio-previews.elements.envatousercontent.com/files/281404817/preview.mp3" // Preview audio URL
    }
  ];

  return (
    <>
      <SEOHead
        title="Under Your Skin - Latest Song by Bruklin"
        description="Listen to Bruklin's latest single 'Under Your Skin' - a haunting pop ballad exploring emotional vulnerability. Available on all streaming platforms."
        keywords="Under Your Skin, Bruklin latest song, new music 2025, pop ballad, emotional vulnerability, Spotify, Apple Music"
        url="/new"
        type="website"
        musicData={{
          albumName: "Under Your Skin",
          artist: "Bruklin",
          releaseDate: "2025",
          genre: "Pop",
          duration: "PT3M"
        }}
      />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
        {/* Background with overlay */}
        <div className="fixed inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-music-overlay"></div>
        </div>
        
        {/* Content container */}
        <div className="relative z-10 w-full max-w-md mx-auto">
          {/* Profile Section */}
          <Profile 
            name="Bruklin"
            bio="The Voice of a Generation"
            imageUrl="/profilephoto.jpg"
          />
          
          {/* Content Section */}
          <div className="w-full max-w-[700px] mx-auto px-6 pb-24">
            {/* Song Title Header */}
            <div className="relative bg-black
                          backdrop-blur-sm rounded-2xl px-4 py-4 mb-6
                          border-t border-white/10 shadow-[0_10px_50px_rgba(0,191,255,0.2)]
                          overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-blue-600/20 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <h1 className="font-display text-2xl xs:text-3xl sm:text-4xl text-white
                           tracking-wide animate-fade-in
                           bg-gradient-to-r from-blue-300 via-cyan-400 to-blue-500 
                           bg-clip-text text-transparent
                           group-hover:tracking-wider transition-all duration-700
                           [text-shadow:_2px_2px_20px_rgba(0,191,255,0.5)]
                           group-hover:[text-shadow:_2px_2px_30px_rgba(0,191,255,0.8)]
                           break-words text-center leading-tight">
                Under Your Skin
              </h1>
              <div className="absolute bottom-0 left-0 w-full h-[2px] 
                            bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
            
            {/* Simple Music Player */}
            <SimpleMusicPlayer tracks={tracks} />
            
            {/* Streaming Platform Links */}
            <LinkSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestSongPage;