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
    chunks: ['features'],
    filename: 'features/index.html',
    constants: constants
  }),
  new HtmlWebpackPlugin({
    template: './src/pricing.hbs',
    title: 'Pricing – Portway',
    inject: true,
    chunks: ['pricing'],
    filename: 'pricing/index.html',
    constants: constants
  }),
]
