'use strict';

describe('Service: Animal', function () {

  // load the service's module
  beforeEach(module('turtleCommandApp'));

  // instantiate service
  var Animal;
  beforeEach(inject(function (_Animal_) {
    Animal = _Animal_;
  }));

  it('should create a turtle', function(){
    expect(Animal.animalInst).toBe(null);
    expect(Animal.createAnimal('Turtle').whoAmI()).toBe('Turtle');
  });

  it('should console log when unsupported animal name is given',function(){
    expect(Animal.animalInst).toBe(null);
    spyOn(console,'log');
    Animal.createAnimal('NotSupportedAnimal');
    expect(console.log).toHaveBeenCalled();
  });

});
