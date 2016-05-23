'use strict';

/* Filters */
angular.module('myApp.filters', [])
.filter('sanitize',['$sce',function($sce) {
	return function (html) {
		return $sce.trustAsHtml(html);
	}
}]);
