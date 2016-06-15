'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ngAnimate',
  'angular-loading-bar',
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
  $urlRouterProvider.otherwise("/start");
  
  // Now set up the states
  $stateProvider
    .state('start',{
      url: "/start",
      templateUrl: "views/home/home.start.html",
      controller: "StartController",
      controllerAs: "vm"
    })
    /**
     * Posts
     */
    .state('posts', {
      url: "/:blogID/posts",
      templateUrl: "views/posts/posts.html",
      controller: "PostsController",
      controllerAs: "vm"
    })
    .state('posts.details', {
      url: "/:postID/details",
      templateUrl: "views/posts/posts.details.html",
      controller: "PostDetailsController",
      controllerAs: "vm"
    })
    /**
     * Authors
     */
    .state('authors', {
      url: "/authors",
      templateUrl: "views/authors/authors.html",
      controller: "AuthorsController",
      controllerAs: "vm"
    });
});;
