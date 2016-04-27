var mySpriteFn = require('./sprite.js');
var mySprite = mySpriteFn();

mySprite.scale.x = 0.1;
mySprite.scale.y = 0.1;
mySprite.anchor.y = 1;
mySprite.y = 600;

mySprite.render = function () {
};

module.exports = mySprite;