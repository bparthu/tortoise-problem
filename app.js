(function(){
	/* Util functions */
	var randomize = function(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	/* App Constants */
	var GRID_SIZE;
	var MIN = 5;
	var MAX = 30;

	/* App class */
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
	console.log("Generated Grid Size of %s x %s",GRID_SIZE, GRID_SIZE);
})();