import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import CVStudio from './components/CVStudio.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import CredentialModal from './components/CredentialModal.jsx';

export default function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portfolio_lang') || 'en';
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCredentialModalOpen, setIsCredentialModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('portfolio_lang', lang);
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-blue-200">
      {/* Navbar */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          lang={lang}
          onOpenCredentialModal={() => setIsCredentialModalOpen(true)}
        />
        <About
          lang={lang}
          onOpenCredentialModal={() => setIsCredentialModalOpen(true)}
        />
        <Skills lang={lang} />
        <Experience
          lang={lang}
          onOpenCredentialModal={() => setIsCredentialModalOpen(true)}
        />
        <Projects
          lang={lang}
          onSelectProject={(project) => setSelectedProject(project)}
        />
        <CVStudio lang={lang} />
        <Contact lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          lang={lang}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Interactive Academic & TVET Credential Verification Modal */}
      <CredentialModal
        isOpen={isCredentialModalOpen}
        onClose={() => setIsCredentialModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
