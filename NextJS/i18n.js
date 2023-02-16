module.exports = {
  locales: ['es'],
  defaultLocale: 'es',
  pages: {
    '/': ['home'],
    'rgx:^/example': ['example', 'dynamic']
  },
  extensionsRgx: /\.page\.(tsx)$/
};
