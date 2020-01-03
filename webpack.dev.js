const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const constants = require('./constants')
const path = require('path')

module.exports = {

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: './src/js/index.js'
  },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8080
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.hbs',
      title: 'Portway',
      inject: true,
      chunks: ['index'],
      filename: 'index.html',
      constants: constants
    }),
    new HtmlWebpackPlugin({
      template: './src/features.hbs',
      title: 'Features – Portway',
      inject: true,
      chunks: ['index'],
      filename: 'features/index.html',
      constants: constants
    }),
    new HtmlWebpackPlugin({
      template: './src/pricing.hbs',
      title: 'Pricing – Portway',
      inject: true,
      chunks: ['index'],
      filename: 'pricing/index.html',
      constants: constants
    }),
    new HtmlWebpackPlugin({
      template: './src/support.hbs',
      title: 'Pricing – Support',
      inject: true,
      chunks: ['index'],
      filename: 'support/index.html',
      constants: constants
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './src/img'),
        to: 'img'
      },
      {
        from: path.resolve(__dirname, './src/css/fonts'),
        to: 'css/fonts'
      },
    ])
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        options: {
          runtime: path.join(__dirname, './src/helpers/handlebars')
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      }
    ]
  },

}
