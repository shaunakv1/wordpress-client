'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MainController', ['$scope',function($scope) {
  	var vm = this;

  }])
  .controller('PostsController', ['$scope','Post',function($scope,Post) {
  	var vm = this;
  	vm.test = "this is posts controller"

  }])
  .controller('AuthorsController', ['$scope',function($scope) {
  	this.vm = this;

  }]);