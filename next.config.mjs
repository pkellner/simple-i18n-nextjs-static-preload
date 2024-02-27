/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    // These are the locales you want to support
    locales: ['en', 'es'],
    // This is the default locale you want to be used when visiting a non-locale prefixed path
    defaultLocale: 'en',
  },
};

export default nextConfig;
