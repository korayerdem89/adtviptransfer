import { useEffect, useRef } from 'react';
import { Plane, Building2, MapPin, Users, Briefcase, Car, ArrowRight, Ship } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const serviceIcons = [Plane, Ship, Building2, MapPin, Users, Briefcase, Car];

export default function Services() {
  const { t, ts } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  const items = t('services.items') as Array<{ title: string; description: string; features: string[] }> | undefined;
  const services = serviceIcons.map((icon, i) => {
    if (!Array.isArray(items)) return { icon, title: '', description: '', features: [] as string[] };
    return { icon, ...items[i] };
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full mb-6">
            <Car className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm text-[#d4af37] tracking-wider uppercase">{ts('services.badge')}</span>
          </div>

          <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            {ts('services.title')} <span className="text-gradient-gold">{ts('services.titleHighlight')}</span>{' '}{ts('services.titleEnd')}
          </h2>

          <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-gray-400 max-w-2xl mx-auto text-lg">{ts('services.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-${(index + 3) * 100} group relative`}>
              <div className="relative h-full bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-gray-800 rounded-xl p-8 transition-all duration-500 hover:border-[#d4af37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center mb-6 group-hover:bg-[#d4af37]/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-[#d4af37]" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-[#d4af37] transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span key={feature} className="px-3 py-1 text-xs bg-[#d4af37]/10 text-[#d4af37] rounded-full">{feature}</span>
                    ))}
                  </div>
                  <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 text-[#d4af37] text-sm font-medium group/link">
                    <span>{ts('services.detailLink')}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-700 mt-16 text-center">
          <p className="text-gray-400 mb-6">{ts('services.bottomCta')}</p>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-3 px-8 py-4 bg-[#d4af37] text-black font-semibold rounded-sm hover:bg-[#c4a030] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
            <span>{ts('services.getQuote')}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
