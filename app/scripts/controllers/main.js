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
    $scope.Animal = Animal;
    Grid.reset();
    $scope.movementHistory = [];
    $scope.resetGrid = function(){
        Grid.reset();
        Animal.reset();
        Compass.reset();
        $scope.inputStr = '';
        $scope.movementHistory = [];
    };

    $scope.resetAnimal = function(){
        Animal.reset();
        Compass.reset();
        $scope.inputStr = '';
        $scope.movementHistory = [];
    };

    $scope.commandAnimal = function(inputStr){
        try{
        	Animal.reset();
        	Compass.reset();
            $scope.movementHistory = [];
        	for(var i=0;i<inputStr.length;i++){
        		Animal.move(inputStr[i].toUpperCase());
                var history = {
                    command: inputStr[i],
                    coordinates: Animal.getCoordinate(),
                    direction: Animal.getDirection()
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
