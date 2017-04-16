"use strict";angular.module("angularLodashModularized",[]).factory("lodash",function(){return window._}),angular.module("turtleCommandApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ngPatternRestrict","angularLodashModularized"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/"})}]),angular.module("turtleCommandApp").controller("MainCtrl",["$scope","Grid","Animal","Compass",function(a,b,c,d){a.inputStr="",a.inputPattern="^[flrFLR\\s]{0,}$",a.Grid=b;var e=c.createAnimal("Turtle");a.Animal=e,b.reset(),a.movementHistory=[],a.resetGrid=function(){b.reset(),a.resetAnimal()},a.resetAnimal=function(){e.reset(),d.reset(),a.inputStr="",a.movementHistory=[]},a.commandAnimal=function(b){try{e.reset(),d.reset(),a.movementHistory=[];for(var c=0;c<b.length;c++){e.move(b[c].toUpperCase());var f={command:b[c],coordinates:e.cloneCurrentCoordinate(),direction:e.getDirection()};a.movementHistory.push(f)}}catch(g){console.log(g.message)}},a.move=function(b){a.inputStr+=b,a.commandAnimal(a.inputStr)}}]),angular.module("turtleCommandApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("turtleCommandApp").factory("Compass",function(){var a=0,b=["N","E","S","W"],c=a;return{goRight:function(){return c===b.length-1?c=a:c+=1,b[c]},goLeft:function(){return c===a?c=b.length-1:c-=1,b[c]},getCurrentDirection:function(){return b[c]},setPointer:function(a){return c=a,this},setDirection:function(a){c=b.indexOf(a)},reset:function(){return c=a,b[c]}}}),angular.module("turtleCommandApp").factory("Animal",["Turtle",function(a){var b={Turtle:a};return{animalInst:null,createAnimal:function(a){try{this.animalInst=new b[a]}catch(c){console.log(a+" is not supported at present")}return this.animalInst}}}]),angular.module("turtleCommandApp").factory("Grid",["lodash","Coordinate",function(a,b){var c=5,d=30,e=a.random(c,d),f={collection:[],getBlocks:function(){return this.collection},isBlock:function(b){return a.filter(this.collection,b).length>0},push:function(a){this.collection.push(a)},reset:function(){this.collection=[]}};return{generateGridSize:function(){return e=a.random(c,d),this},generateBlocks:function(){f.reset();for(var c=a.random(1,Math.ceil(e/2)),d=0;c>d;d++)f.push(new b(a.random(2,e),a.random(2,e)))},getBlocks:function(){return f.getBlocks()},setBlock:function(a){f.push(a)},isBlock:function(a){return f.isBlock(a)},setGridSize:function(a){return e=a,this},getGridSize:function(){return e},getMin:function(){return c},getMax:function(){return d},isCoordinateWithinBoundry:function(a){return a.x>=1&&a.x<=e&&a.y>=1&&a.y<=e},canIMoveTo:function(a){return!this.isBlock(a)&&this.isCoordinateWithinBoundry(a)},resetBlocks:function(){f.reset()},reset:function(){this.generateGridSize(),this.generateBlocks()}}}]),angular.module("turtleCommandApp").factory("Turtle",["Compass","Grid","Coordinate","lodash",function(a,b,c,d){function e(a){var c=a.cloneCurrentCoordinate()[i[a.getDirection()]]();b.canIMoveTo(c)&&g[i[a.getDirection()]]()}var f="Turtle",g=new c(1,1),h="N",i={N:"incrementY",E:"incrementX",S:"decrementY",W:"decrementX"};return function(){this.whoAmI=function(){return f},this.reset=function(){g.reset(),this.changeDirection("N")},this.setX=function(a){g.x=a},this.setY=function(a){g.y=a},this.getX=function(){return g.x},this.getY=function(){return g.y},this.cloneCurrentCoordinate=function(){return d.cloneDeep(g)},this.changeDirection=function(a){return h=a,this},this.getDirection=function(){return h},this.whereAmI=function(){return g+" "+this.getDirection()},this.move=function(b){switch(b){case"F":e(this);break;case"R":this.changeDirection(a.goRight());break;case"L":this.changeDirection(a.goLeft());break;default:throw new Error("Invalid Direction")}return this}}}]),angular.module("turtleCommandApp").factory("Coordinate",function(){function a(a,b){this.x=a,this.y=b}return a.prototype.reset=function(){return this.x=1,this.y=1,this},a.prototype.incrementX=function(){return this.x+=1,this},a.prototype.decrementX=function(){return this.x-=1,this},a.prototype.incrementY=function(){return this.y+=1,this},a.prototype.decrementY=function(){return this.y-=1,this},a.prototype.toString=function(){return this.x+","+this.y},a}),angular.module("turtleCommandApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="alert alert-warning"> <strong>Input command string (eg. fFlRRf) (OR) use \'L\' \'F\' \'R\' buttons respectively.</strong> </div> <div class="jumbotron"> <div class="form-group"> <label for="usr">Input Command:</label> <input type="text" class="form-control" id="command" ng-model="inputStr" ng-pattern-restrict="{{ inputPattern }}" ng-change="commandAnimal(inputStr)"><br> <button ng-click="resetAnimal(inputStr)">Reset {{Animal.whoAmI()}}</button> <button ng-click="resetGrid()">Reset Grid</button><br><br> <button ng-click="move(\'L\')">L</button> <button ng-click="move(\'F\')">F</button> <button ng-click="move(\'R\')">R</button> </div> Auto generated Grid Size -> {{Grid.getGridSize()}} x {{Grid.getGridSize()}} <br> Blocks -> {{Grid.getBlocks()}} <br> <strong>Current <span ng-bind="Animal.whoAmI()"></span> Position -> {{Animal.whereAmI()}} <br><br></strong> <div ng-if="movementHistory.length > 0" class="pre-scrollable"> Movement History: <br> <div ng-repeat="history in movementHistory track by $index"> {{history.command}} -> {{history.coordinates.x}}, {{history.coordinates.y}} {{history.direction}} <br> </div> </div> </div>')}]);