import React, { useState } from 'react';
import { ExternalLink, Github, Code, ArrowUpRight, Layers, Database, CreditCard, Shield, ChevronRight } from 'lucide-react';
import { translations } from '../data/translations.js';
import { projectsData } from '../data/portfolioData.js';

export default function Projects({ lang, onSelectProject }) {
  const t = translations[lang].projects;
  const [filter, setFilter] = useState('all');

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-20 border-t border-slate-800/80 bg-[#0f172a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-2">
              <span>04</span>
              <span className="text-slate-600">·</span>
              <span>{lang === 'am' ? 'የተሰሩ ስራዎች' : 'Portfolio Showcase'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              {t.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 font-normal">
              {t.subtitle}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl shrink-0 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {t.filterAll}
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                filter === 'web'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {t.filterWeb}
            </button>
            <button
              onClick={() => setFilter('finance')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                filter === 'finance'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {t.filterFinance}
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/50 p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
            >
              {/* Card Top */}
              <div className="space-y-4">
                {/* Category & Featured kicker */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-blue-400">
                    {lang === 'am' ? project.categoryLabelAmharic : project.categoryLabel}
                  </span>
                  {project.featured && (
                    <span className="text-[11px] font-medium text-amber-400 flex items-center gap-1">
                      ★ Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {lang === 'am' ? project.titleAmharic : project.title}
                </h3>

                <p className="text-xs text-slate-400 font-medium">
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {lang === 'am' ? project.summaryAmharic : project.summary}
                </p>

                {/* Tech Stack Chips (clean styling) */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.slice(0, 5).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-slate-950/70 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="px-1.5 py-0.5 text-[11px] font-mono text-slate-400">
                      +{project.tags.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                >
                  <span>{t.viewDetails}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                      title={t.github}
                      aria-label="View on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 transition-colors"
                      title={t.liveDemo}
                      aria-label="View Live Project"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
