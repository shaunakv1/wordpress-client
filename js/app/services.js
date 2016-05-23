'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).  
  factory('_', function() {
     return window._; // assumes underscore has already been loaded on the page
  })
.factory('Post', ['$resource',function($resource) {
  return $resource('https://public-api.wordpress.com/rest/v1.1/sites/geozoneblog.wordpress.com/posts/:id');
}]);
