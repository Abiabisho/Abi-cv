import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Download, Code, Award, CheckCircle, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { translations } from '../data/translations.js';
import { personalInfo, stats } from '../data/portfolioData.js';

export default function Hero({ lang, onOpenCredentialModal }) {
  const t = translations[lang].hero;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const roles = t.roles;
    const currentFullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
        if (displayedText === currentFullText) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, t.roles]);

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background radial gradients for Google Studio aesthetic */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Editorial Greeting Tag (Clean, Anti-Slop Unboxed) */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-500 shadow-sm shadow-blue-400" />
              <span>{t.welcomeBadge}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400 font-normal normal-case">Addis Ababa, Ethiopia</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-[1.12]">
              {t.greeting}{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-200 bg-clip-text text-transparent">
                {lang === 'am' ? personalInfo.nameAmharic : personalInfo.name}
              </span>
            </h1>

            {/* Typewriter Subtitle */}
            <div className="h-10 flex items-center">
              <div className="font-mono text-lg sm:text-xl font-medium text-slate-300 flex items-center">
                <span className="text-blue-400 mr-2">&gt;</span>
                <span>{displayedText}</span>
                <span className="w-2 h-5 bg-blue-400 ml-1 animate-pulse" />
              </div>
            </div>

            {/* Bio Blurb */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl font-normal">
              {lang === 'am' ? personalInfo.bioAmharic : t.bio}
            </p>

            {/* Dual Credentials Highlight Line */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-400 font-medium pt-1">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                Admas Univ B.Sc. (3.40 CGPA Distinction)
              </span>
              <span className="text-slate-600">/</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                National Exit Exam: 63/100
              </span>
              <span className="text-slate-600">/</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Code className="w-4 h-4 text-blue-400 shrink-0" />
                MERN & Next.js Stack
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                <span>{t.exploreProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#cv-studio"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 font-medium text-sm transition-all hover:border-slate-600 hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>{t.cvStudioBtn}</span>
              </a>

              <a
                href={personalInfo.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 text-xs font-medium transition-colors"
                title="View original scanned PDF credentials"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF (23 Pages)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Studio Aesthetic Visual Container with Real Profile Picture */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Decorative Ambient Glow Ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-blue-600/40 via-indigo-500/30 to-sky-400/40 blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

              {/* Main Card with Real Profile Picture */}
              <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800/90 overflow-hidden backdrop-blur-xl shadow-2xl">
                {/* Profile Picture Frame with measured gradient scrim */}
                <div className="relative w-full h-80 sm:h-96 overflow-hidden bg-slate-950 group">
                  <img
                    src={personalInfo.profilePicture}
                    alt="Setegn Derebe Dereje"
                    className="w-full h-full object-cover object-[center_16%] transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Gradient Scrim for readable overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Top-Right Open-to-Work Status Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/80 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold text-slate-200">
                      {lang === 'am' ? 'ለስራ ክፍት' : 'Open to Work'}
                    </span>
                  </div>

                  {/* Top-Left Location Tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/80 shadow-lg text-[11px] font-medium text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>Addis Ababa</span>
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-extrabold text-white text-xl tracking-tight drop-shadow-md">
                        {lang === 'am' ? personalInfo.nameAmharic : personalInfo.name}
                      </h3>
                      <button
                        onClick={() => onOpenCredentialModal && onOpenCredentialModal()}
                        className="p-1.5 rounded-lg bg-blue-600/80 hover:bg-blue-600 text-white backdrop-blur-md transition-colors"
                        title="Verify Credentials"
                        aria-label="Verify Credentials"
                      >
                        <ShieldCheck className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs font-medium text-blue-300 drop-shadow">
                      Full-Stack Developer & Finance Professional
                    </p>
                  </div>
                </div>

                {/* Verified Credentials Compact Strip */}
                <div className="p-5 space-y-3 bg-slate-900/95 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Award className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="font-medium">Admas University (Distinction)</span>
                    </div>
                    <span className="font-mono font-bold text-emerald-400">3.40 CGPA</span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="font-medium">National Exit Examination</span>
                    </div>
                    <span className="font-mono font-bold text-blue-400">63 / 100</span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Code className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span className="font-medium">Software Stack</span>
                    </div>
                    <span className="font-mono text-slate-400 text-[11px]">React · Next · Node</span>
                  </div>

                  {/* Action Link to Full Verification */}
                  <div className="pt-2 border-t border-slate-800/60">
                    <button
                      onClick={() => onOpenCredentialModal && onOpenCredentialModal()}
                      className="w-full py-2 px-3 rounded-xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700/80 text-xs font-medium text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-colors"
                    >
                      <span>Verify All 5 Academic & TVET Certificates</span>
                      <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Key Metrics Strip below Hero Split (§2.B Layout rule) */}
        <div className="mt-16 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((st, i) => (
              <div key={i} className="flex flex-col space-y-1">
                <span className="text-xs font-medium text-slate-400 tracking-wider">
                  {st.label}
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                  {st.value}
                </span>
                <span className="text-xs text-slate-400">
                  {st.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
