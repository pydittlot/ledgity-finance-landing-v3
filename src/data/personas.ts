export type PersonaId = 'family-offices' | 'tresoriers' | 'cgp' | 'crypto' | 'freelances' | 'fintechs'

export interface Benefit {
  icon: string
  title: string
  description: string
}

export interface UseCase {
  number: string
  text: string
}

export interface FAQ {
  q: string
  a: string
}

export interface Persona {
  tag: string
  title: string
  description: string
  benefits: Benefit[]
  useCases: UseCase[]
  faq: FAQ[]
}

export const personasDataFr: Record<PersonaId, Persona> = {
  'family-offices': {
    tag: 'FAMILY OFFICES',
    title: 'Un rendement stable pour vos liquidités',
    description: 'Ledgity offre une solution de placement sécurisée et réglementée pour vos liquidités excédentaires.',
    benefits: [
      {
        icon: 'yield',
        title: 'Rendement quotidien',
        description: 'Jusqu\'à 9% de rendement annuel composé quotidiennement'
      },
      {
        icon: 'security',
        title: 'Sécurité institutionnelle',
        description: 'Actifs assurés et dépôts en custodies agréées'
      },
      {
        icon: 'transparency',
        title: 'Transparence totale',
        description: 'Rapports détaillés et accès en temps réel'
      },
      {
        icon: 'lightning',
        title: 'Liquidité immédiate',
        description: 'Retrait de vos fonds en 24 heures'
      }
    ],
    useCases: [
      { number: '01', text: 'Placer vos liquidités en attente' },
      { number: '02', text: 'Diversifier votre allocation d\'actifs' },
      { number: '03', text: 'Générer un rendement régulier sur stablecoins' },
      { number: '04', text: 'Obtenir des rapports clairs pour vos bénéficiaires' }
    ],
    faq: [
      {
        q: 'Quel est le rendement exact?',
        a: 'Notre rendement fluctue selon les conditions de marché. Historiquement, nous affichons 9% annuel.'
      },
      {
        q: 'Puis-je retirer à tout moment?',
        a: 'Oui, vous pouvez retirer vos fonds 24/7 en maximum 24 heures ouvrables.'
      },
      {
        q: 'Mes fonds sont-ils sûrs?',
        a: 'Vos fonds sont assurés et placés dans les meilleures custodies (Fireblocks, Ledger).'
      }
    ]
  },
  'tresoriers': {
    tag: 'TRÉSORIERS D\'ENTREPRISE',
    title: 'Optimisez votre trésorerie',
    description: 'Mettez vos réserves excédentaires au travail et générez un rendement stable.',
    benefits: [
      {
        icon: 'money',
        title: 'Rendement optimisé',
        description: 'Jusqu\'à 9% annuel sur vos liquidités'
      },
      {
        icon: 'lock',
        title: 'Sécurité maximale',
        description: 'Dépôts assurés en custodies institutionnelles'
      },
      {
        icon: 'report',
        title: 'Reporting détaillé',
        description: 'Visibilité complète et rapports automatisés'
      },
      {
        icon: 'clock',
        title: 'Retraits rapides',
        description: '24h pour accéder à vos fonds'
      }
    ],
    useCases: [
      { number: '01', text: 'Placer les réserves de cash' },
      { number: '02', text: 'Optimiser la position de trésorerie' },
      { number: '03', text: 'Générer des intérêts réguliers' },
      { number: '04', text: 'Simplifier la gestion des liquidités' }
    ],
    faq: [
      {
        q: 'Quel APY pour mon entreprise?',
        a: 'De 7% à 9% selon le montant et la durée.'
      }
    ]
  },
  'cgp': {
    tag: 'GESTIONNAIRES DE PATRIMOINE',
    title: 'Un produit de rendement clair pour vos clients',
    description: 'Offrez à vos clients une allocation stable avec des rendements décents.',
    benefits: [
      {
        icon: 'check',
        title: 'Produit régulé',
        description: 'Cadre réglementaire clair et sécurisé'
      },
      {
        icon: 'yield',
        title: 'Rendement stable',
        description: 'Allocation équilibrée et prévisible'
      },
      {
        icon: 'target',
        title: 'Reporting client',
        description: 'Transparence totale pour vos clients'
      },
      {
        icon: 'refresh',
        title: 'Intégration API',
        description: 'Connectez Ledgity à vos outils'
      }
    ],
    useCases: [
      { number: '01', text: 'Offrir une alternative aux dépôts bancaires' },
      { number: '02', text: 'Diversifier les portefeuilles clients' },
      { number: '03', text: 'Générer des commissions supplémentaires' },
      { number: '04', text: 'Améliorer la satisfaction client' }
    ],
    faq: [
      {
        q: 'Pouvez-vous être intégré?',
        a: 'Oui, nous offrons une API white-label et des connecteurs.'
      }
    ]
  },
  'crypto': {
    tag: 'ENTREPRISES CRYPTO',
    title: 'Optimisez vos réserves en stablecoins',
    description: 'Générez un rendement productif tout en maintenant la flexibilité blockchain.',
    benefits: [
      {
        icon: 'chain',
        title: 'On-chain flexibility',
        description: 'Retirez à tout moment via blockchain'
      },
      {
        icon: 'yield',
        title: 'Rendement productif',
        description: 'Jusqu\'à 9% annuel sur USDC/USDT'
      },
      {
        icon: 'security',
        title: 'Sécurité DeFi',
        description: 'Smart contracts audités et assurés'
      },
      {
        icon: 'globe',
        title: 'Multi-chain',
        description: 'Disponible sur plusieurs blockchains'
      }
    ],
    useCases: [
      { number: '01', text: 'Optimiser les réserves de stablecoins' },
      { number: '02', text: 'Générer des rendements sans risque de change' },
      { number: '03', text: 'Financer le développement produit' },
      { number: '04', text: 'Améliorer les ratios de capital' }
    ],
    faq: [
      {
        q: 'Puis-je retirer via blockchain?',
        a: 'Oui, retraits instantanés via wallet ou bridge.'
      }
    ]
  },
  'freelances': {
    tag: 'FREELANCES & INDÉPENDANTS',
    title: 'Développez votre revenu entre les projets',
    description: 'Placez vos revenus en toute sécurité et générez des intérêts.',
    benefits: [
      {
        icon: 'money',
        title: 'Rendement passif',
        description: 'Jusqu\'à 9% annuel sur vos économies'
      },
      {
        icon: 'clock',
        title: 'Flexibilité',
        description: 'Retirez quand vous avez besoin de fonds'
      },
      {
        icon: 'shield',
        title: 'Sécurisé',
        description: 'Vos fonds sont assurés et protégés'
      },
      {
        icon: 'lightning',
        title: 'Accès rapide',
        description: 'Retirez en moins de 24h'
      }
    ],
    useCases: [
      { number: '01', text: 'Fructifier vos revenus en attente' },
      { number: '02', text: 'Créer un fonds de réserve sécurisé' },
      { number: '03', text: 'Complémenter vos revenus irréguliers' },
      { number: '04', text: 'Préparer votre retraite' }
    ],
    faq: [
      {
        q: 'Aucun montant minimum?',
        a: 'Correct, commencez avec n\'importe quel montant, même $1.'
      }
    ]
  },
  'fintechs': {
    tag: 'FINTECHS',
    title: 'Intégrez un produit de rendement clé en main',
    description: 'Offrez le rendement Ledgity à vos utilisateurs via notre API white-label.',
    benefits: [
      {
        icon: 'plug',
        title: 'API white-label',
        description: 'Intégration rapide et facile'
      },
      {
        icon: 'diamond',
        title: 'Marque personnalisée',
        description: 'Offrez sous votre propre marque'
      },
      {
        icon: 'report',
        title: 'Analytics complètes',
        description: 'Dashboard et reporting complets'
      },
      {
        icon: 'money',
        title: 'Modèle de revenus',
        description: 'Commissions attractives'
      }
    ],
    useCases: [
      { number: '01', text: 'Enrichir votre offre de produits' },
      { number: '02', text: 'Monétiser votre base utilisateurs' },
      { number: '03', text: 'Offrir une meilleure expérience' },
      { number: '04', text: 'Augmenter votre LTV utilisateur' }
    ],
    faq: [
      {
        q: 'Combien de temps pour l\'intégration?',
        a: 'De 1 à 4 semaines selon votre stack technique.'
      }
    ]
  }
}

