import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CreditCard, Plus, Activity, Download } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';

export const Steps: React.FC = () => {
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

  const steps = [
    {
      number: 1,
      icon: () => <Shield className="w-8 h-8 text-white" />,
      title: t('how_step1_title'),
      description: t('how_step1_desc'),
    },
    {
      number: 2,
      icon: () => (
        <div className="flex items-center justify-center">
          <CreditCard className="w-8 h-8 text-white" style={{ marginRight: '-8px' }} />
          <Plus className="w-6 h-6 text-white" />
        </div>
      ),
      title: t('how_step2_title'),
      description: t('how_step2_desc'),
    },
    {
      number: 3,
      icon: () => <Activity className="w-8 h-8 text-white" />,
      title: t('how_step3_title'),
      description: t('how_step3_desc'),
    },
    {
      number: 4,
      icon: () => <Download className="w-8 h-8 text-white" />,
      title: t('how_step4_title'),
      description: t('how_step4_desc'),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
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
            {t('how_title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('how_desc')}
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="flex flex-col gap-6"
            >
              {/* Step Badge */}
              <div className="inline-flex w-fit px-4 py-2 rounded-full bg-slate-100 text-slate-600 font-semibold text-sm">
                {t('how_title').includes('marche') ? `Étape ${step.number}` : `Step ${step.number}`}
              </div>

              {/* Icon Box */}
              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center">
                {step.icon()}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Steps;
