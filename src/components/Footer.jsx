import React from 'react';
import { Github, Mail, Phone, ArrowUp } from 'lucide-react';
import { translations } from '../data/translations.js';
import { personalInfo } from '../data/portfolioData.js';
import Logo from './Logo.jsx';

export default function Footer({ lang }) {
  const t = translations[lang].footer;
  const nav = translations[lang].nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0f19] border-t border-slate-800/80 py-12 text-slate-400 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Brand with Logo */}
          <div className="flex items-center gap-4">
            <Logo size="md" text="Setegn.dev" />
            <div className="hidden sm:block border-l border-slate-800 pl-4">
              <span className="text-xs text-slate-400 block">
                {lang === 'am' ? personalInfo.nameAmharic : personalInfo.name}
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                {t.tagline}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            <a href="#hero" className="hover:text-white transition-colors">
              {nav.home}
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              {nav.about}
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              {nav.experience}
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              {nav.projects}
            </a>
            <a href="#cv-studio" className="hover:text-white transition-colors">
              {nav.cvStudio}
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              {nav.contact}
            </a>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="GitHub"
              aria-label="GitHub profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Email"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium"
              title={t.backToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 {t.rights}</p>
          <p className="font-mono text-slate-400">
            Engineered with React & Tailwind CSS · Addis Ababa, Ethiopia
          </p>
        </div>
      </div>
    </footer>
  );
}
