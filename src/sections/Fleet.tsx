import { useEffect, useRef, useState } from 'react';
import { Users, Briefcase, Wine, Wifi, ChevronLeft, ChevronRight, Car } from 'lucide-react';

const vehicles = [
  {
    id: 1,
    name: 'Mercedes Maybach 114 CDI',
    category: 'Ultra Lüks VIP',
    image: '/car-maybach.jpg',
    passengers: 9,
    luggage: 10,
    features: ['Maybach Amblem', 'Özel Dizayn', 'Deri Koltuklar', 'Klima', 'WiFi', 'Mini Bar'],
    description: 'Mercedes 114 CDI üzerine özel Maybach modifikasyonu. Düğün, nişan ve özel günler için ultra lüks seçenek. 9 yolcu kapasitesi ile büyük gruplara VIP hizmet.',
  },
  {
    id: 2,
    name: 'Mercedes V-Class',
    category: 'VIP Minivan',
    image: '/car-vclass.jpg',
    passengers: 7,
    luggage: 8,
    features: ['Deri Koltuklar', 'Klima', 'WiFi', 'Mini Bar'],
    description: 'Geniş iç hacmi ve lüks donanımıyla grup transferleri ve aileler için ideal seçim.',
  },
  {
    id: 3,
    name: 'Mercedes S-Class',
    category: 'Lüks Sedan',
    image: '/car-sclass.jpg',
    passengers: 3,
    luggage: 3,
    features: ['Masaj Koltukları', 'Panoramik Cam Tavan', 'Burmester Ses', 'Hava Süspansiyon'],
    description: 'Kurumsal transferler ve özel davetler için en üst düzey konfor ve prestij.',
  },
  {
    id: 4,
    name: 'Mercedes E-Class',
    category: 'Executive Sedan',
    image: '/car-eclass.jpg',
    passengers: 3,
    luggage: 3,
    features: ['Deri Koltuklar', 'Klima', 'Navigasyon', 'Bluetooth'],
    description: 'İş toplantıları ve şehir içi transferler için ekonomik lüks seçenek.',
  },
  {
    id: 5,
    name: 'VW Transporter',
    category: 'Grup Minibüs',
    image: '/car-transporter.jpg',
    passengers: 9,
    luggage: 10,
    features: ['Geniş Bagaj', 'Klima', 'Konforlu Koltuklar', 'USB Şarj'],
    description: 'Büyük gruplar ve turistler için geniş ve konforlu transfer çözümü.',
  },
];

const amenityIcons: Record<string, React.ElementType> = {
  'WiFi': Wifi,
  'Mini Bar': Wine,
  'Deri Koltuklar': Briefcase,
  'Klima': Briefcase,
  'Masaj Koltukları': Briefcase,
  'Panoramik Cam Tavan': Briefcase,
  'Burmester Ses': Briefcase,
  'Hava Süspansiyon': Briefcase,
  'Navigasyon': Briefcase,
  'Bluetooth': Briefcase,
  'Geniş Bagaj': Briefcase,
  'Konforlu Koltuklar': Briefcase,
  'USB Şarj': Briefcase,
};

export default function Fleet() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % vehicles.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + vehicles.length) % vehicles.length);
  };

  return (
    <section
      id="fleet"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-[#0a0a0a] to-[#050505] overflow-hidden"
    >
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full mb-6"
          >
            <Car className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm text-[#d4af37] tracking-wider uppercase">
              Araç Filomuz
            </span>
          </div>

          <h2
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6"
          >
            Lüks <span className="text-gradient-gold">Araç Filomuz</span>
          </h2>

          <p
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Son model, bakımlı ve lüks donanımlı araçlarımızla konforlu bir
            yolculuk deneyimi sunuyoruz.
          </p>
        </div>

        {/* Vehicle Carousel */}
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 relative">
          {/* Main Display */}
          <div className="relative bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-gray-800 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] bg-black">
                <img
                  src={vehicles[activeIndex].image}
                  alt={vehicles[activeIndex].name}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]/80 lg:block hidden"></div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300 z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300 z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Info Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-2">
                  <span className="text-[#d4af37] text-sm tracking-wider uppercase">
                    {vehicles[activeIndex].category}
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
                  {vehicles[activeIndex].name}
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {vehicles[activeIndex].description}
                </p>

                {/* Specs */}
                <div className="flex gap-8 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#d4af37]" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">{vehicles[activeIndex].passengers}</p>
                      <p className="text-xs text-gray-500">Yolcu</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-[#d4af37]" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">{vehicles[activeIndex].luggage}</p>
                      <p className="text-xs text-gray-500">Bavul</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <p className="text-sm text-gray-500 mb-3">Özellikler</p>
                  <div className="flex flex-wrap gap-2">
                    {vehicles[activeIndex].features.map((feature) => {
                      const Icon = amenityIcons[feature] || Car;
                      return (
                        <span
                          key={feature}
                          className="flex items-center gap-2 px-3 py-2 bg-[#d4af37]/10 text-[#d4af37] rounded-lg text-sm"
                        >
                          <Icon className="w-4 h-4" />
                          {feature}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#d4af37] text-black font-semibold rounded-sm hover:bg-[#c4a030] transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                >
                  Bu Araç İçin Rezervasyon Yap
                </a>
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            {vehicles.map((vehicle, index) => (
              <button
                key={vehicle.id}
                onClick={() => setActiveIndex(index)}
                className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === activeIndex
                    ? 'ring-2 ring-[#d4af37] ring-offset-2 ring-offset-[#0a0a0a]'
                    : 'opacity-50 hover:opacity-80'
                }`}
              >
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-500 mt-16 grid sm:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-[#111] border border-gray-800 rounded-xl">
            <p className="text-4xl font-bold text-[#d4af37] mb-2">25+</p>
            <p className="text-gray-400">Lüks Araç</p>
          </div>
          <div className="text-center p-6 bg-[#111] border border-gray-800 rounded-xl">
            <p className="text-4xl font-bold text-[#d4af37] mb-2">2023</p>
            <p className="text-gray-400">Model ve Üzeri</p>
          </div>
          <div className="text-center p-6 bg-[#111] border border-gray-800 rounded-xl">
            <p className="text-4xl font-bold text-[#d4af37] mb-2">100%</p>
            <p className="text-gray-400">Bakımlı Filo</p>
          </div>
        </div>
      </div>
    </section>
  );
}
