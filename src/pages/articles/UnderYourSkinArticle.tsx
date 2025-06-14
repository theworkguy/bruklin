import React from 'react';
import { Calendar, User, ArrowLeft, Music, Play, Heart, MessageCircle } from 'lucide-react';
import { FaSpotify, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';

const UnderYourSkinArticle: React.FC = () => {
  return (
    <>
      <SEOHead
        title="The Story Behind 'Under Your Skin' - Bruklin"
        description="Dive deep into the creative process and emotional journey that led to Bruklin's latest single 'Under Your Skin'. From late-night writing sessions to the final recording."
        keywords="Under Your Skin, Bruklin, song story, songwriting process, music creation, pop music, emotional vulnerability"
        url="/blog/under-your-skin"
        type="article"
        publishedTime="2025-01-20T00:00:00Z"
        musicData={{
          albumName: "Under Your Skin",
          artist: "Bruklin",
          releaseDate: "2025",
          genre: "Pop",
          duration: "PT3M"
        }}
      />
      <div className="min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300
                     font-medium transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          {/* Article Header */}
          <div className="mb-12">
            <div className="aspect-video relative overflow-hidden rounded-2xl mb-8">
              <img
                src="https://img.youtube.com/vi/3fMx4F9cYVw/0.jpg"
                alt="Under Your Skin - Bruklin"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Song Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-4">
                  <Music size={20} className="text-white" />
                  <span className="text-white font-medium">Under Your Skin</span>
                  <span className="text-white/70">•</span>
                  <span className="text-white/70">3:00</span>
                  <span className="text-white/70">•</span>
                  <span className="text-white/70">186K streams</span>
                </div>
                
                <div className="flex gap-3">
                  <a
                    href="https://open.spotify.com/track/1a2b3c4d5e6f7g8h9i0j"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full
                             bg-green-600/80 backdrop-blur-sm hover:bg-green-600
                             transition-all duration-300"
                  >
                    <FaSpotify size={16} className="text-white" />
                    <span className="text-white text-sm font-medium">Listen</span>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=3fMx4F9cYVw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full
                             bg-red-600/80 backdrop-blur-sm hover:bg-red-600
                             transition-all duration-300"
                  >
                    <FaYoutube size={16} className="text-white" />
                    <span className="text-white text-sm font-medium">Watch</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6 text-sm text-white/60">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <time dateTime="2025-01-20">January 20, 2025</time>
              </div>
              <div className="flex items-center gap-1">
                <User size={14} />
                <span>Bruklin</span>
              </div>
              <span>5 min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The Story Behind 'Under Your Skin'
            </h1>

            <p className="text-xl text-white/80 leading-relaxed">
              Dive deep into the creative process and emotional journey that led to my latest single. 
              From late-night writing sessions to the final recording, discover how vulnerability became my greatest strength.
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
              <p className="text-white/90 leading-relaxed mb-6">
                It was 2 AM on a Tuesday night when the first lines of "Under Your Skin" came to me. I was sitting 
                in my bedroom studio, guitar in hand, feeling overwhelmed by everything that had been happening in my life. 
                The pressure of growing up in the spotlight, the expectations, the constant scrutiny – it all felt like 
                it was getting under my skin, quite literally.
              </p>

              <p className="text-white/90 leading-relaxed mb-6">
                The song started as a whisper, almost like a confession to myself. I began with the melody, something 
                haunting yet beautiful, that captured the feeling of being exposed and vulnerable. The lyrics flowed 
                naturally from there – "You get under my skin, like a tattoo that won't fade, marking every part of me 
                with memories we made."
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">The Writing Process</h2>
              
              <p className="text-white/90 leading-relaxed mb-6">
                What makes "Under Your Skin" special to me is how honest it is. I didn't try to hide behind metaphors 
                or clever wordplay. Instead, I let myself be completely vulnerable, writing about the fear of letting 
                someone see all of you – the good, the bad, and everything in between.
              </p>

              <p className="text-white/90 leading-relaxed mb-6">
                Working with my producers Oak Felder and Tommy Brown was incredible. They understood the emotional weight 
                of the song and helped me create a soundscape that matched the intensity of the lyrics. We spent hours 
                perfecting every detail, from the subtle strings in the bridge to the way my voice breaks slightly on 
                the final chorus.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">Finding My Voice</h2>
              
              <p className="text-white/90 leading-relaxed mb-6">
                At 17, I'm still figuring out who I am, and this song represents a major step in that journey. It's 
                about accepting that being vulnerable isn't a weakness – it's actually where our greatest strength lies. 
                When we allow ourselves to be truly seen, that's when real connection happens.
              </p>

              <p className="text-white/90 leading-relaxed mb-6">
                The recording process was emotional. There were moments when I had to stop and take a breath because 
                the lyrics hit too close to home. But that's exactly what made the performance authentic. You can hear 
                the raw emotion in every note, every breath, every pause.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">The Response</h2>
              
              <p className="text-white/90 leading-relaxed mb-6">
                Since releasing "Under Your Skin," I've been overwhelmed by the response from fans. So many people have 
                shared their own stories of vulnerability and connection. It's incredible to know that something so 
                personal to me can resonate with others and help them feel less alone.
              </p>

              <p className="text-white/90 leading-relaxed mb-6">
                The song has already reached over 186,000 streams on Spotify, and the music video has been viewed 
                millions of times on YouTube. But beyond the numbers, what matters most to me are the messages from 
                fans saying the song helped them through difficult times or gave them the courage to be more open 
                with the people they love.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">What's Next</h2>
              
              <p className="text-white/90 leading-relaxed">
                "Under Your Skin" is just the beginning. I'm working on more music that explores these themes of 
                vulnerability, growth, and self-discovery. Each song is a piece of my journey, and I can't wait to 
                share more of my story with you. Thank you for listening, for connecting, and for letting my music 
                get under your skin too.
              </p>
            </div>
          </div>

          {/* Engagement Section */}
          <div className="flex items-center justify-between py-8 border-t border-white/10">
            <div className="flex items-center gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <Heart size={20} />
                <span>234 likes</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={20} />
                <span>18 comments</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://open.spotify.com/track/1a2b3c4d5e6f7g8h9i0j"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full
                         bg-green-600 hover:bg-green-700 transition-all duration-300"
              >
                <FaSpotify size={16} className="text-white" />
                <span className="text-white text-sm font-medium">Listen Now</span>
              </a>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-6">More Song Stories</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/blog/good-girl-bad-dreams"
                className="group bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden
                         border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="https://img.youtube.com/vi/G9hbM-tRnBo/0.jpg"
                    alt="Good Girl Bad Dreams"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                    Breaking Free: The Making of 'Good Girl Bad Dreams'
                  </h4>
                  <p className="text-white/70 text-sm mt-2">
                    An empowering anthem about shattering expectations...
                  </p>
                </div>
              </Link>

              <Link
                to="/blog/good-cry-acoustic"
                className="group bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden
                         border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="https://img.youtube.com/vi/GV8va3FTxIM/0.jpg"
                    alt="Good Cry Acoustic"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                    Stripped Down: The Acoustic Version of 'Good Cry'
                  </h4>
                  <p className="text-white/70 text-sm mt-2">
                    Sometimes the most powerful moments come from simplicity...
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnderYourSkinArticle;