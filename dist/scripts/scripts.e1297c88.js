"use strict";angular.module("angularLodashModularized",[]).factory("lodash",function(){return window._}),angular.module("turtleCommandApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ngPatternRestrict","angularLodashModularized"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/"})}]),angular.module("turtleCommandApp").controller("MainCtrl",["$scope","Grid","Turtle","Compass",function(a,b,c,d){a.inputStr=null,a.inputPattern="^[flrFLR\\s]{0,}$",a.Grid=b,a.Turtle=c,b.reset(),a.resetGrid=function(){b.reset()},a.commandTurtle=function(a){c.reset(),d.reset();for(var b=0;b<a.length;b++)c.move(a[b].toUpperCase())}}]),angular.module("turtleCommandApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("turtleCommandApp").factory("Compass",function(){var a=["N","E","S","W"],b=0;return{goRight:function(){return b===a.length-1?b=0:b+=1,a[b]},goLeft:function(){return 0===b?b=a.length-1:b-=1,a[b]},getCurrentDirection:function(){return a[b]},setPointer:function(a){return b=a,this},setDirection:function(c){b=a.indexOf(c)},reset:function(){return b=0,a[b]}}}),angular.module("turtleCommandApp").factory("Turtle",["Compass","Grid",function(a,b){function c(a,b){a.incrementY(b)}function d(a,b){a.incrementX(b)}function e(a,b){a.decrementY(b)}function f(a,b){a.decrementX(b)}var g=1,h=1,i="N",j={N:c,E:d,S:e,W:f};return{reset:function(){g=1,h=1,this.changeDirection("N")},setX:function(a){g=a},setY:function(a){h=a},getX:function(){return g},getY:function(){return h},incrementX:function(c){return g<b.getGridSize()?g+=1:(this.changeDirection(c),a.setDirection(c)),this},decrementX:function(b){return g>1?g-=1:(this.changeDirection(b),a.setDirection(b)),this},incrementY:function(c){return h<b.getGridSize()?h+=1:(this.changeDirection(c),a.setDirection(c)),this},decrementY:function(b){return h>1?h-=1:(this.changeDirection(b),a.setDirection(b)),this},changeDirection:function(a){return i=a,this},getDirection:function(){return i},whereAmI:function(){return this.getX()+","+this.getY()+" "+this.getDirection()},move:function(b){var c=this.getDirection();switch(b){case"F":break;case"R":this.changeDirection(a.goRight());break;case"L":this.changeDirection(a.goLeft());break;default:throw new Error("Invalid Direction")}return j[this.getDirection()](this,c),this}}}]),angular.module("turtleCommandApp").factory("Grid",["lodash",function(a){function b(a,b){this.x=a,this.y=b}var c=5,d=30,e=a.random(c,d),f={collection:[],getBlocks:function(){return this.collection},push:function(a){this.collection.push(a)},reset:function(){this.collection=[]}};return{generateGridSize:function(){return e=a.random(c,d),this},generateBlocks:function(){f.reset();for(var c=a.random(1,Math.ceil(e/2)),d=0;c>d;d++)f.push(new b(a.random(1,e),a.random(1,e)))},getBlocks:function(){return f.getBlocks()},setGridSize:function(a){return e=a,this},getGridSize:function(){return e},getMin:function(){return c},getMax:function(){return d},reset:function(){this.generateGridSize(),this.generateBlocks()}}}]),angular.module("turtleCommandApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="form-group"> <label for="usr">Input Command:</label> <input type="text" class="form-control" id="command" ng-model="inputStr" ng-pattern-restrict="{{ inputPattern }}"> <button ng-click="commandTurtle(inputStr)">Move</button> <button ng-click="resetGrid()">Reset Grid</button> </div> Auto generated Grid Size -> {{Grid.getGridSize()}} <br> Blocks -> {{Grid.getBlocks()}} <br> Current Turtle Position -> {{Turtle.whereAmI()}} <div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.c582c4d1.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div>')}]);