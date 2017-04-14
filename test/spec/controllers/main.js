'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('turtleCommandApp'));

  var MainCtrl,
    scope,
    Grid,
    Animal,
    Turtle,
    Compass;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_Grid_,_Animal_,_Compass_) {
    scope = $rootScope.$new();
    Grid = _Grid_;
    Grid.setGridSize(10);
    Animal = _Animal_;
    Turtle = Animal.createAnimal('Turtle');
    Compass = _Compass_;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should move the turle when command string is given', function () {
    scope.commandAnimal('ffRfL');
    expect(Turtle.whereAmI()).not.toBe('1,1 N');
  });

  it('should reset grid',function(){
    Grid.setGridSize(1);
    Turtle.setX(2);
    Turtle.setY(3);
    Compass.setDirection('E');
    scope.resetGrid();
    expect(Grid.getGridSize()).not.toBe(1);
    expect(Turtle.getCoordinate()['x']).toBe(1);
    expect(Turtle.getCoordinate()['y']).toBe(1);
    expect(Compass.getCurrentDirection()).toBe('N')
  });

  it('should reset Animal',function(){
    Turtle.setX(2);
    Turtle.setY(3);
    Compass.setDirection('E');
    scope.resetGrid();
    expect(Turtle.getCoordinate()['x']).toBe(1);
    expect(Turtle.getCoordinate()['y']).toBe(1);
    expect(Compass.getCurrentDirection()).toBe('N')
  });

  it('should create movementHistory',function(){
    scope.commandAnimal('ffRfL');
    expect(scope.movementHistory.length).toBeGreaterThan(0);
  });

  it('should not throw exception if, invalid command is given',function(){
    spyOn(console,'log');
    expect(scope.commandAnimal('ffRfV'));
    expect(console.log).toHaveBeenCalled();
  });

});
