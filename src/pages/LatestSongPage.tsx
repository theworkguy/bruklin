import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaSpotify, FaApple, FaYoutube, FaAmazon } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';
import Profile from '../components/Profile';
import LinkSection from '../components/LinkSection';

const LatestSongPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Under Your Skin - Latest Song by Bruklin"
        description="Listen to Bruklin's latest single 'Under Your Skin' - a haunting pop ballad exploring emotional vulnerability. Available on all streaming platforms."
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
          
          {/* Link Section */}
          <LinkSection />
        </div>
      </div>
    </>
  );
};

export default LatestSongPage;