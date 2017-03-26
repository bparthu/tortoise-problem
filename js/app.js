'use strict'

var window = window || {};

window.contexts = window.contexts || [];

var lodash = _;

var DirectionContext = (function(){
	var Direction = function(){
		var self =this;
		var directions = ['N','E','S','W'];
		var pointer = 0;
		this.getCurrentDirection = function(){
			return directions[pointer];
		};
		this.goRight = function(){
			if(pointer === directions.length - 1){
				pointer = 0;
			}else{
				pointer += 1;
			}
			return self;
		};
		this.goLeft = function(){
			if(pointer === 0){
				pointer = directions.length -1;
			}else{
				pointer -= 1;
			}
			return self;
		}
	};
	return Direction
})();


var AppContext = (function(){
	var GRID_SIZE;
	var MIN = 5;
	var MAX = 30;

	var App = function(){
		var self = this;
		this.generateGridSize = function(){
			GRID_SIZE = lodash.random(MIN,MAX);
		};
		this.getGridSize = function(){
			return GRID_SIZE;
		};
		var __construct = function(){
			self.generateGridSize();
		}();
	};

	return App;
})();

window.contexts['DirectionContext'] = DirectionContext;
window.contexts['AppContext'] = AppContext;