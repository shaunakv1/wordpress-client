'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).  
  factory('_', function() {
     return window._; // assumes underscore has already been loaded on the page
  })
.factory('Post', ['$resource',function($resource) {
  return $resource('https://public-api.wordpress.com/rest/v1.1/sites/geozoneblog.wordpress.com/posts/:id',{
  	//parameters
  	order:'DSC',
  	orderBy:'date',
  	number:'@number', //number of posts to fetch. default is 20 for wp
  	fields:'@fields' //define which fields should be returned
  },{
  	query:{
  		method: 'GET',
  		cache : true,
	    isArray: true,
	    transformResponse: function(data) {
	        return angular.fromJson(data).posts;
	    }
  	}
  });
}]);
