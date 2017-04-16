'use strict';

/**
 * @ngdoc service
 * @name turtleCommandApp.Coordinate
 * @description
 * # Coordinate
 * Factory in the turtleCommandApp.
 */
angular.module('turtleCommandApp')
  .factory('Coordinate', function () {
    
      function Coordinate(x,y){
        this.x = x;
        this.y = y;
      }

      Coordinate.prototype.reset = function(){this.x = 1;this.y = 1;return this;};
      Coordinate.prototype.incrementX = function(){this.x += 1;return this;};
      Coordinate.prototype.decrementX = function(){this.x -= 1;return this;};
      Coordinate.prototype.incrementY = function(){this.y += 1;return this;};
      Coordinate.prototype.decrementY = function(){this.y -= 1;return this;};
      Coordinate.prototype.toString = function(){return this.x+','+this.y}; 
      /* this doesn't return singleton object, instead it returns constructor function such that it can be injected into other controllers / services and instantiated */
      return Coordinate;
  });
