import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Shield,
  Eye,
  Zap,
  DollarSign,
  Lock,
  FileText,
  Clock,
  CheckCircle,
  Target,
  RefreshCw,
  Link2,
  Globe,
  Gem,
  Users,
  Plug,
  ChevronDown,
} from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { personasDataFr, personasDataEn, PersonaId } from '@/data/personas';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  yield: TrendingUp,
  security: Shield,
  transparency: Eye,
  lightning: Zap,
  money: DollarSign,
  lock: Lock,
  report: FileText,
  clock: Clock,
  check: CheckCircle,
  target: Target,
  refresh: RefreshCw,
  chain: Link2,
  globe: Globe,
  diamond: Gem,
  users: Users,
  plug: Plug,
  shield: Shield,
};

export const PersonaPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, lang } = useLang();
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  const personasData = lang === 'fr' ? personasDataFr : personasDataEn;
  const persona = personasData[id as PersonaId];

  if (!persona) {
    return (
      <div className="py-20 px-4 text-center">
        <p className="text-xl text-slate-600">Persona not found</p>
      </div>
    );
  }

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              {t('persona_back')}
            </Link>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6"
          >
            {persona.tag}
          </motion.div>

          {/* Title and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              {persona.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              {persona.description}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://ledgity.finance/invest"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {t('cta_start')}
            </a>
            <a
              href="https://docs.ledgity.finance"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-slate-200 text-slate-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              {t('cta_learn')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Ledgity Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Why Ledgity?
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {persona.benefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon] || Shield;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Use Cases
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {persona.useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-6 bg-slate-50 rounded-2xl p-8 border border-slate-200"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {useCase.number}
                  </span>
                </div>
                <p className="text-lg text-slate-900 font-semibold">
                  {useCase.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              FAQ
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {persona.faq.map((faqItem, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() =>
                    setExpandedFaqIndex(
                      expandedFaqIndex === index ? null : index
                    )
                  }
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <h3 className="text-lg font-bold text-slate-900">
                    {faqItem.q}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-slate-600 flex-shrink-0 transition-transform ${
                      expandedFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedFaqIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 border-t border-slate-200"
                  >
                    <p className="text-slate-600 leading-relaxed">
                      {faqItem.a}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <BottomCTA />
    </div>
  );
};

export const BottomCTA: React.FC = () => {
  const { t } = useLang();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-12 sm:p-16 text-center text-white"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            {t('cta_title')}
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {t('cta_desc')}
          </p>
          <a
            href="https://ledgity.finance/account"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {t('cta_button')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonaPage;
