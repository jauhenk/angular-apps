'use strict';

/**
 * @ngdoc service
 * @name blogAppApp.Post
 * @description
 * # Post
 * Service in the blogAppApp.
 */
angular.module('blogServices', ['ngResource'])
 	.factory('Posts', ['$resource', function ($resource) {
		var posts = null;
		var service = $resource('http://54.72.3.96:3000/posts/:_id', {}, {update: {method: 'PUT'}});

		var getAllPosts = function () {
				service.query().$promise.then(function (_posts) {
					_posts.forEach(function(post){
						posts.push(post);
					});
				});
			},
			removeItem = function (id) {
				var index = (function () {
					for (var index = 0; index < posts.length; index++) {
						if (posts[index]._id == id) {
							return index;
						}
					}
				})();
				posts.splice(index, 1);
			};

		return {
			bindPosts: function (_posts) {
				posts = _posts;
				getAllPosts();
			},
			get: service.get,
			delete: function (id) {
				service.delete({_id: id}).$promise.then(function () {
					posts && removeItem(id);
				});
			},
			addNew: function (post) {
				post.date = new Date();
				service.save(post).$promise.then(function(_post) {
					post._id = _post._id;
					posts && posts.unshift(post);
				});
			},
			update: function (post, editPost) {
				editPost.author = post.author;
				editPost.date = new Date();
				service.update({_id: post._id}, editPost).$promise.then(function(_post) {
					post.date = _post.date;
					post.title = _post.title;
					post.body = _post.body;
					post.image = _post.image;
				});
			}
			
		};
 	}]);
