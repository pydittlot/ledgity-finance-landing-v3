import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { personasDataFr, personasDataEn, PersonaId } from '@/data/personas';

const benefitIcons: Record<string, React.ReactNode> = {
  yield: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="30" height="30"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  security: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="30" height="30"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  transparency: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="30" height="30"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/></svg>,
  lightning: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="30" height="30"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  lock: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="30" height="30"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
  report: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="30" height="30"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  clock: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="30" height="30"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  check: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="30" height="30"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  target: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="30" height="30"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  refresh: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="30" height="30"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>,
  chain: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="30" height="30"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>,
  globe: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="30" height="30"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
  money: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="30" height="30"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
  shield: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="30" height="30"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  plug: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="30" height="30"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a6 6 0 01-12 0V8z"/></svg>,
  diamond: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="30" height="30"><path d="M6 3h12l4 6-10 13L2 9z"/><path d="M11 3l1 6"/><path d="M2 9h20"/></svg>,
  users: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="30" height="30"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
};

export const PersonaPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, lang } = useLang();
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  const personasData = lang === 'fr' ? personasDataFr : personasDataEn;
  const persona = personasData[id as PersonaId];

  if (!persona) {
    return (
      <div className="pt-32 pb-20 px-4 text-center">
        <p className="text-xl" style={{ color: '#64748b' }}>Persona not found</p>
        <Link to="/" className="mt-4 inline-block text-sm" style={{ color: '#64748b' }}>
          {t('persona_back')}
        </Link>
      </div>
    );
  }

  const whyTitle = lang === 'fr' ? 'Pourquoi Ledgity ?' : 'Why Ledgity?';
  const useCasesTitle = lang === 'fr' ? 'Cas d\'usage' : 'Use Cases';

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Back link */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: '#94a3b8' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#14181f')}
              onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}
            >
              ← {lang === 'fr' ? 'Retour' : 'Back'}
            </Link>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex items-center px-4 py-2 rounded-full text-white text-xs font-bold tracking-widest mb-6"
            style={{ background: 'linear-gradient(135deg, #070b14 0%, #1e3a8a 100%)', letterSpacing: '0.08em' }}
          >
            {persona.tag}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold leading-tight mb-5"
            style={{ color: '#14181f' }}
          >
            {persona.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg mb-10 max-w-2xl"
            style={{ color: '#64748b', lineHeight: 1.7 }}
          >
            {persona.description}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://ledgity.finance/invest"
              className="inline-flex items-center justify-center px-8 py-3.5 text-white rounded-lg font-semibold transition-all hover:opacity-90"
              style={{ background: '#132031' }}
            >
              {t('cta_start')}
            </a>
            <a
              href="https://calendar.app.google/j79Qd8SzdQHTbK4b7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold border transition-all hover:bg-slate-50"
              style={{ color: '#132031', borderColor: '#132031' }}
            >
              {t('cta_book')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: '#f9fafb' }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-10"
            style={{ color: '#14181f' }}
          >
            {whyTitle}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {persona.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl border p-6 transition-all hover:-translate-y-0.5"
                style={{ background: 'white', borderColor: '#e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
              >
                <div
                  className="w-[72px] h-[72px] flex items-center justify-center mb-5"
                  style={{
                    borderRadius: 20,
                    background: 'linear-gradient(135deg, #070b14 0%, #1e3a8a 100%)',
                    boxShadow: '0 8px 24px rgba(7,11,20,0.18)',
                  }}
                >
                  {benefitIcons[benefit.icon] || benefitIcons['shield']}
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: '#14181f' }}>{benefit.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-10"
            style={{ color: '#14181f' }}
          >
            {useCasesTitle}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {persona.useCases.map((uc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="rounded-xl border p-5 flex gap-5 items-start"
                style={{ background: 'white', borderColor: '#e5e7eb' }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #070b14 0%, #1e3a8a 100%)',
                    boxShadow: '0 8px 24px rgba(7,11,20,0.18)',
                  }}
                >
                  <span className="font-bold text-base" style={{ color: 'white' }}>{uc.number}</span>
                </div>
                <p className="text-sm font-semibold leading-relaxed pt-1" style={{ color: '#14181f' }}>{uc.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: '#f9fafb' }}>
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-8"
            style={{ color: '#14181f' }}
          >
            {lang === 'fr' ? 'Questions fréquentes' : 'FAQ'}
          </motion.h2>

          <div className="flex flex-col gap-3">
            {persona.faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="rounded-xl border overflow-hidden transition-all"
                style={{
                  background: 'white',
                  borderColor: expandedFaqIndex === i ? '#1d4ed8' : '#e5e7eb',
                  boxShadow: expandedFaqIndex === i ? '0 4px 16px rgba(0,0,0,0.06)' : 'none',
                }}
              >
                <button
                  onClick={() => setExpandedFaqIndex(expandedFaqIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left transition-colors"
                  style={{ background: 'white' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#f9fafb')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'white')}
                >
                  <span className="font-semibold text-base" style={{ color: '#14181f' }}>{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${expandedFaqIndex === i ? 'rotate-180' : ''}`}
                    style={{ color: '#64748b' }}
                  />
                </button>

                {expandedFaqIndex === i && (
                  <div className="px-5 pb-5" style={{ background: '#f9fafb', color: '#64748b', fontSize: '0.95rem', lineHeight: 1.7 }}>
                    {item.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-3xl p-14 text-center"
            style={{ background: '#132031' }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-white">{t('cta_title')}</h2>
            <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>{t('cta_desc')}</p>
            <a
              href="https://ledgity.finance/account"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold transition-all hover:bg-slate-100"
              style={{ background: 'white', color: '#132031', textDecoration: 'none' }}
            >
              {t('cta_button')}
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default PersonaPage;
