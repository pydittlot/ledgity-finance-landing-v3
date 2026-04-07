import React from 'react';

interface LedgityLogoProps {
  className?: string;
}

export const LedgityLogo: React.FC<LedgityLogoProps> = ({ className = 'w-6 h-6' }) => {
  return (
    <svg
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.416 4.45L8.756 2.5l3.496 2.012-3.347 1.946L5.416 4.45ZM5 5.43V17.015c0 .898.474 1.729 1.246 2.187l6.109 3.617V18.91l-3.714-2.229-.257-.154v-.299V7.378L5 5.43Zm8.413 17.418l3.4-1.949v-4.024l-3.4 2.036v3.937Zm2.752-6.817l-2.935-1.689-3.275 1.895 2.93 1.758 3.28-1.964ZM12.86 13.335V5.397L9.442 7.377v7.934l3.417-1.977Z"
        fill="currentColor"
      />
    </svg>
  );
};
