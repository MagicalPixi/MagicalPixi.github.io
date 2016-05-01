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

var isPlaying = false;
var onStop = function () {};
var onScore = function () {};

window.onresize = function(){
  requestAnimationFrame(function () {

  });
};

function createRect(){

  var graphics = new PIXI.Graphics();

  var w = 25 + Math.random() * 80;
  var h = 25 + Math.random() * 100;

  graphics.lineStyle(2, 0x000000, 1);
  graphics.beginFill(0x000000, 1);
  graphics.drawRect(0, 0, w, h, 0);
  graphics.endFill();

  var borderW = -(maxW + w);

  graphics.x = maxW;
  graphics.y = maxH-h;
  graphics.w = w;
  graphics.h = h;

  graphics.render = function () {
    this.x -= 10;
    if(isPlaying && !this.scored && this.x < maxH/4){
      onScore();
      this.scored = true;
    }
    if(this.x < borderW && this.parent){
      this.parent.removeChild(this);
      this.destroy();
    }
  };

  return graphics;
}

function detectCrash(dragon,stones){
  var r = false;
  var i =0;
  var len = stones.length;

  for(;i<len;i++){
    var stone = stones[i];

    var stX = stone.x;
    var edX = stone.x + stone.w;

    if(
      (dragon.y > stone.y) &&
      (
        (stX < dragon.x && dragon.x < edX) ||
        ( stX < (dragon.x - 100) && (dragon.x - 100) < edX )
      )
    ){
      r = true;
      break;
    }
  }

  return r;
}

function addRect(stage,rect){
  if(isPlaying){
    var r = rect();
    stage.addChild(r);
  }

  setTimeout(addRect.bind(null,stage,rect),750+Math.random()*500);
}

loader.add(['dragon']).load(function () {

  var stage = new PIXI.Container();

  var dragon = require('../sprites/dragon');
  dragon.play();

  document.onkeydown = function (e) {
    if(e.keyCode === 38){
      dragon.jump();
    }
  };

  document.getElementById('playContainer').onclick = function(){
    dragon.jump();
  };

  stage.addChild(dragon);

  addRect(stage,createRect);


  stage.render = function () {
    if(isPlaying){
      var r = detectCrash(dragon,this.children.slice(1));
      if(r){
        isPlaying = false;
        onStop();
      }
    }
  };

  render(stage);
});


module.exports = function(){

  return {
    play: function () {

        isPlaying = true;

    },

    stop:function(){
      isPlaying = false;

    },
    onStop: function (fn) {
      onStop = fn;
    },
    onScore:function(fn){
      onScore = fn;
    }
  }
};