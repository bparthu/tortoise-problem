'use strict';

describe('Service: Turtle', function () {

  // load the service's module
  beforeEach(module('turtleCommandApp'));

  // instantiate service
  var Turtle;
  beforeEach(inject(function (_Turtle_) {
    Turtle = _Turtle_;
  }));

  it('should return x co-ordinate', function () {
    expect(Turtle.getX()).toBe(1);
  });

  it('should return y co-ordinate', function () {
    expect(Turtle.getY()).toBe(1);
  });

  it('should increment or decrement x co-ordinate',function(){
    expect(Turtle.incrementX(2).getX()).toBe(2);
    expect(Turtle.incrementX(2).getX()).toBe(2);
    expect(Turtle.incrementX(3).getX()).toBe(3);
    expect(Turtle.decrementX(3).getX()).toBe(2);
    expect(Turtle.decrementX(3).getX()).toBe(1);
    expect(Turtle.decrementX(3).getX()).toBe(1);
  });

  it('should increment or decrement y co-ordinate',function(){
    expect(Turtle.incrementY(2).getY()).toBe(2);
    expect(Turtle.incrementY(2).getY()).toBe(2);
    expect(Turtle.incrementY(3).getY()).toBe(3);
    expect(Turtle.decrementY(3).getY()).toBe(2);
    expect(Turtle.decrementY(3).getY()).toBe(1);
    expect(Turtle.decrementY(3).getY()).toBe(1);
  });

  it('should change direction',function(){
    expect(Turtle.changeDirection('S').getDirection()).toBe('S');
  });

  it('should tell the co-ordinate of turtle in human readable format',function(){
    Turtle.incrementX(5);
    Turtle.incrementX(5);
    Turtle.incrementY(5);
    Turtle.incrementY(5);
    Turtle.incrementY(5);
    Turtle.changeDirection('S');
    expect(Turtle.whereAmI()).toBe('3,4 S');
  });

});
