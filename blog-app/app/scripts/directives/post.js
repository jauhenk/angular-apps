'use strict';

/**
 * @ngdoc directive
 * @name blogAppApp.directive:postShort
 * @description
 * # postShort
 */
angular.module('blogAppApp')
	.directive('post', ['Posts', '$location', function (Posts, $location) {
		return {
			templateUrl: 'views/post.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
			},
			controller: function ($scope) {
				var onEditing = null;
				$scope.editing = false;
				$scope.editPost = {};
				$scope.delete = function (id) {
					Posts.delete(id);
					if ($location.path() != '/posts') {
						$location.path('/posts');
					}
				};
				$scope.edit = function (post) {
					onEditing = post;
					$scope.editPost.title = post.title;
					$scope.editPost.body = post.body;
					$scope.editPost.image = post.image;
					$scope.editing = true;
				};
				$scope.applyEdit = function (post, editPost) {
					Posts.update(post, editPost);
					$scope.editPost = {};
					$scope.editing = false;
				};
				$scope.cancelEdit = function () {
					$scope.editPost = {};
					$scope.editing = false;
				};
			}
		};
	}]);
