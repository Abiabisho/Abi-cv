import React, { useEffect } from 'react';
import { X, Award, ShieldCheck, CheckCircle2, Download, ExternalLink, FileText, Check } from 'lucide-react';
import { educationAndCredentials, personalInfo } from '../data/portfolioData.js';

export default function CredentialModal({ isOpen, onClose, lang }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-sm animate-fade-in no-print">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header with Photo */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pr-12 mb-6 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl overflow-hidden border border-emerald-500/40 bg-slate-950 shrink-0 shadow-lg">
              <img
                src={personalInfo.profilePicture}
                alt="Setegn Derebe Dereje"
                className="w-full h-full object-cover object-[center_16%]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-0.5">
                <ShieldCheck className="w-4 h-4" />
                <span>{lang === 'am' ? 'የተረጋገጡ የትምህርት እና የሙያ ማስረጃዎች' : 'Verified Academic & TVET Credentials'}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                {lang === 'am' ? 'ሰጠኝ ደረበ ደረጀ' : 'Setegn Derebe Dereje'}
              </h2>
              <p className="text-xs text-slate-400">
                Candidate ID: <span className="font-mono text-blue-400">EUEE15507318</span> · Ref: <span className="font-mono text-slate-300">AU./15/1358/18</span>
              </p>
            </div>
          </div>
        </div>

        {/* Top Action Banner */}
        <div className="mb-6 p-4 rounded-2xl bg-blue-950/40 border border-blue-500/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block">
                Official 23-Page Document Attachment
              </span>
              <span className="text-[11px] text-slate-400 block">
                Includes scanned temporary degree, student transcripts, CoC cards, and training certificates.
              </span>
            </div>
          </div>
          <a
            href={personalInfo.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shrink-0 shadow-md shadow-blue-600/30 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Open Original PDF</span>
          </a>
        </div>

        {/* Credentials Grid */}
        <div className="space-y-4 mb-6">
          {educationAndCredentials.map((cred, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {lang === 'am' ? cred.titleAmharic : cred.title}
                    </h4>
                    <span className="text-xs text-blue-400 font-medium">
                      {cred.institution} · {cred.location}
                    </span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-xs font-mono text-emerald-400 font-semibold block">
                    {cred.status}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono block">
                    {cred.date}
                  </span>
                </div>
              </div>

              <ul className="space-y-1.5 pl-2 pt-1 border-t border-slate-850">
                {cred.details.map((item, dIdx) => (
                  <li key={dIdx} className="text-xs text-slate-300 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[11px] font-mono text-slate-400">
            Candidate ID: EUEE15507318 · Certificate No: Misrak 3002528
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors"
          >
            {lang === 'am' ? 'ዝጋ' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
