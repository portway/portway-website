const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const constants = require('./constants')
const buildPath = path.resolve(__dirname, 'dist')

module.exports = {

  // This option controls if and how source maps are generated.
  // https://webpack.js.org/configuration/devtool/
  devtool: 'source-map',

  entry: {
    index: './src/js/index.js',
  },

  output: {
    filename: '[name].[hash:20].js',
    path: buildPath
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
          'file-loader'
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
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
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
