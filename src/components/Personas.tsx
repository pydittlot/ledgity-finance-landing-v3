import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building, LayoutGrid, Briefcase, Bitcoin, Users, Activity } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';

export const Personas: React.FC = () => {
  const { t } = useLang();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const personas = [
    {
      id: 'family-offices' as const,
      icon: Building,
      title: 'Family Offices',
      description: t('persona_fo_desc'),
    },
    {
      id: 'tresoriers' as const,
      icon: LayoutGrid,
      title: t('persona_treasurers'),
      description: t('persona_treso_desc'),
    },
    {
      id: 'cgp' as const,
      icon: Briefcase,
      title: t('persona_managers'),
      description: t('persona_cgp_desc'),
    },
    {
      id: 'crypto' as const,
      icon: Bitcoin,
      title: t('persona_crypto_label'),
      description: t('persona_crypto_desc'),
    },
    {
      id: 'freelances' as const,
      icon: Users,
      title: t('persona_freelance_label'),
      description: t('persona_freelance_desc'),
    },
    {
      id: 'fintechs' as const,
      icon: Activity,
      title: 'Fintechs',
      description: t('persona_fintech_desc'),
    },
  ];

  return (
    <section id="personas" className="py-20 px-4 sm:px-6 lg:px-8">
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
            {t('persona_title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('persona_subtitle')}
          </p>
        </motion.div>

        {/* Personas Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {personas.map((persona) => {
            const IconComponent = persona.icon;
            return (
              <Link key={persona.id} to={`/persona/${persona.id}`}>
                <motion.div
                  variants={itemVariants}
                  className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer h-full flex flex-col gap-6"
                >
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-900 to-blue-800 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3 flex-grow">
                    <h3 className="text-xl font-bold text-slate-900">
                      {persona.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {persona.description}
                    </p>
                  </div>

                  {/* Arrow hint */}
                  <div className="text-blue-600 font-semibold text-sm">
                    →
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Personas;
