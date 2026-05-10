/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Calculator, 
  CheckCircle2, 
  AppWindow, 
  DoorOpen, 
  Sparkles, 
  Building2, 
  ArrowRight, 
  Shield, 
  Zap, 
  TrendingUp, 
  Calendar,
  Menu,
  X,
  Languages,
  MessageCircle,
  Hammer,
  ShieldCheck,
  LayoutGrid,
  Briefcase,
  MapPin,
  Mail,
  ChevronLeft,
  ChevronRight,
  Play
} from 'lucide-react';
import { Language, translations, contactInfo } from './translations';
import SEO from './components/SEO';

// --- Types ---
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  image: string;
}

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

// --- Components ---

const decode = (str: string) => {
  try {
    return atob(str);
  } catch (e) {
    return str;
  }
};

const TopBar = React.memo(({ lang }: { lang: Language }) => {
  return (
    <div className="bg-brand-gold text-brand-dark py-2 px-6 fixed top-0 w-full z-[60] text-center text-sm font-bold shadow-md">
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-4">
        <div className="flex items-center gap-2">
          <Phone size={14} fill="currentColor" />
          <a 
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              if (el.href.includes(contactInfo.phone)) {
                el.href = `tel:${decode(contactInfo.phone)}`;
              }
            }}
            onClick={(e) => {
              e.currentTarget.href = `tel:${decode(contactInfo.phone)}`;
            }}
            href={`tel:${contactInfo.phone}`} 
            className="hover:underline"
          >
            (786) 234-5403
          </a>
        </div>
        <div className="hidden sm:block h-3 w-px bg-brand-dark/20" />
        <span className="hidden sm:block opacity-80 uppercase tracking-wider text-[10px]">
          {lang === 'es' ? 'Atención Inmediata' : 'Immediate Assistance'}
        </span>
      </div>
    </div>
  );
});

const FloatingWhatsApp = ({ lang }: { lang: Language }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ scale: 0, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 50 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onMouseEnter={(e) => {
             const el = e.currentTarget;
             const decoded = decode(contactInfo.whatsappNumber);
             if (el.href.includes(contactInfo.whatsappNumber)) {
               el.href = `https://wa.me/${decoded}?text=${encodeURIComponent(translations[lang].whatsapp.message)}`;
             }
          }}
          onClick={(e) => {
             const decoded = decode(contactInfo.whatsappNumber);
             e.currentTarget.href = `https://wa.me/${decoded}?text=${encodeURIComponent(translations[lang].whatsapp.message)}`;
          }}
          href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(translations[lang].whatsapp.message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
          id="whatsapp-float"
        >
          <MessageCircle size={32} />
          <span className="absolute right-full mr-4 bg-brand-dark text-brand-cream py-2 px-4 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-brand-cream/10 pointer-events-none">
            {lang === 'es' ? '¿En qué te ayudamos?' : 'How can we help?'}
          </span>
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

const Navbar = React.memo(({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-9 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/95 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center p-1">
            <img 
              src="https://raw.githubusercontent.com/websprintt/JCH-Impact/fb1f6066859f1a3149320d5a12860968dd59f495/img/Logo%20solo%20sin%20fondo.png" 
              alt="JCH Impact Logo" 
              className="w-full h-full object-contain"
              width={48}
              height={48}
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter text-brand-cream hidden sm:block">
            JCH.<span className="text-brand-gold">Impact</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <motion.a 
            href="#services" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hover:text-brand-gold transition-colors"
          >
            {t.services}
          </motion.a>
          <motion.a 
            href="#benefits" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hover:text-brand-gold transition-colors"
          >
            {t.benefits}
          </motion.a>
          <motion.a 
            href="#portfolio" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hover:text-brand-gold transition-colors"
          >
            {t.portfolio}
          </motion.a>
          
          <motion.button 
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="flex items-center gap-2 hover:text-brand-gold transition-colors group"
          >
            <Languages size={18} className="group-hover:rotate-12 transition-transform" />
            <span className="uppercase">{lang === 'es' ? 'EN' : 'ES'}</span>
          </motion.button>

          <motion.a 
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              if (el.href.includes(contactInfo.phone)) {
                el.href = `tel:${decode(contactInfo.phone)}`;
              }
            }}
            onClick={(e) => {
              e.currentTarget.href = `tel:${decode(contactInfo.phone)}`;
            }}
            href={`tel:${contactInfo.phone}`} 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-brand-gold text-brand-dark px-5 py-2.5 rounded-full hover:bg-brand-gold/90 transition-all font-bold shadow-lg shadow-brand-gold/20"
          >
            <Phone size={16} />
            {t.callNow}
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="text-brand-cream uppercase font-bold text-sm"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button className="text-brand-cream" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-dark border-b border-brand-gold/10 p-6 md:hidden flex flex-col gap-6"
          >
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-xl py-2">{t.services}</a>
            <a href="#benefits" onClick={() => setMobileMenuOpen(false)} className="text-xl py-2">{t.benefits}</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-xl py-2">{t.portfolio}</a>
            <div className="flex flex-col gap-4 mt-2">
              <a 
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  if (el.href.includes(contactInfo.phone)) {
                    el.href = `tel:${decode(contactInfo.phone)}`;
                  }
                }}
                onClick={(e) => {
                  e.currentTarget.href = `tel:${decode(contactInfo.phone)}`;
                }}
                href={`tel:${contactInfo.phone}`} 
                className="flex items-center justify-center gap-2 bg-brand-gold text-brand-dark px-6 py-5 rounded-xl font-bold min-h-[56px]"
              >
                <Phone size={20} />
                {t.callNow}
              </a>
              <a 
                onMouseEnter={(e) => {
                   const el = e.currentTarget;
                   if (el.href.includes(contactInfo.whatsappNumber)) {
                     el.href = `https://wa.me/${decode(contactInfo.whatsappNumber)}?text=${encodeURIComponent(translations[lang].whatsapp.message)}`;
                   }
                }}
                onClick={(e) => {
                   e.currentTarget.href = `https://wa.me/${decode(contactInfo.whatsappNumber)}?text=${encodeURIComponent(translations[lang].whatsapp.message)}`;
                }}
                href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(translations[lang].whatsapp.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-5 rounded-xl font-bold min-h-[56px]"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
});

