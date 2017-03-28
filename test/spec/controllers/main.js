'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('turtleCommandApp'));

  var MainCtrl,
    scope,
    Grid,
    Turtle;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_Grid_,_Turtle_) {
    scope = $rootScope.$new();
    Grid = _Grid_;
    Grid.setGridSize(10);
    Turtle = _Turtle_;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should move the turle when command string is given', function () {
    scope.commandTurtle('ffRfL');
    expect(Turtle.whereAmI()).toBe('3,4 N');
  });
});
