'use strict';

/**
 * @ngdoc service
 * @name turtleCommandApp.Turtle
 * @description
 * # Turtle
 * Factory in the turtleCommandApp.
 */
angular.module('turtleCommandApp')
  .factory('Turtle', function (Compass, Grid) {
    var x = 1;
    var y = 1;
    var direction = 'N';
    function moveNorth(turtle){
      turtle.incrementX(Grid.getGridSize());
    }
    function moveEast(turtle){
      turtle.incrementY(Grid.getGridSize());
    }
    function moveSouth(turtle){
      turtle.decrementX(Grid.getGridSize());
    }
    function moveWest(turtle){
      turtle.decrementY(Grid.getGridSize());
    }
    var moveMap = {
      'N' : moveNorth,
      'E' : moveEast,
      'S' : moveSouth,
      'W' : moveWest
    }
    return {
      getX: function () {
        return x;
      },
      getY: function(){
        return y;
      },
      incrementX: function(){
        if(x < Grid.getGridSize()){
          x += 1;
        }
        return this;
      },
      decrementX: function(){
        if(x > 1){
          x -= 1;
        }
        return this;
      },
      incrementY: function(){
        if(y < Grid.getGridSize()){
          y += 1;
        }
        return this;
      },
      decrementY: function(){
        if(y > 1){
          y -= 1;
        }
        return this;
      },
      changeDirection: function(newDirection){
        direction = newDirection;
        return this;
      },
      getDirection: function(){
        return direction;
      },
      whereAmI: function(){
        return this.getX()+','+this.getY()+' '+this.getDirection();
      },
      move: function(command) {
        switch(command){
          case 'F':
            break;
          case 'R':
            this.changeDirection(Compass.goRight());
            break;
          case 'L':
            this.changeDirection(Compass.goLeft());
            break;
          default:
            throw new Error('Invalid Direction');
        }
        moveMap[this.getDirection()](this);
        return this;
      }
    };
  });
