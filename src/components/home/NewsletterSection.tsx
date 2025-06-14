import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 
                      backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10
                      hover:border-white/20 transition-all duration-300
                      shadow-[0_0_50px_rgba(168,85,247,0.2)]">
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <Mail size={32} className="text-purple-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Stay in the Loop</h2>
          </div>
          
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Be the first to know about new releases, exclusive content, behind-the-scenes moments, 
            and upcoming shows. Join thousands of fans worldwide!
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl
                           text-white placeholder-white/50 focus:outline-none focus:border-purple-400
                           transition-all duration-300 disabled:opacity-50"
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'loading' || !email}
                className="bg-gradient-to-r from-purple-600 to-pink-600
                         hover:from-purple-700 hover:to-pink-700
                         disabled:from-gray-600 disabled:to-gray-700
                         text-white font-semibold py-3 px-6 rounded-xl
                         flex items-center justify-center gap-2 transition-all duration-300
                         transform hover:scale-105 disabled:transform-none
                         disabled:cursor-not-allowed min-w-[120px]"
              >
                {status === 'loading' ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={20} />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Subscribe
                  </>
                )}
              </button>
            </div>
          </form>

          {status === 'success' && (
            <div className="mt-4 p-3 rounded-lg bg-green-600/20 border border-green-500/30">
              <p className="text-green-400 font-medium">
                🎉 Welcome to the family! Check your email for confirmation.
              </p>
            </div>
          )}

          <p className="text-white/60 text-sm mt-6">
            No spam, just music. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;