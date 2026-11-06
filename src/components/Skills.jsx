import React, { useState } from 'react';
import { Layout, Server, DollarSign, Wrench, CheckCircle } from 'lucide-react';
import { translations } from '../data/translations.js';
import { skillsData } from '../data/portfolioData.js';

export default function Skills({ lang }) {
  const t = translations[lang].skills;
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { key: 'all', label: lang === 'am' ? 'ሁሉም ክህሎቶች' : 'All Domains', icon: CheckCircle },
    { key: 'frontend', label: t.categories.frontend, icon: Layout },
    { key: 'backend', label: t.categories.backend, icon: Server },
    { key: 'finance', label: t.categories.finance, icon: DollarSign },
    { key: 'tools', label: t.categories.tools, icon: Wrench }
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return [
        { catKey: 'frontend', catTitle: t.categories.frontend, items: skillsData.frontend },
        { catKey: 'backend', catTitle: t.categories.backend, items: skillsData.backend },
        { catKey: 'finance', catTitle: t.categories.finance, items: skillsData.finance },
        { catKey: 'tools', catTitle: t.categories.tools, items: skillsData.tools }
      ];
    }
    return [
      {
        catKey: activeCategory,
        catTitle: t.categories[activeCategory],
        items: skillsData[activeCategory]
      }
    ];
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-800/80 bg-[#0f172a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-2">
            <span>02</span>
            <span className="text-slate-600">·</span>
            <span>{lang === 'am' ? 'የቴክኒክ እና የፋይናንስ ብቃት' : 'Expertise & Capabilities'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {t.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 bg-slate-900/80 border border-slate-800 rounded-xl w-fit">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display Grids */}
        <div className="space-y-12">
          {getFilteredSkills().map((group) => (
            <div key={group.catKey} className="space-y-4">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {group.catTitle}
                </h3>
                <div className="h-px flex-1 bg-slate-800/80" />
                <span className="text-xs font-mono text-slate-400">
                  {group.items.length} competencies
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((skill, index) => (
                  <div
                    key={index}
                    className="group relative rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-950/30"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-white text-base group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono font-medium text-slate-400 group-hover:text-slate-300">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
