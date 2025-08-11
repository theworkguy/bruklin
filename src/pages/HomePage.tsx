import React from 'react';
import SEOHead from '../components/SEOHead';

// Lazy load components for better performance
const HeroSection = React.lazy(() => import('../components/home/HeroSection'));
const TracklistSection = React.lazy(() => import('../components/home/TracklistSection'));
const VideoSection = React.lazy(() => import('../components/home/VideoSection'));
const BioSection = React.lazy(() => import('../components/home/BioSection'));
const SocialMediaSection = React.lazy(() => import('../components/home/SocialMediaSection'));
const StatsSection = React.lazy(() => import('../components/home/StatsSection'));
const ContactFormSection = React.lazy(() => import('../components/home/ContactFormSection'));

const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Home - Bruklin's Complete Musical Journey"
        description="Explore Bruklin's complete musical journey - from latest releases to behind-the-scenes content. 17-year-old pop sensation with 9.1M+ Spotify streams and 22.3M+ YouTube views."
        keywords="Bruklin, pop music, New York artist, Under Your Skin, Good Girl Bad Dreams, teen pop star, new music 2025, rising artist, pop sensation"
        url="/home"
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
        <React.Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <HeroSection />
          <TracklistSection />
          <VideoSection />
          <BioSection />
          <SocialMediaSection />
          <StatsSection />
          <ContactFormSection />
        </React.Suspense>
      </div>
    </>
  );
};

export default HomePage;