const HtmlWebpackPlugin = require('html-webpack-plugin')

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
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/features.hbs',
      title: 'Features – Portway',
      inject: true,
      chunks: ['index'],
      filename: 'features/index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pricing.hbs',
      title: 'Pricing – Portway',
      inject: true,
      chunks: ['index'],
      filename: 'pricing/index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/support.hbs',
      title: 'Pricing – Support',
      inject: true,
      chunks: ['index'],
      filename: 'support/index.html'
    }),
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
          partialDirs: [__dirname + './src/partials']
        }
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
