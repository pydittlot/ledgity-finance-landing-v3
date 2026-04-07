import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/i18n/LangContext';

export const BottomCTA: React.FC = () => {
  const { t } = useLang();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-12 sm:p-16 text-center text-white"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            {t('cta_title')}
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('cta_desc')}
          </p>
          <a
            href="https://ledgity.finance/account"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {t('cta_button')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
