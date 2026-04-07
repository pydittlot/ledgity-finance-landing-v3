import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/i18n/LangContext';

export const BottomCTA: React.FC = () => {
  const { t } = useLang();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl p-16 text-center text-white"
          style={{ background: '#132031' }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            {t('cta_title')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
            {t('cta_desc')}
          </p>
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
  );
};

export default BottomCTA;
