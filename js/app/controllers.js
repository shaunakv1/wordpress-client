'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('MainController', ['$scope','Post','$state','$rootScope',function($scope,Post,$state,$rootScope) {
		var vm = this;

		// $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
		// 	if(!Post.isBlogSet()) $state.go("start");
		// });
		
	}])
	.controller('StartController', ['$scope','Post','$state',function($scope,Post,$state) {
		var vm = this;

		//hoiested variables
		vm.blog = "geozoneblog";

		//hoisted functions
		vm.setBlog = setBlog;

		$('#blogInputModal').modal({
			keyboard: false,
		  	backdrop: false
		});

		function setBlog() {
			$('#blogInputModal').modal("hide");
			$state.go("posts",{blogID: vm.blog});
		}
	}])
	.controller('PostsController', ['$scope','Post','$stateParams',function($scope,Post,$stateParams) {
		var vm = this;
			
		//hoisted variables
		vm.posts = [];
		
		//hoisted functions1
		activate();

		function activate(){
			Post.setBlog($stateParams.blogID);

			//fetch posts
			Post.get({ number: 10}).then(function (posts) {
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

//blog post with broken images
//http://localhost:3000/#/posts/1273/details