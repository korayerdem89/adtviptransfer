import { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Play } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

type InstagramPost = {
  type: 'image' | 'video';
  src: string;
  poster?: string;
  description: string;
  link?: string;
};

const instagramPosts: InstagramPost[] = [
  {
    type: 'video',
    src: '/instagram/1.mp4',
    description: 'Profesyonel sofor, luks arac, zamaninda ve guvenli ulasim. Dugun transferlerinde VIP ayricalik.',
    link: 'https://www.instagram.com/adtviptransfer',
  },
  {
    type: 'video',
    src: '/instagram/2.mp4',
    description: 'Alev alev geliyoruz! Izmir\'de VIP transfer ayricaligi icin bizi arayin.',
    link: 'https://www.instagram.com/adtviptransfer',
  },
  {
    type: 'video',
    src: '/instagram/3.mp4',
    description: 'Isimizi cok seviyoruz. Misyonumuz mutlu etmek. Siz de doyasiya eglenmek isterseniz bizimle iletisime gecin.',
    link: 'https://www.instagram.com/adtviptransfer',
  },
  {
    type: 'video',
    src: '/instagram/4.mp4',
    description: 'Konfor, guven ve ayricalik... Sehir ici, sehirler arasi, havalimani ve tum transfer ihtiyaclarinizda VIP hizmet.',
    link: 'https://www.instagram.com/adtviptransfer',
  },
];

const TOTAL_POSTS = instagramPosts.length;
const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/adtviptransfer';

