'use strict';

/**
 * @ngdoc service
 * @name turtleCommandApp.DirectionService
 * @description
 * # DirectionService
 * Factory in the turtleCommandApp.
 */
angular.module('turtleCommandApp')
  .factory('Compass', function () {
    var directions = ['N','E','S','W'];
	var pointer = 0;

    return {
      	goRight: function(){
      		if(pointer === directions.length - 1){
				pointer = 0;
			}else{
				pointer += 1;
			}
			return directions[pointer];
      	},
      	goLeft: function(){
      		if(pointer === 0){
				pointer = directions.length -1;
			}else{
				pointer -= 1;
			}
			return directions[pointer];
      	},
        getCurrentDirection: function(){
          return directions[pointer];
        },
        setPointer: function(newPointer){
          pointer = newPointer;
          return this;
        },
        setDirection: function(newDirection){
          pointer = directions.indexOf(newDirection);
        },
      	reset: function(){
      		pointer = 0;
      		return directions[pointer];
      	}
    };
  });
