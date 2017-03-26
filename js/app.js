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
			return directions[pointer];
		};
		this.goLeft = function(){
			if(pointer === 0){
				pointer = directions.length -1;
			}else{
				pointer -= 1;
			}
			return directions[pointer];
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

		this.incrementX = function(GRID_SIZE){
			if(x < GRID_SIZE){
				x += 1;
			}
		}

		this.decrementX = function(GRID_SIZE){
			if(x > 1){
				x -= 1;
			}
		}

		this.incrementY = function(GRID_SIZE){
			if(y < GRID_SIZE){
				y += 1;
			}
		}

		this.decrementY = function(GRID_SIZE){
			if(y > 1){
				y -= 1;
			}
		}

		this.changeDirection = function(newDirection){
			direction = newDirection;
		}

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

var moveMap = {
	'N' : function(turtle,GRID_SIZE){
		turtle.incrementX(GRID_SIZE);
	},
	'E' : function(turtle, GRID_SIZE){
		turtle.incrementY(GRID_SIZE);
	},
	'S' : function(turtle, GRID_SIZE){
		turtle.decrementX(GRID_SIZE);
	},
	'W' : function(turtle, GRID_SIZE){
		turtle.decrementY(GRID_SIZE);
	}
}

var MovementContext = (function(){
	var Movement = function(turtle, direction, GRID_SIZE, command){
		console.log(command);
		switch(command){
			case 'F':
				break;
			case 'R':
				turtle.changeDirection(direction.goRight());
				break;
			case 'L':
				turtle.changeDirection(direction.goLeft());
				break;
			default:
				throw new Error('Invalid Direction');
		}
		moveMap[turtle.getDirection()](turtle,GRID_SIZE);
	}

	return Movement;
})();


var AppContext = (function(){
	var App = function(inputString){
		var self = this;
		var GRID_SIZE;
		var MIN = 5;
		var MAX = 30;
		var INPUT_PATTERN = /^[FLR\s]+$/i;
		var turtle = new CoordinateContext();
		var direction = new DirectionContext();
		this.inputString = null;
		this.setGridSize = function(size){
			GRID_SIZE = size;
		};
		this.generateGridSize = function(){
			self.setGridSize(lodash.random(MIN,MAX));
		};
		this.getGridSize = function(){
			return GRID_SIZE;
		};
		this.moveTurtle = function(){
			for(var i=0;i<inputString.length;i++){
				MovementContext(turtle,direction,GRID_SIZE,inputString[i]);
				console.log(inputString[i] + ' - ' + turtle.toString());
			}
			return turtle;
		}
		var __construct = function(){
			if(inputString && INPUT_PATTERN.test(inputString)){
				self.inputString = inputString.replace(" ","").toUpperCase();
			}else{
				throw new Error("Invalid Input");
			}
			self.generateGridSize();
			console.log('Size of auto-generated grid is %s x %s',GRID_SIZE,GRID_SIZE);
		}();
	};

	return App;
})();

window.contexts['DirectionContext'] = DirectionContext;
window.contexts['AppContext'] = AppContext;
window.contexts['CoordinateContext'] = CoordinateContext;
window.contexts['MovementContext'] = MovementContext;