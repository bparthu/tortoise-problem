'use strict';

/**
 * @ngdoc service
 * @name turtleCommandApp.Grid
 * @description
 * # Grid
 * Factory in the turtleCommandApp.
 */
angular.module('turtleCommandApp')
  .factory('Grid', function (lodash) {
    
    var MIN = 5;
    var MAX = 30;
    var GRID_SIZE = lodash.random(MIN,MAX);

    return {
      generateGridSize: function () {
        GRID_SIZE = lodash.random(MIN,MAX);
        return this;
      },
      setGridSize: function(newSize){
        GRID_SIZE = newSize;
        return this;
      },
      getGridSize: function(){
        return GRID_SIZE;
      },
      getMin: function(){
        return MIN;
      },
      getMax: function(){
        return MAX;
      }
    };
  });
