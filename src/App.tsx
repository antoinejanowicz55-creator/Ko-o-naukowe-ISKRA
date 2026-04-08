import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Car, 
  Wind, 
  Zap, 
  Users, 
  Image as ImageIcon, 
  Mail, 
  ChevronRight, 
  Menu, 
  X,
  ExternalLink,
  Award,
  Fuel
} from 'lucide-react';

// --- Translations ---
const translations = {
  pl: {
    nav: {
      about: "O nas",
      projects: "Projekty",
      gallery: "Galeria",
      sponsors: "Sponsorzy",
      contact: "Kontakt",
    },
    hero: {
      title: "Koło Naukowe ISKRA",
      subtitle: "Pasja, Inżynieria, Innowacja",
      description: "Działamy na Wydziale Samochodów i Maszyn Roboczych Politechniki Warszawskiej. Przesuwamy granice motoryzacji poprzez tuning i nowoczesne technologie.",
      cta: "Poznaj nasze projekty",
    },
    about: {
      title: "Kim jesteśmy?",
      description: "ISKRA to zespół ambitnych studentów Politechniki Warszawskiej. Nasza siedziba znajduje się na wydziale SiMR, gdzie teoria spotyka się z praktyką warsztatową. Skupiamy się na optymalizacji osiągów i wdrażaniu ekologicznych rozwiązań w sporcie motorowym.",
      stats: [
        { label: "Członków", value: "25+" },
        { label: "Projektów", value: "3" },
        { label: "Partnerów", value: "10+" },
      ]
    },
    projects: {
      title: "Nasze Projekty",
      smart: {
        title: "Smart Roadster Project",
        description: "Nasza platforma testowa. Kompaktowy roadster, który przechodzi całkowitą metamorfozę.",
      },
      aero: {
        title: "Aerodynamika & Body Kit",
        description: "Projektujemy i wytwarzamy autorski pakiet aerodynamiczny. Wykorzystujemy symulacje CFD oraz skanowanie 3D, aby zminimalizować opór i zwiększyć docisk.",
        features: ["Włókno węglowe", "Symulacje CFD", "Unikalny design"],
      },
      hybrid: {
        title: "Napęd Hybrydowy Bio-Ethanol",
        description: "Tworzymy innowacyjny układ napędowy łączący silnik spalinowy zasilany mieszanką benzyny i bioetanolu z silnikiem elektrycznym.",
        features: ["Redukcja emisji", "Większy moment obrotowy", "Eko-Performance"],
      }
    },
    gallery: {
      title: "Galeria",
      viewMore: "Zobacz więcej na Instagramie",
    },
    sponsors: {
      title: "Zostań Partnerem",
      description: "Szukamy firm i instytucji, które chcą wspierać młodych inżynierów w realizacji odważnych projektów. Oferujemy profesjonalną promocję i dostęp do utalentowanych studentów.",
      cta: "Pobierz ofertę sponsorską",
    },
    footer: {
      rights: "© 2026 KN ISKRA PW SiMR. Wszelkie prawa zastrzeżone.",
      location: "ul. Narbutta 84, 02-524 Warszawa",
    }
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      gallery: "Gallery",
      sponsors: "Sponsors",
      contact: "Contact",
    },
    hero: {
      title: "ISKRA Student Research Group",
      subtitle: "Passion, Engineering, Innovation",
      description: "Based at the Faculty of Automotive and Construction Machinery Engineering, Warsaw University of Technology. Pushing automotive boundaries through tuning and modern tech.",
      cta: "Explore our projects",
    },
    about: {
      title: "Who are we?",
      description: "ISKRA is a team of ambitious students from Warsaw University of Technology. We are based at the SiMR faculty, where theory meets workshop practice. We focus on performance optimization and implementing eco-friendly solutions in motorsport.",
      stats: [
        { label: "Members", value: "25+" },
        { label: "Projects", value: "3" },
        { label: "Partners", value: "10+" },
      ]
    },
    projects: {
      title: "Our Projects",
      smart: {
        title: "Smart Roadster Project",
        description: "Our testing platform. A compact roadster undergoing a complete metamorphosis.",
      },
      aero: {
        title: "Aerodynamics & Body Kit",
        description: "We design and manufacture a custom aerodynamic package. Using CFD simulations and 3D scanning to minimize drag and increase downforce.",
        features: ["Carbon Fiber", "CFD Simulations", "Unique Design"],
      },
      hybrid: {
        title: "Bio-Ethanol Hybrid Powertrain",
        description: "Developing an innovative powertrain combining a combustion engine fueled by gasoline-bioethanol mix with an electric motor.",
        features: ["Emission Reduction", "Higher Torque", "Eco-Performance"],
      }
    },
    gallery: {
      title: "Gallery",
      viewMore: "View more on Instagram",
    },
    sponsors: {
      title: "Become a Partner",
      description: "We are looking for companies and institutions that want to support young engineers in realizing bold projects. We offer professional promotion and access to talented students.",
      cta: "Download sponsorship offer",
    },
    footer: {
      rights: "© 2026 KN ISKRA PW SiMR. All rights reserved.",
      location: "84 Narbutta St, 02-524 Warsaw, Poland",
    }
  }
};

type Language = 'pl' | 'en';

