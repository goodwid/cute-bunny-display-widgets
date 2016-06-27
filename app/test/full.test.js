/* global angular, chai */

const assert = chai.assert;

describe('directive', () => {
  angular.mock.module.sharedInjector();
  before(angular.mock.module('components'));


  let $componentController;
  before(angular.mock.inject(($rootScope, _$componentController_) => {
    $componentController = _componentController_;
  }));

  it ('next function brings on next bunny picture', () => {
    let result;
    const next = () => {
      result =
    };

  });
});
