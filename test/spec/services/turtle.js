'use strict';

describe('Service: Turtle', function () {

  // load the service's module
  beforeEach(module('turtleCommandApp'));

  // instantiate service
  var Animal;
  var Compass;
  var Grid;
  beforeEach(inject(function (_Animal_,_Compass_,_Grid_) {
    Animal = _Animal_;
    Compass = _Compass_;
    Grid = _Grid_;
  }));

  it('should return x co-ordinate', function () {
    expect(Animal.getX()).toBe(1);
  });

  it('should return y co-ordinate', function () {
    expect(Animal.getY()).toBe(1);
  });

  it('should increment or decrement x co-ordinate',function(){
    Grid.setGridSize(2);
    expect(Animal.incrementX().getX()).toBe(2);
    expect(Animal.incrementX().getX()).toBe(2);
    Grid.setGridSize(3);
    expect(Animal.incrementX().getX()).toBe(3);
    expect(Animal.decrementX().getX()).toBe(2);
    expect(Animal.decrementX().getX()).toBe(1);
    expect(Animal.decrementX().getX()).toBe(1);
  });

  it('should increment or decrement y co-ordinate',function(){
    Grid.setGridSize(2);
    expect(Animal.incrementY().getY()).toBe(2);
    expect(Animal.incrementY().getY()).toBe(2);
    Grid.setGridSize(3);
    expect(Animal.incrementY().getY()).toBe(3);
    expect(Animal.decrementY().getY()).toBe(2);
    expect(Animal.decrementY().getY()).toBe(1);
    expect(Animal.decrementY().getY()).toBe(1);
  });

  it('should change direction',function(){
    expect(Animal.changeDirection('S').getDirection()).toBe('S');
  });

  it('should tell the co-ordinate of Animal in human readable format',function(){
    Grid.setGridSize(5);
    Animal.incrementX();
    Animal.incrementX();
    Animal.incrementY();
    Animal.incrementY();
    Animal.incrementY();
    Animal.changeDirection('S');
    expect(Animal.whereAmI()).toBe('3,4 S');
  });

  it('should move the Animal based on command',function(){
    Grid.setGridSize(5);
    Animal.move('F');
    expect(Animal.whereAmI()).toBe('1,2 N');
    Animal.move('R');
    expect(Animal.whereAmI()).toBe('1,2 E');
    Animal.move('R');
    expect(Animal.whereAmI()).toBe('1,2 S');
    Animal.move('F');
    expect(Animal.whereAmI()).toBe('1,1 S');
    Animal.move('L');
    expect(Animal.whereAmI()).toBe('1,1 E');
    Animal.move('F');
    expect(Animal.whereAmI()).toBe('2,1 E');
    Animal.move('L');
    expect(Animal.whereAmI()).toBe('2,1 N');
    Animal.move('L');
    expect(Animal.whereAmI()).toBe('2,1 W');
    Animal.move('F');
    expect(Animal.whereAmI()).toBe('1,1 W');

    try{
      Animal.move('A');
    }catch(e){
      expect(e.message).toBe('Invalid Direction');
    }
  });

  it('should change direction even if Animal cannot move',function(){
    Grid.setGridSize(5);
    Animal.move('L');
    expect(Animal.whereAmI()).toBe('1,1 W');
    expect(Compass.getCurrentDirection()).toBe('W');
    Animal.reset();
    Animal.setY(5);
    Compass.setPointer(0);
    Animal.move('F');
    expect(Animal.whereAmI()).toBe('1,5 N');
    expect(Compass.getCurrentDirection()).toBe('N');
    Animal.setX(5);
    Animal.setY(5);
    Compass.setPointer(1);
    Animal.changeDirection('E');
    Animal.move('F');
    expect(Animal.whereAmI()).toBe('5,5 E');
    expect(Compass.getCurrentDirection()).toBe('E');
    Animal.setX(5);
    Animal.setY(1);
    Compass.setPointer(1);
    Animal.changeDirection('E');
    Animal.move('R');
    expect(Animal.whereAmI()).toBe('5,1 S');
    expect(Compass.getCurrentDirection()).toBe('S');
  });

  it('should return Animal coordinate',function(){
    Animal.setX(2);
    Animal.setY(3);
    expect(Animal.getCoordinate()['x']).toBe(2);
    expect(Animal.getCoordinate()['y']).toBe(3);
  });

  it('should not move when there is a block',function(){
    Grid.setGridSize(5);
    var block = {x:2,y:3};
    Grid.setBlock(block);
    Animal.setX(1);
    Animal.setY(3);
    Animal.changeDirection('E');
    Compass.setDirection('E');
    Animal.move('F');
    expect(Animal.whereAmI()).toBe('1,3 E');

    Animal.changeDirection('N');
    Compass.setDirection('N');
    Animal.move('R');
    expect(Animal.whereAmI()).toBe('1,3 E');

    Animal.changeDirection('S');
    Compass.setDirection('S');
    Animal.move('L');
    expect(Animal.whereAmI()).toBe('1,3 E');
  });

});
