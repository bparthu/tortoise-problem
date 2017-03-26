'use strict'

var window = window || {};

window.contexts = window.contexts || [];

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

window.contexts['DirectionContext'] = DirectionContext;
/*(function(){

		var randomize = function(min, max){
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}


		var GRID_SIZE;
		var MIN = 5;
		var MAX = 30;


		var App = function(){
			var self = this;
			this.generateGridSize = function(){
				GRID_SIZE = randomize(MIN,MAX);
			};
			var __construct = function(){
				self.generateGridSize();
			}();
		};

		var turtleApp = new App();
		console.log('generated grid size of %s x %s',GRID_SIZE,GRID_SIZE);

})();*/