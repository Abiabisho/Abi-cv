import React, { useState } from 'react';
import { Printer, Download, Copy, Check, FileText, ExternalLink, Mail, Phone, MapPin, Award, CheckCircle, Briefcase, GraduationCap, Code } from 'lucide-react';
import { translations } from '../data/translations.js';
import { personalInfo, workExperience, educationAndCredentials, skillsData, references } from '../data/portfolioData.js';

export default function CVStudio({ lang }) {
  const t = translations[lang].cvStudio;
  const [activeTab, setActiveTab] = useState('full'); // 'full', 'summary', 'education', 'work', 'skills', 'references'
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(personalInfo.portfolio);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="cv-studio" className="py-20 border-t border-slate-800/80 bg-[#0b0f19] relative cv-studio-container">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 no-print">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-2">
            <span>05</span>
            <span className="text-slate-600">·</span>
            <span>{lang === 'am' ? 'የሲቪ ሰነድ ማዕከል' : 'Document Workspace'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {t.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* Action Toolbar */}
        <div className="mb-6 p-3 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4 no-print shadow-xl">
          {/* Sub-tabs */}
          <div className="flex flex-wrap items-center gap-1">
            <button
              onClick={() => setActiveTab('full')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'full'
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {lang === 'am' ? 'ሙሉ ሰነድ' : 'Full Resume'}
            </button>
            <button
              onClick={() => setActiveTab('summary')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'summary'
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {t.tabs.summary}
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'education'
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {t.tabs.education}
            </button>
            <button
              onClick={() => setActiveTab('work')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'work'
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {t.tabs.work}
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'skills'
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {t.tabs.skills}
            </button>
            <button
              onClick={() => setActiveTab('references')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'references'
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {t.tabs.references}
            </button>
          </div>

          {/* Export Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-md shadow-blue-600/30"
              title="Print cleanly to white paper or Save to PDF via Browser Print"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.printBtn}</span>
            </button>

            <a
              href={personalInfo.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
              title="Download original scanned credential PDF"
            >
              <Download className="w-3.5 h-3.5 text-blue-400" />
              <span>{t.downloadPdf}</span>
            </a>

            <button
              onClick={handleCopyLink}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
              title="Copy portfolio link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Print hint banner (no-print) */}
        <div className="mb-4 text-xs text-slate-400 flex items-center justify-between no-print px-2">
          <span>{t.printHint}</span>
          <span className="font-mono text-slate-400">Target: Standard A4</span>
        </div>

        {/* Document Sheet (Mimics printed resume / studio document) */}
        <div className="cv-document-sheet rounded-2xl bg-slate-900/90 border border-slate-800 p-8 sm:p-12 shadow-2xl transition-all">
          {/* Resume Header with Profile Picture */}
          <div className="border-b border-slate-800 pb-6 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shrink-0 shadow-lg">
                  <img
                    src={personalInfo.profilePicture}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-[center_16%]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {personalInfo.name}
                  </h1>
                  <p className="text-sm sm:text-base font-semibold text-blue-400 mt-0.5">
                    {personalInfo.title}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {personalInfo.degree}
                  </p>
                </div>
              </div>

              {/* Contact Mini Block */}
              <div className="text-xs space-y-1 sm:text-right font-mono text-slate-300">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <a href={`tel:${personalInfo.phone}`} className="hover:text-blue-300">
                    {personalInfo.formattedPhone}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-300">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  <span>github.com/Abiabisho · portfolio-setegn.vercel.app</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Professional Summary */}
          {(activeTab === 'full' || activeTab === 'summary') && (
            <div className="mb-8">
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono mb-3 pb-1 border-b border-slate-800">
                Professional Summary
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {personalInfo.bio}
              </p>
            </div>
          )}

          {/* Section: Education & Academic Rigor */}
          {(activeTab === 'full' || activeTab === 'education') && (
            <div className="mb-8">
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono mb-4 pb-1 border-b border-slate-800">
                Education & Credentials
              </h2>
              <div className="space-y-5">
                {educationAndCredentials.map((edu, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                      <span className="font-bold text-white text-sm">
                        {edu.title}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {edu.date}
                      </span>
                    </div>
                    <div className="text-xs text-blue-300 font-medium">
                      {edu.institution} · <span className="text-emerald-400">{edu.status}</span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 pt-1 pl-1">
                      {edu.details.map((d, dIdx) => (
                        <li key={dIdx} className="leading-relaxed">{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Work Experience */}
          {(activeTab === 'full' || activeTab === 'work') && (
            <div className="mb-8">
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono mb-4 pb-1 border-b border-slate-800">
                Work Experience
              </h2>
              <div className="space-y-6">
                {workExperience.map((work, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                      <span className="font-bold text-white text-sm">
                        {work.role}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {work.period}
                      </span>
                    </div>
                    <div className="text-xs text-blue-300 font-medium">
                      {work.company} — <span className="text-slate-400">{work.location}</span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 pt-1 pl-1">
                      {work.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="leading-relaxed">{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Technical & Financial Skills */}
          {(activeTab === 'full' || activeTab === 'skills') && (
            <div className="mb-8">
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono mb-4 pb-1 border-b border-slate-800">
                Technical & Domain Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800/80">
                  <span className="font-bold text-white block mb-1">
                    Web & Software Development
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    React.js, Next.js, Node.js, Express, JavaScript (ES6+), Tailwind CSS, Flutter, RESTful APIs, JWT Auth.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800/80">
                  <span className="font-bold text-white block mb-1">
                    Databases & Architecture
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    MongoDB (NoSQL Document Store), SQLite (Embedded Relational), Dual-Database Sync, Git/GitHub, Vercel.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800/80">
                  <span className="font-bold text-white block mb-1">
                    Accounting & Financial Systems
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    Peachtree Accounting, IFRS Financial Statements (Balance Sheet, Income Statement), VAT, Bank Reconciliations.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800/80">
                  <span className="font-bold text-white block mb-1">
                    Financial Analysis & Banking
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    Credit Risk Evaluation, Commercial Bank of Ethiopia Case Modeling, Advanced MS Excel, Budgeting, Auditing.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Section: References & Senior Research */}
          {(activeTab === 'full' || activeTab === 'references') && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono mb-4 pb-1 border-b border-slate-800">
                References & Institutional Endorsements
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                {references.map((ref, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 space-y-1">
                    <span className="font-bold text-white block">{ref.name}</span>
                    <span className="text-blue-300 block font-medium">{ref.role}</span>
                    <span className="text-slate-400 block text-[11px]">{ref.company}</span>
                    <span className="text-emerald-400 font-mono block text-[11px] pt-1">
                      {ref.phone}
                    </span>
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
