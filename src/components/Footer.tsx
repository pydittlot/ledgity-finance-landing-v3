import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, MessageCircle, X as TwitterIcon, Github } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';

export const Footer: React.FC = () => {
  const { t } = useLang();

  return (
    <footer className="bg-slate-900 text-gray-400 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center">
              <img src="/ledgity-logo.png" alt="Ledgity Finance" className="h-8 w-auto" />
            </div>

            <p className="text-sm leading-relaxed max-w-xs">
              {t('footer_desc')}
            </p>

            {/* EU Funding Badge */}
            <div className="text-xs text-gray-500 p-3 border border-gray-700 rounded-lg bg-slate-800/50">
              {t('footer_funding')}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://www.linkedin.com/company/ledgity/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/ledgityapp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/LedgityYield"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/LedgityLabs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-6">
              {t('footer_nav')}
            </h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors"
                >
                  {t('footer_home')}
                </Link>
              </li>
              <li>
                <a
                  href="/#products"
                  className="hover:text-white transition-colors"
                >
                  {t('nav_produits')}
                </a>
              </li>
              <li>
                <a
                  href="/#how-it-works"
                  className="hover:text-white transition-colors"
                >
                  {t('nav_comment')}
                </a>
              </li>
              <li>
                <a
                  href="/#security"
                  className="hover:text-white transition-colors"
                >
                  {t('nav_securite')}
                </a>
              </li>
              <li>
                <a
                  href="https://docs.ledgity.finance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t('nav_docs')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-6">
              {t('footer_solutions')}
            </h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <Link
                  to="/persona/family-offices"
                  className="hover:text-white transition-colors"
                >
                  Family Offices
                </Link>
              </li>
              <li>
                <Link
                  to="/persona/tresoriers"
                  className="hover:text-white transition-colors"
                >
                  {t('persona_treasurers')}
                </Link>
              </li>
              <li>
                <Link
                  to="/persona/cgp"
                  className="hover:text-white transition-colors"
                >
                  {t('persona_managers')}
                </Link>
              </li>
              <li>
                <Link
                  to="/persona/crypto"
                  className="hover:text-white transition-colors"
                >
                  {t('persona_crypto_label')}
                </Link>
              </li>
              <li>
                <Link
                  to="/persona/freelances"
                  className="hover:text-white transition-colors"
                >
                  {t('persona_freelance_label')}
                </Link>
              </li>
              <li>
                <Link
                  to="/persona/fintechs"
                  className="hover:text-white transition-colors"
                >
                  Fintechs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-6">
              {t('footer_contact')}
            </h3>
            <div className="flex flex-col gap-4 text-sm">
              <div>
                <p className="text-gray-500 text-xs mb-1">Email</p>
                <a
                  href="mailto:contact@ledgity.finance"
                  className="hover:text-white transition-colors"
                >
                  contact@ledgity.finance
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-1">Address</p>
                <p className="leading-relaxed">
                  75, rue de Rivoli
                  <br />
                  75004 Paris, France
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-sm">
              {t('footer_copyright')}
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                {t('footer_terms')}
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                {t('footer_privacy')}
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                {t('footer_aml')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
