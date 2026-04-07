import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/i18n/LangContext';

export const TokenSection: React.FC = () => {
  const { t } = useLang();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#f9fafb' }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="inline-block px-4 py-2 rounded-full text-white text-sm font-semibold mb-6"
            style={{ background: 'linear-gradient(135deg, #070b14 0%, #1e3a8a 100%)' }}
          >
            {t('token_optional')}
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-8" style={{ color: '#14181f' }}>
            {t('token_title')}
          </h2>

          <div className="flex flex-col gap-5 text-lg" style={{ color: '#64748b', lineHeight: 1.7 }}>
            <p>{t('token_desc1')}</p>
            <p>{t('token_desc2')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TokenSection;
