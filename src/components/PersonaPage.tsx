import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  TrendingUp, Shield, Eye, Zap, DollarSign, Lock,
  FileText, Clock, CheckCircle, Target, RefreshCw,
  Link2, Globe, Gem, Users, Plug, ChevronDown,
} from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { personasDataFr, personasDataEn, PersonaId } from '@/data/personas';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  yield: TrendingUp,
  security: Shield,
  transparency: Eye,
  lightning: Zap,
  money: DollarSign,
  lock: Lock,
  report: FileText,
  clock: Clock,
  check: CheckCircle,
  target: Target,
  refresh: RefreshCw,
  chain: Link2,
  globe: Globe,
  diamond: Gem,
  users: Users,
  plug: Plug,
  shield: Shield,
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
            {persona.benefits.map((benefit, i) => {
              const Icon = iconMap[benefit.icon] || Shield;
              return (
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
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'linear-gradient(135deg, #e8eaf6 0%, #d1d5f0 100%)' }}
                  >
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: '#14181f' }}>{benefit.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{benefit.description}</p>
                </motion.div>
              );
            })}
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
                className="rounded-xl border p-5 pl-12 relative"
                style={{ background: 'white', borderColor: '#e5e7eb' }}
              >
                <span
                  className="absolute left-4 top-4 text-xl font-bold"
                  style={{ color: '#1d4ed8' }}
                >
                  {uc.number}
                </span>
                <p className="text-sm font-semibold" style={{ color: '#14181f' }}>{uc.text}</p>
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
            FAQ
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
