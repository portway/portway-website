const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

const entrypoints = require('./webpack.entrypoints')
const htmlFiles = require('./webpack.htmlFiles')

module.exports = {

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: entrypoints,

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8080
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    ...htmlFiles,
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
