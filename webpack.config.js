const config = require('./configs')
const path = require('path')

module.exports = {
  devtool: 'eval',
  entry: [ 'babel-polyfill', 'react-hot-loader/patch', './dev/index.js' ],
  output: {
    publicPath: '',
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
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }],
      },
      {
        test: /\.(scss|sass)$/,
        loaders: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'sass-loader',
        ],
      },
      {
        test: /\.(woff2?|ttf|eot|svg|jpg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },
  resolve: {
    alias: {
      [config.name]: path.join(__dirname, 'src')
    },
    modules: [ 'node_modules', 'src', 'dev' ],
    extensions: [ '.ts', '.tsx' ]
  }
}