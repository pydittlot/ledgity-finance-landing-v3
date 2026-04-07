import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/i18n/LangContext';

const securityIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="#4338ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="#4338ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="#4338ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="#4338ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><rect x="2" y="3" width="20" height="18" rx="2"/><line x1="2" y1="9" x2="22" y2="9"/><line x1="10" y1="3" x2="10" y2="9"/></svg>,
];

export const Security: React.FC = () => {
  const { t } = useLang();

  const cards = [
    { title: t('security_audit_title'), desc: t('security_audit_desc') },
    { title: t('security_transparency_title'), desc: t('security_transparency_desc') },
    { title: t('security_control_title'), desc: t('security_control_desc') },
    { title: t('security_backed_title'), desc: t('security_backed_desc') },
  ];

  return (
    <section id="security" className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#f9fafb' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#14181f' }}>
            {t('security_title')}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748b' }}>
            {t('security_desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border p-6 transition-all hover:-translate-y-0.5"
              style={{ background: 'white', borderColor: '#e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'linear-gradient(135deg, #e8eaf6 0%, #d1d5f0 100%)' }}
              >
                {securityIcons[i]}
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#14181f' }}>{card.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
