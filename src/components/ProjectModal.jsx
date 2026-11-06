import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Database, Shield, CreditCard } from 'lucide-react';
import { translations } from '../data/translations.js';

export default function ProjectModal({ project, lang, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;
  const t = translations[lang].projects;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm animate-fade-in no-print">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-10 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
            <span>{lang === 'am' ? project.categoryLabelAmharic : project.categoryLabel}</span>
            {project.featured && <span>· ★ Featured Project</span>}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {lang === 'am' ? project.titleAmharic : project.title}
          </h2>
          <p className="text-sm font-medium text-slate-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Detailed Description */}
        <div className="space-y-6 text-sm text-slate-300 leading-relaxed mb-8">
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono mb-2">
              System Architecture & Problem Solved
            </h4>
            <p className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
              {project.description}
            </p>
          </div>

          {/* Key Engineering Features */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono mb-3">
              Core Technical Capabilities
            </h4>
            <div className="space-y-2.5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/50">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
          >
            {t.closeModal}
          </button>

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium border border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>{t.github}</span>
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/30 transition-colors"
              >
                <span>{t.liveDemo}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
