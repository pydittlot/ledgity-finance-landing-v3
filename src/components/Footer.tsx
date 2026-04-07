import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/i18n/LangContext';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/company/ledgity/',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: 'https://t.me/ledgityapp',
    label: 'Telegram',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    href: 'https://x.com/LedgityYield',
    label: 'X / Twitter',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/LedgityLabs',
    label: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export const Footer: React.FC = () => {
  const { t } = useLang();

  return (
    <footer style={{ background: '#0c0e14', color: 'white', padding: '4rem 2rem 2rem' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '2rem' }}
        >
          {/* Col 1 — Logo + desc + badge + socials */}
          <div className="flex flex-col gap-5">
            <img src="/ledgity-logo.png" alt="Ledgity Finance" className="h-8 w-auto" />

            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {t('footer_desc')}
            </p>

            <div
              className="flex items-center gap-2 text-xs rounded-lg px-3 py-3"
              style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.75)' }}
            >
              🇪🇺 {t('footer_funding')}
            </div>

            <div className="flex gap-3 mt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center w-10 h-10 rounded-lg transition-colors"
                  style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#1d4ed8')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide mb-5 text-white">
              {t('footer_nav')}
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { label: t('footer_home'), to: '/' },
                { label: t('nav_products'), href: '/#products' },
                { label: t('nav_how_it_works'), href: '/#how-it-works' },
                { label: t('nav_security'), href: '/#security' },
                { label: t('nav_documentation'), href: 'https://docs.ledgity.finance', external: true },
              ].map((item) => (
                <div key={item.label}>
                  {item.to ? (
                    <Link to={item.to} className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#1d4ed8')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                    >{item.label}</Link>
                  ) : (
                    <a href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined}
                      className="text-sm transition-colors block" style={{ color: 'rgba(255,255,255,0.7)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#1d4ed8')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                    >{item.label}</a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Col 3 — Solutions */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide mb-5 text-white">
              {t('footer_solutions')}
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Family Offices', id: 'family-offices' },
                { label: t('persona_treasurers'), id: 'tresoriers' },
                { label: t('persona_managers'), id: 'cgp' },
                { label: t('persona_crypto_label'), id: 'crypto' },
                { label: t('persona_freelance_label'), id: 'freelances' },
                { label: 'Fintechs', id: 'fintechs' },
              ].map((p) => (
                <Link key={p.id} to={`/persona/${p.id}`}
                  className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#1d4ed8')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide mb-5 text-white">
              {t('footer_contact')}
            </h3>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Email</p>
                <a href="mailto:contact@ledgity.finance" className="text-sm transition-colors"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#1d4ed8')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                >
                  contact@ledgity.finance
                </a>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Adresse</p>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  75, rue de Rivoli<br />75004 Paris, France
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 flex-wrap text-sm"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          <span>{t('footer_copyright')}</span>
          <div className="flex items-center gap-6 flex-wrap">
            {[
              { label: t('footer_terms'), href: '/legal/terms' },
              { label: t('footer_privacy'), href: '/legal/privacy' },
              { label: t('footer_aml'), href: '/legal/aml' },
            ].map((l) => (
              <a key={l.label} href={l.href} className="transition-colors"
                style={{ color: 'rgba(255,255,255,0.5)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#1d4ed8')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
