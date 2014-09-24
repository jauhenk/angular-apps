'use strict';

/**
 * @ngdoc function
 * @name blogAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blogAppApp
 */
angular.module('blogControllers', ['blogServices'])
	.controller('PostsListCtrl', ['$scope', 'Posts', '$location', function ($scope, Posts, $location) {
		$scope.posts = [];
		Posts.bindPosts($scope.posts);
		$scope.limitText = 100;

		$scope.postClick = function(id) {
			$location.path('/posts/' + id);
		};
	}])
	.controller('PostPageCtrl', ['$scope', '$routeParams', 'Posts', function ($scope, $routeParams, Posts) {
		Posts.get({_id: $routeParams._id}).$promise.then(function (_post) {
			$scope.post = _post;
		});
	}]);
