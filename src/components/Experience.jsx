import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle, ExternalLink, Award, FileText } from 'lucide-react';
import { translations } from '../data/translations.js';
import { workExperience, educationAndCredentials } from '../data/portfolioData.js';

export default function Experience({ lang, onOpenCredentialModal }) {
  const t = translations[lang].experience;
  const [activeTab, setActiveTab] = useState('both'); // 'both', 'work', 'education'

  return (
    <section id="experience" className="py-20 border-t border-slate-800/80 bg-[#0c1220]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-2">
            <span>03</span>
            <span className="text-slate-600">·</span>
            <span>{lang === 'am' ? 'የትምህርት እና የስራ ሂደት' : 'Timeline & Credentials'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {t.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* View Filter */}
        <div className="flex items-center gap-2 mb-10 p-1.5 bg-slate-900/80 border border-slate-800 rounded-xl w-fit">
          <button
            onClick={() => setActiveTab('both')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              activeTab === 'both'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            {lang === 'am' ? 'ሁለቱንም እይ' : 'Combined Overview'}
          </button>
          <button
            onClick={() => setActiveTab('work')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              activeTab === 'work'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>{t.tabWork}</span>
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              activeTab === 'education'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>{t.tabEducation}</span>
          </button>
        </div>

        {/* Grid or Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Work Experience Column */}
          {(activeTab === 'both' || activeTab === 'work') && (
            <div className={`space-y-6 ${activeTab === 'work' ? 'lg:col-span-2' : ''}`}>
              <div className="flex items-center gap-3 pb-2 border-b border-slate-800">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t.tabWork}</h3>
                  <span className="text-xs text-slate-400">Software & Financial Institutions</span>
                </div>
              </div>

              <div className="space-y-6">
                {workExperience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 space-y-4 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {lang === 'am' ? exp.roleAmharic : exp.role}
                        </h4>
                        <div className="text-sm font-medium text-blue-400">
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 shrink-0">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {exp.location}
                      </span>
                      <span>·</span>
                      <span className="text-slate-300 font-mono">{exp.type}</span>
                    </div>

                    <ul className="space-y-2 pt-1">
                      {exp.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education & Credentials Column */}
          {(activeTab === 'both' || activeTab === 'education') && (
            <div className={`space-y-6 ${activeTab === 'education' ? 'lg:col-span-2' : ''}`}>
              <div className="flex items-center gap-3 pb-2 border-b border-slate-800">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t.tabEducation}</h3>
                  <span className="text-xs text-slate-400">Verified Degrees & TVET Certifications</span>
                </div>
              </div>

              <div className="space-y-6">
                {educationAndCredentials.map((edu, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 space-y-4 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-white">
                          {lang === 'am' ? edu.titleAmharic : edu.title}
                        </h4>
                        <div className="text-sm font-medium text-emerald-400">
                          {edu.institution}
                        </div>
                      </div>
                      <span className="text-xs font-mono text-slate-400 shrink-0">
                        {edu.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="text-slate-300 font-medium">{edu.status}</span>
                      <span>·</span>
                      <span className="text-slate-400 font-mono">{edu.credentialType}</span>
                    </div>

                    <ul className="space-y-2 pt-1">
                      {edu.details.map((detail, dIdx) => (
                        <li key={dIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2">
                      <button
                        onClick={() => onOpenCredentialModal && onOpenCredentialModal(edu.credentialType)}
                        className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium transition-colors"
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>{t.viewCredential}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
