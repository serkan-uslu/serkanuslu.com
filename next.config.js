const nextTranslate = require('next-translate-plugin');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = nextTranslate(
  withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    webpack: (config, { isServer, webpack }) => {
      return config;
    },
  }),
);
