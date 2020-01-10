const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const entrypoints = require('./webpack.entrypoints')
const htmlFiles = require('./webpack.htmlFiles')
const buildPath = path.resolve(__dirname, 'dist')

module.exports = {

  // This option controls if and how source maps are generated.
  // https://webpack.js.org/configuration/devtool/
  devtool: 'source-map',

  entry: entrypoints,

  output: {
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[name].[chunkhash].js',
    path: buildPath,
    publicPath: '/'
  },

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
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      }
    ]
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './src/img'),
        to: 'img'
      },
      {
        from: path.resolve(__dirname, './src/css/fonts'),
        to: 'css/fonts'
      },
    ]),
    ...htmlFiles.production,
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].[chunkhash].css'
    }),
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin({})
    ]
  },

}
