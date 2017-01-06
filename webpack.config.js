const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR = [
  'react', 'react-dom', 'react-router'
];

const config = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    modules: [
      path.resolve('./'),
      path.resolve('./src'),
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
            // images smaller than 40kb, include it as raw
            options: {limit: 40000}
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
};

module.exports = config;
