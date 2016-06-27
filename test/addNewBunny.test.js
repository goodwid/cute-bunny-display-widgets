/* global angular,chai */

const assert = chai.assert;

describe('directive', () => {
  angular.mock.module.sharedInjector();
  before(angular.mock.module('components'));

  let $componentController;
  before(angular.mock.inject(($rootScope, _$componentController_) => {
    $componentController = _$componentController_;
  }));

  it ('test', () => {

    let result;
    const add = ({bunny}) => {
      result = bunny;
    };

    const newBunny = $componentController('newBunny', null, {add});

    newBunny.bunny = 'bunny';
    newBunny.submit();
    assert.equal(result, 'bunny');
    assert.deepEqual(newBunny.bunny, {});
  });
});
