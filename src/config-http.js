configHttp.$inject = ['$httpProvider'];

export default function configHttp($httpProvider) {
  $httpProvider.interceptors.push(interceptor);

}

interceptor.$inject = ['$window'];

function interceptor($window) {
  return {
    request(config) {
      config.headers = config.headers || {};
      $window.localStorage.getItem('token');
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3N2JmNzU0NTQ2ZTRiMzMyZTAzMDc5MCIsInJvbGVzIjpbImFkbWluIl0sInVzZXJuYW1lIjoiQWRtaW4iLCJpYXQiOjE0Njc3NDIxNTl9.Y-jfbSOfU7GLVFPCAIJ8ZYb48LsIRH7NlFzqTb504Q8';
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    response(response) {
      return response;
    }

  };
};
