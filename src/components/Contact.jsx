import React, { useState } from 'react';
import { Mail, Phone, Github, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare } from 'lucide-react';
import { translations } from '../data/translations.js';
import { personalInfo } from '../data/portfolioData.js';

export default function Contact({ lang }) {
  const t = translations[lang].contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (field, text) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80 bg-[#0f172a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-2">
            <span>06</span>
            <span className="text-slate-600">·</span>
            <span>{lang === 'am' ? 'ግንኙነት' : 'Direct Inquiries'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {t.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 font-normal">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">
                    {t.phoneLabel}
                  </span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-base font-bold text-white hover:text-blue-400 font-mono transition-colors"
                  >
                    {personalInfo.formattedPhone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy('phone', personalInfo.formattedPhone)}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copiedField === 'phone' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">
                    {t.emailLabel}
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-blue-400 transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy('email', personalInfo.email)}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedField === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* GitHub Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-800 text-slate-200">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">
                    {t.githubLabel}
                  </span>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-bold text-white hover:text-blue-400 font-mono transition-colors"
                  >
                    github.com/Abiabisho
                  </a>
                </div>
              </div>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 text-blue-400 hover:text-white transition-colors"
                title="Open GitHub"
                aria-label="Open GitHub profile"
              >
                <Send className="w-4 h-4 rotate-45" />
              </a>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-medium">
                  {t.locationLabel}
                </span>
                <span className="text-base font-bold text-white">
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                {t.formHeading}
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Available for full-time roles, contract engineering, and financial systems automation.
              </p>

              {isSuccess ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    {t.successTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    {t.successDesc}
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 px-4 py-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-900/30 rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.namePlaceholder}
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border ${
                          errors.name ? 'border-red-500' : 'border-slate-800'
                        } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors`}
                      />
                      {errors.name && <span className="text-[11px] text-red-400 mt-1 block">{errors.name}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.emailPlaceholder}
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border ${
                          errors.email ? 'border-red-500' : 'border-slate-800'
                        } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors`}
                      />
                      {errors.email && <span className="text-[11px] text-red-400 mt-1 block">{errors.email}</span>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={t.subjectPlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.messagePlaceholder}
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border ${
                        errors.message ? 'border-red-500' : 'border-slate-800'
                      } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors`}
                    />
                    {errors.message && <span className="text-[11px] text-red-400 mt-1 block">{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>{t.sending}</span>
                    ) : (
                      <>
                        <span>{t.sendBtn}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
