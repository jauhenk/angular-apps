'use strict';

describe('Directive: postShort', function () {

  // load the directive's module
  beforeEach(module('blogAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<post-short></post-short>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the postShort directive');
  }));
});
