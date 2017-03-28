'use strict';

describe('Service: Turtle', function () {

  // load the service's module
  beforeEach(module('turtleCommandApp'));

  // instantiate service
  var Turtle;
  var Compass;
  var Grid;
  beforeEach(inject(function (_Turtle_,_Compass_,_Grid_) {
    Turtle = _Turtle_;
    Compass = _Compass_;
    Grid = _Grid_;
  }));

  it('should return x co-ordinate', function () {
    expect(Turtle.getX()).toBe(1);
  });

  it('should return y co-ordinate', function () {
    expect(Turtle.getY()).toBe(1);
  });

  it('should increment or decrement x co-ordinate',function(){
    Grid.setGridSize(2);
    expect(Turtle.incrementX().getX()).toBe(2);
    expect(Turtle.incrementX().getX()).toBe(2);
    Grid.setGridSize(3);
    expect(Turtle.incrementX().getX()).toBe(3);
    expect(Turtle.decrementX().getX()).toBe(2);
    expect(Turtle.decrementX().getX()).toBe(1);
    expect(Turtle.decrementX().getX()).toBe(1);
  });

  it('should increment or decrement y co-ordinate',function(){
    Grid.setGridSize(2);
    expect(Turtle.incrementY().getY()).toBe(2);
    expect(Turtle.incrementY().getY()).toBe(2);
    Grid.setGridSize(3);
    expect(Turtle.incrementY().getY()).toBe(3);
    expect(Turtle.decrementY().getY()).toBe(2);
    expect(Turtle.decrementY().getY()).toBe(1);
    expect(Turtle.decrementY().getY()).toBe(1);
  });

  it('should change direction',function(){
    expect(Turtle.changeDirection('S').getDirection()).toBe('S');
  });

  it('should tell the co-ordinate of turtle in human readable format',function(){
    Grid.setGridSize(5);
    Turtle.incrementX();
    Turtle.incrementX();
    Turtle.incrementY();
    Turtle.incrementY();
    Turtle.incrementY();
    Turtle.changeDirection('S');
    expect(Turtle.whereAmI()).toBe('3,4 S');
  });

  it('should move the turtle based on command',function(){
    Grid.setGridSize(5);
    Turtle.move('F');
    expect(Turtle.whereAmI()).toBe('1,2 N');
    Turtle.move('R');
    expect(Turtle.whereAmI()).toBe('2,2 E');
    Turtle.move('R');
    expect(Turtle.whereAmI()).toBe('2,1 S');
    Turtle.move('F');
    expect(Turtle.whereAmI()).toBe('2,1 S');
    Turtle.move('L');
    expect(Turtle.whereAmI()).toBe('3,1 E');
    try{
      Turtle.move('A');
    }catch(e){
      expect(e.message).toBe('Invalid Direction');
    }
  });

  it('should not change direction when turtle cannot move',function(){
    Grid.setGridSize(5);
    Turtle.move('L');
    Compass.setPointer(0);
    expect(Turtle.whereAmI()).toBe('1,1 N');
    expect(Compass.getCurrentDirection()).toBe('N');
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
    expect(Turtle.whereAmI()).toBe('5,1 E');
    expect(Compass.getCurrentDirection()).toBe('E');
  });

});
