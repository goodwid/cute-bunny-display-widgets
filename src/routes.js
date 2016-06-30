configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function configRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: '<p><a ui-sref="albums">Albums</a>Home again home again</p>'
    })
    // .state('albumlist', {
    //   url: '/albumlist'
    // })
    .state('albums', {
      url: '/albums',

      component: 'albums'
    })
    .state('albums.tile', {
      url: '/:albumId',
      component: 'tile',
      resolve: {
        albumName: ['albumService', '$stateParams', (aS, sP) => {
          aS.get(sP.albumId);
        }],
        display: ['$stateParams', sP => {
          console.log(sP.display);
          console.log(sP);
        }]
      },
    });
  $urlRouterProvider.otherwise('/');
}

// /album/23434345234?display=tile
