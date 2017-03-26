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
		for(var i=0;i<100;i++){
			expect(turtleApp.getGridSize()).not.toBeGreaterThan(30);
			expect(turtleApp.getGridSize()).not.toBeLessThan(5);
		}
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

	it('should increment X',function(){
		var turtle = new Coordinate();
		turtle.incrementX(5);
		expect(turtle.toString()).toBe('2,1 N');
		for(var i=0;i<10;i++){
			turtle.incrementX(5);
		}
		expect(turtle.toString()).toBe('5,1 N');
	});

	it('should decrement X',function(){
		var turtle = new Coordinate();
		turtle.incrementX(5);
		turtle.decrementX(5);
		expect(turtle.toString()).toBe('1,1 N');
		for(var i=0;i<10;i++){
			turtle.decrementX(5);
		}
		expect(turtle.toString()).toBe('1,1 N');
	});

	it('should increment Y',function(){
		var turtle = new Coordinate();
		turtle.incrementY(5);
		expect(turtle.toString()).toBe('1,2 N');
		for(var i=0;i<10;i++){
			turtle.incrementY(5);
		}
		expect(turtle.toString()).toBe('1,5 N');
	});

	it('should decrement X',function(){
		var turtle = new Coordinate();
		turtle.incrementY(5);
		turtle.decrementY(5);
		expect(turtle.toString()).toBe('1,1 N');
		for(var i=0;i<10;i++){
			turtle.decrementY(5);
		}
		expect(turtle.toString()).toBe('1,1 N');
	});

	it('should change direction',function(){
		var turtle = new Coordinate();
		turtle.changeDirection('E');
		expect(turtle.getDirection()).toBe('E');
	});
});