import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/i18n/LangContext';

const stepIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M12 10v4"/><path d="M10 12h4"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
];

export const Steps: React.FC = () => {
  const { t } = useLang();
  const stepLabel = t('step_label');

  const steps = [
    { title: t('how_step1_title'), desc: t('how_step1_desc') },
    { title: t('how_step2_title'), desc: t('how_step2_desc') },
    { title: t('how_step3_title'), desc: t('how_step3_desc') },
    { title: t('how_step4_title'), desc: t('how_step4_desc') },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#14181f' }}>
            {t('how_title')}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748b' }}>
            {t('how_desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon box */}
              <div
                className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center mb-5"
                style={{
                  background: 'linear-gradient(135deg, #070b14 0%, #1e3a8a 100%)',
                  boxShadow: '0 8px 24px rgba(7, 11, 20, 0.18)',
                }}
              >
                {stepIcons[i]}
              </div>

              {/* Badge */}
              <span
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3"
                style={{ background: 'rgba(29,78,216,0.08)', color: '#1d4ed8' }}
              >
                {stepLabel} {i + 1}
              </span>

              <h3 className="text-base font-bold mb-2" style={{ color: '#14181f' }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed max-w-[240px]" style={{ color: '#64748b' }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
