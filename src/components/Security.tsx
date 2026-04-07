import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Landmark } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';

export const Security: React.FC = () => {
  const { t } = useLang();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const securityCards = [
    {
      icon: Shield,
      title: t('security_audit_title'),
      description: t('security_audit_desc'),
    },
    {
      icon: Eye,
      title: t('security_transparency_title'),
      description: t('security_transparency_desc'),
    },
    {
      icon: Lock,
      title: t('security_control_title'),
      description: t('security_control_desc'),
    },
    {
      icon: Landmark,
      title: t('security_backed_title'),
      description: t('security_backed_desc'),
    },
  ];

  return (
    <section id="security" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
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
            {t('security_title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('security_desc')}
          </p>
        </motion.div>

        {/* Security Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {securityCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col gap-4">
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Security;
