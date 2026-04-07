import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/i18n/LangContext';

export const TokenSection: React.FC = () => {
  const { t } = useLang();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
            {t('token_optional')}
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8">
            {t('token_title')}
          </h2>

          {/* Description Paragraphs */}
          <div className="flex flex-col gap-6 text-lg text-slate-600 leading-relaxed">
            <p>
              {t('token_desc1')}
            </p>
            <p>
              {t('token_desc2')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TokenSection;
