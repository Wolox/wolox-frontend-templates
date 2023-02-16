const path = require('path');
const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'scss')]
  },
  pageExtensions: ['page.tsx'],
  webpack: (config) => {
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      .oneOf.filter((rule) => Array.isArray(rule.use));

    rules.forEach((rule) => {
      rule.use.forEach((moduleLoader) => {
        if (
          moduleLoader.loader?.includes('css-loader') &&
          typeof moduleLoader.options?.modules === 'object'
        ) {
          moduleLoader.options = {
            ...moduleLoader.options,
            modules: {
              ...moduleLoader.options.modules,
              exportLocalsConvention: 'camelCase'
            }
          };
        }
      });
    });

    return config;
  }
});
