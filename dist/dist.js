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

	var gameFn = __webpack_require__(1);
	game = gameFn();

	var body = document.querySelector('body');
	var playGameButton = document.querySelector('.play-game-button');
	var gameScore = document.querySelector('.game-score');

	var allScore = 0;

	playGameButton.onclick = function () {
	    body.setAttribute('play-game','playing');

	    game.play();

	    allScore = 0;

	    game.onStop(function () {
	        console.log('stop');
	        body.setAttribute('play-game','replay');

	        playGameButton.innerText = '得分:'+allScore+',再来一次';
	        gameScore.innerText = '分数:0';
	    });
	    game.onScore(function(score){
	        allScore++;

	        gameScore.innerText = '分数:'+allScore;
	    });
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 16/4/24.
	 */
	var pixiLib = __webpack_require__(2);
	var PIXI = __webpack_require__(3);

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
	    if(!this.scored && this.x < maxH/4){
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

	  var dragon = __webpack_require__(4);
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = pixiLib;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = PIXI;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var mySpriteFn = __webpack_require__(5);
	var mySprite = mySpriteFn();

	mySprite.scale.x = 0.1;
	mySprite.scale.y = 0.1;
	mySprite.anchor.x = 1;
	mySprite.anchor.y = 1;
	mySprite.x = maxW/4;
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
	  if(!this.jumping){
	    this.getJumpHeight = createJumpFn();
	    this.jumping = true;
	  }
	};

	module.exports = mySprite;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var pixiLib = __webpack_require__(2);

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