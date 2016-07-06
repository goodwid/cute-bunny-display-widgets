userService.$inject = ['$window', '$http'];

const TOKEN_NAME = 'token';

export default function userService ($window, $http) {

  return {
    isAuthed() {
      return !!$window.localStorage.getItem(TOKEN_NAME);
    },
    authenticate(credentials) {
      $http.post(`${apiUrl}/signin`, credentials)
        .then(result => {
          console.log(result);
        });
      $window.localStorage.setItem(TOKEN_NAME);
      return Promise.resolve(true);
    }
  };
}
