"use client";

import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi (ex: EmailJS, API Route, Formspree...)
    console.log('Formulaire envoyé :', formData);
  };

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 bg-[#070911] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/15 blur-[160px]" />

      <div className="relative mx-auto max-w-6xl">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase  text-[18px] tracking-[0.2em] text-violet-400">
          Get In Touch
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-7 text-gray-400">
          My inbox is open. Whether you want to collaborate, share an idea, ask a question, or just say hi, I'll try my best to respond! 😉
</p>
        </div>

        {/* Grille principale : Informations + Formulaire */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Colonne Gauche : Cartes d'informations (5/12) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6">Informations de contact</h3>

            {/* Carte Email */}
            <a 
              href="mailto:m.mohammedelmakhloufi@gmail.com" 
              className="flex items-center gap-4 p-4 rounded-2xl border border-white/[0.08] bg-[#0b0e18]/80 backdrop-blur-xl transition hover:border-violet-500/40 hover:bg-violet-500/[0.05]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Email</p>
                <p className="text-sm text-gray-200 font-medium">m.mohammedelmakhloufi@gmail.com</p>
              </div>
            </a>

            {/* Carte LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/mohammed-el-makhloufi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl border border-white/[0.08] bg-[#0b0e18]/80 backdrop-blur-xl transition hover:border-violet-500/40 hover:bg-violet-500/[0.05]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.48v6.26ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.57V9H3.56v11.45ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44C23.2 24 24 23.2 24 22.22V1.78C24 .8 23.2 0 22.22 0Z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">LinkedIn</p>
                <p className="text-sm text-gray-200 font-medium">Mohammed El Makhloufi</p>
              </div>
            </a>

            {/* Carte GitHub */}
            <a 
              href="https://github.com/MDMAK04" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl border border-white/[0.08] bg-[#0b0e18]/80 backdrop-blur-xl transition hover:border-violet-500/40 hover:bg-violet-500/[0.05]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-600/20 text-gray-300">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.95.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">GitHub</p>
                <p className="text-sm text-gray-200 font-medium">MDMAK04</p>
              </div>
            </a>

            {/* Carte Localisation */}
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/[0.08] bg-[#0b0e18]/80 backdrop-blur-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600/20 text-emerald-400">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-6-5.6-6-10a6 6 0 0 1 12 0c0 4.4-6 10-6 10z" />
                  <circle cx="12" cy="11" r="2" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Localisation</p>
                <p className="text-sm text-gray-200 font-medium">Morocco</p>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Formulaire interactif (7/12) */}
          <div className="lg:col-span-7 rounded-3xl border border-white/[0.08] bg-[#0b0e18]/80 p-8 backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white mb-6">Envoyez-moi un message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Champ Nom */}
                <div>
                  <label htmlFor="nom" className="block text-xs font-medium text-gray-400 mb-2">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-violet-500 focus:bg-white/[0.05] focus:outline-none transition"
                  />
                </div>

                {/* Champ Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-2">
                    Votre email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-violet-500 focus:bg-white/[0.05] focus:outline-none transition"
                  />
                </div>
              </div>

              {/* Champ Sujet */}
              <div>
                <label htmlFor="sujet" className="block text-xs font-medium text-gray-400 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="sujet"
                  name="sujet"
                  required
                  value={formData.sujet}
                  onChange={handleChange}
                  placeholder="Opportunité / Projet / Question"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-violet-500 focus:bg-white/[0.05] focus:outline-none transition"
                />
              </div>

              {/* Champ Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet ou votre demande..."
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-violet-500 focus:bg-white/[0.05] focus:outline-none transition resize-none"
                />
              </div>

              {/* Bouton d'envoi */}
              <button
                type="submit"
                className="w-full rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-500 hover:shadow-[0_0_30px_rgba(124,58,237,0.35)] active:scale-[0.99]"
              >
                Envoyer le message
              </button>
            </form>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-white/[0.06] pt-8 text-center">
          <p className="text-xs text-gray-500">
            © 2026 Mohammed El Makhloufi. All rights reserved.
          </p>
        </div>

      </div>
    </section>
  );
}