import React from 'react';
import { Calendar, User, ArrowLeft, Music, Heart, MessageCircle } from 'lucide-react';
import { FaSpotify, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';

const GoodGirlBadDreamsArticle: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Breaking Free: The Making of 'Good Girl Bad Dreams' - Bruklin"
        description="An empowering anthem about shattering expectations and embracing authenticity. Learn how this song became a rallying cry for self-acceptance and the courage to be different."
        keywords="Good Girl Bad Dreams, Bruklin, empowerment, self-acceptance, breaking expectations, pop anthem"
        url="/blog/good-girl-bad-dreams"
        type="article"
        publishedTime="2025-01-15T00:00:00Z"
        musicData={{
          albumName: "Good Girl Bad Dreams",
          artist: "Bruklin",
          releaseDate: "2025",
          genre: "Pop",
          duration: "PT2M36S"
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
                src="https://img.youtube.com/vi/G9hbM-tRnBo/0.jpg"
                alt="Good Girl Bad Dreams - Bruklin"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Song Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-4">
                  <Music size={20} className="text-white" />
                  <span className="text-white font-medium">Good Girl Bad Dreams</span>
                  <span className="text-white/70">•</span>
                  <span className="text-white/70">2:36</span>
                  <span className="text-white/70">•</span>
                  <span className="text-white/70">434K streams</span>
                </div>
                
                <div className="flex gap-3">
                  <a
                    href="https://open.spotify.com/track/2b3c4d5e6f7g8h9i0j1a"
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
                    href="https://www.youtube.com/watch?v=G9hbM-tRnBo"
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
                <time dateTime="2025-01-15">January 15, 2025</time>
              </div>
              <div className="flex items-center gap-1">
                <User size={14} />
                <span>Bruklin</span>
              </div>
              <span>6 min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Breaking Free: The Making of 'Good Girl Bad Dreams'
            </h1>

            <p className="text-xl text-white/80 leading-relaxed">
              An empowering anthem about shattering expectations and embracing authenticity. Learn how this song 
              became a rallying cry for self-acceptance and the courage to be different.
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
              <p className="text-white/90 leading-relaxed mb-6">
                "Good Girl Bad Dreams" was born from frustration – the kind that builds up when you're constantly 
                told who you should be instead of being celebrated for who you are. As a 17-year-old in the music 
                industry, I've faced countless expectations about how I should look, sound, and behave. This song 
                is my rebellion against all of that.
              </p>

              <p className="text-white/90 leading-relaxed mb-6">
                The title itself is a contradiction, and that's exactly the point. Society loves to put people, 
                especially young women, into neat little boxes. You're either the "good girl" or you're not. But 
                what if you're both? What if you can be sweet and rebellious, innocent and wise, traditional and 
                revolutionary all at the same time?
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">The Spark of Inspiration</h2>
              
              <p className="text-white/90 leading-relaxed mb-6">
                The song started with a conversation I had with my mom about the pressure I was feeling to be 
                "perfect." She told me about her own struggles with expectations when she was my age, and how she 
                wished she had been braver about being herself. That night, I wrote the first verse: "They want 
                a good girl with a pretty smile, but I've got bad dreams running wild."
              </p>

              <p className="text-white/90 leading-relaxed mb-6">
                Working with my production team including Oak Felder and Sebastian Cole, we wanted to create something that sounded as rebellious as the
                lyrics felt. The beat is driving and confident, with unexpected elements that mirror the song's 
                message about breaking free from conventions. The bridge features a distorted vocal effect that 
                represents breaking through the noise of other people's expectations.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">More Than Just a Song</h2>
              
              <p className="text-white/90 leading-relaxed mb-6">
                "Good Girl Bad Dreams" became more than just a song – it became a movement. The response from fans 
                has been incredible. Young people from all over the world have shared their own stories of feeling 
                trapped by expectations, and how the song gave them permission to embrace their contradictions.
              </p>

              <p className="text-white/90 leading-relaxed mb-6">
                The music video was particularly important to me. We created visual metaphors for breaking free – 
                literally breaking through glass walls, changing outfits that represent different expectations, 
                and ending with me in clothes that feel authentically me. Every frame was designed to reinforce 
                the message that you don't have to choose between being good and being yourself.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">The Power of Authenticity</h2>
              
              <p className="text-white/90 leading-relaxed mb-6">
                What I've learned through creating this song is that authenticity isn't about being perfect – 
                it's about being honest. It's about acknowledging all the different parts of yourself, even the 
                ones that seem to contradict each other. We're all complex beings with multiple facets, and 
                that's what makes us beautiful.
              </p>

              <p className="text-white/90 leading-relaxed mb-6">
                The song has now reached over 434,000 streams on Spotify, but more importantly, it's started 
                conversations. I've received messages from fans saying they've found the courage to pursue their 
                dreams, stand up to bullies, or simply wear what makes them feel confident. That's the real 
                success of "Good Girl Bad Dreams."
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">A Message for Dreamers</h2>
              
              <p className="text-white/90 leading-relaxed">
                To anyone reading this who feels like they don't fit into the boxes society has created for them: 
                you're not alone. Your "bad dreams" – your wild ambitions, your unconventional ideas, your refusal 
                to be what others expect – those aren't flaws. They're your superpowers. Embrace them, nurture them, 
                and never let anyone convince you to make yourself smaller to fit their comfort zone.
              </p>
            </div>
          </div>

          {/* Engagement Section */}
          <div className="flex items-center justify-between py-8 border-t border-white/10">
            <div className="flex items-center gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <Heart size={20} />
                <span>189 likes</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={20} />
                <span>25 comments</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://open.spotify.com/track/2b3c4d5e6f7g8h9i0j1a"
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
                to="/blog/under-your-skin"
                className="group bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden
                         border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="https://img.youtube.com/vi/3fMx4F9cYVw/0.jpg"
                    alt="Under Your Skin"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                    The Story Behind 'Under Your Skin'
                  </h4>
                  <p className="text-white/70 text-sm mt-2">
                    Dive deep into the creative process and emotional journey...
                  </p>
                </div>
              </Link>

              <Link
                to="/blog/good-cry"
                className="group bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden
                         border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="https://img.youtube.com/vi/FFwmasP0qRk/0.jpg"
                    alt="Good Cry"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                    Finding Strength in Vulnerability: 'Good Cry' Origins
                  </h4>
                  <p className="text-white/70 text-sm mt-2">
                    The cathartic journey of creating a song about healing...
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

export default GoodGirlBadDreamsArticle;