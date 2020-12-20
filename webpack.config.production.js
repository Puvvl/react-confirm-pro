var config = require('./configs')
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './example/index.js',
  output: {
    path: path.join(__dirname, 'demo'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: false,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      _: 'lodash'
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
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
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  },
  resolve: {
    alias: {
      [config.name]: path.join(__dirname, 'src')
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }
}