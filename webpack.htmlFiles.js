const HtmlWebpackPlugin = require('html-webpack-plugin')
const constants = require('./constants')

module.exports = [
  new HtmlWebpackPlugin({
    template: './src/home.hbs',
    title: 'Portway',
    inject: true,
    chunks: ['home'],
    filename: 'index.html',
    constants: constants
  }),
  new HtmlWebpackPlugin({
    template: './src/features.hbs',
    title: 'Features – Portway',
    inject: true,
    chunks: ['home'],
    filename: 'features/index.html',
    constants: constants
  }),
  new HtmlWebpackPlugin({
    template: './src/pricing.hbs',
    title: 'Pricing – Portway',
    inject: true,
    chunks: ['home'],
    filename: 'pricing/index.html',
    constants: constants
  }),
  new HtmlWebpackPlugin({
    template: './src/support.hbs',
    title: 'Pricing – Support',
    inject: true,
    chunks: ['home'],
    filename: 'support/index.html',
    constants: constants
  }),
]
