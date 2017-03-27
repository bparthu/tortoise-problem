'use strict';

/**
 * @ngdoc overview
 * @name turtleCommandApp
 * @description
 * # turtleCommandApp
 *
 * Main module of the application.
 */
angular
  .module('turtleCommandApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularLodashModularized'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
