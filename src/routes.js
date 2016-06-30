configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function configRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: '<p>Home again home again</p>'
    })
    .state('albums', {
      url: '/albums',


    })
    .state('album', {
      url: '/album/:albumId?display',
      resolve: {
        albumName: ['albumService', '$stateParams', (aS, sP) => aS.get(sP.albumId)],
        display: ['$stateParams', sP => sP.display]
      }
    });
  $urlRouterProvider.otherwise('/');
}

// /album/23434345234?display=tile