/* ─── Video / Image renderer ─── */
function PostMedia({ post, isActive }: { post: InstagramPost; isActive: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (post.type !== 'video') return;
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video.play().catch(() => {/* autoplay policy */});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive, post.type]);

  if (post.type === 'video') {
    return (
      <div className="relative w-full overflow-hidden bg-black" style={{ aspectRatio: '328 / 528' }}>
        <video
          ref={videoRef}
          src={post.src}
          poster={post.poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          draggable={false}
        />
        <div className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center pointer-events-none transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
          <Play className="w-4 h-4 text-white fill-white" />
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center pointer-events-none">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2 text-white">
            <ExternalLink className="w-5 h-5" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: '328 / 528' }}>
      <img src={post.src} alt={post.description} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" draggable={false} />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center pointer-events-none">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2 text-white">
          <ExternalLink className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

/* ─── Instagram icon SVG path (reusable) ─── */
const igIconPath = 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z';

function IgIcon({ className }: { className?: string }) {
  return <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d={igIconPath} /></svg>;
}

/* ─── Main Section ─── */
export default function Instagram() {
  const { ts } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  /* ── Desktop horizontal scroll state ── */
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragMoved, setDragMoved] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  /* ── Mobile carousel state ── */
  const [mobileIndex, setMobileIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchDelta = useRef(0);

  const wrap = (i: number) => ((i % TOTAL_POSTS) + TOTAL_POSTS) % TOTAL_POSTS;

  /* ── Visibility observer ── */
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      const t = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(t);
    }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.05 },
    );
    observer.observe(node);
    const fallback = setTimeout(() => setIsVisible(true), 2000);
    return () => { observer.disconnect(); clearTimeout(fallback); };
  }, []);

  /* ── Desktop scroll helpers ── */
  const checkScrollability = useCallback(() => {
    const c = scrollContainerRef.current;
    if (c) {
      setCanScrollLeft(c.scrollLeft > 0);
      setCanScrollRight(c.scrollLeft < c.scrollWidth - c.clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    const c = scrollContainerRef.current;
    if (c) { c.addEventListener('scroll', checkScrollability); checkScrollability(); return () => c.removeEventListener('scroll', checkScrollability); }
  }, [checkScrollability]);

  const scrollDesktop = (dir: 'left' | 'right') => {
    scrollContainerRef.current?.scrollBy({ left: dir === 'left' ? -380 : 380, behavior: 'smooth' });
  };

  const handleMouseDown = (e: React.MouseEvent) => { setIsDragging(true); setDragMoved(false); setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft ?? 0)); setScrollLeft(scrollContainerRef.current?.scrollLeft ?? 0); };
  const handleMouseMove = (e: React.MouseEvent) => { if (!isDragging) return; e.preventDefault(); setDragMoved(true); const x = e.pageX - (scrollContainerRef.current?.offsetLeft ?? 0); if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft = scrollLeft - (x - startX) * 1.5; };
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handlePostClick = (link: string | undefined) => { if (dragMoved) return; if (link) window.open(link, '_blank', 'noopener,noreferrer'); };

  /* ── Mobile touch handlers ── */
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; touchDelta.current = 0; };
  const handleTouchMove = (e: React.TouchEvent) => { touchDelta.current = e.touches[0].clientX - touchStartX.current; };
  const handleTouchEnd = () => {
    if (touchDelta.current < -50) setMobileIndex(prev => wrap(prev + 1));
    else if (touchDelta.current > 50) setMobileIndex(prev => wrap(prev - 1));
  };

  /* ── Animation helpers ── */
  const animCls = `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;
  const animStyle = (delay: number): React.CSSProperties => ({ transitionDelay: isVisible ? `${delay}ms` : '0ms' });

  return (
    <section id="instagram" ref={sectionRef} className="relative py-24 bg-gradient-to-b from-[#0a0a0a] to-[#050505] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />

      <div className="relative">
        {/* ── Section Header ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <div className={`${animCls} inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full mb-6`} style={animStyle(0)}>
                <IgIcon className="w-4 h-4 text-[#d4af37]" />
                <span className="text-sm text-[#d4af37] tracking-wider uppercase">{ts('instagram.badge')}</span>
              </div>
              <h2 className={`${animCls} text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white`} style={animStyle(100)}>
                {ts('instagram.title')}{' '}<span className="text-gradient-gold">{ts('instagram.titleHighlight')}</span>
              </h2>
              <p className={`${animCls} text-gray-400 max-w-xl mt-4`} style={animStyle(200)}>{ts('instagram.subtitle')}</p>
            </div>

            {/* Desktop: Follow button + arrows */}
            <div className={`${animCls} hidden sm:flex items-center gap-3`} style={animStyle(300)}>
              <a href={INSTAGRAM_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white text-sm font-semibold rounded-full hover:shadow-[0_0_20px_rgba(131,58,180,0.4)] transition-all duration-300">
                <IgIcon className="w-4 h-4" />
                {ts('instagram.followUs')}
              </a>
              <button onClick={() => scrollDesktop('left')} disabled={!canScrollLeft} className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${canScrollLeft ? 'border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37] hover:text-black' : 'border-gray-700 text-gray-600 cursor-not-allowed'}`}>
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => scrollDesktop('right')} disabled={!canScrollRight} className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${canScrollRight ? 'border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37] hover:text-black' : 'border-gray-700 text-gray-600 cursor-not-allowed'}`}>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ═══════════ DESKTOP: horizontal scroll ═══════════ */}
        <div
          ref={scrollContainerRef}
          className={`${animCls} hidden sm:flex gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4 cursor-grab active:cursor-grabbing`}
          style={{ ...animStyle(400), scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex-shrink-0 w-0 sm:w-[calc((100vw-1280px)/2)]" />
          {instagramPosts.map((post, index) => (
            <div key={index} className="flex-shrink-0 group" style={{ animationDelay: `${(index + 5) * 100}ms` }} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
              <div onClick={() => handlePostClick(post.link)} className="relative w-[260px] lg:w-[280px] flex flex-col rounded-2xl overflow-hidden bg-[#111] border border-gray-800 transition-all duration-500 hover:border-[#d4af37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] cursor-pointer">
                <PostMedia post={post} isActive={hoveredIndex === index} />
                <div className="p-4 h-[52px] flex items-start">
                  <p className="text-gray-300 text-sm leading-relaxed truncate w-full">
                    {post.description.length > 50 ? `${post.description.slice(0, 50)}...` : post.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="flex-shrink-0 w-4 sm:w-[calc((100vw-1280px)/2)]" />
        </div>

        {/* Desktop fade edge */}
        <div className="hidden sm:block absolute bottom-0 right-0 w-32 h-full bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />

        {/* ═══════════ MOBILE: single-card carousel ═══════════ */}
        <div
          className={`${animCls} sm:hidden relative`}
          style={animStyle(400)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden px-8">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
            >
              {instagramPosts.map((post, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 group">
                  <div
                    onClick={() => { if (post.link) window.open(post.link, '_blank', 'noopener,noreferrer'); }}
                    className="relative flex flex-col rounded-2xl overflow-hidden bg-[#111] border border-gray-800 cursor-pointer"
                  >
                    <PostMedia post={post} isActive={mobileIndex === index} />
                    <div className="p-4 h-[52px] flex items-start">
                      <p className="text-gray-300 text-sm leading-relaxed truncate w-full">
                        {post.description.length > 50 ? `${post.description.slice(0, 50)}...` : post.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-5">
            {instagramPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => setMobileIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${mobileIndex === index ? 'bg-[#d4af37] w-6' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile follow button */}
      <div className={`${animCls} sm:hidden flex justify-center mt-8 px-4`} style={animStyle(500)}>
        <a href={INSTAGRAM_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white text-sm font-semibold rounded-full hover:shadow-[0_0_20px_rgba(131,58,180,0.4)] transition-all duration-300">
          <IgIcon className="w-4 h-4" />
          {ts('instagram.followUs')}
        </a>
      </div>

      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
}
