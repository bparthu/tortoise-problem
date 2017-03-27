'use strict';

/**
 * @ngdoc service
 * @name turtleCommandApp.Turtle
 * @description
 * # Turtle
 * Factory in the turtleCommandApp.
 */
angular.module('turtleCommandApp')
  .factory('Turtle', function (Compass) {
    var x = 1;
    var y = 1;
    var direction = 'N';
    return {
      getX: function () {
        return x;
      },
      getY: function(){
        return y;
      },
      incrementX: function(GRID_SIZE){
        if(x < GRID_SIZE){
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
      incrementY: function(GRID_SIZE){
        if(y < GRID_SIZE){
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
        return this;
      }
    };
  });
