import React from 'react';
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
  );
};

export default HomePage;