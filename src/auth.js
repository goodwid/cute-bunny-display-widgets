
auth.$inject=['$rootScope'];

export default function auth($rootScope) {

  $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {
    toParams;
  });
}
