import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Sparkles, ArrowRight } from 'lucide-react';
import { translations } from '../data/translations.js';
import Logo from './Logo.jsx';

export default function Navbar({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: t.home },
    { href: '#about', label: t.about },
    { href: '#experience', label: t.experience },
    { href: '#projects', label: t.projects },
    { href: '#cv-studio', label: t.cvStudio },
    { href: '#contact', label: t.contact }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        scrolled
          ? 'bg-[#0f172a]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-[#0f172a]/50 backdrop-blur-sm border-b border-slate-800/30 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Logo & Wordmark */}
          <a
            href="#hero"
            className="whitespace-nowrap shrink-0"
            aria-label="Setegn Derebe Homepage"
          >
            <Logo size="md" text={t.brand} />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Language Toggle & Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/60 hover:bg-slate-700/60 text-xs font-medium text-slate-200 transition-colors"
              title="Switch language / ቋንቋ ይቀይሩ"
              aria-label="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>{lang === 'en' ? 'አማርኛ' : 'English'}</span>
            </button>

            {/* Hire Me CTA */}
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-500 hover:to-indigo-500 transition-all shadow-md shadow-blue-600/20 hover:shadow-blue-600/30 whitespace-nowrap shrink-0"
            >
              <span>{t.hireMe}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger & Lang Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
              className="px-2.5 py-1 rounded-md border border-slate-700 bg-slate-800/70 text-xs text-blue-400 font-medium"
              aria-label="Toggle Language"
            >
              {lang === 'en' ? 'አማ' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#0f172a]/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors shadow-md shadow-blue-600/30"
              >
                {t.hireMe}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
