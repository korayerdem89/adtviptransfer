import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, ArrowUp, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Hizmetler', href: '/#services' },
  { name: 'Araç Filosu', href: '/#fleet' },
  { name: 'Galeri', href: '/#gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'İletişim', href: '/#contact' },
];

const services = [
  'Havalimanı Transferi',
  'Kıbrıs Transfer',
  'Şehir İçi Transfer',
  'Şehir Dışı Transfer',
  'Kurumsal Transfer',
  'Grup Transferleri',
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith('/#')) {
      const hash = href.replace('/#', '');
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-[#050505] border-t border-gray-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.png" 
                alt="ADT VIP Transfer Logo" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              İzmir Adnan Menderes Havalimanı'ndan başlayarak tüm Ege Bölgesi'ne 
              premium VIP transfer hizmeti sunuyoruz.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#111] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37]/30 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#111] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37]/30 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#111] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37]/30 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/#') ? (
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="/#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/#services');
                    }}
                    className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Abdülhamit Yavuz Cd.<br />
                  Atıfbey Mah. No: 21/1B<br />
                  Gaziemir, İzmir
                </span>
              </li>
              <li>
                <a
                  href="tel:+905433806649"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#d4af37] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#d4af37]" />
                  <span className="text-sm">0543 380 66 49</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@adtviptransfer.com.tr"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#d4af37] transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#d4af37]" />
                  <span className="text-sm">info@adtviptransfer.com.tr</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} ADT VIP Transfer. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/blog" className="text-gray-500 hover:text-[#d4af37] text-sm transition-colors flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                Blog
              </Link>
              <a href="#" className="text-gray-500 hover:text-[#d4af37] text-sm transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-gray-500 hover:text-[#d4af37] text-sm transition-colors">
                Kullanım Koşulları
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 w-12 h-12 rounded-full bg-[#d4af37] text-black flex items-center justify-center shadow-lg hover:bg-[#c4a030] transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] z-40"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
