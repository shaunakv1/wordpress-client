'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'angulartics', 
  'angulartics.google.analytics'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}])
.config(function($animateProvider) {
  $animateProvider.classNameFilter(/angular-animate/);
})
.config(function ($analyticsProvider) {
  $analyticsProvider.firstPageview(true); /* Records pages that don't use $state or $route */
  $analyticsProvider.withAutoBase(true);  /* Records full path */
});
