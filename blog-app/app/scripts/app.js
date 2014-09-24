'use strict';

/**
 * @ngdoc overview
 * @name blogAppApp
 * @description
 * # blogAppApp
 *
 * Main module of the application.
 */
angular
	.module('blogAppApp', [
		'ngAnimate',
		'blogControllers',
		'ngRoute',
		'blogServices'
 	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/posts', {
				templateUrl: '../views/post-list.html',
				controller: 'PostsListCtrl'
			})
			.when('/posts/:_id', {
				templateUrl: 'views/post-page.html',
				controller: 'PostPageCtrl'
			})
			.otherwise({
				redirectTo: '/posts'
			});
	  });
