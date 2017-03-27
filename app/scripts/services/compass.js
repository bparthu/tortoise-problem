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
      	reset: function(){
      		pointer = 0;
      		return directions[pointer];
      	}
    };
  });
