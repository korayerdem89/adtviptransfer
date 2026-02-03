import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Ana Sayfa', href: '/', type: 'route' },
  { name: 'Hizmetler', href: '/#services', type: 'hash' },
  { name: 'Araç Filosu', href: '/#fleet', type: 'hash' },
  { name: 'Galeri', href: '/#gallery', type: 'hash' },
  { name: 'Blog', href: '/blog', type: 'route' },
  { name: 'İletişim', href: '/#contact', type: 'hash' },
];

// Desktop için kısa isimler
const desktopNavLinks = [
  { name: 'Ana Sayfa', href: '/', type: 'route' },
  { name: 'Hizmetler', href: '/#services', type: 'hash' },
  { name: 'Filomuz', href: '/#fleet', type: 'hash' },
  { name: 'Galeri', href: '/#gallery', type: 'hash' },
  { name: 'İletişim', href: '/#contact', type: 'hash' },
  { name: 'Blog', href: '/blog', type: 'route' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (link: typeof navLinks[0]) => {
    setIsMobileMenuOpen(false);

    if (link.type === 'route') {
      return;
    }

    if (link.href.startsWith('/#')) {
      const hash = link.href.replace('/#', '');
      if (location.pathname !== '/') {
        window.location.href = link.href;
      } else {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'glass-effect border-b border-[#d4af37]/20'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group flex-shrink-0"
            >
              <img
                src="/logo.png"
                alt="ADT VIP Transfer Logo"
                className="h-12 sm:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation - xl ve üzeri */}
            <div className="hidden xl:flex items-center gap-6 2xl:gap-8">
              {desktopNavLinks.map((link) => (
                link.type === 'route' ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-sm transition-colors duration-300 tracking-wide relative group whitespace-nowrap ${location.pathname === link.href
                      ? 'text-[#d4af37]'
                      : 'text-gray-300 hover:text-[#d4af37]'
                      }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#d4af37] transition-all duration-300 ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link);
                    }}
                    className="text-sm text-gray-300 hover:text-[#d4af37] transition-colors duration-300 tracking-wide relative group whitespace-nowrap"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )
              ))}
            </div>

            {/* Tablet Navigation - lg ile xl arası */}
            <div className="hidden lg:flex xl:hidden items-center gap-4">
              {desktopNavLinks.slice(0, 5).map((link) => (
                link.type === 'route' ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-sm transition-colors duration-300 tracking-wide relative group whitespace-nowrap ${location.pathname === link.href
                      ? 'text-[#d4af37]'
                      : 'text-gray-300 hover:text-[#d4af37]'
                      }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#d4af37] transition-all duration-300 ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link);
                    }}
                    className="text-sm text-gray-300 hover:text-[#d4af37] transition-colors duration-300 tracking-wide relative group whitespace-nowrap"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <a
                href="tel:+905433806649"
                className="hidden xl:flex items-center gap-2 text-[#d4af37] hover:text-white transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium whitespace-nowrap">0543 380 66 49</span>
              </a>
              <Link to="/#contact">
                <Button
                  className="bg-[#d4af37] hover:bg-[#c4a030] text-black font-semibold px-4 xl:px-6 py-2 rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] text-sm whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Rezervasyon</span>
                  <span className="sm:hidden">Rezerv</span>
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 flex-shrink-0"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        <div
          className={`absolute top-20 left-0 right-0 bg-[#0a0a0a] border-b border-[#d4af37]/20 transition-transform duration-500 max-h-[calc(100vh-5rem)] overflow-y-auto ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
          <div className="px-4 py-8 space-y-2">
            {navLinks.map((link) => (
              link.type === 'route' ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-lg py-4 border-b border-gray-800 ${location.pathname === link.href
                    ? 'text-[#d4af37]'
                    : 'text-gray-300 hover:text-[#d4af37]'
                    } transition-colors`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link);
                  }}
                  className="block text-lg text-gray-300 hover:text-[#d4af37] transition-colors py-4 border-b border-gray-800"
                >
                  {link.name}
                </a>
              )
            ))}
            <div className="pt-6 space-y-4">
              <a
                href="tel:+905433806649"
                className="flex items-center justify-center gap-2 text-[#d4af37] py-3"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">0543 380 66 49</span>
              </a>
              <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  className="w-full bg-[#d4af37] hover:bg-[#c4a030] text-black font-semibold py-4"
                >
                  Rezervasyon Yap
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
