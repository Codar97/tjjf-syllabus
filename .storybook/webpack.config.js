const path = require('path');

module.exports = async ({config, mode}) => {
  config.module.rules.push({
      test: /\.html/,
      use: ['file-loader'],
    },
    {
      test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader',],
    },
  );
  return config;
};