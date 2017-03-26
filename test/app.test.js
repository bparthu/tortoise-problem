var lodash = _;

describe('Help turtle decide a direction to navigate', function() {
	var Direction;
	beforeEach(function() {
    	Direction = window.contexts['DirectionContext'];
  	});

	it('should help turtle goRight',function(){
		var direction = new Direction();
		expect(direction.goRight().getCurrentDirection()).toBe('E');
		expect(direction.goRight().getCurrentDirection()).toBe('S');
		expect(direction.goRight().getCurrentDirection()).toBe('W');
		expect(direction.goRight().getCurrentDirection()).toBe('N');
	});

	it('should help turtle goLeft',function(){
		var direction = new Direction();
		expect(direction.goLeft().getCurrentDirection()).toBe('W');
		expect(direction.goLeft().getCurrentDirection()).toBe('S');
		expect(direction.goLeft().getCurrentDirection()).toBe('E');
		expect(direction.goLeft().getCurrentDirection()).toBe('N');
	});

});

describe('App initialize', function(){
	var App;

	beforeEach(function(){
		App = window.contexts['AppContext'];
	});

	it('should initialize the grid size with random number', function(){
		var turtleApp = new App();
		var gridSize = turtleApp.getGridSize();
		expect(gridSize).toBeDefined();
		expect(lodash.isNumber(5)).toBe(true);
	});

	it('should generate grid size between 5 and 30',function(){
		var turtleApp = new App();
		expect(turtleApp.getGridSize()).not.toBeGreaterThan(30);
		expect(turtleApp.getGridSize()).not.toBeLessThan(5);
		var turtleApp = new App();
		expect(turtleApp.getGridSize()).not.toBeGreaterThan(30);
		expect(turtleApp.getGridSize()).not.toBeLessThan(5);
		var turtleApp = new App();
		expect(turtleApp.getGridSize()).not.toBeGreaterThan(30);
		expect(turtleApp.getGridSize()).not.toBeLessThan(5);
		var turtleApp = new App();
		expect(turtleApp.getGridSize()).not.toBeGreaterThan(30);
		expect(turtleApp.getGridSize()).not.toBeLessThan(5);
		var turtleApp = new App();
		expect(turtleApp.getGridSize()).not.toBeGreaterThan(30);
		expect(turtleApp.getGridSize()).not.toBeLessThan(5);
		var turtleApp = new App();
		expect(turtleApp.getGridSize()).not.toBeGreaterThan(30);
		expect(turtleApp.getGridSize()).not.toBeLessThan(5);
	});
});
