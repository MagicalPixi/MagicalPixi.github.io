var path = require('path');


module.exports = {
  entry:'./js/game.js',
  externals:{
    'pixi-lib':'pixiLib',
    pixi:'Pixi',
    PIXI:'PIXI',
  },
  output:{
    path: path.resolve(__dirname, './dist/'),
    publicPath: 'dist',
    filename: 'game.js'
  }
};