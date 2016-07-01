var path = require('path');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var basic = require('./webpack.config')

basic = Object.assign(basic, {


  module: {
    loaders: [{
      test: /\.less$/,
      loader: ExtractTextPlugin.extract("style", "css!less"),
    }]
  },

  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
})

module.exports = basic