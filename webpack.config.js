var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    './app-js',
  ],
  output: {
    path: __dirname + '/app/assets/javascripts',
    filename: 'app-js.js'
  },
  module: {
    rules: [
      {
        include: path.join(__dirname, 'app-js'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
