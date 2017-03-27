'use strict';

describe('Service: Compass', function () {

  // load the service's module
  beforeEach(module('turtleCommandApp'));

  // instantiate service
  var Compass;
  beforeEach(inject(function (_Compass_) {
    Compass = _Compass_;
  }));

  it('should go right', function () {
    expect(Compass.goRight()).toBe('E');
    expect(Compass.goRight()).toBe('S');
    expect(Compass.goRight()).toBe('W');
    expect(Compass.goRight()).toBe('N');
    expect(Compass.goRight()).toBe('E');
    expect(Compass.reset()).toBe('N');
  });

  it('should go left', function () {
    expect(Compass.goLeft()).toBe('W');
    expect(Compass.goLeft()).toBe('S');
    expect(Compass.goLeft()).toBe('E');
    expect(Compass.goLeft()).toBe('N');
    expect(Compass.goLeft()).toBe('W');
    expect(Compass.reset()).toBe('N');
  });

});
