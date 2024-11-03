/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (options) => ({
  miniCssExtractLoader: {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: '../',
    },
  },
  cssLoader: {
    loader: 'css-loader',
    options: {
      importLoaders: 2,
    },
  },
  postLoader: {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        config: path.resolve('webpack', 'postcss.config.js'),
      },
    },
  },
  sassLoader: {
    loader: 'sass-loader',
    options: {
      sassOptions: {
        outputStyle: 'expanded',
        quietDeps: true,
      },
    },
  },
  ...options,
});
