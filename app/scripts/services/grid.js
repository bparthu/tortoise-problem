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

    function Coordinate(initX,initY){
      this.x = initX;
      this.y = initY;
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
          Blocks.push(new Coordinate(lodash.random(1,GRID_SIZE),lodash.random(1,GRID_SIZE)));
        }
      },
      getBlocks: function(){
        return Blocks.getBlocks();
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
      reset: function(){
        this.generateGridSize();
        this.generateBlocks();
      }
    };
  });
