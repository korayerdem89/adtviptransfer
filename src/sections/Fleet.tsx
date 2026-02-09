import { useEffect, useRef, useState } from 'react';
import { Users, Briefcase, ChevronLeft, ChevronRight, Car } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const vehicleData = [
  { id: 1, image: '/car-maybach.jpg', passengers: 9, luggage: 10 },
  { id: 2, image: '/car-vclass.jpg', passengers: 7, luggage: 8 },
  { id: 3, image: '/car-sclass.jpg', passengers: 3, luggage: 3 },
  { id: 4, image: '/car-eclass.jpg', passengers: 3, luggage: 3 },
  { id: 5, image: '/car-transporter.jpg', passengers: 9, luggage: 10 },
];

export default function Fleet() {
  const { t, ts } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const vehicleTranslations = t('fleet.vehicles') as Array<{ name: string; category: string; description: string; features: string[] }> | undefined;
  const vehicles = vehicleData.map((v, i) => {
    if (!Array.isArray(vehicleTranslations)) return { ...v, name: '', category: '', description: '', features: [] as string[] };
    return { ...v, ...vehicleTranslations[i] };
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

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % vehicles.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + vehicles.length) % vehicles.length);

  return (
    <section id="fleet" ref={sectionRef} className="relative py-24 bg-gradient-to-b from-[#0a0a0a] to-[#050505] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full mb-6">
            <Car className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm text-[#d4af37] tracking-wider uppercase">{ts('fleet.badge')}</span>
          </div>

          <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            {ts('fleet.title')} <span className="text-gradient-gold">{ts('fleet.titleHighlight')}</span>
          </h2>

          <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-gray-400 max-w-2xl mx-auto text-lg">{ts('fleet.subtitle')}</p>
        </div>

        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 relative">
          <div className="relative bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-gray-800 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] bg-black">
                <img src={vehicles[activeIndex].image} alt={vehicles[activeIndex].name} className="w-full h-full object-cover transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]/80 lg:block hidden"></div>
                <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300 z-10">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300 z-10">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-2">
                  <span className="text-[#d4af37] text-sm tracking-wider uppercase">{vehicles[activeIndex].category}</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">{vehicles[activeIndex].name}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">{vehicles[activeIndex].description}</p>

                <div className="flex gap-8 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center"><Users className="w-5 h-5 text-[#d4af37]" /></div>
                    <div>
                      <p className="text-2xl font-bold text-white">{vehicles[activeIndex].passengers}</p>
                      <p className="text-xs text-gray-500">{ts('fleet.passenger')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center"><Briefcase className="w-5 h-5 text-[#d4af37]" /></div>
                    <div>
                      <p className="text-2xl font-bold text-white">{vehicles[activeIndex].luggage}</p>
                      <p className="text-xs text-gray-500">{ts('fleet.luggage')}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-sm text-gray-500 mb-3">{ts('fleet.features')}</p>
                  <div className="flex flex-wrap gap-2">
                    {vehicles[activeIndex].features.map((feature) => (
                      <span key={feature} className="flex items-center gap-2 px-3 py-2 bg-[#d4af37]/10 text-[#d4af37] rounded-lg text-sm">
                        <Car className="w-4 h-4" />{feature}
                      </span>
                    ))}
                  </div>
                </div>

                <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#d4af37] text-black font-semibold rounded-sm hover:bg-[#c4a030] transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  {ts('fleet.reserveBtn')}
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            {vehicles.map((vehicle, index) => (
              <button key={vehicle.id} onClick={() => setActiveIndex(index)} className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden transition-all duration-300 ${index === activeIndex ? 'ring-2 ring-[#d4af37] ring-offset-2 ring-offset-[#0a0a0a]' : 'opacity-50 hover:opacity-80'}`}>
                <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-500 mt-16 grid sm:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-[#111] border border-gray-800 rounded-xl">
            <p className="text-4xl font-bold text-[#d4af37] mb-2">25+</p>
            <p className="text-gray-400">{ts('fleet.luxuryCars')}</p>
          </div>
          <div className="text-center p-6 bg-[#111] border border-gray-800 rounded-xl">
            <p className="text-4xl font-bold text-[#d4af37] mb-2">2023</p>
            <p className="text-gray-400">{ts('fleet.modelYear')}</p>
          </div>
          <div className="text-center p-6 bg-[#111] border border-gray-800 rounded-xl">
            <p className="text-4xl font-bold text-[#d4af37] mb-2">100%</p>
            <p className="text-gray-400">{ts('fleet.maintained')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
