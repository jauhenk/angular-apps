'use strict';

/**
 * @ngdoc directive
 * @name blogAppApp.directive:fileupload
 * @description
 * # fileupload
 */
angular.module('blogAppApp')
	.directive('fileUpload', function () {
		return {
    		restrict: 'A',
    		link: function postLink($scope, element, attrs) {
				var modelNamePath = attrs.fileUpload.split('.');

				var paramName = modelNamePath[modelNamePath.length-1];

				element.bind("change", function (event) {
					var reader = new FileReader();
					reader.onload = function (loadEvent) {
						var model = (function () {
							var model = null;
							for (var index = 0; index < modelNamePath.length-1; index++) {
								model = $scope[modelNamePath[index]];
							}
							return model;
						})();

						$scope.$apply(function () {
							model[paramName] = null;
							model[paramName] = loadEvent.target.result;

						});
					};
					reader.readAsDataURL(event.target.files[0]);
				})
			}
		};
	});
