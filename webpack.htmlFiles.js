const HtmlWebpackPlugin = require('html-webpack-plugin')
const constants = require('./constants')

// @todo When we actually go live with the site, this should just be one array
// and no need to split development / production
module.exports = {
  development: [
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
    new HtmlWebpackPlugin({
      template: './src/support.hbs',
      title: 'Support – Portway',
      inject: true,
      chunks: ['support'],
      filename: 'support/index.html',
      constants: constants
    }),
    new HtmlWebpackPlugin({
      template: './src/privacy.hbs',
      title: 'Privacy policy – Portway',
      inject: true,
      chunks: ['support'],
      filename: 'privacy/index.html',
      constants: constants
    }),
  ],
  production: [
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
    new HtmlWebpackPlugin({
      template: './src/support.hbs',
      title: 'Support – Portway',
      inject: true,
      chunks: ['support'],
      filename: 'support/index.html',
      constants: constants
    }),
    new HtmlWebpackPlugin({
      template: './src/privacy.hbs',
      title: 'Privacy policy – Portway',
      inject: true,
      chunks: ['support'],
      filename: 'privacy/index.html',
      constants: constants
    }),
  ]
}
