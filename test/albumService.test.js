//* globals angular, chai */

const assert = chai.assert;

describe('testing albumService', () => {

  let $httpBackend = null, albumService = null;

  beforeEach(
    angular.mock.module('services', $provide => {
      $provide.value( 'apiUrl', '/api');
    })
  );

  beforeEach (angular.mock.inject((_albumService_, _$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    albumService = _albumService_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('get method', done => {
    const albums = [1,2,3];
    $httpBackend
      .expectGET('/api/album')
      .respond(albums);

    albumService.get()
      .then(returnedAlbums => {
        assert.deepEqual(returnedAlbums, albums);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('add method', done => {
    const album = 'testing';

    $httpBackend
      .expectPOST('/api/album')
      .respond(album);

    albumService.add(album)
      .then(returnedAlbum => {
        assert.deepEqual(returnedAlbum, album);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('delete method', done => {
    const album = 'testing';
    const albumId = 42;

    $httpBackend
      .expectDELETE(`/api/album/${albumId}`)
      .respond(album);

    albumService.delete(albumId)
      .then(returnedAlbum => {
        assert.deepEqual(returnedAlbum, album);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

});
