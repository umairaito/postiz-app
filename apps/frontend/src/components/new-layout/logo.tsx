'use client';

// Reputably "R" mark — replaces upstream's inline postiz logo.
// Kept as a 60x60 inline SVG so every site that used the original
// positioning/sizing still works without layout tweaks.
export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      className="mt-[8px] min-w-[60px] min-h-[60px]"
    >
      <rect width="60" height="60" rx="12" fill="#2462EB" />
      <text
        x="30"
        y="42"
        fontFamily="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
        fontSize="34"
        fontWeight="800"
        textAnchor="middle"
        fill="#fff"
      >
        R
      </text>
    </svg>
  );
};
