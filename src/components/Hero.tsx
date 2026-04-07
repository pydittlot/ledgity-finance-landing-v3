import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/i18n/LangContext';
import { useTypewriter } from '@/hooks/useTypewriter';
import { CobeGlobe } from './CobeGlobe';

export const Hero: React.FC = () => {
  const { t } = useLang();
  const typewriterText = useTypewriter(t('hero_typewriter'), 30);

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-sm font-medium text-primary">{t('hero_badge')}</span>
            </div>

            {/* Title with Typewriter */}
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight">
                {t('hero_title')}
              </h1>
              <div className="text-4xl sm:text-5xl font-bold text-primary h-16 flex items-center">
                {typewriterText}
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-600 leading-relaxed max-w-md">
              {t('hero_description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://ledgity.finance/invest"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                {t('cta_start')}
              </a>
              <a
                href="https://docs.ledgity.finance"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-slate-200 text-slate-700 rounded-lg font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                {t('cta_learn')}
              </a>
            </div>
          </motion.div>

          {/* Right Column - Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <CobeGlobe />
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-slate-200"
        >
          {/* TVL Stat */}
          <div className="flex flex-col gap-2 py-6">
            <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">
              {t('stat_tvl')}
            </span>
            <a
              href="https://ledgity.finance/invest"
              className="text-3xl sm:text-4xl font-bold text-slate-900 hover:text-primary transition-colors"
            >
              ${t('stat_tvl_value')}M+
            </a>
          </div>

          {/* Yield Stat */}
          <div className="flex flex-col gap-2 py-6">
            <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">
              {t('stat_yield')}
            </span>
            <p className="text-3xl sm:text-4xl font-bold text-slate-900">
              {t('stat_yield_value')}%
            </p>
          </div>

          {/* Access Stat */}
          <div className="flex flex-col gap-2 py-6">
            <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">
              {t('stat_access')}
            </span>
            <p className="text-3xl sm:text-4xl font-bold text-slate-900">
              {t('stat_access_value')}h
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
