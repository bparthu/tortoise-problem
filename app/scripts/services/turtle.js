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
    var ANIMAL_NAME = 'Turtle';
      var x = 1;
      var y = 1;
      var direction = 'N';
      /*
        move strategy -
         1. get next move cooordinate of turtle
         2. consult with Grid, if the coordinate doesn't contain a block
         3. make the actual move
      */
      function moveNorth(turtle){
        var moveCoordinate = turtle.getCoordinate().incrementY();
        if(Grid.canIMoveTo(moveCoordinate)){
          turtle.incrementY();
        }
      };
      function moveEast(turtle){
        var moveCoordinate = turtle.getCoordinate().incrementX();
        if(Grid.canIMoveTo(moveCoordinate)){
          turtle.incrementX();
        }
      };
      function moveSouth(turtle){
        var moveCoordinate = turtle.getCoordinate().decrementY();
        if(Grid.canIMoveTo(moveCoordinate)){
          turtle.decrementY();
        }
      };
      function moveWest(turtle){
        var moveCoordinate = turtle.getCoordinate().decrementX();
        if(Grid.canIMoveTo(moveCoordinate)){
          turtle.decrementX();
        }
      };
      var moveMap = {
        'N' : moveNorth,
        'E' : moveEast,
        'S' : moveSouth,
        'W' : moveWest
      };

      return function(){
          this.whoAmI = function(){
            return ANIMAL_NAME;
          };
          this.reset = function(){
            x = 1;
            y = 1;
            this.changeDirection('N');
          };
          this.setX = function(newX){
            x = newX;
          };
          this.setY = function(newY){
            y = newY;
          };
          this.getX = function () {
            return x;
          };
          this.getY = function(){
            return y;
          };
          this.incrementX = function(){
            if(x < Grid.getGridSize()){
              x += 1;
            }
            return this;
          };
          this.decrementX = function(){
            if(x > 1){
              x -= 1;
            }
            return this;
          };
          this.incrementY = function(){
            if(y < Grid.getGridSize()){
              y += 1;
            }
            return this;
          };
          this.decrementY = function(){
            if(y > 1){
              y -= 1;
            }
            return this;
          };
          this.getCoordinate = function(){
            var self = this;
            function Coordinate(x,y){
              this.x = x;
              this.y = y;
            }
            Coordinate.prototype.incrementX = function(){this.x += 1;return this;}
            Coordinate.prototype.decrementX = function(){this.x -= 1;return this;}
            Coordinate.prototype.incrementY = function(){this.y += 1;return this;}
            Coordinate.prototype.decrementY = function(){this.y -= 1;return this;}
            return new Coordinate(self.getX(),self.getY());
          };
          this.changeDirection = function(newDirection){
            direction = newDirection;
            return this;
          };
          this.getDirection = function(){
            return direction;
          };
          this.whereAmI = function(){
            return this.getX()+','+this.getY()+' '+this.getDirection();
          };
          this.move = function(command) {
            switch(command){
              case 'F':
                moveMap[this.getDirection()](this);
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
            return this;
          };
        }
  });
