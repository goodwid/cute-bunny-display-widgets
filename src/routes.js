configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
const view = ['$stateParams', sP => {
  return sP.view;
}];

export default function configRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: '<p><a ui-sref="albums">Albums</a></p>'
    })

    .state('albums', {
      url: '/albums',
      params: {
        view: {
          dynamic: true
        }
      },
      resolve: {
        view
      },
      component: 'albums'
    })
    .state('albums.album', {
      url: '/:albumId?view',
      params: {
        view: {
          dynamic: true
        }
      },
      component: 'viewSelector',
      resolve: {
        images: ['imageService', '$stateParams', (iS, sP) => {
          return iS.getImagesByAlbum(sP.albumId);
        }],
        view
      },
    });
    // .state('albums.list', {
    //   url: '/:albumId',
    //   component: 'list',
    //   resolve: {
    //     albumName: ['albumService', '$stateParams', (aS, sP) => {
    //       aS.get(sP.albumId);
    //     }],
    //     display: ['$stateParams', sP => {
    //       console.log(sP);
    //     }]
    //   },
    // })
    // .state('albums.slideshow', {
    //   url: '/:albumId',
    //   component: 'slideshow',
    //   resolve: {
    //     albumName: ['albumService', '$stateParams', (aS, sP) => {
    //       aS.get(sP.albumId);
    //     }],
    //     display: ['$stateParams', sP => {
    //       console.log(sP);
    //     }]
    //   },
    // });
  $urlRouterProvider.otherwise('/');
}

// /album/23434345234?display=tile
