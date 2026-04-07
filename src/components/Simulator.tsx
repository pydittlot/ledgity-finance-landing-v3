import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/i18n/LangContext';

const durations = [
  { key: 'simulator_3m', months: 3 },
  { key: 'simulator_6m', months: 6 },
  { key: 'simulator_1y', months: 12 },
  { key: 'simulator_2y', months: 24 },
  { key: 'simulator_5y', months: 60 },
];

export const Simulator: React.FC = () => {
  const { t } = useLang();
  const [amount, setAmount] = useState(10000);
  const [selectedMonths, setSelectedMonths] = useState(12);

  const APY = 0.09;
  const interest = amount * APY * (selectedMonths / 12);
  const total = amount + interest;

  const fmt = (v: number) => v.toLocaleString('fr-FR', { maximumFractionDigits: 0 });

  return (
    <section id="simulator" className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#f9fafb' }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center mb-10"
          style={{ color: '#14181f' }}
        >
          {t('simulator_title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-2xl border p-8 sm:p-10 max-w-2xl mx-auto"
          style={{ background: '#f6f7f9', borderColor: '#e5e7eb' }}
        >
          {/* Amount */}
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-3" style={{ color: '#14181f' }}>
              {t('simulator_amount_label')}
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Math.max(0, parseInt(e.target.value) || 0))}
              className="w-full px-4 py-3 rounded-lg border text-lg font-semibold outline-none transition-all"
              style={{
                borderColor: '#e2e8f0',
                color: '#14181f',
                fontFamily: 'Geist, sans-serif',
              }}
              min="0"
              step="1000"
            />
          </div>

          {/* Duration pills */}
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-3" style={{ color: '#14181f' }}>
              {t('simulator_duration_label')}
            </label>
            <div className="flex flex-wrap gap-3">
              {durations.map((d) => (
                <button
                  key={d.months}
                  onClick={() => setSelectedMonths(d.months)}
                  className="px-5 py-2.5 rounded-full border text-sm font-semibold transition-all"
                  style={
                    selectedMonths === d.months
                      ? { background: '#132031', color: 'white', borderColor: '#132031' }
                      : { background: 'white', color: '#14181f', borderColor: '#e5e7eb' }
                  }
                >
                  {t(d.key)}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div
            className="grid grid-cols-3 gap-4 p-5 rounded-xl"
            style={{ background: 'white', border: '1px solid #e5e7eb' }}
          >
            <div className="text-center">
              <div className="text-xs mb-1" style={{ color: '#64748b' }}>{t('simulator_capital')}</div>
              <div className="text-xl font-bold" style={{ color: '#132031' }}>€{fmt(amount)}</div>
            </div>
            <div className="text-center">
              <div className="text-xs mb-1" style={{ color: '#10b981' }}>{t('simulator_interest')}</div>
              <div className="text-xl font-bold" style={{ color: '#10b981' }}>+€{fmt(interest)}</div>
            </div>
            <div className="text-center">
              <div className="text-xs mb-1" style={{ color: '#64748b' }}>{t('simulator_total')}</div>
              <div className="text-xl font-bold" style={{ color: '#132031' }}>€{fmt(total)}</div>
            </div>
          </div>

          <a
            href="https://ledgity.finance/invest"
            className="block w-full text-center mt-6 py-3.5 rounded-lg text-white font-semibold transition-all hover:opacity-90"
            style={{ background: '#132031' }}
          >
            {t('simulator_cta')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Simulator;
