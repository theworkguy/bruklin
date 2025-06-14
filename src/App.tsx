import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MyJourneyPage from './pages/MyJourneyPage';
import DiscographyPage from './pages/DiscographyPage';
import VideosPage from './pages/VideosPage';
import PressPage from './pages/PressPage';
import BlogPage from './pages/BlogPage';
import PhotosPage from './pages/PhotosPage';
import ContactPage from './pages/ContactPage';

function App() {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="fixed inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-music-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10 animate-gradient-shift"></div>
      </div>
      
      {/* Content container */}
      <div className="relative min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 pt-[60px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/my-journey" element={<MyJourneyPage />} />
            <Route path="/discography" element={<DiscographyPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/press" element={<PressPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/photos" element={<PhotosPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;