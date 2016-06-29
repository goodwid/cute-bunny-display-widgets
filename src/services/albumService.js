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
    }
  };
}
