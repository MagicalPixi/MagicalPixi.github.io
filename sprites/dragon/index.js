var mySpriteFn = require('./sprite.js');
var mySprite = mySpriteFn();

mySprite.scale.x = 0.1;
mySprite.scale.y = 0.1;
mySprite.anchor.y = 1;
mySprite.x = maxW/5;
mySprite.y = maxH;

function createJumpFn(){

  var st = Date.now();

  var a = -2;

  return function(){
    var t = (Date.now()  - st )/20;

    return 30*t + 1/2*Math.pow(t,2)*a;
  }
}

mySprite.getJumpHeight = function(){
  return 0;
};

mySprite.render = function () {
  if(this.jumping){
    var j =  this.getJumpHeight();

    this.y = maxH - j;

    if(this.y > maxH){
      this.y = maxH;
      this.jumping = false;
    }
  }
};

mySprite.jump = function () {
  this.jumping = true;
  this.getJumpHeight = createJumpFn();
};

module.exports = mySprite;