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

var CoordinateContext = (function(){
	var Coordinate = function(){
		var x;
		var y;
		var direction;

		this.getX = function(){
			return x;
		};

		this.getY = function(){
			return y;
		};

		this.getDirection = function(){
			return direction;
		};

		var __construct = function() {
			x = 1;
			y = 1;
			direction = 'N';
		}();
	};

	Coordinate.prototype.toString = function(){
		return this.getX()+','+this.getY()+' '+this.getDirection();
	};

	return Coordinate;
})();


var AppContext = (function(){
	var App = function(inputString){
		var self = this;
		var GRID_SIZE;
		var MIN = 5;
		var MAX = 30;
		var INPUT_PATTERN = /^[FLR\s]+$/i;
		this.inputString = null;
		this.generateGridSize = function(){
			GRID_SIZE = lodash.random(MIN,MAX);
		};
		this.getGridSize = function(){
			return GRID_SIZE;
		};
		var __construct = function(){
			if(inputString && INPUT_PATTERN.test(inputString)){
				self.inputString = inputString.replace(" ","").toUpperCase();
			}else{
				throw new Error("Invalid Input");
			}
			self.generateGridSize();
		}();
	};

	return App;
})();

window.contexts['DirectionContext'] = DirectionContext;
window.contexts['AppContext'] = AppContext;
window.contexts['CoordinateContext'] = CoordinateContext;