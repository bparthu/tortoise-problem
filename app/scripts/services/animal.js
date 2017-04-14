'use strict';

/**
 * @ngdoc service
 * @name turtleCommandApp.Turtle
 * @description
 * # Turtle
 * Factory in the turtleCommandApp.
 */
angular.module('turtleCommandApp')
  .factory('Animal', function (Compass, Grid) {
    // created Turtle constructor using IIFE to avoid polluting global namespace
    var Turtle = (function(){
      var ANIMAL_NAME = 'Turtle';
      var x = 1;
      var y = 1;
      var direction = 'N';
      function moveNorth(turtle,currentDirection){
        turtle.incrementY(currentDirection);
        if(Grid.isBlock(turtle.getCoordinate())){
          turtle.decrementY(currentDirection);
        }
      };
      function moveEast(turtle,currentDirection){
        turtle.incrementX(currentDirection);
        if(Grid.isBlock(turtle.getCoordinate())){
          turtle.decrementX(currentDirection);
        }
      };
      function moveSouth(turtle,currentDirection){
        turtle.decrementY(currentDirection);
        if(Grid.isBlock(turtle.getCoordinate())){
          turtle.incrementY(currentDirection);
        }
      };
      function moveWest(turtle,currentDirection){
        turtle.decrementX(currentDirection);
        if(Grid.isBlock(turtle.getCoordinate())){
          turtle.incrementX(currentDirection);
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
          this.incrementX = function(currentDirection){
            if(x < Grid.getGridSize()){
              x += 1;
            }
            return this;
          };
          this.decrementX = function(currentDirection){
            if(x > 1){
              x -= 1;
            }
            return this;
          };
          this.incrementY = function(currentDirection){
            if(y < Grid.getGridSize()){
              y += 1;
            }
            return this;
          };
          this.decrementY = function(currentDirection){
            if(y > 1){
              y -= 1;
            }
            return this;
          };
          this.getCoordinate = function(){
            return {
              x: this.getX(),
              y: this.getY()
            }
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
            var currentDirection = this.getDirection();
            switch(command){
              case 'F':
                moveMap[this.getDirection()](this,currentDirection);
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
    })();
    // a collection of supported animal constructors, new animals can be added 
    var supportedAnimals = {
        'Turtle': Turtle
    };
    // this factory now returns constructor function instead of a singleton object
    return function(animal){
        try{
          this.animal = new supportedAnimals[animal]();
        }catch(e){
          console.log(animal+' is not supported at present');
        }
        return this.animal;
    };
  });
