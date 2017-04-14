'use strict';

/**
 * @ngdoc function
 * @name turtleCommandApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the turtleCommandApp
 */
angular.module('turtleCommandApp')
  .controller('MainCtrl', function ($scope,Grid, Animal, Compass) {
    $scope.inputStr = '';
    $scope.inputPattern = '^[flrFLR\\s]{0,}$';
    $scope.Grid = Grid;
    var currentAnimal = Animal.createAnimal('Turtle');
    $scope.Animal = currentAnimal;
    Grid.reset();
    $scope.movementHistory = [];
    $scope.resetGrid = function(){
        Grid.reset();
        currentAnimal.reset();
        Compass.reset();
        $scope.inputStr = '';
        $scope.movementHistory = [];
    };

    $scope.resetAnimal = function(){
        currentAnimal.reset();
        Compass.reset();
        $scope.inputStr = '';
        $scope.movementHistory = [];
    };

    $scope.commandAnimal = function(inputStr){
        try{
        	currentAnimal.reset();
        	Compass.reset();
            $scope.movementHistory = [];
        	for(var i=0;i<inputStr.length;i++){
        		currentAnimal.move(inputStr[i].toUpperCase());
                var history = {
                    command: inputStr[i],
                    coordinates: currentAnimal.getCoordinate(),
                    direction: currentAnimal.getDirection()
                }
                $scope.movementHistory.push(history);
        	}
        }catch(e){
            console.log(e.message);
        }
    };

    $scope.move = function(command){
        $scope.inputStr += command;
        $scope.commandAnimal($scope.inputStr);
    }

  });
