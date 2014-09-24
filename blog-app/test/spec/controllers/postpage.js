'use strict';

describe('Controller: PostpageCtrl', function () {

  // load the controller's module
  beforeEach(module('blogAppApp'));

  var PostpageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostpageCtrl = $controller('PostpageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
