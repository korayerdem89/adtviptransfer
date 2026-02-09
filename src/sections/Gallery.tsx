import { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const galleryImages = Array.from({ length: 24 }, (_, i) => `${i + 1}.webp`);

export default function Gallery() {
  const { ts } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const checkScrollability = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('animate-visible'); }); },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      checkScrollability();
      return () => container.removeEventListener('scroll', checkScrollability);
    }
  }, [checkScrollability]);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) container.scrollBy({ left: direction === 'left' ? -400 : 400, behavior: 'smooth' });
  };

  const handleMouseDown = (e: React.MouseEvent) => { setIsDragging(true); setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0)); setScrollLeft(scrollContainerRef.current?.scrollLeft || 0); };
  const handleMouseMove = (e: React.MouseEvent) => { if (!isDragging) return; e.preventDefault(); const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0); const walk = (x - startX) * 1.5; if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft = scrollLeft - walk; };
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  return (
    <>
      <section id="gallery" ref={sectionRef} className="relative py-24 bg-gradient-to-b from-[#050505] to-[#0a0a0a] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full mb-6">
                  <span className="text-sm text-[#d4af37] tracking-wider uppercase">{ts('gallery.badge')}</span>
                </div>
                <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                  {ts('gallery.title')} <span className="text-gradient-gold">{ts('gallery.titleHighlight')}</span>
                </h2>
                <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-gray-400 max-w-xl mt-4">{ts('gallery.subtitle')}</p>
              </div>
              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 hidden sm:flex items-center gap-3">
                <button onClick={() => scroll('left')} disabled={!canScrollLeft} className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${canScrollLeft ? 'border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37] hover:text-black' : 'border-gray-700 text-gray-600 cursor-not-allowed'}`}><ChevronLeft className="w-5 h-5" /></button>
                <button onClick={() => scroll('right')} disabled={!canScrollRight} className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${canScrollRight ? 'border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37] hover:text-black' : 'border-gray-700 text-gray-600 cursor-not-allowed'}`}><ChevronRight className="w-5 h-5" /></button>
              </div>
            </div>
          </div>

          <div ref={scrollContainerRef} className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-400 flex gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4 cursor-grab active:cursor-grabbing" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave}>
            <div className="flex-shrink-0 w-0 sm:w-[calc((100vw-1280px)/2)]"></div>
            {galleryImages.map((image, index) => (
              <div key={index} className="flex-shrink-0" style={{ animationDelay: `${(index + 5) * 100}ms` }}>
                <div onClick={() => setSelectedImage(image)} className="relative w-[280px] sm:w-[350px] lg:w-[400px] h-[200px] sm:h-[250px] lg:h-[280px] rounded-2xl overflow-hidden bg-[#111] border border-gray-800 transition-all duration-500 hover:border-[#d4af37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] cursor-pointer">
                  <img src={`/gallery/${image}`} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" draggable={false} />
                </div>
              </div>
            ))}
            <div className="flex-shrink-0 w-4 sm:w-[calc((100vw-1280px)/2)]"></div>
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none"></div>
        </div>
        <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"><X className="w-6 h-6" /></button>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={`/gallery/${selectedImage}`} alt="Gallery" className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
          </div>
        </div>
      )}
    </>
  );
}
