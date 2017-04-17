'use strict';

describe('Service: Turtle', function () {

  // load the service's module
  beforeEach(module('turtleCommandApp'));

  // instantiate service
  var Turtle;
  var Compass;
  var Grid;
  var Coordinate;
  beforeEach(inject(function (_Turtle_,_Compass_,_Grid_,_Coordinate_) {
    Turtle = new _Turtle_();
    Compass = _Compass_;
    Grid = _Grid_;
    Coordinate = _Coordinate_;
  }));

  it('should return x co-ordinate', function () {
    expect(Turtle.getX()).toBe(1);
  });

  it('should return y co-ordinate', function () {
    expect(Turtle.getY()).toBe(1);
  });

  it('should change direction',function(){
    expect(Turtle.changeDirection('S').getDirection()).toBe('S');
  });

  it('should tell the co-ordinate of Animal in human readable format',function(){
    Grid.setGridSize(5);
    Turtle.setX(3);
    Turtle.setY(4)
    Turtle.changeDirection('S');
    expect(Turtle.whereAmI()).toBe('3,4 S');
  });

  it('should move the Animal based on command',function(){
    Grid.setGridSize(5);
    Turtle.move('F');
    expect(Turtle.whereAmI()).toBe('1,2 N');
    Turtle.move('R');
    expect(Turtle.whereAmI()).toBe('1,2 E');
    Turtle.move('R');
    expect(Turtle.whereAmI()).toBe('1,2 S');
    Turtle.move('F');
    expect(Turtle.whereAmI()).toBe('1,1 S');
    Turtle.move('L');
    expect(Turtle.whereAmI()).toBe('1,1 E');
    Turtle.move('F');
    expect(Turtle.whereAmI()).toBe('2,1 E');
    Turtle.move('L');
    expect(Turtle.whereAmI()).toBe('2,1 N');
    Turtle.move('L');
    expect(Turtle.whereAmI()).toBe('2,1 W');
    Turtle.move('F');
    expect(Turtle.whereAmI()).toBe('1,1 W');

    try{
      Turtle.move('A');
    }catch(e){
      expect(e.message).toBe('Invalid Direction');
    }
  });

  it('should change direction even if Animal cannot move',function(){
    Grid.setGridSize(5);
    Turtle.move('L');
    expect(Turtle.whereAmI()).toBe('1,1 W');
    expect(Compass.getCurrentDirection()).toBe('W');
    Turtle.reset();
    Turtle.setY(5);
    Compass.setPointer(0);
    Turtle.move('F');
    expect(Turtle.whereAmI()).toBe('1,5 N');
    expect(Compass.getCurrentDirection()).toBe('N');
    Turtle.setX(5);
    Turtle.setY(5);
    Compass.setPointer(1);
    Turtle.changeDirection('E');
    Turtle.move('F');
    expect(Turtle.whereAmI()).toBe('5,5 E');
    expect(Compass.getCurrentDirection()).toBe('E');
    Turtle.setX(5);
    Turtle.setY(1);
    Compass.setPointer(1);
    Turtle.changeDirection('E');
    Turtle.move('R');
    expect(Turtle.whereAmI()).toBe('5,1 S');
    expect(Compass.getCurrentDirection()).toBe('S');
  });

  it('should return Animal coordinate',function(){
    Turtle.setX(2);
    Turtle.setY(3);
    expect(Turtle.cloneCurrentCoordinate()['x']).toBe(2);
    expect(Turtle.cloneCurrentCoordinate()['y']).toBe(3);
  });

  it('should not move when there is a block',function(){
    Grid.setGridSize(5);
    var block = {x:2,y:3};
    Grid.setBlock(block);
    /*block on east*/
    Turtle.setX(1);
    Turtle.setY(3);
    Turtle.changeDirection('E');
    Compass.setDirection('E');
    Turtle.move('F');
    expect(Turtle.whereAmI()).toBe('1,3 E');

    Turtle.changeDirection('N');
    Compass.setDirection('N');
    Turtle.move('R');
    expect(Turtle.whereAmI()).toBe('1,3 E');

    Turtle.changeDirection('S');
    Compass.setDirection('S');
    Turtle.move('L');
    expect(Turtle.whereAmI()).toBe('1,3 E');

    /* block on south */
    Turtle.setX(2);
    Turtle.setY(4);
    Turtle.changeDirection('S');
    Compass.setDirection('S');
    Turtle.move('F');
    expect(Turtle.whereAmI()).toBe('2,4 S');

    /* block on west */
    Turtle.setX(3);
    Turtle.setY(3);
    Turtle.changeDirection('W');
    Compass.setDirection('W');
    Turtle.move('F');
    expect(Turtle.whereAmI()).toBe('3,3 W');

    /* block on North */
    Turtle.setX(2);
    Turtle.setY(2);
    Turtle.changeDirection('N');
    Compass.setDirection('N');
    Turtle.move('F');
    expect(Turtle.whereAmI()).toBe('2,2 N');
  });

  it('should set a new coordinate for  turtle',function(){
    expect(Turtle.whereAmI()).toBe('1,1 N');
    expect(Turtle.setCoordinate(new Coordinate(2,3)).whereAmI()).toBe('2,3 N');
  });

  it('should tell about the type animal',function(){
    expect(Turtle.whoAmI()).toBe('Turtle');
    expect(Turtle.setCoordinate({x: 2,y: 3}))
  });

});
