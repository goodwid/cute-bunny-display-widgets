//* globals angular, chai */

const assert = chai.assert;

describe('testing imageService', () => {

  let $httpBackend = null, imageService = null;

  beforeEach(
    angular.mock.module('services', $provide => {
      $provide.value( 'apiUrl', '/api');
    })
  );

  beforeEach (angular.mock.inject((_imageService_, _$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    imageService = _imageService_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('gets images', done => {
    const albumId = 123;
    const images = [1,2,3];
    $httpBackend
      .expectGET('/api/image')
      .respond(images);

    imageService.get(albumId)
      .then(returnedImages => {
        assert.deepEqual(returnedImages, images);
        done();
      })
      .catch(done);

    $httpBackend.flush();

  });

});
