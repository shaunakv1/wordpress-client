'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngResource',
  'ngSanitize',
  'ui.router',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
])
.config(function($animateProvider) {
  $animateProvider.classNameFilter(/angular-animate/);
})
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/posts");
  //
  // Now set up the states
  $stateProvider
    /**
     * Posts
     */
    .state('posts', {
      url: "/posts",
      templateUrl: "partials/posts/posts.html",
      controller: "PostsController",
      controllerAs: "vm"
    })
    /**
     * Authors
     */
    .state('authors', {
      url: "/authors",
      templateUrl: "partials/authors/authors.html",
      controller: "AuthorsController",
      controllerAs: "vm"
    });
});;
