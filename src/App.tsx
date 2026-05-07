/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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
  Star,
  Quote,
  Languages,
  MessageCircle
} from 'lucide-react';
import { Language, translations, contactInfo } from './translations';

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

const Navbar = ({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/95 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center p-1">
            <img 
              src="https://raw.githubusercontent.com/websprintt/JCH-Impact/fb1f6066859f1a3149320d5a12860968dd59f495/img/Logo%20solo%20sin%20fondo.png" 
              alt="JCH Impact Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter text-brand-cream hidden sm:block">
            JCH <span className="text-brand-gold">IMPACT</span>
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
            className="flex items-center gap-2 bg-brand-gold text-brand-dark px-5 py-2.5 rounded-full hover:bg-brand-gold/90 transition-all shadow-lg shadow-brand-gold/20"
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
};

const Hero = ({ lang }: { lang: Language }) => {
  const t = translations[lang].hero;
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern House" 
          className="w-full h-full object-cover scale-105"
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
    <section id="portfolio" className="py-24 bg-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h2>
          <p className="text-brand-cream/60 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="relative h-[500px] w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-brand-gold/20 select-none group">
          {/* After Image */}
          <div className="absolute inset-0">
            <img 
              src="https://raw.githubusercontent.com/websprintt/JCH-Impact/4dd7a5bb1441d497e4672d1c48dcab9bbf5ef7c6/img/casa-nueva.webp" 
              alt="After Installation" 
              className="w-full h-full object-cover"
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
    </section>
  );
};

