var path = require('path');


module.exports = {
  entry:'./js/index.js',
  externals:{
    pixi:'Pixi',
    PIXI:'PIXI',
  },
  output:{
    path: path.resolve(__dirname, './dist/'),
    publicPath: 'dist',
    filename: 'dist.js'
  },
  module:{
    loaders:[{
      test:/\.less$/,
      loaders:['style','css','less']
    },{
      test:/\.scss$/,
      loaders:['style','css','sass']
    }]
  },
  devTools:'source-map'
};