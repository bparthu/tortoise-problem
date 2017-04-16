'use strict';

describe('Service: Coordinate', function () {

  // load the service's module
  beforeEach(module('turtleCommandApp'));

  // instantiate service
  var Coordinate;
  beforeEach(inject(function (_Coordinate_) {
    Coordinate = _Coordinate_;
  }));

  it('should instantiate coordinate and perform various operations', function () {
    var myCoordinate = new Coordinate(2,3);
    expect(myCoordinate.toString()).toBe('2,3');
    expect(myCoordinate.incrementX().x).toBe(3); 
    expect(myCoordinate.decrementX().x).toBe(2); 
    expect(myCoordinate.incrementY().y).toBe(4); 
    expect(myCoordinate.decrementY().y).toBe(3);
    expect(myCoordinate.toString()).toBe('2,3');
    expect(myCoordinate.reset().toString()).toBe('1,1');
  });

});