const Hero = ({ lang }: { lang: Language }) => {
  const t = translations[lang].hero;
  return (
    <section className="relative min-h-screen flex items-center pt-40 md:pt-48 pb-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600" 
          alt="Modern House" 
          className="w-full h-full object-cover scale-105"
          fetchPriority="high"
          loading="eager"
        />
        {/* Animated Dust/Particles feel */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #B07D34 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-widest mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-brand-gold animate-pulse" />
              {t.badge}
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-brand-cream"
            >
              {t.title}<span className="text-brand-gold italic">{t.titlePremium}</span>{lang === 'en' ? t.titleSuffix : ''}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-brand-cream/70 mb-10 max-w-2xl leading-relaxed"
            >
              {t.subtitle}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.a 
                onMouseEnter={(e) => {
                   const el = e.currentTarget;
                   const decoded = decode(contactInfo.whatsappNumber);
                   if (el.href.includes(contactInfo.whatsappNumber)) {
                     el.href = `https://wa.me/${decoded}?text=${encodeURIComponent(translations[lang].whatsapp.message)}`;
                   }
                }}
                onClick={(e) => {
                   const decoded = decode(contactInfo.whatsappNumber);
                   e.currentTarget.href = `https://wa.me/${decoded}?text=${encodeURIComponent(translations[lang].whatsapp.message)}`;
                }}
                href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(translations[lang].whatsapp.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-brand-gold text-brand-dark px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl shadow-brand-gold/30"
              >
                <MessageCircle size={20} />
                {t.estimateBtn}
              </motion.a>
              <motion.a 
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  if (el.href.includes(contactInfo.phone)) {
                    el.href = `tel:${decode(contactInfo.phone)}`;
                  }
                }}
                onClick={(e) => {
                  e.currentTarget.href = `tel:${decode(contactInfo.phone)}`;
                }}
                href={`tel:${contactInfo.phone}`}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white/5 border border-brand-cream/20 text-brand-cream px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm"
              >
                <Phone size={20} />
                {lang === 'es' ? 'Llamar ahora' : 'Call now'}
              </motion.a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-brand-cream/10"
            >
              {[
                { label: t.features.licensed, icon: <CheckCircle2 className="text-brand-gold" size={18} /> },
                { label: t.features.estimates, icon: <CheckCircle2 className="text-brand-gold" size={18} /> },
                { label: t.features.fast, icon: <CheckCircle2 className="text-brand-gold" size={18} /> },
                { label: t.features.quality, icon: <CheckCircle2 className="text-brand-gold" size={18} /> },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium text-brand-cream/80">
                  {item.icon}
                  {item.label}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BeforeAfter = ({ lang }: { lang: Language }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const t = translations[lang].beforeAfter;

  return (
    <section id="showcase" className="py-24 bg-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">{t.title}</h2>
            <p className="text-brand-cream/60 text-lg mb-8 max-w-xl">{t.subtitle}</p>
            
            <div className="bg-brand-dark/50 border border-brand-cream/10 p-8 rounded-3xl">
              <h4 className="text-xl font-bold mb-6 text-brand-gold flex items-center gap-2">
                <Sparkles size={20} />
                {t.featuresTitle}
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {t.features?.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-brand-cream/90 font-medium">
                    <CheckCircle2 size={18} className="text-brand-gold shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-brand-gold/20 select-none group">
            {/* After Image */}
            <div className="absolute inset-0">
              <img 
                src="https://raw.githubusercontent.com/websprintt/JCH-Impact/4dd7a5bb1441d497e4672d1c48dcab9bbf5ef7c6/img/casa-nueva.webp" 
                alt="After Installation" 
                className="w-full h-full object-cover"
                loading="lazy"
                width={800}
                height={500}
              />
              <div className="absolute top-4 right-4 bg-brand-gold text-brand-dark px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">{t.after}</div>
            </div>

            {/* Before Image */}
            <div 
              className="absolute inset-0 z-10" 
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)`, willChange: 'clip-path' }}
            >
              <img 
                src="https://raw.githubusercontent.com/websprintt/JCH-Impact/main/img/casa%20vieja.webp" 
                alt="Before Installation" 
                className="w-full h-full object-cover grayscale brightness-75"
                loading="lazy"
                width={800}
                height={500}
              />
              <div className="absolute top-4 left-4 bg-brand-dark text-brand-cream px-3 py-1 rounded text-xs font-bold uppercase tracking-wider border border-brand-cream/20">{t.before}</div>
            </div>

            {/* Slider Controls */}
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
              <div 
                className="absolute h-full w-1 bg-brand-gold group-active:w-1.5"
                style={{ left: `${sliderPos}%`, willChange: 'left' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center shadow-xl shadow-brand-dark/50 cursor-ew-resize pointer-events-auto border-4 border-brand-dark">
                  <div className="flex gap-0.5">
                      <div className="w-1 h-3 bg-brand-dark rounded-full" />
                      <div className="w-1 h-3 bg-brand-dark rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPos} 
              onChange={(e) => setSliderPos(parseInt(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = React.memo(({ lang }: { lang: Language }) => {
  const t = translations[lang].services;
  const icons = useMemo(() => [
    <AppWindow size={32} />,
    <Hammer size={28} />,
    <ShieldCheck size={28} />,
    <LayoutGrid size={28} />,
    <Briefcase size={28} />,
  ], []);
  
  const images = useMemo(() => [
    "https://raw.githubusercontent.com/websprintt/JCH-Impact/86e6f811260a58df8e1ea8e40f9fb7b5d2adf2ac/img/service-1.webp",
    "https://raw.githubusercontent.com/websprintt/JCH-Impact/86e6f811260a58df8e1ea8e40f9fb7b5d2adf2ac/img/service-2.webp",
    "https://raw.githubusercontent.com/websprintt/JCH-Impact/86e6f811260a58df8e1ea8e40f9fb7b5d2adf2ac/img/service-3.webp",
    "https://raw.githubusercontent.com/websprintt/JCH-Impact/86e6f811260a58df8e1ea8e40f9fb7b5d2adf2ac/img/service-4.webp",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  ], []);

  const list = useMemo(() => t.list.map((item, i) => ({
    ...item,
    icon: icons[i],
    image: images[i]
  })), [t.list, icons, images]);

  return (
    <section id="services" className="py-24 bg-brand-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-brand-gold font-bold tracking-widest text-sm mb-4 block">
            {lang === 'es' ? 'EXCELENCIA EN CADA DETALLE' : 'EXCELLENCE IN EVERY DETAIL'}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 italic leading-tight">
            {t.title}<span className="text-brand-gold italic">{t.titleItalic}</span>
          </h2>
          <p className="text-brand-cream/60 text-lg">{t.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:auto-rows-[320px]">
          {list.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-[2rem] overflow-hidden group border border-white/5 bg-brand-shadow/20 ${
                i === 0 
                  ? 'md:col-span-2 lg:row-span-2 min-h-[500px] md:min-h-full' 
                  : 'col-span-1 min-h-[300px] md:min-h-full'
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-30 md:opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60" 
                  loading="lazy"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent z-10" />
              </div>

              {/* Content */}
              <div className={`relative z-20 h-full flex flex-col p-6 md:p-8 transition-transform duration-300 ${i === 0 ? 'justify-end' : 'justify-between'}`}>
                {i !== 0 && (
                  <div className="p-3 bg-brand-gold/10 backdrop-blur-md rounded-2xl w-fit mb-4 text-brand-gold">
                    {service.icon}
                  </div>
                )}
                
                <div>
                  {i === 0 && (
                    <div className="mb-4 md:mb-6">
                      <div className="p-3 md:p-4 bg-brand-gold text-brand-dark rounded-2xl md:rounded-3xl w-fit shadow-2xl mb-4 md:mb-6">
                        {service.icon}
                      </div>
                      <span className="text-brand-gold font-bold text-[10px] md:text-xs tracking-widest uppercase mb-2 md:mb-4 block">
                        {lang === 'es' ? 'SERVICIO MÁS SOLICITADO' : 'MOST REQUESTED SERVICE'}
                      </span>
                    </div>
                  )}
                  
                  <h3 className={`font-bold italic transition-colors group-hover:text-brand-gold ${i === 0 ? 'text-2xl md:text-5xl mb-3 md:mb-4 leading-tight' : 'text-lg md:text-xl mb-2'}`}>
                    {service.title}
                  </h3>
                  
                  <p className={`text-brand-cream/90 leading-relaxed mb-4 ${i === 0 ? 'text-base md:text-lg max-w-xl mb-6 md:mb-8' : 'text-xs italic opacity-100'}`}>
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-white/10 border border-white/20 rounded-full text-[9px] md:text-[10px] font-bold text-brand-gold uppercase tracking-wider whitespace-nowrap">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

const Benefits = ({ lang }: { lang: Language }) => {
  const t = translations[lang].benefits;
  const icons = [
    <ShieldCheck className="text-brand-gold" size={24} />,
    <CheckCircle2 className="text-brand-gold" size={24} />,
    <Sparkles className="text-brand-gold" size={24} />,
    <Zap className="text-brand-gold" size={24} />,
    <Shield className="text-brand-gold" size={24} />,
    <TrendingUp className="text-brand-gold" size={24} />
  ];

  const items = t.items.map((item, i) => ({
    ...item,
    icon: icons[i]
  }));

  return (
    <section id="benefits" className="py-32 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-brand-gold/5 blur-[100px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                        <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
                          {lang === 'es' ? 'Nuestra Diferencia' : 'Our Difference'}
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight italic">
                          {t.title}<span className="text-brand-gold">{t.titleItalic}</span>
                        </h2>
                        <p className="text-lg text-brand-cream/60 mb-12 leading-relaxed">
                          {t.subtitle}
                        </p>
                    </motion.div>
                    
                    <motion.div 
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      variants={{
                        animate: {
                          transition: {
                            staggerChildren: 0.1
                          }
                        }
                      }}
                      className="grid sm:grid-cols-2 gap-x-12 gap-y-10"
                    >
                        {items.map((item, i) => (
                            <motion.div 
                              key={i} 
                              variants={{
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0 }
                              }}
                              className={`group relative ${i === 2 ? 'sm:col-span-1' : ''}`}
                            >
                                <div className="flex items-start gap-4 mb-3">
                                    <div className={`shrink-0 w-10 h-10 flex items-center justify-center rounded-xl p-2 transition-all ${i === 2 ? 'bg-brand-gold text-brand-dark scale-110 shadow-lg shadow-brand-gold/20' : 'bg-brand-gold/10'}`}>
                                        {React.cloneElement(item.icon as React.ReactElement, { 
                                          className: i === 2 ? 'text-brand-dark' : 'text-brand-gold'
                                        })}
                                    </div>
                                    <div>
                                      <h4 className={`font-bold italic mb-1 ${i === 2 ? 'text-brand-gold text-lg' : 'text-brand-cream'}`}>
                                          {item.title}
                                      </h4>
                                      <p className={`text-xs leading-relaxed ${i === 2 ? 'text-brand-cream/80' : 'text-brand-cream/40'}`}>
                                          {item.description}
                                      </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="relative lg:pl-10 mt-16 lg:mt-0"
                >
                    <div className="relative aspect-[4/5] max-h-[600px] bg-brand-gold/5 rounded-[3rem] overflow-hidden border border-white/5 group">
                         <img 
                            src="https://raw.githubusercontent.com/websprintt/JCH-Impact/cbf1412cd6ee6b4d77719da0f9fe4881226270c1/img/diferencia.webp" 
                            alt="Quality Work" 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            loading="lazy"
                            width={500}
                            height={600}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                    </div>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="absolute -bottom-4 -right-4 md:-right-8 bg-brand-gold p-5 md:p-6 rounded-[2rem] shadow-2xl"
                    >
                        <div className="flex flex-col">
                            <span className="text-brand-dark font-display font-bold text-xl md:text-2xl italic leading-none whitespace-nowrap">{t.fastBadge}</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

const Gallery = ({ lang }: { lang: Language }) => {
  const t = translations[lang].gallery;
  const [activeCategory, setActiveCategory] = useState(t.categories[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  interface Project {
    title: string;
    category: string;
    image: string;
    videoUrl?: string;
  }

  const filteredProjects = useMemo(() => {
    return (t.projects as Project[]).filter(p => 
      p.category === activeCategory || 
      (activeCategory === 'Windows' && p.category === 'Ventanas') || 
      (activeCategory === 'Ventanas' && p.category === 'Windows') ||
      (activeCategory === 'Doors' && p.category === 'Puertas') || 
      (activeCategory === 'Puertas' && p.category === 'Doors') ||
      (activeCategory === 'Commercial' && p.category === 'Comercial') ||
      (activeCategory === 'Comercial' && p.category === 'Commercial')
    );
  }, [t.projects, activeCategory]);

  // Clone items for infinite loop
  const displayProjects = useMemo(() => {
    if (filteredProjects.length === 0) return [];
    return [...filteredProjects, ...filteredProjects.slice(0, itemsPerPage)];
  }, [filteredProjects, itemsPerPage]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsTransitioning(false);
    setCurrentIndex(0);
    setTimeout(() => setIsTransitioning(true), 50);
  }, [activeCategory]);

  const nextSlide = useCallback(() => {
    if (filteredProjects.length <= itemsPerPage) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  }, [filteredProjects.length, itemsPerPage]);

  const prevSlide = useCallback(() => {
    if (filteredProjects.length <= itemsPerPage) return;

    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(filteredProjects.length);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(filteredProjects.length - 1);
      }, 50);
    } else {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex, filteredProjects.length, itemsPerPage]);

  const handleAnimationComplete = () => {
    if (currentIndex >= filteredProjects.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    if (isHovered || filteredProjects.length <= itemsPerPage || activeCategory === 'Commercial' || activeCategory === 'Comercial') return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [nextSlide, isHovered, filteredProjects.length, itemsPerPage, activeCategory]);

  return (
    <section id="portfolio" className="py-32 bg-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
              {lang === 'es' ? 'Nuestro Portafolio' : 'Our Portfolio'}
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 italic">
              {t.title}<span className="text-brand-gold">{t.titleItalic}</span>
            </h2>
            <p className="text-xl text-brand-cream/60 max-w-2xl mx-auto mb-12">
              {t.subtitle}
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
            <div className="flex flex-wrap justify-center gap-4">
              {t.categories.map((cat, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-2xl font-bold text-sm transition-all border ${
                    activeCategory === cat 
                      ? 'bg-brand-gold text-brand-dark border-brand-gold shadow-lg shadow-brand-gold/20' 
                      : 'bg-white/5 text-brand-cream/60 border-white/10 hover:border-brand-gold/30'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        <div 
          className="relative group/gallery"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Side Navigation Buttons */}
          {filteredProjects.length > itemsPerPage && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all bg-brand-dark/80 backdrop-blur-md z-20 -translate-x-2 md:-translate-x-12 opacity-0 group-hover/gallery:opacity-100 shadow-xl"
              >
                <ChevronLeft size={28} />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all bg-brand-dark/80 backdrop-blur-md z-20 translate-x-2 md:translate-x-12 opacity-0 group-hover/gallery:opacity-100 shadow-xl"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}

          <div className="overflow-hidden">
            <motion.div 
              animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
              transition={isTransitioning ? { type: "spring", damping: 25, stiffness: 120 } : { duration: 0 }}
              onAnimationComplete={handleAnimationComplete}
              className="flex"
            >
              {(displayProjects as Project[]).map((project, i) => (
                <div
                  key={`${activeCategory}-${project.title}-${i}`}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <motion.div
                    onClick={() => {
                      if (project.videoUrl) {
                        setSelectedVideo(project.videoUrl);
                      }
                    }}
                    className={`group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/5 bg-brand-dark shadow-2xl ${
                      project.videoUrl ? 'cursor-pointer' : ''
                    }`}
                  >
                    <div className="absolute inset-0 bg-brand-dark">
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                          loading="lazy"
                          width={400}
                          height={500}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-dark via-brand-dark to-brand-gold/10">
                          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #B07D34 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                          <Building2 size={64} className="text-brand-gold/20" />
                        </div>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Video Play Overlay */}
                    {project.videoUrl && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-brand-gold text-brand-dark rounded-full flex items-center justify-center pl-1 shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                          <Play size={28} fill="currentColor" />
                        </div>
                      </div>
                    )}

                    <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-brand-gold font-bold uppercase tracking-widest text-[10px] mb-2 block">
                        {project.category}
                      </span>
                      <h4 className="text-xl md:text-2xl font-bold italic text-brand-cream group-hover:text-white transition-colors line-clamp-2">
                        {project.title}
                      </h4>
                      <div className="w-12 h-1.5 bg-brand-gold mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-brand-cream/40 font-medium mb-8">
            {lang === 'es' ? '¿Quieres ver más de nuestro trabajo?' : 'Want to see more of our work?'}
          </p>
          <a 
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              if (el.href.includes(contactInfo.phone)) {
                el.href = `tel:${decode(contactInfo.phone)}`;
              }
            }}
            onClick={(e) => {
              e.currentTarget.href = `tel:${decode(contactInfo.phone)}`;
            }}
            href={`tel:${contactInfo.phone}`}
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg hover:border-brand-gold transition-all"
          >
            <Phone size={20} className="text-brand-gold" />
            {lang === 'es' ? 'Consultar sobre su proyecto' : 'Consult about your project'}
          </a>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/95 backdrop-blur-xl"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-[450px] h-fit max-h-[90vh] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black"
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-brand-dark/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-dark transition-all"
                onClick={() => setSelectedVideo(null)}
              >
                <X size={24} />
              </button>
              {selectedVideo.includes('vimeo.com') || selectedVideo.includes('gumlet.io') || selectedVideo.includes('youtube.com') || selectedVideo.includes('youtu.be') || selectedVideo.includes('drive.google.com') ? (
                <iframe
                  src={
                    selectedVideo.includes('youtube.com') || selectedVideo.includes('youtu.be') 
                      ? `${selectedVideo}${selectedVideo.includes('?') ? '&' : '?'}autoplay=0&mute=0&loop=1&playlist=${selectedVideo.split('/').pop()?.split('?')[0]}&controls=1&rel=0`
                    : selectedVideo.includes('drive.google.com')
                      ? selectedVideo
                      : `${selectedVideo}${selectedVideo.includes('?') ? '&' : '?'}autoplay=0&muted=0&loop=1&dnt=1`
                  }
                  className="w-full h-[100.1%] absolute inset-0"
                  style={{ border: 0 }}
                  allow="autoplay; fullscreen; picture-in-picture; accelerometer; gyroscope; encrypted-media; clipboard-write; web-share"
                  allowFullScreen
                  title="Video Player"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              ) : selectedVideo.toLowerCase().endsWith('.webp') || selectedVideo.toLowerCase().endsWith('.jpg') || selectedVideo.toLowerCase().endsWith('.png') ? (
                <img 
                  src={selectedVideo} 
                  alt="Project Detail" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <video 
                  className="w-full h-full object-cover" 
                  controls 
                  playsInline
                  preload="auto"
                >
                  <source src={selectedVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const AreasServed = ({ lang }: { lang: Language }) => {
  const t = translations[lang].areasServed;
  return (
    <section className="py-24 bg-brand-dark/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 blur-[80px] rounded-full" />
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">
            <span className="text-brand-gold">{t.title.split(' ')[0]}</span> {t.title.split(' ').slice(1).join(' ')}
          </h2>
          <p className="text-brand-cream/60 text-lg mb-12 max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-4">
          {t.cities.map((city, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -3, backgroundColor: 'rgba(255, 255, 255, 0.08)', borderColor: 'rgba(176, 125, 52, 0.3)' }}
              className="bg-white/5 border border-white/5 py-3 px-4 rounded-xl transition-all cursor-default flex items-center justify-center gap-3 group"
            >
              <MapPin size={14} className="text-brand-gold opacity-50 group-hover:opacity-100 transition-opacity" />
              <span className="text-sm md:text-base font-bold tracking-tight text-brand-cream/80 group-hover:text-brand-cream transition-colors">{city}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactCTA = ({ lang }: { lang: Language }) => {
  const t = translations[lang].cta;
  return (
    <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gold/5 z-0" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-6 relative z-10 text-center"
        >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-brand-cream">{t.title}</h2>
            <p className="text-xl text-brand-cream/70 mb-12 max-w-2xl mx-auto">{t.subtitle}</p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a 
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    if (el.href.includes(contactInfo.phone)) {
                      el.href = `tel:${decode(contactInfo.phone)}`;
                    }
                  }}
                  onClick={(e) => {
                    e.currentTarget.href = `tel:${decode(contactInfo.phone)}`;
                  }}
                  href={`tel:${contactInfo.phone}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 bg-brand-gold text-brand-dark px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-2xl shadow-brand-gold/40"
                >
                    <Phone size={24} />
                    {t.call}
                </motion.a>
                <motion.a 
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    const decoded = decode(contactInfo.whatsappNumber);
                    if (el.href.includes(contactInfo.whatsappNumber)) {
                      el.href = `https://wa.me/${decoded}?text=${encodeURIComponent(translations[lang].whatsapp.message)}`;
                    }
                  }}
                  onClick={(e) => {
                    const decoded = decode(contactInfo.whatsappNumber);
                    e.currentTarget.href = `https://wa.me/${decoded}?text=${encodeURIComponent(translations[lang].whatsapp.message)}`;
                  }}
                  href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(translations[lang].whatsapp.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-2xl shadow-green-600/20"
                >
                    <MessageCircle size={24} />
                    WhatsApp
                </motion.a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-6 text-sm font-semibold opacity-70">
                <a 
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    const decoded = decode(contactInfo.whatsappNumber);
                    if (el.href.includes(contactInfo.whatsappNumber)) {
                      // @ts-ignore - translations structure is known
                      el.href = `https://wa.me/${decoded}?text=${encodeURIComponent(translations[lang].whatsapp.financeMessage)}`;
                    }
                  }}
                  onClick={(e) => {
                    const decoded = decode(contactInfo.whatsappNumber);
                    // @ts-ignore - translations structure is known
                    e.currentTarget.href = `https://wa.me/${decoded}?text=${encodeURIComponent(translations[lang].whatsapp.financeMessage)}`;
                  }}
                  href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(translations[lang].whatsapp.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 underline decoration-brand-gold underline-offset-4 cursor-pointer text-brand-cream hover:text-brand-gold transition-colors"
                >
                  {t.finance}
                </a>
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                <a href="#portfolio" className="flex items-center gap-2 cursor-pointer text-brand-cream hover:text-brand-gold transition-colors">{t.projects}</a>
            </div>
        </motion.div>
    </section>
  );
};

const Footer = ({ lang }: { lang: Language }) => {
    const t = translations[lang].footer;
    return (
        <footer className="bg-brand-dark py-20 border-t border-brand-cream/10 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full -mb-48 -mr-48" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 flex items-center justify-center p-2 bg-brand-gold/10 rounded-2xl border border-brand-gold/20">
                                <img 
                                  src="https://raw.githubusercontent.com/websprintt/JCH-Impact/fb1f6066859f1a3149320d5a12860968dd59f495/img/Logo%20solo%20sin%20fondo.png" 
                                  alt="JCH Impact Logo" 
                                  className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-2xl font-display font-bold text-brand-cream">
                                JCH.<span className="text-brand-gold">Impact</span>
                            </span>
                        </div>
                        <p className="text-brand-cream/50 leading-relaxed text-sm">
                            {lang === 'es' 
                                ? 'Protegiendo hogares y negocios en el sur de Florida con soluciones de impacto de alta calidad.' 
                                : 'Protecting homes and businesses across South Florida with high-quality impact solutions.'}
                        </p>
                    </div>

                    {/* Contact Column */}
                    <div className="flex flex-col">
                        <h4 className="text-brand-gold font-bold uppercase tracking-widest text-[10px] mb-8">{t.contact}</h4>
                        <div className="space-y-5">
                            <a 
                              onMouseEnter={(e) => {
                                const el = e.currentTarget;
                                if (el.href.includes(contactInfo.phone)) {
                                  el.href = `tel:${decode(contactInfo.phone)}`;
                                }
                              }}
                              onClick={(e) => {
                                e.currentTarget.href = `tel:${decode(contactInfo.phone)}`;
                              }}
                              href={`tel:${contactInfo.phone}`}
                              className="flex items-center gap-3 group text-brand-cream/70 hover:text-brand-gold transition-colors"
                            >
                                <div className="w-9 h-9 bg-brand-gold/10 rounded-xl flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-dark transition-all shrink-0">
                                    <Phone size={18} />
                                </div>
                                <span className="font-bold text-lg">(786) 234-5403</span>
                            </a>
                            <a 
                              href={`mailto:${decode(contactInfo.email)}`}
                              className="flex items-center gap-3 group text-brand-cream/70 hover:text-brand-gold transition-colors"
                            >
                                <div className="w-9 h-9 bg-brand-gold/10 rounded-xl flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-dark transition-all shrink-0">
                                    <Mail size={18} />
                                </div>
                                <span className="text-sm font-medium break-all">jaazielgblanco@gmail.com</span>
                            </a>
                            <div className="flex items-center gap-3 text-brand-cream/70">
                                <div className="w-9 h-9 bg-brand-gold/10 rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin size={18} className="text-brand-gold" />
                                </div>
                                <span className="text-sm font-medium">{t.address}</span>
                            </div>
                        </div>
                    </div>

                    {/* Service Area Column */}
                    <div>
                        <h4 className="text-brand-gold font-bold uppercase tracking-widest text-[10px] mb-8">{t.serviceTitle}</h4>
                        <p className="text-brand-cream font-bold text-xl mb-4 leading-tight">{t.serviceArea}</p>
                        <p className="text-brand-cream/40 text-sm leading-relaxed">
                            {lang === 'es' 
                              ? 'Desde Homestead hasta Fort Lauderdale. Cubrimos todo el condado de Miami-Dade y Broward con servicio prioritario.' 
                              : 'From Homestead to Fort Lauderdale. Covering all of Miami-Dade and Broward county with priority service.'}
                        </p>
                    </div>

                    {/* Quick Access Buttons Column */}
                    <div className="flex flex-col">
                        <h4 className="text-brand-gold font-bold uppercase tracking-widest text-[10px] mb-8">
                            {lang === 'es' ? 'Acceso Rápido' : 'Quick Access'}
                        </h4>
                        <div className="flex flex-col gap-4">
                            <motion.a 
                              onMouseEnter={(e) => {
                                const el = e.currentTarget;
                                if (el.href.includes(contactInfo.phone)) {
                                  el.href = `tel:${decode(contactInfo.phone)}`;
                                }
                              }}
                              onClick={(e) => {
                                e.currentTarget.href = `tel:${decode(contactInfo.phone)}`;
                              }}
                              href={`tel:${contactInfo.phone}`}
                              whileHover={{ x: 5 }}
                              className="flex items-center justify-center gap-3 bg-brand-gold text-brand-dark py-4 rounded-xl font-bold transition-all shadow-xl shadow-brand-gold/10"
                            >
                                <Phone size={20} />
                                {lang === 'es' ? 'Llamar Ahora' : 'Call Now'}
                            </motion.a>
                            <motion.a 
                              onMouseEnter={(e) => {
                                const el = e.currentTarget;
                                const decoded = decode(contactInfo.whatsappNumber);
                                if (el.href.includes(contactInfo.whatsappNumber)) {
                                  el.href = `https://wa.me/${decoded}?text=${encodeURIComponent(translations[lang].whatsapp.message)}`;
                                }
                              }}
                              onClick={(e) => {
                                const decoded = decode(contactInfo.whatsappNumber);
                                e.currentTarget.href = `https://wa.me/${decoded}?text=${encodeURIComponent(translations[lang].whatsapp.message)}`;
                              }}
                              href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(translations[lang].whatsapp.message)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ x: 5 }}
                              className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-xl font-bold transition-all shadow-xl shadow-green-500/10"
                            >
                                <MessageCircle size={20} />
                                WhatsApp
                            </motion.a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-brand-cream/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] text-brand-cream/30 uppercase tracking-[0.2em] font-bold">
                        {t.rights}
                    </p>
                    <div className="flex gap-6 text-[10px] text-brand-gold/60 font-bold uppercase tracking-widest">
                        <span className="hover:text-brand-gold cursor-default transition-colors">Licensed & Insured</span>
                        <span className="hover:text-brand-gold cursor-default transition-colors">Residential & Commercial</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default function App() {
  const [lang, setLang] = useState<Language>('es');

  useEffect(() => {
    // Protocol Enforcement: Force HTTPS
    if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost') {
      window.location.href = window.location.href.replace('http:', 'https:');
    }
  }, []);

  return (
    <div className="selection:bg-brand-gold selection:text-brand-dark bg-brand-dark min-h-screen font-sans text-brand-cream">
      <SEO lang={lang} />
      <TopBar lang={lang} />
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <BeforeAfter lang={lang} />
      <Services lang={lang} />
      <Benefits lang={lang} />
      <Gallery lang={lang} />
      <AreasServed lang={lang} />
      <ContactCTA lang={lang} />
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </div>
  );
}
