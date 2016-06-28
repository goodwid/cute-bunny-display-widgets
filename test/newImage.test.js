/* global angular,chai */

const assert = chai.assert;

describe('newImage component', () => {
  angular.mock.module.sharedInjector();

  before(angular.mock.module('components', ($provide) => {
    $provide.service('albumService', function () {
      return {
        get() {
          return Promise.resolve('nothing');
        }
      };
    });
  }));

  let $componentController;
  before(angular.mock.inject(($rootScope, _$componentController_) => {
    $componentController = _$componentController_;
  }));

  it ('add function works properly', () => {

    let result;
    const add = ({image}) => {
      result = image;
    };

    const newImage = $componentController('newImage', null, {add});

    newImage.image = 'image';
    newImage.submit();
    console.log(result);
    assert.equal(result, 'image');
    assert.deepEqual(newImage.image, {});
  });
});
