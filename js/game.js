/**
 * Created by zyg on 16/4/24.
 */
var pixiLib = require('pixi-lib');
var PIXI = require('PIXI');


var gameContainer = document.getElementById('playContainer');

window.maxW = 800;
window.maxH = 400;

var render = pixiLib.createRender(gameContainer,{
  w:maxW,
  h:maxH,
});

var loader = pixiLib.createLoader({
  publicPath:'/sprites/'
});

window.onresize = function(){
  requestAnimationFrame(function () {


  });
};

function createRect(){

  var graphics = new PIXI.Graphics();

  var w = 25 + Math.random() * 50;
  var h = 50 + Math.random() * 100;

  graphics.lineStyle(2, 0x000000, 1);
  graphics.beginFill(0x000000, 1);
  graphics.drawRect(maxW, maxH-h, w, h, 0);
  graphics.endFill();

  var borderW = -(maxW + w);

  graphics.render = function () {
    this.x -= 10;
    if(this.x < borderW && this.parent){
      this.parent.removeChild(this);
      this.destroy();
    }
  };

  return graphics;
}

loader.add(['dragon']).load(function () {

  var stage = new PIXI.Container();

  var dragon = require('../sprites/dragon');
  dragon.play();


  document.addEventListener('keydown', function (e) {
    if(e.keyCode === 38){
      dragon.jump();
    }
  });

  document.getElementById('playContainer').onclick = function(){
    dragon.jump();
  };

  setInterval(function () {
    var rect = createRect();
    stage.addChild(rect);
  },1000);

  stage.addChild(dragon);

  render(stage);
});