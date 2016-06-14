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
		
		//hoisted functions1
		activate();

		function activate(){
			//fetch posts
			Post.get({ number: 5}).then(function (posts) {
				vm.posts = posts;
			})

		}
	}])
	.controller('PostDetailsController', ['$scope','Post','$stateParams',function($scope,Post, $stateParams) {
	  	var vm = this;	  	
			
			//hoisted variables
	  	vm.postID =  $stateParams.postID;

			activate();

			function activate(){
				Post.find(vm.postID).then(function (post) {
					vm.post = post;
				});
			}
	  	
	  }])	
	.controller('AuthorsController', ['$scope',function($scope) {
		this.vm = this;

	}]);