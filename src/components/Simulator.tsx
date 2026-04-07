import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/i18n/LangContext';

interface DurationPill {
  label: string;
  months: number;
}

const durationPills: DurationPill[] = [
  { label: '3m', months: 3 },
  { label: '6m', months: 6 },
  { label: '1y', months: 12 },
  { label: '2y', months: 24 },
  { label: '5y', months: 60 },
];

export const Simulator: React.FC = () => {
  const { t } = useLang();
  const [amount, setAmount] = useState(10000);
  const [selectedDuration, setSelectedDuration] = useState(12);

  const APY = 0.09;
  const interestEarned = amount * APY * (selectedDuration / 12);
  const total = amount + interestEarned;

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const formatNumber = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
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
            {t('simulator_title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('simulator_subtitle')}
          </p>
        </motion.div>

        {/* Simulator Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm max-w-2xl mx-auto"
        >
          {/* Amount Input Section */}
          <div className="mb-12">
            <label className="block text-sm font-semibold text-slate-900 mb-4">
              {t('simulator_amount_label')}
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl text-slate-400">
                $
              </span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full pl-10 pr-4 py-4 text-2xl font-semibold text-slate-900 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                min="0"
                step="1000"
              />
            </div>
            <p className="text-sm text-slate-500 mt-2">
              {t('simulator_amount_hint')}
            </p>
          </div>

          {/* Duration Pills */}
          <div className="mb-12">
            <label className="block text-sm font-semibold text-slate-900 mb-4">
              {t('simulator_duration_label')}
            </label>
            <div className="flex flex-wrap gap-3">
              {durationPills.map((pill) => (
                <button
                  key={pill.months}
                  onClick={() => setSelectedDuration(pill.months)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedDuration === pill.months
                      ? 'bg-primary text-white shadow-lg shadow-primary/30'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Section */}
          <div className="border-t border-slate-200 pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {/* Capital */}
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                  {t('simulator_capital')}
                </span>
                <p className="text-3xl font-bold text-slate-900">
                  {formatCurrency(amount)}
                </p>
              </div>

              {/* Interest Earned */}
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-emerald-600 uppercase tracking-wide">
                  {t('simulator_interest')}
                </span>
                <p className="text-3xl font-bold text-emerald-600">
                  +{formatCurrency(interestEarned)}
                </p>
              </div>

              {/* Total */}
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                  {t('simulator_total')}
                </span>
                <p className="text-3xl font-bold text-slate-900">
                  {formatCurrency(total)}
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="bg-slate-50 rounded-lg p-4 mb-8">
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">{formatCurrency(amount)}</span>
                {' '}
                {t('simulator_details_part1')}
                {' '}
                <span className="font-semibold text-slate-900">{APY * 100}%</span>
                {' '}
                {t('simulator_details_part2')}
                {' '}
                <span className="font-semibold text-slate-900">{selectedDuration} {t('simulator_months')}</span>
                {' '}
                {t('simulator_details_part3')}
                {' '}
                <span className="font-semibold text-emerald-600">{formatCurrency(interestEarned)}</span>
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="https://ledgity.finance/invest"
              className="w-full inline-flex items-center justify-center px-6 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              {t('simulator_cta')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
