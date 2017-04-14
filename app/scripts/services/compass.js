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
  var INDEX_OF_NORTH = 0;
  var directions = ['N','E','S','W'];
	var pointer = INDEX_OF_NORTH;

    return {
      	goRight: function(){
      		if(pointer === directions.length - 1){
				pointer = INDEX_OF_NORTH;
			}else{
				pointer += 1;
			}
			return directions[pointer];
      	},
      	goLeft: function(){
      		if(pointer === INDEX_OF_NORTH){
				pointer = directions.length - 1;
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
      		pointer = INDEX_OF_NORTH;
      		return directions[pointer];
      	}
    };
  });
