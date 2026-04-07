import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { LedgityLogo } from './LedgityLogo';

const personasData = [
  { id: 'family-offices', name: 'Family Offices' },
  { id: 'tresoriers', name: 'Trésoriers d\'entreprise' },
  { id: 'cgp', name: 'Gestionnaires de patrimoine' },
  { id: 'crypto', name: 'Entreprises crypto' },
  { id: 'freelances', name: 'Freelances' },
  { id: 'fintechs', name: 'Fintechs' },
];

export const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLang();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <LedgityLogo className="w-6 h-6 text-primary" />
            <div className="flex items-baseline gap-1">
              <span className="font-bold text-lg text-primary">Ledgity</span>
              <span className="font-medium text-lg text-slate-600">Finance</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-slate-600 hover:text-primary font-medium flex items-center gap-1 text-sm"
              >
                {t('nav_solutions')}
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)} />
                  <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-20">
                    {personasData.map((persona) => (
                      <Link
                        key={persona.id}
                        to={`/persona/${persona.id}`}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {persona.name}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            <a href="#products" className="text-slate-600 hover:text-primary font-medium text-sm">
              {t('nav_products')}
            </a>
            <a href="#how-it-works" className="text-slate-600 hover:text-primary font-medium text-sm">
              {t('nav_how_it_works')}
            </a>
            <a href="#security" className="text-slate-600 hover:text-primary font-medium text-sm">
              {t('nav_security')}
            </a>
            <a
              href="https://docs.ledgity.finance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-primary font-medium text-sm"
            >
              {t('nav_documentation')}
            </a>
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex gap-1 border-r border-slate-200 pr-3">
              <button
                onClick={() => setLang('fr')}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                  lang === 'fr' ? 'bg-primary text-white' : 'text-slate-600 hover:text-primary'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                  lang === 'en' ? 'bg-primary text-white' : 'text-slate-600 hover:text-primary'
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="https://ledgity.finance/account"
              className="px-4 py-2 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors"
            >
              {t('nav_login')}
            </a>
            <a
              href="https://ledgity.finance/account"
              className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              {t('nav_signup')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-slate-700 hover:text-primary p-1"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-slate-200 mt-2">
            <div className="py-1">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-left px-4 py-3 text-slate-700 hover:text-primary font-medium flex items-center justify-between"
              >
                {t('nav_solutions')}
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="bg-slate-50 rounded-lg mx-2 mb-2">
                  {personasData.map((persona) => (
                    <Link
                      key={persona.id}
                      to={`/persona/${persona.id}`}
                      className="block px-6 py-2 text-slate-700 hover:text-primary text-sm"
                      onClick={() => { setIsDropdownOpen(false); setIsMobileMenuOpen(false); }}
                    >
                      {persona.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a href="#products" className="block px-4 py-3 text-slate-700 hover:text-primary font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              {t('nav_products')}
            </a>
            <a href="#how-it-works" className="block px-4 py-3 text-slate-700 hover:text-primary font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              {t('nav_how_it_works')}
            </a>
            <a href="#security" className="block px-4 py-3 text-slate-700 hover:text-primary font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              {t('nav_security')}
            </a>
            <a
              href="https://docs.ledgity.finance"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 text-slate-700 hover:text-primary font-medium"
            >
              {t('nav_documentation')}
            </a>

            <div className="border-t border-slate-200 mt-2 pt-4 px-4 flex flex-col gap-3">
              <div className="flex gap-2">
                <button
                  onClick={() => setLang('fr')}
                  className={`flex-1 px-3 py-2 rounded font-medium text-sm transition-colors ${
                    lang === 'fr' ? 'bg-primary text-white' : 'text-slate-700 hover:text-primary border border-slate-200'
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`flex-1 px-3 py-2 rounded font-medium text-sm transition-colors ${
                    lang === 'en' ? 'bg-primary text-white' : 'text-slate-700 hover:text-primary border border-slate-200'
                  }`}
                >
                  EN
                </button>
              </div>
              <a
                href="https://ledgity.finance/account"
                className="w-full px-6 py-2 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors text-center text-sm"
              >
                {t('nav_login')}
              </a>
              <a
                href="https://ledgity.finance/account"
                className="w-full px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors text-center text-sm"
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

export default Navbar;
