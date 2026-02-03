import { useEffect, useRef } from 'react';
import { Plane, Building2, MapPin, Users, Briefcase, Car, ArrowRight, Ship } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Havalimanı Transferi',
    description: 'İzmir Adnan Menderes Havalimanı\'ndan otelinize veya adresinize özel, konforlu ve zamanında transfer hizmeti. Uçuş takibimizle gecikme durumunda bile sizi bekliyoruz.',
    features: ['Uçuş Takibi', 'Karşılama Hizmeti', 'Bavul Yardımı'],
  },
  {
    icon: Ship,
    title: 'Kıbrıs Transfer',
    description: 'Kıbrıs\'a seyahat edenler için Ercan Havalimanı ve Taşucu Feribot İskelesi transferleri. Girne, Lefkoşa, Gazimağusa ve tüm adaya VIP ulaşım hizmeti.',
    features: ['Ercan Havalimanı', 'Feribot Transferi', 'Adanın Her Yeri'],
  },
  {
    icon: Building2,
    title: 'Şehir İçi Transfer',
    description: 'İzmir şehir merkezindeki tüm noktalara güvenli ve konforlu ulaşım. İş toplantıları, alışveriş veya özel etkinlikleriniz için premium transfer çözümleri.',
    features: ['Hızlı Ulaşım', 'Esnek Rota', 'Özel Şoför'],
  },
  {
    icon: MapPin,
    title: 'Şehir Dışı Transfer',
    description: 'Çeşme, Alaçatı, Kuşadası, Ephesus ve diğer popüler bölgelere konforlu yolculuk. Tatilinizin başlangıcından itibaren lüks deneyim yaşayın.',
    features: ['Uzun Mesafe', 'Konforlu Araçlar', 'Deneyimli Şoför'],
  },
  {
    icon: Users,
    title: 'Grup Transferleri',
    description: 'Aileler, arkadaş grupları veya turistler için özel grup transfer çözümleri. Geniş araç filomuzla her büyüklükteki gruba hizmet veriyoruz.',
    features: ['Geniş Araç Filosu', 'Özel Fiyatlandırma', 'Koordinasyon'],
  },
  {
    icon: Briefcase,
    title: 'Kurumsal Transfer',
    description: 'CEO, yönetici ve iş insanlarına özel kurumsal ulaşım hizmetleri. Profesyonel şoförlerimizle iş toplantılarınıza zamanında ve prestijli varış.',
    features: ['Gizlilik', 'Profesyonellik', 'Premium Hizmet'],
  },
  {
    icon: Car,
    title: 'Günlük Kiralama',
    description: 'Gün boyu sizinle olan özel şoförlü araç kiralama hizmeti. Programınıza göre esnek ve kişiselleştirilmiş ulaşım çözümleri sunuyoruz.',
    features: ['Esnek Program', 'Özel Şoför', 'Saatlik Ücret'],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full mb-6"
          >
            <Car className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm text-[#d4af37] tracking-wider uppercase">
              Hizmetlerimiz
            </span>
          </div>

          <h2
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6"
          >
            İzmir'de <span className="text-gradient-gold">VIP Transfer</span>{' '}
            Çözümleri
          </h2>

          <p
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Her ihtiyaca özel tasarlanmış transfer hizmetlerimizle, yolculuğunuzu
            konforlu ve stressiz hale getiriyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-${(index + 3) * 100} group relative`}
            >
              <div className="relative h-full bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-gray-800 rounded-xl p-8 transition-all duration-500 hover:border-[#d4af37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] overflow-hidden">
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center mb-6 group-hover:bg-[#d4af37]/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-[#d4af37]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-[#d4af37] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs bg-[#d4af37]/10 text-[#d4af37] rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-[#d4af37] text-sm font-medium group/link"
                  >
                    <span>Detaylı Bilgi</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-700 mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            İhtiyacınıza özel bir çözüm mü arıyorsunuz?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#d4af37] text-black font-semibold rounded-sm hover:bg-[#c4a030] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            <span>Ücretsiz Fiyat Teklifi Al</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
