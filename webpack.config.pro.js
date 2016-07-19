var path = require('path');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var basic = require('./webpack.config')

var precss = require('precss')
var autoprefixer = require('autoprefixer')

basic = Object.assign(basic, {


  module: {
    loaders: [{
      test: /\.less$/,
      loader: ExtractTextPlugin.extract("style", "css!postcss!less"),
    },{
      test: /\.css$/,
      loaders: ['style', 'css']
    }]
  },
  postcss: function () {
    return [precss, autoprefixer];
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
})

module.exports = basic