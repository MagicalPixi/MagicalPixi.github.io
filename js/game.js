/**
 * Created by zyg on 16/4/24.
 */
var pixiLib = require('pixi-lib');
var PIXI = require('PIXI');

var gameContainer = document.getElementById('playContainer');

var render = pixiLib.createRender(gameContainer,{
  w:800,
  h:600,
});

var loader = pixiLib.createLoader({
  publicPath:'/sprites/'
});

loader.add(['dragon']).load(function () {

  var stage = new PIXI.Container();

  var dragon = require('../sprites/dragon');

  dragon.play();

  stage.addChild(dragon);

  render(stage);
});