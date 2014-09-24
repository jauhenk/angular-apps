'use strict';

/**
 * @ngdoc filter
 * @name blogAppApp.filter:limitText
 * @function
 * @description
 * # limitText
 * Filter in the blogAppApp.
 */
angular.module('blogAppApp')
	.filter('limitText', function () {
		return function (input, count) {
			input = input || '';
			if (!count || input.length <= count) {
				return input;
			}
			return input.slice(0,count).trim() + '...';
		};
	});
