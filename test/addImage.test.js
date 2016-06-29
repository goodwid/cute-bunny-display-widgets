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

  it('get method', done => {
    const imageId = 123;
    const images = [1,2,3];
    $httpBackend
      .expectGET('/api/image')
      .respond(images);

    imageService.get(imageId)
      .then(returnedImages => {
        assert.deepEqual(returnedImages, images);
        done();
      })
      .catch(done);

    $httpBackend.flush();

  });

  it('getImage method', done => {
    const image = 'testing';
    const imageId = 42;

    $httpBackend
      .expectGET(`/api/image/${imageId}`)
      .respond(image);

    imageService.getImage(imageId)
      .then(returnedAlbum => {
        assert.deepEqual(returnedAlbum, image);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('getImagesByAlbum method', done => {
    const image = 'testing';
    const albumId = 42;

    $httpBackend
      .expectGET(`/api/album/${albumId}`)
      .respond(image);

    imageService.getImagesByAlbum(albumId)
      .then(returnedAlbum => {
        assert.deepEqual(returnedAlbum, image);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('add method', done => {
    const newImage = 'test';

    $httpBackend
      .expectPOST('/api/image')
      .respond(newImage);

    imageService.add(newImage)
        .then(postedImage => {
          assert.deepEqual(postedImage, newImage);
          done();
        })
        .catch(done);

    $httpBackend.flush();
  });

  it('delete method', done => {
    const image = 'testing';
    const imageId = 42;

    $httpBackend
      .expectDELETE(`/api/image/${imageId}`)
      .respond(image);

    imageService.delete(imageId)
      .then(returnedAlbum => {
        assert.deepEqual(returnedAlbum, image);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

});
