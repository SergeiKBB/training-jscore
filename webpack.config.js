const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {main: './src/index.js'},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: [{
              loader: 'css-loader'
            }, {
              loader: 'postcss-loader'
            }, {
              loader: 'sass-loader'
            }]
          })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/'
          }
        }]
      }

    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new ExtractTextPlugin({filename: 'style.css'}),
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ],
  devtool: 'source-map'
}
