'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('MainController', ['$scope',function($scope) {
		var vm = this;

	}])
	.controller('PostsController', ['$scope','Post',function($scope,Post) {
		var vm = this;
			
		//hoisted variables
			vm.posts = [];
			
		//hoisted functions
			
		activate();

		function activate(){
			//fetch posts
			Post.query({ number: 5},function (posts) {
				vm.posts = posts;
			});

		}
	}])
	.controller('PostDetailsController', ['$scope','Post','$stateParams',function($scope,Post, $stateParams) {
	  	var vm = this;
	  	
		//hoisted variables
	  	vm.postID =  $stateParams.postID;

		//hoisted functions
	  	
		activate();

		function activate(){
			
		}
	  	
	  }])	
	.controller('AuthorsController', ['$scope',function($scope) {
		this.vm = this;

	}]);