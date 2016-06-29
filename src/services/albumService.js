albumService.$inject = ['$http', 'apiUrl'];

export default function albumService ($http, apiUrl) {

  return{
    get() {
      return $http
      .get(`${apiUrl}/album`)
      .then(r => r.data);
    },
    add(album) {
      return $http
      .post(`${apiUrl}/album`, album)
      .then(r => r.data);
    },
    delete(albumId) {
      return $http
      .delete(`${apiUrl}/album/${albumId}`)
      .then(r => r.data);
    }
  };
}
