import React from 'react';

// Reputably wordmark + mark. Replaces upstream's postiz inline SVG.
// Uses currentColor so existing color-inheriting usages still work.
export const LogoTextComponent = () => {
  return (
    <svg
      width="140"
      height="33"
      viewBox="0 0 140 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="3" width="28" height="28" rx="6" fill="currentColor" />
      <text
        x="14"
        y="24"
        fontFamily="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
        fontSize="17"
        fontWeight="800"
        textAnchor="middle"
        fill="#fff"
      >
        R
      </text>
      <text
        x="36"
        y="25"
        fontFamily="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="-0.5"
      >
        Reputably
      </text>
    </svg>
  );
};
