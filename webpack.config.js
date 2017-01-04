const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: 'dist/'
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
        loader: ['style-loader', 'css-loader'],
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
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}

module.exports = config;
