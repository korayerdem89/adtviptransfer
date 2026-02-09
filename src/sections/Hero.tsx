import { useEffect, useRef } from 'react';
import { ChevronRight, Shield, Clock, Star, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/LanguageContext';

export default function Hero() {
  const { ts } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/hero-car.jpg" alt="Luxury VIP Transfer" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full">
              <Star className="w-4 h-4 text-[#d4af37]" />
              <span className="text-sm text-[#d4af37] tracking-wider uppercase">{ts('hero.badge')}</span>
            </div>

            <h1 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight">
              {ts('hero.titleLine1')}{' '}
              <span className="text-gradient-gold">{ts('hero.titleHighlight1')}</span>
              <br />
              {ts('hero.titleLine2')}{' '}
              <span className="text-gradient-gold">{ts('hero.titleHighlight2')}</span>
            </h1>

            <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed">
              {ts('hero.subtitle')}
            </p>

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-400 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-300">
                <Shield className="w-5 h-5 text-[#d4af37]" />
                <span className="text-sm">{ts('hero.safe')}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-5 h-5 text-[#d4af37]" />
                <span className="text-sm">{ts('hero.service247')}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Star className="w-5 h-5 text-[#d4af37]" />
                <span className="text-sm">{ts('hero.premiumCars')}</span>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-500 flex flex-wrap gap-4">
              <Button onClick={() => scrollToSection('#contact')} size="lg" className="bg-[#d4af37] hover:bg-[#c4a030] text-black font-semibold px-8 py-6 text-lg rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] group">
                {ts('hero.ctaReservation')}
                <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button onClick={() => scrollToSection('#services')} variant="outline" size="lg" className="border-[#d4af37]/50 text-white hover:bg-[#d4af37]/10 hover:border-[#d4af37] px-8 py-6 text-lg rounded-sm transition-all duration-300">
                {ts('hero.ctaServices')}
              </Button>
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-600 flex items-center gap-4 pt-4">
              <a href="tel:+905433806649" className="flex items-center gap-3 text-white hover:text-[#d4af37] transition-colors duration-300 group">
                <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 flex items-center justify-center group-hover:bg-[#d4af37]/30 transition-colors">
                  <Phone className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{ts('hero.callLine')}</p>
                  <p className="text-lg font-semibold">0543 380 66 49</p>
                </div>
              </a>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-x-12 transition-all duration-700 delay-500 hidden lg:block">
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 border border-[#d4af37]/20 rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-[#d4af37]/10 rounded-full"></div>

              <div className="relative bg-black/40 backdrop-blur-xl border border-[#d4af37]/20 rounded-2xl p-8 space-y-6">
                <div className="text-center pb-6 border-b border-[#d4af37]/20">
                  <p className="text-[#d4af37] text-sm tracking-wider uppercase mb-2">{ts('hero.whyChooseUs')}</p>
                  <h3 className="text-2xl font-serif font-bold text-white">{ts('hero.privilege')}</h3>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-[#d4af37]/5 rounded-lg">
                    <p className="text-3xl font-bold text-[#d4af37]">10+</p>
                    <p className="text-sm text-gray-400 mt-1">{ts('hero.yearsExp')}</p>
                  </div>
                  <div className="text-center p-4 bg-[#d4af37]/5 rounded-lg">
                    <p className="text-3xl font-bold text-[#d4af37]">50K+</p>
                    <p className="text-sm text-gray-400 mt-1">{ts('hero.happyCustomers')}</p>
                  </div>
                  <div className="text-center p-4 bg-[#d4af37]/5 rounded-lg">
                    <p className="text-3xl font-bold text-[#d4af37]">25+</p>
                    <p className="text-sm text-gray-400 mt-1">{ts('hero.luxuryCars')}</p>
                  </div>
                  <div className="text-center p-4 bg-[#d4af37]/5 rounded-lg">
                    <p className="text-3xl font-bold text-[#d4af37]">100%</p>
                    <p className="text-sm text-gray-400 mt-1">{ts('hero.satisfaction')}</p>
                  </div>
                </div>

                <div className="pt-4 text-center">
                  <p className="text-gray-400 text-sm italic">{ts('hero.quote')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#d4af37]/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-[#d4af37] rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
