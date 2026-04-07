import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/i18n/LangContext';
import { useTypewriter } from '@/hooks/useTypewriter';
import { CobeGlobe } from './CobeGlobe';

export const Hero: React.FC = () => {
  const { t, tArray } = useLang();
  const typewriterText = useTypewriter(tArray('hero_typewriter'), 60);

  return (
    <section className="pt-24 pb-0 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Hero row */}
        <div className="flex flex-col lg:flex-row items-center gap-8 pb-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-2xl"
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold mb-6"
              style={{ background: 'linear-gradient(135deg, #070b14 0%, #1e3a8a 100%)' }}
            >
              <span className="w-2 h-2 bg-white/60 rounded-full"></span>
              {t('hero_badge')}
            </div>

            {/* Title + Typewriter inline */}
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6" style={{ color: '#14181f' }}>
              {t('hero_title')}{' '}
              <span className="typewriter-wrapper">
                <span className="text-gradient">{typewriterText}</span>
                <span className="typewriter-cursor" />
              </span>
            </h1>

            <p className="text-lg mb-8 max-w-lg" style={{ color: '#64748b', lineHeight: 1.7 }}>
              {t('hero_description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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
            </div>
          </motion.div>

          {/* Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex flex-shrink-0 items-center justify-center"
            style={{ width: 420, height: 420 }}
          >
            <CobeGlobe />
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 bg-white rounded-2xl border mb-16"
          style={{ borderColor: '#e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
        >
          <a
            href="https://ledgity.finance/invest"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-8 border-b sm:border-b-0 sm:border-r transition-colors hover:text-accent"
            style={{ borderColor: '#e5e7eb', textDecoration: 'none' }}
          >
            <div className="text-3xl font-bold mb-1" style={{ color: '#132031' }}>$180M+</div>
            <div className="text-sm" style={{ color: '#64748b' }}>{t('stat_tvl')}</div>
          </a>
          <div
            className="flex flex-col items-center justify-center py-8 border-b sm:border-b-0 sm:border-r"
            style={{ borderColor: '#e5e7eb' }}
          >
            <div className="text-3xl font-bold mb-1" style={{ color: '#132031' }}>9%</div>
            <div className="text-sm" style={{ color: '#64748b' }}>{t('stat_yield')}</div>
          </div>
          <div className="flex flex-col items-center justify-center py-8">
            <div className="text-3xl font-bold mb-1" style={{ color: '#132031' }}>24h</div>
            <div className="text-sm" style={{ color: '#64748b' }}>{t('stat_access')}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
