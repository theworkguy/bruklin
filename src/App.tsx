import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./pages/HomePage'));
const MyJourneyPage = React.lazy(() => import('./pages/MyJourneyPage'));
const DiscographyPage = React.lazy(() => import('./pages/DiscographyPage'));
const VideosPage = React.lazy(() => import('./pages/VideosPage'));
const BlogPage = React.lazy(() => import('./pages/BlogPage'));
const PhotosPage = React.lazy(() => import('./pages/PhotosPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const UnderYourSkinArticle = React.lazy(() => import('./pages/articles/UnderYourSkinArticle'));
const GoodGirlBadDreamsArticle = React.lazy(() => import('./pages/articles/GoodGirlBadDreamsArticle'));
const LatestSongPage = React.lazy(() => import('./pages/LatestSongPage'));

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
          <React.Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-black">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-white/70 text-lg">Loading...</p>
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/new" element={<LatestSongPage />} />
              <Route path="/my-journey" element={<MyJourneyPage />} />
              <Route path="/discography" element={<DiscographyPage />} />
              <Route path="/videos" element={<VideosPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/under-your-skin" element={<UnderYourSkinArticle />} />
              <Route path="/blog/good-girl-bad-dreams" element={<GoodGirlBadDreamsArticle />} />
              <Route path="/photos" element={<PhotosPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </React.Suspense>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;