/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 16/4/24.
	 */
	var pixiLib = __webpack_require__(1);
	var PIXI = __webpack_require__(2);


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

	  var dragon = __webpack_require__(3);
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

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = pixiLib;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = PIXI;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var mySpriteFn = __webpack_require__(4);
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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var pixiLib = __webpack_require__(1);

	var args = [{

	  textures:pixiLib.getTextures('dragon'),

	  

	    

	    "scale.x" :  0.5 ,

	    

	  

	    

	    "scale.y" :  0.5 ,

	    

	  

	    

	    "animationSpeed" :  0.1 ,

	    

	  

	    

	  

	    

	    "spriteName" :  "dragon" ,

	    

	  
	}]



	  args.push([

	    
	  ]);



	module.exports = function spriteFn(){
	  var mySprite = pixiLib.getMc.apply(pixiLib,args);

	  return mySprite;
	}

/***/ }
/******/ ]);