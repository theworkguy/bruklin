import React from 'react';
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
  return (
    <div className="min-h-screen bg-black relative">
      {/* Background image with overlay */}
      <div className="fixed inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-music-overlay"></div>
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