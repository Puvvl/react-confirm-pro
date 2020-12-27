const config = require('./configs');
const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: './example/index.js',
  output: {
    path: path.join(__dirname, 'demo'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test:/\.(css|scss|sass)$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'sass-loader'
        ],
      },
    ]
  },
  resolve: {
    alias: {
      [config.name]: path.join(__dirname, 'src')
    },
    extensions: [ '.ts', '.tsx', ".js" ]
  },
  target: 'node',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          cache: true,
          parallel: true,
          sourceMap: true,
          output: {
            comments: false
          },
          compress: {
            booleans: true,
          }
        }
      })
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
  ],
}