import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';

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
const CryALittleLouderArticle = React.lazy(() => import('./pages/articles/CryALittleLouderArticle'));
const LatestSongPage = React.lazy(() => import('./pages/LatestSongPage'));

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black relative">
      {/* Background image with overlay */}
      <div className="fixed inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-music-overlay"></div>
      </div>
      
      {/* Content container */}
      <div className="relative min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 pt-[70px]">
          {/* Render Breadcrumbs for non-home pages */}
          <Breadcrumbs />
          
          <React.Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-black">
              <div className="text-center">
                <div className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-6" />
                <p className="text-white/70 text-xl font-medium">Loading amazing content...</p>
                <div className="flex justify-center gap-2 mt-4">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          }>
            <Routes>
              {/* Latest Song is now the default home page */}
              <Route path="/" element={<LatestSongPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/my-journey" element={<MyJourneyPage />} />
              <Route path="/discography" element={<DiscographyPage />} />
              <Route path="/videos" element={<VideosPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/under-your-skin" element={<UnderYourSkinArticle />} />
              <Route path="/blog/good-girl-bad-dreams" element={<GoodGirlBadDreamsArticle />} />
              <Route path="/blog/cry-a-little-louder" element={<CryALittleLouderArticle />} />
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