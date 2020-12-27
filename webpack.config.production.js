const config = require('./configs')
const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: [ './src/index.tsx' ],
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'react-confirm-pro.js',
    library: 'ReactConfirmPro',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
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
  externals: [{
    'react': 'react',
    'react-dom': 'react-dom',
    "classNames": "classnames"
  }],
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