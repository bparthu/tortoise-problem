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
    $scope.inputStr = '';
    $scope.inputPattern = '^[flrFLR\\s]{0,}$';
    $scope.Grid = Grid;
    $scope.Turtle = Turtle;
    Grid.reset();
    $scope.movementHistory = [];
    $scope.resetGrid = function(){
        Grid.reset();
        Turtle.reset();
        Compass.reset();
        $scope.inputStr = '';
        $scope.movementHistory = [];
    };

    $scope.resetTurtle = function(){
        Turtle.reset();
        Compass.reset();
        $scope.inputStr = '';
        $scope.movementHistory = [];
    };

    $scope.commandTurtle = function(inputStr){
        try{
        	Turtle.reset();
        	Compass.reset();
            $scope.movementHistory = [];
        	for(var i=0;i<inputStr.length;i++){
        		Turtle.move(inputStr[i].toUpperCase());
                var history = {
                    command: inputStr[i],
                    coordinates: Turtle.getCoordinate(),
                    direction: Turtle.getDirection()
                }
                $scope.movementHistory.push(history);
        	}
        }catch(e){
            console.log(e.message);
        }
    };

    $scope.move = function(command){
        $scope.inputStr += command;
        $scope.commandTurtle($scope.inputStr);
    }

  });
