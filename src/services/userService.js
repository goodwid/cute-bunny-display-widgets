userService.$inject = ['$window'];

const TOKEN_NAME = 'token';

export default function userService ($window) {

  return {
    isAuthed() {
      return new Promise((resolve, reject) => {
        if ($window.localStorage.getItem(TOKEN_NAME))
          return resolve();
        else
          return reject();

      });
    }
  };
}
