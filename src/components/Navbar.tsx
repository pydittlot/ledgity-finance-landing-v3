import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { LedgityLogo } from './LedgityLogo';

const personasData = [
  { id: 1, name: 'Entreprise' },
  { id: 2, name: 'Wealth Manager' },
  { id: 3, name: 'Treasury Manager' },
  { id: 4, name: 'Fond Allocation' },
  { id: 5, name: 'Institutional' },
  { id: 6, name: 'Individual' },
];

export const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLang();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2">
            <LedgityLogo className="w-6 h-6 text-primary" />
            <div className="flex items-baseline gap-1">
              <span className="font-bold text-lg text-primary">Ledgity</span>
              <span className="font-medium text-lg text-slate-600">Finance</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-slate-700 hover:text-primary font-medium flex items-center gap-1"
              >
                {t('nav_solutions')}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-10">
                  {personasData.map((persona) => (
                    <Link
                      key={persona.id}
                      to={`/persona/${persona.id}`}
                      className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {persona.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a href="#products" className="text-slate-700 hover:text-primary font-medium">
              {t('nav_products')}
            </a>
            <a href="#howitworks" className="text-slate-700 hover:text-primary font-medium">
              {t('nav_how_it_works')}
            </a>
            <a href="#security" className="text-slate-700 hover:text-primary font-medium">
              {t('nav_security')}
            </a>
            <a
              href="https://docs.ledgity.finance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-primary font-medium"
            >
              {t('nav_documentation')}
            </a>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex gap-2 border-r border-slate-200 pr-4">
              <button
                onClick={() => setLang('fr')}
                className={`px-3 py-1 rounded font-medium transition-colors ${
                  lang === 'fr'
                    ? 'bg-primary text-white'
                    : 'text-slate-700 hover:text-primary'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded font-medium transition-colors ${
                  lang === 'en'
                    ? 'bg-primary text-white'
                    : 'text-slate-700 hover:text-primary'
                }`}
              >
                EN
              </button>
            </div>

            {/* Auth Buttons */}
            <a
              href="https://ledgity.finance/account"
              className="px-6 py-2 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors"
            >
              {t('nav_login')}
            </a>
            <a
              href="https://ledgity.finance/account"
              className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              {t('nav_signup')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-primary"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-200 mt-4">
            <div className="py-2">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-left px-4 py-2 text-slate-700 hover:text-primary font-medium flex items-center justify-between"
              >
                {t('nav_solutions')}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="bg-slate-50">
                  {personasData.map((persona) => (
                    <Link
                      key={persona.id}
                      to={`/persona/${persona.id}`}
                      className="block px-8 py-2 text-slate-700 hover:text-primary text-sm"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {persona.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a href="#products" className="block px-4 py-2 text-slate-700 hover:text-primary font-medium">
              {t('nav_products')}
            </a>
            <a href="#howitworks" className="block px-4 py-2 text-slate-700 hover:text-primary font-medium">
              {t('nav_how_it_works')}
            </a>
            <a href="#security" className="block px-4 py-2 text-slate-700 hover:text-primary font-medium">
              {t('nav_security')}
            </a>
            <a
              href="https://docs.ledgity.finance"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-slate-700 hover:text-primary font-medium"
            >
              {t('nav_documentation')}
            </a>

            <div className="border-t border-slate-200 mt-4 pt-4 px-4 flex flex-col gap-3">
              <div className="flex gap-2">
                <button
                  onClick={() => setLang('fr')}
                  className={`flex-1 px-3 py-2 rounded font-medium transition-colors ${
                    lang === 'fr'
                      ? 'bg-primary text-white'
                      : 'text-slate-700 hover:text-primary border border-slate-200'
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`flex-1 px-3 py-2 rounded font-medium transition-colors ${
                    lang === 'en'
                      ? 'bg-primary text-white'
                      : 'text-slate-700 hover:text-primary border border-slate-200'
                  }`}
                >
                  EN
                </button>
              </div>
              <a
                href="https://ledgity.finance/account"
                className="w-full px-6 py-2 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors text-center"
              >
                {t('nav_login')}
              </a>
              <a
                href="https://ledgity.finance/account"
                className="w-full px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors text-center"
              >
                {t('nav_signup')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
