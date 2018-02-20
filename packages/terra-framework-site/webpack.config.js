// By default eslint assumes packages imported are supposed to be dependencies,
// not devDependencies. Disabling this rule in webpack.conig.js
/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const postCssConfig = require('./postcss.config');
const PostCSSAssetsPlugin = require('postcss-assets-webpack-plugin');
const PostCSSCustomProperties = require('postcss-custom-properties');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const I18nAggregatorPlugin = require('terra-i18n-plugin');
const i18nSupportedLocales = require('terra-i18n/lib/i18nSupportedLocales');
// const theComponent = require('../dist/index.386deb23ed815fe69bb8');

// const theComponent = `define(function(){return function(e){function m(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,m),r.l=!0,r.exports}var n={};return m.m=e,m.c=n,m.d=function(e,n,t){m.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},m.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return m.d(n,"a",n),n},m.o=function(e,m){return Object.prototype.hasOwnProperty.call(e,m)},m.p="http://localhost:9000/",m(m.s=0)}([function(e,m){throw new Error("Module build failed: SyntaxError: Unexpected token, expected , (6:44)\n\n[0m [90m 4 | [39m\n [90m 5 | [39m[36mexport[39m [36mdefault[39m (props) [33m=>[39m (\n[31m[1m>[22m[39m[90m 6 | [39m  __webpack_public_path__ [33m=[39m props[33m.[39mpublicPath[33m;[39m \n [90m   | [39m                                            [31m[1m^[22m[39m\n [90m 7 | [39m\n [90m 8 | [39m  [36mreturn[39m [33m<[39m[33mStatusView[39m\n [90m 9 | [39m  isAlignedTop[33m=[39m{[36mfalse[39m}[0m\n")}]).default});`;

const theComponent = 'console.log("whassup??");';

module.exports = {
  entry: {
    'babel-polyfill': 'babel-polyfill',
    'terra-framework': path.resolve(path.join(__dirname, 'src', 'Index')),
  },
  module: {
    rules: [{
      test: /\.(jsx|js)$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    },
    {
      test: /\.(scss|css)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true,
            importLoaders: 2,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        }, {
          loader: 'postcss-loader',
          options: postCssConfig,
        },
        {
          loader: 'sass-loader',
          options: {
            data: '$bundled-themes: mock, consumer;',
          },
        }],
      }),
    },
    {
      test: /\.md$/,
      use: 'raw-loader',
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: 'file-loader',
    },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name]-[hash].css'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      chunks: ['babel-polyfill', 'terra-framework'],
    }),
    new I18nAggregatorPlugin({
      baseDirectory: __dirname,
      supportedLocales: i18nSupportedLocales,
    }),
    new PostCSSAssetsPlugin({
      test: /\.css$/,
      log: false,
      plugins: [
        PostCSSCustomProperties({ preserve: true }),
      ],
    }),
    new webpack.NamedChunksPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'aggregated-translations'), 'node_modules'],

    // See https://github.com/facebook/react/issues/8026
    alias: {
      react: path.resolve(__dirname, 'node_modules', 'react'),
      'react-intl': path.resolve(__dirname, 'node_modules', 'react-intl'),
      moment: path.resolve(__dirname, 'node_modules', 'moment'),
      'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom'),
    },
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
  devtool: 'cheap-source-map',
  devServer: {
    setup(app) {
      // Mocks component
      app.get('/test/:file', (req, res) => {
        res.sendFile(path.join(__dirname, '../../dist/' + req.params.file));
      });
    },
  },
  resolveLoader: {
    modules: [path.resolve(path.join(__dirname, 'node_modules'))],
  },
  // See: https://github.com/webpack-contrib/css-loader/issues/447
  node: {
    fs: 'empty',
  },
};
