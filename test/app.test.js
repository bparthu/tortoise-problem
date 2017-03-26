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

	it('should throw error, if invalid input is given',function(){
		var inputStrings = ["FlrRRlrFflr","fl r fl LF","   flRfL","FlrrrfLf   "];
		inputStrings.forEach(function(eachInput){
			var turtleApp = new App(eachInput);
			expect(turtleApp.inputString).toBe(eachInput.replace(" ","").toUpperCase());
		});

		var inputStrings = ["FlrRRlrFflra","fl .","RRRFLXy$%", "", null, undefined];
		inputStrings.forEach(function(eachInput){
			try{
				var turtleApp = new App(eachInput);
			}catch(e){
				expect(e.message).toBe('Invalid Input');
			}
		});
		
	});

	it('should initialize the grid size with random number', function(){
		var inputString = 'FLR';
		var turtleApp = new App(inputString);
		var gridSize = turtleApp.getGridSize();
		expect(gridSize).toBeDefined();
		expect(lodash.isNumber(5)).toBe(true);
	});

	it('should generate grid size between 5 and 30',function(){
		var inputString = 'FLR';
		var turtleApp = new App(inputString);
		expect(turtleApp.getGridSize()).not.toBeGreaterThan(30);
		expect(turtleApp.getGridSize()).not.toBeLessThan(5);
		var turtleApp = new App(inputString);
		expect(turtleApp.getGridSize()).not.toBeGreaterThan(30);
		expect(turtleApp.getGridSize()).not.toBeLessThan(5);
		var turtleApp = new App(inputString);
		expect(turtleApp.getGridSize()).not.toBeGreaterThan(30);
		expect(turtleApp.getGridSize()).not.toBeLessThan(5);
		var turtleApp = new App(inputString);
		expect(turtleApp.getGridSize()).not.toBeGreaterThan(30);
		expect(turtleApp.getGridSize()).not.toBeLessThan(5);
		var turtleApp = new App(inputString);
		expect(turtleApp.getGridSize()).not.toBeGreaterThan(30);
		expect(turtleApp.getGridSize()).not.toBeLessThan(5);
		var turtleApp = new App(inputString);
		expect(turtleApp.getGridSize()).not.toBeGreaterThan(30);
		expect(turtleApp.getGridSize()).not.toBeLessThan(5);
	});
});

describe('Turtle creation',function(){
	var Coordinate;
	beforeEach(function(){
		Coordinate = window.contexts['CoordinateContext'];
	});

	it('should instantiate a turtle',function(){
		var turtle = new Coordinate();
		expect(turtle.toString()).toBe('1,1 N');
	});
});