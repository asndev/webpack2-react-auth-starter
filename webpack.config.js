const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  resolve: {
    modules: [
      path.resolve('./'),
      path.resolve('./node_modules')
    ]
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        // legacy loader syntax as ExtractTextPlugin needs that
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 } // images smaller than 40kb, include it as raw
          },
          'image-webpack-loader'
        ],
        test: /\.(jpe?g|gif|png|svg)$/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
}

module.exports = config;
