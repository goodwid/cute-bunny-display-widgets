imageService.$inject = ['$http', 'apiUrl'];

export default function imageService ($http, apiUrl) {

  return{
    get() {
      return $http
      .get(`${apiUrl}/image`)
      .then(r => r.data);
    },
    getImage(imageId) {
      return $http
      .get(`${apiUrl}/image/${imageId}`)
      .then(r=> r.data);
    },
    getImagesByAlbum(albumId) {
      return $http
      .get(`${apiUrl}/album/${albumId}`)
      .then(r=> r.data);
    },
    add(image) {
      return $http
      .post(`${apiUrl}/image`, image)
      .then(r => r.data);
    }
  };
}
