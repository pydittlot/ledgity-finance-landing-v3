import React from 'react';

type Currency = { code: string; color: string };

const TOP_ROW: Currency[] = [
  { code: 'USDC', color: '#2775CA' },
  { code: 'EURC', color: '#1A5BAA' },
  { code: 'USD',  color: '#3b82f6' },
  { code: 'EUR',  color: '#6366f1' },
  { code: 'GBP',  color: '#8b5cf6' },
  { code: 'JPY',  color: '#ec4899' },
  { code: 'SGD',  color: '#ef4444' },
  { code: 'CHF',  color: '#f97316' },
];

const BOTTOM_ROW: Currency[] = [
  { code: 'USDT', color: '#26A17B' },
  { code: 'DAI',  color: '#F5AC37' },
  { code: 'CAD',  color: '#f59e0b' },
  { code: 'AUD',  color: '#10b981' },
  { code: 'KRW',  color: '#14b8a6' },
  { code: 'HKD',  color: '#06b6d4' },
  { code: 'AED',  color: '#0ea5e9' },
  { code: 'SEK',  color: '#0284c7' },
];

const Chip: React.FC<Currency> = ({ code, color }) => (
  <div
    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white whitespace-nowrap text-sm font-semibold flex-shrink-0"
    style={{
      color: '#14181f',
      border: '1px solid #e5e7eb',
      boxShadow: '0 4px 12px rgba(15, 23, 42, 0.06)',
    }}
  >
    <span
      className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
      style={{ background: color }}
    >
      {code[0]}
    </span>
    {code}
  </div>
);

type RailProps = {
  items: Currency[];
  direction: 'left' | 'right';
  duration: string;
};

const Rail: React.FC<RailProps> = ({ items, direction, duration }) => {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden w-full marquee-mask">
      <div
        className={direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}
        style={{
          display: 'flex',
          gap: '0.75rem',
          width: 'max-content',
          ['--marquee-duration' as string]: duration,
        }}
      >
        {doubled.map((c, i) => (
          <Chip key={`${c.code}-${i}`} {...c} />
        ))}
      </div>
    </div>
  );
};

export const CurrencyMarquee: React.FC = () => (
  <div className="flex flex-col gap-4 w-full">
    <Rail items={TOP_ROW} direction="right" duration="38s" />
    <Rail items={BOTTOM_ROW} direction="left" duration="46s" />
  </div>
);

export default CurrencyMarquee;
