'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('turtleCommandApp'));

  var MainCtrl,
    scope,
    Grid,
    Turtle,
    Compass;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_Grid_,_Turtle_,_Compass_) {
    scope = $rootScope.$new();
    Grid = _Grid_;
    Grid.setGridSize(10);
    Turtle = _Turtle_;
    Compass = _Compass_;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should move the turle when command string is given', function () {
    scope.commandTurtle('ffRfL');
    expect(Turtle.whereAmI()).toBe('3,4 N');
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

  it('should reset turtle',function(){
    Turtle.setX(2);
    Turtle.setY(3);
    Compass.setDirection('E');
    scope.resetGrid();
    expect(Turtle.getCoordinate()['x']).toBe(1);
    expect(Turtle.getCoordinate()['y']).toBe(1);
    expect(Compass.getCurrentDirection()).toBe('N')
  });

  if('should create movementHistory',function(){
    scope.commandTurtle('ffRfL');
    expect(scope.movementHistory.length).toBeGreaterThan(0);
  });
});