const Services = ({ lang }: { lang: Language }) => {
  const t = translations[lang].services;
  const icons = [
    <AppWindow className="text-brand-gold" size={32} />,
    <DoorOpen className="text-brand-gold" size={32} />,
    <Sparkles className="text-brand-gold" size={32} />,
    <Building2 className="text-brand-gold" size={32} />,
  ];
  const images = [
    "https://raw.githubusercontent.com/websprintt/JCH-Impact/737c29b4f8801aaf9a41af2d66544bc327c33e78/img/service-1.webp",
    "https://raw.githubusercontent.com/websprintt/JCH-Impact/737c29b4f8801aaf9a41af2d66544bc327c33e78/img/service-2.webp",
    "https://raw.githubusercontent.com/websprintt/JCH-Impact/737c29b4f8801aaf9a41af2d66544bc327c33e78/img/service-3.webp",
    "https://raw.githubusercontent.com/websprintt/JCH-Impact/737c29b4f8801aaf9a41af2d66544bc327c33e78/img/service-4.webp"
  ];

  const list = t.list.map((item, i) => ({
    ...item,
    icon: icons[i],
    image: images[i]
  }));

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 italic">
              {t.title}<span className="text-brand-gold italic">{t.titleItalic}</span>
            </h2>
            <p className="text-brand-cream/60">{t.subtitle}</p>
          </div>
          <motion.button 
            whileHover={{ x: 10 }}
            className="text-brand-gold font-bold flex items-center gap-2 group"
          >
            {t.viewAll} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {list.map((service, i) => (
            <motion.div 
              key={i}
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              whileHover={{ y: -10 }}
              className="bg-brand-shadow/10 border border-brand-cream/5 rounded-3xl overflow-hidden group transition-all hover:shadow-2xl hover:shadow-brand-gold/10"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className={`w-full h-full object-cover transition-transform duration-700 ${i < 3 ? 'scale-[1.8] object-left group-hover:scale-[1.9]' : 'group-hover:scale-110'}`} 
                />
                <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/20 transition-colors" />
              </div>
              <div className="p-8">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-brand-cream/60 text-sm mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs font-semibold text-brand-cream/80">
                      <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Benefits = ({ lang }: { lang: Language }) => {
  const t = translations[lang].benefits;
  const icons = [
    <Zap className="text-brand-gold" />,
    <Shield className="text-brand-gold" />,
    <Star className="text-brand-gold" />,
    <TrendingUp className="text-brand-gold" />
  ];

  const items = t.items.map((item, i) => ({
    ...item,
    icon: icons[i]
  }));

  return (
    <section id="benefits" className="py-24 bg-brand-dark relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <motion.h2 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
                    >
                      {t.title}<span className="text-brand-gold italic">{t.titleItalic}</span>
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className="text-xl text-brand-cream/60 mb-12"
                    >
                      {t.subtitle}
                    </motion.p>
                    
                    <motion.div 
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      variants={{
                        animate: {
                          transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.3
                          }
                        }
                      }}
                      className="grid sm:grid-cols-2 gap-8"
                    >
                        {items.map((item, i) => (
                            <motion.div 
                              key={i} 
                              variants={{
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0 }
                              }}
                              className="space-y-3"
                            >
                                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center p-3 border border-brand-gold/20 shadow-lg">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg font-bold">{item.title}</h4>
                                <p className="text-sm text-brand-cream/50 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, rotate: 10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="relative"
                >
                    <div className="aspect-square bg-brand-gold/10 rounded-[3rem] overflow-hidden border-2 border-brand-gold/20">
                         <img 
                            src="https://raw.githubusercontent.com/websprintt/JCH-Impact/737c29b4f8801aaf9a41af2d66544bc327c33e78/img/vista.webp" 
                            alt="Luxury Kitchen Windows" 
                            className="w-full h-full object-cover -rotate-3 scale-110"
                        />
                    </div>
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                      className="absolute -bottom-10 -left-10 bg-brand-gold p-8 rounded-3xl shadow-2xl max-w-[250px] hidden md:block"
                    >
                        <p className="text-brand-dark font-display font-bold text-3xl mb-1">{t.fastBadge}</p>
                        <p className="text-brand-dark/80 font-medium">{t.fastBadgeSub}</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

const SocialProof = ({ lang }: { lang: Language }) => {
  const t = translations[lang].social;

  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          {t.title}
        </motion.h2>
        
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
          className="grid md:grid-cols-3 gap-8"
        >
          {t.testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              variants={{
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 }
              }}
              whileHover={{ y: -5, borderColor: 'rgba(176, 125, 52, 0.4)' }}
              className="bg-brand-dark p-8 rounded-3xl border border-brand-cream/5 relative group transition-all"
            >
              <Quote className="absolute top-6 right-6 text-brand-gold/20 group-hover:text-brand-gold/40 transition-colors" size={40} />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />)}
              </div>
              <p className="text-brand-cream/80 italic mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-bold text-brand-cream">{t.name}</p>
                <p className="text-xs text-brand-gold font-semibold uppercase">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="mt-20 flex flex-wrap justify-center gap-12 grayscale group hover:opacity-100 hover:grayscale-0 transition-all duration-700"
        >
           {t.badges.map((badge, i) => (
             <div key={i} className="text-2xl font-bold font-display">{badge}</div>
           ))}
        </motion.div>
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
                <span className="flex items-center gap-2 underline decoration-brand-gold underline-offset-4 cursor-pointer text-brand-cream">{t.finance}</span>
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                <span className="flex items-center gap-2 cursor-pointer text-brand-cream">{t.projects}</span>
            </div>
        </motion.div>
    </section>
  );
};

const Footer = ({ lang }: { lang: Language }) => {
    const t = translations[lang].footer;
    return (
        <footer className="bg-brand-dark py-12 border-t border-brand-cream/10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center">
                        <img 
                          src="https://raw.githubusercontent.com/websprintt/JCH-Impact/fb1f6066859f1a3149320d5a12860968dd59f495/img/Logo%20solo%20sin%20fondo.png" 
                          alt="JCH Impact Logo" 
                          className="w-full h-full object-contain"
                        />
                    </div>
                    <span className="text-xl font-display font-bold text-brand-cream">
                        JCH <span className="text-brand-gold">IMPACT</span>
                    </span>
                </div>

                <p className="text-xs text-brand-cream/40 max-w-sm text-center md:text-right">
                    {t.rights}
                </p>
            </div>
        </footer>
    )
}

export default function App() {
  const [lang, setLang] = useState<Language>('es');

  useEffect(() => {
    // Protocol Enforcement: Force HTTPS
    if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost') {
      window.location.href = window.location.href.replace('http:', 'https:');
    }
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "JCH Impact Specialists",
    "image": "https://raw.githubusercontent.com/websprintt/JCH-Impact/737c29b4f8801aaf9a41af2d66544bc327c33e78/img/service-1.webp",
    "@id": "",
    "url": window.location.href,
    "telephone": decode(contactInfo.phone),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Miami-Dade Area",
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "postalCode": "33101",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.7617,
      "longitude": -80.1918
    },
    "servesCuisine": "",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": []
  };

  return (
    <div className="selection:bg-brand-gold selection:text-brand-dark bg-brand-dark min-h-screen font-sans text-brand-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <BeforeAfter lang={lang} />
      <Services lang={lang} />
      <Benefits lang={lang} />
      <SocialProof lang={lang} />
      <ContactCTA lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
