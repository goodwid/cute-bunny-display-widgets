userService.$inject = ['tokenService', '$http', 'apiUrl'];

export default function userService(token, $http, apiUrl) {

  const current = token.get();
  if (current) {
    $http.get(`${apiUrl}/verify`)
      .catch(() => token.remove());
  }

  return {
    isAuthed() {
      return !!token.get();
    },
    logout() {
      token.remove();
    },
    signin(credentials){
      return $http.post(`${apiUrl}/signin`, credentials)
        .then(result => {
          token.set(result.data.token);
        })
        .catch(err => {
          throw err.data;
        });
    },
    signup(credentials) {
      return $http.post(`${apiUrl}/signup`, credentials)
        .then(result => {
          token.set(result.data.token);
        })
        .catch(err => {
          throw err.data;
        });
    }
  };
}

// const TOKEN_NAME = 'token';
//
// export default function userService ($window, $http) {
//
//   return {
//     isAuthed() {
//       return !!$window.localStorage.getItem(TOKEN_NAME);
//     },
//     authenticate(credentials) {
//       $http.post(`${apiUrl}/signin`, credentials)
//         .then(result => {
//           console.log(result);
//         });
//       $window.localStorage.setItem(TOKEN_NAME);
//       return Promise.resolve(true);
//     }
//   };
// }