export const personasDataEn: Record<PersonaId, Persona> = {
  'family-offices': {
    tag: 'FAMILY OFFICES',
    title: 'Stable yield for your liquidity',
    description: 'Ledgity offers a secure and regulated investment solution for your excess liquidity.',
    benefits: [
      {
        icon: 'yield',
        title: 'Daily yield',
        description: 'Up to 9% annual yield compounded daily'
      },
      {
        icon: 'security',
        title: 'Institutional security',
        description: 'Insured assets and approved custodial deposits'
      },
      {
        icon: 'transparency',
        title: 'Full transparency',
        description: 'Detailed reports and real-time access'
      },
      {
        icon: 'lightning',
        title: 'Instant liquidity',
        description: 'Withdraw your funds in 24 hours'
      }
    ],
    useCases: [
      { number: '01', text: 'Deploy your idle liquidity' },
      { number: '02', text: 'Diversify your asset allocation' },
      { number: '03', text: 'Generate regular stablecoin yield' },
      { number: '04', text: 'Get clear reporting for beneficiaries' }
    ],
    faq: [
      {
        q: 'What is the exact yield?',
        a: 'Our yield fluctuates with market conditions. Historically, we deliver 9% annual.'
      },
      {
        q: 'Can I withdraw anytime?',
        a: 'Yes, you can withdraw 24/7 within a maximum of 24 business hours.'
      },
      {
        q: 'Are my funds safe?',
        a: 'Your funds are insured and held in top custodies (Fireblocks, Ledger).'
      }
    ]
  },
  'tresoriers': {
    tag: 'CORPORATE TREASURERS',
    title: 'Put your idle treasury to work',
    description: 'Deploy your excess reserves and generate stable yield.',
    benefits: [
      {
        icon: 'money',
        title: 'Optimized yield',
        description: 'Up to 9% annual on your liquidity'
      },
      {
        icon: 'lock',
        title: 'Maximum security',
        description: 'Insured deposits in institutional custodies'
      },
      {
        icon: 'report',
        title: 'Detailed reporting',
        description: 'Full visibility and automated reports'
      },
      {
        icon: 'clock',
        title: 'Fast withdrawals',
        description: '24h to access your funds'
      }
    ],
    useCases: [
      { number: '01', text: 'Deploy cash reserves' },
      { number: '02', text: 'Optimize treasury position' },
      { number: '03', text: 'Generate regular interest' },
      { number: '04', text: 'Simplify liquidity management' }
    ],
    faq: [
      {
        q: 'What APY for my company?',
        a: '7% to 9% depending on amount and duration.'
      }
    ]
  },
  'cgp': {
    tag: 'WEALTH MANAGERS',
    title: 'A clear yield product for your clients',
    description: 'Offer your clients stable allocation with decent returns.',
    benefits: [
      {
        icon: 'check',
        title: 'Regulated product',
        description: 'Clear and secure regulatory framework'
      },
      {
        icon: 'yield',
        title: 'Stable yield',
        description: 'Balanced and predictable allocation'
      },
      {
        icon: 'target',
        title: 'Client reporting',
        description: 'Full transparency for your clients'
      },
      {
        icon: 'refresh',
        title: 'API integration',
        description: 'Connect Ledgity to your tools'
      }
    ],
    useCases: [
      { number: '01', text: 'Offer an alternative to bank deposits' },
      { number: '02', text: 'Diversify client portfolios' },
      { number: '03', text: 'Generate additional commissions' },
      { number: '04', text: 'Improve client satisfaction' }
    ],
    faq: [
      {
        q: 'Can you be integrated?',
        a: 'Yes, we offer white-label API and connectors.'
      }
    ]
  },
  'crypto': {
    tag: 'CRYPTO COMPANIES',
    title: 'Optimize your stablecoin reserves',
    description: 'Generate productive yield while maintaining blockchain flexibility.',
    benefits: [
      {
        icon: 'chain',
        title: 'On-chain flexibility',
        description: 'Withdraw anytime via blockchain'
      },
      {
        icon: 'yield',
        title: 'Productive yield',
        description: 'Up to 9% annual on USDC/USDT'
      },
      {
        icon: 'security',
        title: 'DeFi security',
        description: 'Audited and insured smart contracts'
      },
      {
        icon: 'globe',
        title: 'Multi-chain',
        description: 'Available across multiple blockchains'
      }
    ],
    useCases: [
      { number: '01', text: 'Optimize stablecoin reserves' },
      { number: '02', text: 'Generate yield without FX risk' },
      { number: '03', text: 'Fund product development' },
      { number: '04', text: 'Improve capital ratios' }
    ],
    faq: [
      {
        q: 'Can I withdraw via blockchain?',
        a: 'Yes, instant withdrawals via wallet or bridge.'
      }
    ]
  },
  'freelances': {
    tag: 'FREELANCERS & INDEPENDENTS',
    title: 'Grow your income between projects',
    description: 'Invest your income safely and earn interest.',
    benefits: [
      {
        icon: 'money',
        title: 'Passive yield',
        description: 'Up to 9% annual on your savings'
      },
      {
        icon: 'clock',
        title: 'Flexibility',
        description: 'Withdraw when you need funds'
      },
      {
        icon: 'shield',
        title: 'Secure',
        description: 'Your funds are insured and protected'
      },
      {
        icon: 'lightning',
        title: 'Quick access',
        description: 'Withdraw in less than 24h'
      }
    ],
    useCases: [
      { number: '01', text: 'Grow your idle income' },
      { number: '02', text: 'Create a secure emergency fund' },
      { number: '03', text: 'Supplement irregular income' },
      { number: '04', text: 'Prepare for retirement' }
    ],
    faq: [
      {
        q: 'No minimum amount?',
        a: 'Correct, start with any amount, even $1.'
      }
    ]
  },
  'fintechs': {
    tag: 'FINTECHS',
    title: 'Integrate a turnkey yield product',
    description: 'Offer Ledgity yield to your users via our white-label API.',
    benefits: [
      {
        icon: 'plug',
        title: 'White-label API',
        description: 'Quick and easy integration'
      },
      {
        icon: 'diamond',
        title: 'Custom branding',
        description: 'Offer under your own brand'
      },
      {
        icon: 'report',
        title: 'Full analytics',
        description: 'Complete dashboard and reporting'
      },
      {
        icon: 'money',
        title: 'Revenue model',
        description: 'Attractive commissions'
      }
    ],
    useCases: [
      { number: '01', text: 'Enrich your product offering' },
      { number: '02', text: 'Monetize your user base' },
      { number: '03', text: 'Deliver better experience' },
      { number: '04', text: 'Increase user LTV' }
    ],
    faq: [
      {
        q: 'How long for integration?',
        a: '1 to 4 weeks depending on your tech stack.'
      }
    ]
  }
}
