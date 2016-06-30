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
    const slideshow = $componentController('slideshow', null, {data});
    slideshow.next();
    assert.equal(slideshow.index, 1);

    slideshow.prev();
    assert.equal(slideshow.index, 0);

    slideshow.prev();
    assert.equal(slideshow.index, 3);

    slideshow.next();
    assert.equal(slideshow.index, 0);
  });

});
