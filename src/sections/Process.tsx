import { useEffect, useRef } from 'react';
import { Calendar, Car, MapPin, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const stepIcons = [Phone, Calendar, Car, MapPin];

export default function Process() {
  const { t, ts } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  const stepsData = t('process.steps') as Array<{ title: string; description: string; details: string[] }> | undefined;
  const steps = stepIcons.map((icon, i) => {
    if (!Array.isArray(stepsData)) return { number: String(i + 1).padStart(2, '0'), icon, title: '', description: '', details: [] as string[] };
    return { number: String(i + 1).padStart(2, '0'), icon, ...stepsData[i] };
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
    <section id="process" ref={sectionRef} className="relative py-24 bg-gradient-to-b from-[#050505] to-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(to right, #d4af37 1px, transparent 1px), linear-gradient(to bottom, #d4af37 1px, transparent 1px)`, backgroundSize: '60px 60px' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full mb-6">
            <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm text-[#d4af37] tracking-wider uppercase">{ts('process.badge')}</span>
          </div>

          <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            {ts('process.title')} <span className="text-gradient-gold">{ts('process.titleHighlight')}</span>
          </h2>

          <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-gray-400 max-w-2xl mx-auto text-lg">{ts('process.subtitle')}</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {steps.map((step, index) => (
              <div key={step.number} className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-${(index + 3) * 100} relative h-full`}>
                <div className="relative group h-full">
                  <div className="relative bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-gray-800 rounded-2xl p-8 transition-all duration-500 hover:border-[#d4af37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] h-full flex flex-col">
                    <div className="absolute -top-4 left-8 px-3 py-1 bg-[#d4af37] text-black text-sm font-bold rounded">{step.number}</div>
                    <div className="w-16 h-16 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center mb-6 mt-4 group-hover:bg-[#d4af37]/20 transition-colors duration-300">
                      <step.icon className="w-8 h-8 text-[#d4af37]" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{step.description}</p>
                    <ul className="space-y-2 mt-auto">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-4 z-10">
                      <ArrowRight className="w-8 h-8 text-[#d4af37]/50" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-700 mt-16">
          <div className="relative bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37]/10 to-[#d4af37]/20 border border-[#d4af37]/30 rounded-2xl p-8 lg:p-12 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-4">{ts('process.ctaTitle')}</h3>
              <p className="text-gray-400 max-w-xl mx-auto mb-8">{ts('process.ctaSubtitle')}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] text-black font-semibold rounded-sm hover:bg-[#c4a030] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                  <Calendar className="w-5 h-5" />
                  <span>{ts('process.onlineReservation')}</span>
                </a>
                <a href="tel:+905433806649" className="inline-flex items-center gap-2 px-8 py-4 border border-[#d4af37]/50 text-white font-semibold rounded-sm hover:bg-[#d4af37]/10 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                  <span>0543 380 66 49</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
