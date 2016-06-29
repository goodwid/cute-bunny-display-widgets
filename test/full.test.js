const assert = chai.assert;

describe('slideshow', () => {
  angular.mock.module.sharedInjector();
  before(angular.mock.module('components'));

  let $componentController;
  before(angular.mock.inject(($rootScope, _$componentController_) => {
    $componentController = _$componentController_;
  }));

  it ('next/prev functions change index, wrap around ends', () => {
    const data = [0,1,2,3];
    const full = $componentController('full', null, {data});
    full.next();
    assert.equal(full.index, 1);

    full.prev();
    assert.equal(full.index, 0);

    full.prev();
    assert.equal(full.index, 3);

    full.next();
    assert.equal(full.index, 0);
  });

});
