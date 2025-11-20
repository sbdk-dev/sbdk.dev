const nextConfig = require('eslint-config-next');

module.exports = [
  {
    ignores: ["node_modules/**", ".next/**"],
  },
  // include the Next.js shareable configs directly (they are exported as config objects)
  // this maps to the legacy `extends: "next/core-web-vitals"`
  ...(Array.isArray(nextConfig) ? nextConfig : [nextConfig]),
];
