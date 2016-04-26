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