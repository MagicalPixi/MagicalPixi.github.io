var path = require('path');


module.exports = {
  entry:'./js/index.js',
  externals:{
    'pixi-lib':'pixiLib',
    pixi:'Pixi',
    PIXI:'PIXI',
  },
  output:{
    path: path.resolve(__dirname, './dist/'),
    publicPath: 'dist',
    filename: 'dist.js'
  }
};