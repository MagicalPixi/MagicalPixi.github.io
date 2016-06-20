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

	__webpack_require__(1)

	var gameFn = __webpack_require__(5);
	game = gameFn();

	var body = document.querySelector('body');
	var playGameButton = document.querySelector('.play-game-button');
	var gameScore = document.querySelector('.game-score');
	var gameScoreMax = document.querySelector('.game-score-max');

	var allScore = 0;
	var maxScoreKey = 'bestScore';
	var maxScore = localStorage.getItem(maxScoreKey) || 0;

	gameScoreMax.innerText = maxScore;

	playGameButton.onclick = function () {
	    body.setAttribute('play-game','playing');

	    game.play();

	    allScore = 0;

	    game.onStop(function () {
	        console.log('stop');
	        body.setAttribute('play-game','replay');

	        playGameButton.innerText = '得分:'+allScore+',再来一次';
	        gameScore.innerText = 0;
	    });
	    game.onScore(function(score){
	        allScore++;

	        if(parseInt(allScore) > parseInt(maxScore)){
	            maxScore = allScore;
	            gameScoreMax.innerText = allScore;
	            localStorage.setItem(maxScoreKey,maxScore);
	        }
	        gameScore.innerText = allScore;
	    });
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/*\nErrno::ENOENT: No such file or directory - index.scss\n\nBacktrace:\n/Library/Ruby/Gems/2.0.0/gems/sass-3.4.16/lib/sass/plugin/compiler.rb:482:in `read'\n/Library/Ruby/Gems/2.0.0/gems/sass-3.4.16/lib/sass/plugin/compiler.rb:482:in `update_stylesheet'\n/Library/Ruby/Gems/2.0.0/gems/sass-3.4.16/lib/sass/plugin/compiler.rb:215:in `block in update_stylesheets'\n/Library/Ruby/Gems/2.0.0/gems/sass-3.4.16/lib/sass/plugin/compiler.rb:209:in `each'\n/Library/Ruby/Gems/2.0.0/gems/sass-3.4.16/lib/sass/plugin/compiler.rb:209:in `update_stylesheets'\n/Library/Ruby/Gems/2.0.0/gems/sass-3.4.16/lib/sass/plugin/compiler.rb:293:in `watch'\n/Library/Ruby/Gems/2.0.0/gems/sass-3.4.16/lib/sass/plugin.rb:108:in `method_missing'\n/Library/Ruby/Gems/2.0.0/gems/sass-3.4.16/lib/sass/exec/sass_scss.rb:384:in `watch_or_update'\n/Library/Ruby/Gems/2.0.0/gems/sass-3.4.16/lib/sass/exec/sass_scss.rb:51:in `process_result'\n/Library/Ruby/Gems/2.0.0/gems/sass-3.4.16/lib/sass/exec/base.rb:52:in `parse'\n/Library/Ruby/Gems/2.0.0/gems/sass-3.4.16/lib/sass/exec/base.rb:19:in `parse!'\n/Library/Ruby/Gems/2.0.0/gems/sass-3.4.16/bin/scss:13:in `<top (required)>'\n/usr/bin/scss:23:in `load'\n/usr/bin/scss:23:in `<main>'\n*/\nbody:before {\n  white-space: pre;\n  font-family: monospace;\n  content: \"Errno::ENOENT: No such file or directory - index.scss\"; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 16/4/24.
	 */
	var pixiLib = __webpack_require__(6);
	var PIXI = __webpack_require__(7);

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

	  var dragon = __webpack_require__(8);
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
/* 6 */
/***/ function(module, exports) {

	module.exports = pixiLib;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = PIXI;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var mySpriteFn = __webpack_require__(9);
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var pixiLib = __webpack_require__(6);

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