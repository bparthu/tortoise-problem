'use strict';

/**
 * @ngdoc service
 * @name turtleCommandApp.Grid
 * @description
 * # Grid
 * Factory in the turtleCommandApp.
 */
angular.module('turtleCommandApp')
  .factory('Grid', function (lodash, Coordinate) {
    
    var MIN = 5;
    var MAX = 30;
    var GRID_SIZE = lodash.random(MIN,MAX);
    var Blocks = {
      collection: [],
      getBlocks: function(){
        return this.collection;
      },
      isBlock: function(coordinate){
        return lodash.filter(this.collection,coordinate).length > 0;
      },
      push: function(item){
        this.collection.push(item);
      },
      reset: function(){
        this.collection = [];
      }
    }
    return {
      generateGridSize: function () {
        GRID_SIZE = lodash.random(MIN,MAX);
        return this;
      },
      generateBlocks: function(){
        Blocks.reset();
        var numberOfBlocks = lodash.random(1,Math.ceil(GRID_SIZE/2));
        for(var i=0;i<numberOfBlocks;i++){
          Blocks.push(new Coordinate(lodash.random(2,GRID_SIZE),lodash.random(2,GRID_SIZE)));
        }
      },
      getBlocks: function(){
        return Blocks.getBlocks();
      },
      setBlock: function(block){
        Blocks.push(block);
      },
      isBlock: function(coordinate){
        return Blocks.isBlock(coordinate);
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
      },
      isCoordinateWithinBoundry: function(moveCoordinate){
        return moveCoordinate.x >= 1 && moveCoordinate.x <= GRID_SIZE && moveCoordinate.y >= 1 && moveCoordinate.y <= GRID_SIZE;
      },
      canIMoveTo: function(moveCoordinate){
        return !this.isBlock(moveCoordinate) && this.isCoordinateWithinBoundry(moveCoordinate);
      },
      resetBlocks: function(){
        Blocks.reset();
      },
      reset: function(){
        this.generateGridSize();
        this.generateBlocks();
      }
    };
  });
