const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

const entrypoints = require('./webpack.entrypoints')
const htmlFiles = require('./webpack.htmlFiles')
const buildPath = path.resolve(__dirname, 'dist')

module.exports = {

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: entrypoints,

  output: {
    path: buildPath,
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].bundle.js',
    publicPath: '/'
  },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8080
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    ...htmlFiles.development,
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './src/img'),
        to: 'img'
      },
      {
        from: path.resolve(__dirname, './src/css/fonts'),
        to: 'css/fonts'
      },
      {
        from: path.resolve(__dirname, './src/robots.txt'),
        to: 'robots.txt'
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
          {
            loader: 'file-loader',
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: 'img/[hash]-[name].[ext]'
            }
          }
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
