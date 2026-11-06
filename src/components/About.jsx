import React from 'react';
import { Award, Briefcase, Code, CheckCircle, FileText, ExternalLink, ShieldCheck, ChevronRight } from 'lucide-react';
import { translations } from '../data/translations.js';
import { personalInfo } from '../data/portfolioData.js';

export default function About({ lang, onOpenCredentialModal }) {
  const t = translations[lang].about;

  return (
    <section id="about" className="py-20 border-t border-slate-800/80 bg-[#0c1220]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-2">
            <span>01</span>
            <span className="text-slate-600">·</span>
            <span>{lang === 'am' ? 'የግል ታሪክ እና ብቃት' : 'Background & Synergy'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {t.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Pillar 1: Academic Credentials */}
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 flex flex-col justify-between hover:border-slate-700/80 transition-colors">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                {t.academicHeading}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.academicDesc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-blue-400">3.40 CGPA / 63% Exit</span>
              <button
                onClick={() => onOpenCredentialModal && onOpenCredentialModal('academic')}
                className="hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>Verify</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pillar 2: Financial Operations */}
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 flex flex-col justify-between hover:border-slate-700/80 transition-colors">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                {t.experienceHeading}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.experienceDesc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-emerald-400">Peachtree & VAT</span>
              <a href="#experience" className="hover:text-white flex items-center gap-1 transition-colors">
                <span>Timeline</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Pillar 3: Technical Software Engineering */}
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 flex flex-col justify-between hover:border-slate-700/80 transition-colors">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                {t.techHeading}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.techDesc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-indigo-400">React · Next.js · Node</span>
              <a href="#projects" className="hover:text-white flex items-center gap-1 transition-colors">
                <span>Projects</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Comparative Row: Dual Domain Mastery */}
        <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold text-white mb-3">
                {lang === 'am' ? 'የሶፍትዌር እና ፋይናንስ ልዩ ውህደት' : 'The Developer-Finance Synergy'}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {lang === 'am'
                  ? 'አብዛኞቹ የሶፍትዌር ገንቢዎች ጥልቅ የሂሳብ እና የታክስ ህጎች እውቀት የላቸውም። በተቃራኒው አብዛኞቹ የሂሳብ ባለሙያዎች የሶፍትዌር ኮድ አይጽፉም። እኔ ይህንን ክፍተት በመሙላት ውስብስብ የሂሳብ እና የባንክ አሰራሮችን ወደ ቀላል እና ፈጣን የዲጂታል አፕሊኬሽን የመቀየር አቅም አለኝ።'
                  : 'Most software engineers lack institutional finance training, while most accountants do not build custom web software. By mastering both disciplines, I eliminate translation friction: I understand general ledger principles, debit/credit mechanics, VAT calculations, and credit risk models while having the full-stack engineering ability to architect database schemas, REST APIs, and responsive interfaces.'}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Dual-Database Engineering (MongoDB & SQLite)
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Ethiopian National Banking Standards & Chapa API
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Peachtree Voucher Automation & Tax Reconciliation
                </span>
              </div>
            </div>

            {/* Quick Document & Verified Profile Box */}
            <div className="rounded-xl bg-slate-950/70 border border-slate-800/90 p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl overflow-hidden border border-blue-500/40 shrink-0 bg-slate-900">
                    <img
                      src={personalInfo.profilePicture}
                      alt="Setegn Derebe Dereje"
                      className="w-full h-full object-cover object-[center_16%]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block">
                      {lang === 'am' ? personalInfo.nameAmharic : personalInfo.name}
                    </span>
                    <span className="text-[11px] text-blue-400 font-mono block">
                      Verified Credentials · 23 Pages
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30">
                  Verified
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Includes Admas University Degree, Student Records, National Exit Exam Certificate (63%), TVET Level IV CoC, and IFRS Training Certificate.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <span>Open PDF in Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => onOpenCredentialModal && onOpenCredentialModal()}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
                >
                  Interactive Verification
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
