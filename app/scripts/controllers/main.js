'use strict';

/**
 * @ngdoc function
 * @name turtleCommandApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the turtleCommandApp
 */
angular.module('turtleCommandApp')
  .controller('MainCtrl', function ($scope,Grid, Turtle, Compass) {
    $scope.inputStr = null
    $scope.inputPattern = '^[flrFLR\\s]{0,}$';
    $scope.Grid = Grid;
    $scope.Turtle = Turtle;
    Grid.reset();
    $scope.resetGrid = function(){
        Grid.reset();
        Turtle.reset();
        Compass.reset();
    }

    $scope.resetTurtle = function(){
        Turtle.reset();
        Compass.reset();
    }

    $scope.commandTurtle = function(inputStr){
    	Turtle.reset();
    	Compass.reset();
    	for(var i=0;i<inputStr.length;i++){
    		Turtle.move(inputStr[i].toUpperCase());
    	}
    }

  });
