'use strict';

/**
 * @ngdoc service
 * @name turtleCommandApp.Turtle
 * @description
 * # Turtle
 * Factory in the turtleCommandApp.
 */
angular.module('turtleCommandApp')
  .factory('Animal', function (Turtle) {
    // a collection of supported animal constructors, new animals can be added 
    var supportedAnimals = {
        'Turtle': Turtle
    };
    // Animal factory to remain singleton as it can be injected in multiple controllers
    // Turtle , other future animals shoud be made to return constructor function and will be instantiated in animal factory
    // Animal factory should remain a single point of entry to instantiate Turtle, other future animals

    return {
      // Animal property could be made into an array, if future enhancement demands multiple animals with different movesets
      animalInst: null,
      createAnimal: function(animal){
        try{
          this.animalInst = new supportedAnimals[animal]();
        }catch(e){
          console.log(animal+' is not supported at present');
        }
        return this.animalInst;
      }
    };
  });
