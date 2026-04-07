import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/i18n/LangContext';

export const Products: React.FC = () => {
  const { t } = useLang();

  const cards = [
    {
      icon: '€',
      title: t('products_euro'),
      subtitle: t('products_euro_backing'),
      token: 'EURC',
    },
    {
      icon: '$',
      title: t('products_dollar'),
      subtitle: t('products_dollar_backing'),
      token: 'USDC',
    },
  ];

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
          style={{ color: '#14181f' }}
        >
          {t('products_title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.token}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border p-8 transition-all hover:-translate-y-0.5"
              style={{ background: '#f6f7f9', borderColor: '#e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
            >
              {/* Top */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #070b14 0%, #1e3a8a 100%)' }}
                >
                  {card.icon}
                </div>
                <div>
                  <div className="text-xl font-bold" style={{ color: '#14181f' }}>{card.title}</div>
                  <div className="text-sm" style={{ color: '#64748b' }}>{card.subtitle}</div>
                </div>
              </div>

              {/* APY */}
              <div
                className="flex items-baseline gap-2 py-5 my-4"
                style={{ borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}
              >
                <span className="text-4xl font-extrabold" style={{ color: '#132031' }}>9%</span>
                <span className="text-sm" style={{ color: '#64748b' }}>{t('products_apy')}</span>
              </div>

              {/* Details */}
              <div className="mb-6">
                {[
                  { label: t('products_token'), value: card.token },
                  { label: t('products_access'), value: t('products_instant') },
                  { label: t('products_min_deposit'), value: t('products_none') },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between py-3 text-sm"
                    style={{ borderBottom: '1px solid #e5e7eb' }}
                  >
                    <span style={{ color: '#64748b' }}>{row.label}</span>
                    <span className="font-semibold" style={{ color: '#14181f' }}>{row.value}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://ledgity.finance/invest"
                className="block w-full text-center py-3 rounded-lg text-white font-semibold transition-all hover:opacity-90"
                style={{ background: '#132031' }}
              >
                {t('products_cta')}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
