const path = require('path');

module.exports = async ({config, mode}) => {
  config.module.rules.push({
    test: /\.html/,
    use: ['file-loader'],
  });
  return config;
};