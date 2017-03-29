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
    function moveNorth(turtle,currentDirection){
      turtle.incrementY(currentDirection);
      if(Grid.isBlock(turtle.getCoordinate())){
        turtle.decrementY(currentDirection);
      }
    }
    function moveEast(turtle,currentDirection){
      turtle.incrementX(currentDirection);
      if(Grid.isBlock(turtle.getCoordinate())){
        turtle.decrementX(currentDirection);
      }
    }
    function moveSouth(turtle,currentDirection){
      turtle.decrementY(currentDirection);
      if(Grid.isBlock(turtle.getCoordinate())){
        turtle.incrementY(currentDirection);
      }
    }
    function moveWest(turtle,currentDirection){
      turtle.decrementX(currentDirection);
      if(Grid.isBlock(turtle.getCoordinate())){
        turtle.incrementX(currentDirection);
      }
    }
    var moveMap = {
      'N' : moveNorth,
      'E' : moveEast,
      'S' : moveSouth,
      'W' : moveWest
    }
    return {
      reset: function(){
        x = 1;
        y = 1;
        this.changeDirection('N');
      },
      setX: function(newX){
        x = newX;
      },
      setY: function(newY){
        y = newY;
      },
      getX: function () {
        return x;
      },
      getY: function(){
        return y;
      },
      incrementX: function(currentDirection){
        if(x < Grid.getGridSize()){
          x += 1;
        }
        return this;
      },
      decrementX: function(currentDirection){
        if(x > 1){
          x -= 1;
        }
        return this;
      },
      incrementY: function(currentDirection){
        if(y < Grid.getGridSize()){
          y += 1;
        }
        return this;
      },
      decrementY: function(currentDirection){
        if(y > 1){
          y -= 1;
        }
        return this;
      },
      getCoordinate: function(){
        return {
          x: this.getX(),
          y: this.getY()
        }
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
        var currentDirection = this.getDirection();
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
        moveMap[this.getDirection()](this,currentDirection);
        return this;
      }
    };
  });