export default function App() {
  const [lang, setLang] = useState<Language>('pl');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(prev => prev === 'pl' ? 'en' : 'pl');

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-orange-500/30 selection:text-orange-500">
      {/* --- Navigation --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Zap className="text-white fill-white" size={24} />
            </div>
            <span className="text-xl font-display font-bold tracking-tighter">ISKRA</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {Object.entries(t.nav).map(([key, label]) => (
              <a 
                key={key} 
                href={`#${key}`} 
                className="text-sm font-medium text-zinc-400 hover:text-orange-500 transition-colors"
              >
                {label}
              </a>
            ))}
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-700 hover:border-orange-500 transition-colors text-xs font-bold uppercase"
            >
              <Globe size={14} />
              {lang === 'pl' ? 'EN' : 'PL'}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-zinc-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-zinc-950 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {Object.entries(t.nav).map(([key, label]) => (
                <a 
                  key={key} 
                  href={`#${key}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-display font-bold"
                >
                  {label}
                </a>
              ))}
              <button 
                onClick={() => { toggleLang(); setIsMenuOpen(false); }}
                className="flex items-center gap-2 text-orange-500 font-bold"
              >
                <Globe size={20} />
                {lang === 'pl' ? 'Switch to English' : 'Zmień na Polski'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Hero Section --- */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/smart-roadster/1920/1080?grayscale" 
            alt="Smart Roadster" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-orange-600/20 text-orange-500 text-xs font-bold tracking-widest uppercase mb-6">
              Warsaw University of Technology
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-none mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all flex items-center gap-2 group"
              >
                {t.hero.cta}
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#sponsors" 
                className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-lg transition-all"
              >
                {t.nav.sponsors}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
        >
          <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8 flex items-center gap-4">
                <Users className="text-orange-500" />
                {t.about.title}
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                {t.about.description}
              </p>
              <div className="grid grid-cols-3 gap-8">
                {t.about.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-display font-bold text-orange-500">{stat.value}</div>
                    <div className="text-sm text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden border border-zinc-800 glass-panel">
                <img 
                  src="https://picsum.photos/seed/simr/800/600" 
                  alt="SiMR Faculty" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 glass-panel rounded-xl hidden md:block">
                <Award className="text-orange-500 mb-2" size={32} />
                <div className="font-bold">PW SiMR</div>
                <div className="text-xs text-zinc-500">Warszawa, Polska</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">{t.projects.title}</h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Aerodynamics */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass-panel rounded-2xl p-8 border-t-4 border-t-orange-600"
            >
              <div className="w-14 h-14 bg-orange-600/10 rounded-xl flex items-center justify-center mb-6">
                <Wind className="text-orange-500" size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{t.projects.aero.title}</h3>
              <p className="text-zinc-400 mb-6">
                {t.projects.aero.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.projects.aero.features.map((f, i) => (
                  <span key={i} className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-medium text-zinc-300">
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Hybrid */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass-panel rounded-2xl p-8 border-t-4 border-t-green-600"
            >
              <div className="w-14 h-14 bg-green-600/10 rounded-xl flex items-center justify-center mb-6">
                <Fuel className="text-green-500" size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{t.projects.hybrid.title}</h3>
              <p className="text-zinc-400 mb-6">
                {t.projects.hybrid.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.projects.hybrid.features.map((f, i) => (
                  <span key={i} className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-medium text-zinc-300">
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Smart Roadster Highlight */}
          <div className="mt-12 glass-panel rounded-2xl overflow-hidden grid md:grid-cols-3">
            <div className="md:col-span-2 p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-orange-500 mb-4">
                <Car size={24} />
                <span className="font-bold tracking-widest uppercase text-sm">Platform</span>
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">{t.projects.smart.title}</h3>
              <p className="text-zinc-400 text-lg">
                {t.projects.smart.description}
              </p>
            </div>
            <div className="relative h-64 md:h-auto">
              <img 
                src="https://picsum.photos/seed/roadster-side/600/400" 
                alt="Smart Roadster Side" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Gallery Section --- */}
      <section id="gallery" className="py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-display font-bold mb-2">{t.gallery.title}</h2>
              <p className="text-zinc-500">Proces twórczy i życie koła</p>
            </div>
            <a href="#" className="text-orange-500 font-bold flex items-center gap-2 hover:underline">
              {t.gallery.viewMore}
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="aspect-square rounded-xl overflow-hidden border border-zinc-800"
              >
                <img 
                  src={`https://picsum.photos/seed/iskra-${i}/400/400`} 
                  alt={`Gallery ${i}`} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Sponsors Section --- */}
      <section id="sponsors" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-orange-600/5 -skew-y-3 origin-top-left" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">{t.sponsors.title}</h2>
          <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
            {t.sponsors.description}
          </p>
          <button className="px-10 py-5 bg-white text-zinc-950 font-bold rounded-xl hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105">
            {t.sponsors.cta}
          </button>
          
          <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-30 grayscale">
            {/* Placeholder Logos */}
            <div className="text-2xl font-bold font-display">PARTNER A</div>
            <div className="text-2xl font-bold font-display">PARTNER B</div>
            <div className="text-2xl font-bold font-display">PARTNER C</div>
            <div className="text-2xl font-bold font-display">PARTNER D</div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Zap className="text-orange-600 fill-orange-600" size={24} />
                <span className="text-xl font-display font-bold tracking-tighter">ISKRA</span>
              </div>
              <p className="text-zinc-500 text-sm">
                Koło Naukowe ISKRA przy Wydziale SiMR Politechniki Warszawskiej.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-zinc-400">Kontakt</h4>
              <div className="flex flex-col gap-3 text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-orange-500" />
                  kn.iskra@pw.edu.pl
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-orange-500" />
                  {t.footer.location}
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-zinc-400">Social Media</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <ImageIcon size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-zinc-600">
            <p>{t.footer.rights}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
