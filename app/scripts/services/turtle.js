'use strict';

/**
 * @ngdoc service
 * @name turtleCommandApp.Turtle
 * @description
 * # Turtle
 * Factory in the turtleCommandApp.
 */
angular.module('turtleCommandApp')
  .factory('Turtle', function (Compass, Grid, Coordinate, lodash) {
    var ANIMAL_NAME = 'Turtle';
    var TurtleCoordinate = new Coordinate(1,1);
    var direction = 'N';
      /*
        move strategy -
         1. get next move cooordinate of turtle
         2. consult with Grid, if the coordinate doesn't contain a block and within grid boundry
         3. make the actual move
      */
      function moveNorth(turtle){
        var moveCoordinate = turtle.cloneCurrentCoordinate().incrementY();
        if(Grid.canIMoveTo(moveCoordinate)){
          TurtleCoordinate.incrementY();
        }
      };
      function moveEast(turtle){
        var moveCoordinate = turtle.cloneCurrentCoordinate().incrementX();
        if(Grid.canIMoveTo(moveCoordinate)){
          TurtleCoordinate.incrementX();
        }
      };
      function moveSouth(turtle){
        var moveCoordinate = turtle.cloneCurrentCoordinate().decrementY();
        if(Grid.canIMoveTo(moveCoordinate)){
          TurtleCoordinate.decrementY();
        }
      };
      function moveWest(turtle){
        var moveCoordinate = turtle.cloneCurrentCoordinate().decrementX();
        if(Grid.canIMoveTo(moveCoordinate)){
          TurtleCoordinate.decrementX();
        }
      };
      var moveMap = {
        'N' : moveNorth,
        'E' : moveEast,
        'S' : moveSouth,
        'W' : moveWest
      };
      /* PLEASE NOTE: return type of turtle / other animals should be a constructor function and it can be instantiated in animal factory */
      return function(){
          this.whoAmI = function(){
            return ANIMAL_NAME;
          };
          this.reset = function(){
            TurtleCoordinate.reset();
            this.changeDirection('N');
          };
          this.setX = function(newX){
            TurtleCoordinate.x = newX;
          };
          this.setY = function(newY){
            TurtleCoordinate.y = newY;
          };
          this.getX = function () {
            return TurtleCoordinate.x;
          };
          this.getY = function(){
            return TurtleCoordinate.y;
          };
          this.cloneCurrentCoordinate = function(){
            var self = this;
            return lodash.cloneDeep(TurtleCoordinate);
          };
          this.changeDirection = function(newDirection){
            direction = newDirection;
            return this;
          };
          this.getDirection = function(){
            return direction;
          };
          this.whereAmI = function(){
            return TurtleCoordinate+' '+this.getDirection();
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
