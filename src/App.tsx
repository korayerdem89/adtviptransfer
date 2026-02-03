import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import SEO from './components/SEO';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-24 h-24 border-4 border-[#d4af37] border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <img 
            src="/logo.png" 
            alt="ADT VIP Transfer" 
            className="h-16 w-auto mx-auto mb-4"
          />
          <p className="text-gray-400 mt-2 text-sm tracking-widest">YÜKLENİYOR...</p>
        </div>
      </div>
    );
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

export default App;
