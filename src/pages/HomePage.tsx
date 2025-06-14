import React from 'react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import EPKSection from '../components/home/EPKSection';
import TracklistSection from '../components/home/TracklistSection';
import VideoSection from '../components/home/VideoSection';
import BioSection from '../components/home/BioSection';
import SocialMediaSection from '../components/home/SocialMediaSection';
import ContactFormSection from '../components/home/ContactFormSection';

const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Bruklin - The Voice of a Generation | Official Website"
        description="17-year-old pop sensation Bruklin from New York with 7.8M+ Spotify streams and 17.3M+ YouTube views. Listen to 'Under Your Skin' and 'Good Girl Bad Dreams' now."
        keywords="Bruklin, pop music, New York artist, Under Your Skin, Good Girl Bad Dreams, teen pop star, new music 2025, rising artist, pop sensation"
        url="/"
        type="website"
        musicData={{
          albumName: "Under Your Skin",
          artist: "Bruklin",
          releaseDate: "2024",
          genre: "Pop",
          duration: "PT3M"
        }}
      />
      <div className="w-full">
        <HeroSection />
        <StatsSection />
        <EPKSection />
        <TracklistSection />
        <VideoSection />
        <BioSection />
        <SocialMediaSection />
        <ContactFormSection />
      </div>
    </>
  );
};

export default HomePage;