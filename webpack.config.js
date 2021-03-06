var path = require('path');


module.exports = {
  entry: {
    index: './js/index.js',
    aboutUs: './js/aboutUs.js',
    join: './js/join.js'
  },
  externals: {
    pixi: 'Pixi',
    PIXI: 'PIXI',
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    publicPath: 'dist',
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.less$/,
      loaders: ['style', 'css', 'less']
    },{
      test: /\.css$/,
      loaders: ['style', 'css']
    }]

  },
  devTools: 'source-map'
};
