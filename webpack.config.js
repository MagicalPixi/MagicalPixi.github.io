var path = require('path');


module.exports = {
  entry:'./js/game.js',
  externals:{
    'pixi-lib':'pixiLib',
    pixi:'Pixi',
  },
  output:{
    path: path.resolve(__dirname, './dist/'),
    publicPath: 'dist',
    filename: '[name].js'
  }
};