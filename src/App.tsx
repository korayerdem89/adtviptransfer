import { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import SEO from './components/SEO';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import { LanguageProvider } from './lib/LanguageContext';

function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onFinish, 600);
    }, 1800);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <style>{`
        @keyframes logoReveal {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes ringDraw {
          0% { stroke-dashoffset: 565; opacity: 0; }
          10% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes glowPulse {
          0%, 100% { filter: drop-shadow(0 0 8px rgba(212,175,55,0.3)); }
          50% { filter: drop-shadow(0 0 20px rgba(212,175,55,0.6)); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes dotPulse1 { 0%,80%,100% { opacity: 0.2; transform: scale(0.8); } 40% { opacity: 1; transform: scale(1.2); } }
        @keyframes dotPulse2 { 0%,80%,100% { opacity: 0.2; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1.2); } }
        @keyframes dotPulse3 { 0%,80%,100% { opacity: 0.2; transform: scale(0.8); } 60% { opacity: 1; transform: scale(1.2); } }
        .loading-logo {
          animation: logoReveal 0.8s ease-out forwards;
        }
        .loading-ring {
          animation: ringDraw 1.6s ease-in-out forwards, glowPulse 2s ease-in-out infinite 1.6s;
        }
        .loading-shimmer {
          background: linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.15) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: shimmer 2s ease-in-out infinite;
        }
        .dot-1 { animation: dotPulse1 1.4s ease-in-out infinite; }
        .dot-2 { animation: dotPulse2 1.4s ease-in-out infinite; }
        .dot-3 { animation: dotPulse3 1.4s ease-in-out infinite; }
      `}</style>

      <div className="relative flex flex-col items-center">
        {/* SVG Ring around logo */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
          <svg
            className="absolute inset-0 w-full h-full loading-ring"
            viewBox="0 0 200 200"
            fill="none"
          >
            <circle
              cx="100"
              cy="100"
              r="90"
              stroke="url(#goldGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="565"
              strokeDashoffset="565"
              style={{ opacity: 0 }}
            />
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d4af37" />
                <stop offset="50%" stopColor="#f5e6a3" />
                <stop offset="100%" stopColor="#d4af37" />
              </linearGradient>
            </defs>
          </svg>

          {/* Logo */}
          <img
            src="/logo.png"
            alt="ADT VIP Transfer"
            className="loading-logo h-20 sm:h-24 w-auto relative z-10"
            style={{ opacity: 0 }}
          />
        </div>

        {/* Shimmer line */}
        <div className="mt-8 w-32 h-[1px] loading-shimmer rounded-full" />

        {/* Animated dots */}
        <div className="flex items-center gap-2 mt-5">
          <span className="dot-1 w-1.5 h-1.5 rounded-full bg-[#d4af37] inline-block" />
          <span className="dot-2 w-1.5 h-1.5 rounded-full bg-[#d4af37] inline-block" />
          <span className="dot-3 w-1.5 h-1.5 rounded-full bg-[#d4af37] inline-block" />
        </div>
      </div>
    </div>
  );
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  if (isLoading) {
    return <LoadingScreen onFinish={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <SEO />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
