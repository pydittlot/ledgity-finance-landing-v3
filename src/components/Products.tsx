import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/i18n/LangContext';

export const Products: React.FC = () => {
  const { t } = useLang();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            {t('products_title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('products_subtitle')}
          </p>
        </motion.div>

        {/* Product Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Euro Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">€</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {t('products_euro')}
                </h3>
                <p className="text-sm text-slate-600">
                  {t('products_euro_backing')}
                </p>
              </div>
            </div>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold text-slate-900">9%</span>
              <span className="text-lg text-slate-600">APY</span>
            </div>

            <div className="mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm text-slate-600 mb-1">Token</p>
              <p className="text-lg font-semibold text-slate-900">EURC</p>
            </div>

            <a
              href="https://ledgity.finance/invest"
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              {t('products_cta')}
            </a>
          </motion.div>

          {/* Dollar Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">$</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {t('products_dollar')}
                </h3>
                <p className="text-sm text-slate-600">
                  {t('products_dollar_backing')}
                </p>
              </div>
            </div>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold text-slate-900">9%</span>
              <span className="text-lg text-slate-600">APY</span>
            </div>

            <div className="mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm text-slate-600 mb-1">Token</p>
              <p className="text-lg font-semibold text-slate-900">USDC</p>
            </div>

            <a
              href="https://ledgity.finance/invest"
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              {t('products_cta')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
