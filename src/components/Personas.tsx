import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLang } from '@/i18n/LangContext';

const personaIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="#4338ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/><path d="M10 10h.01"/><path d="M14 10h.01"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="#4338ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M9 3v18"/><path d="M13 8h4"/><path d="M13 12h4"/><path d="M13 16h2"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="#4338ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M3 21h18"/><path d="M3 7h18"/><path d="M5 21V7"/><path d="M19 21V7"/><path d="M9 7V3h6v4"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="#4338ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="#4338ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="#4338ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a6 6 0 01-12 0V8z"/></svg>,
];

export const Personas: React.FC = () => {
  const { t } = useLang();

  const personas = [
    { id: 'family-offices', title: 'Family Offices', desc: t('persona_fo_desc') },
    { id: 'tresoriers', title: t('persona_treasurers'), desc: t('persona_treso_desc') },
    { id: 'cgp', title: t('persona_managers'), desc: t('persona_cgp_desc') },
    { id: 'crypto', title: t('persona_crypto_label'), desc: t('persona_crypto_desc') },
    { id: 'freelances', title: t('persona_freelance_label'), desc: t('persona_freelance_desc') },
    { id: 'fintechs', title: 'Fintechs', desc: t('persona_fintech_desc') },
  ];

  return (
    <section id="personas" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#14181f' }}>
            {t('persona_title')}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748b' }}>
            {t('persona_subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {personas.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <Link to={`/persona/${p.id}`} style={{ textDecoration: 'none' }}>
                <div
                  className="rounded-2xl border p-7 h-full transition-all hover:-translate-y-1 cursor-pointer"
                  style={{ background: 'white', borderColor: '#e5e7eb', borderWidth: 1.5 }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = '#1d4ed8';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px rgba(29,78,216,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = '#e5e7eb';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'linear-gradient(135deg, #e8eaf6 0%, #d1d5f0 100%)' }}
                  >
                    {personaIcons[i]}
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: '#14181f' }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{p.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Personas;
