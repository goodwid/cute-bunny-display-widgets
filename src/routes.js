configRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$transitionsProvider'];
const view = ['$stateParams', sP => {
  return sP.view;
}];

export default function configRoutes($stateProvider, $urlRouterProvider, $transitionsProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: '<p><a ui-sref="albums">Albums</a></p>'
    })

    .state('albums', {
      url: '/albums',
      data: {
        requiresAuth: true
      },
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
      url: '/:albumId?view&image',
      params: {
        view: {
          dynamic: true
        },
        image: {
          dynamic: true
        }
      },
      component: 'viewSelector',
      resolve: {
        images: ['imageService', '$stateParams', (iS, sP) => {
          return iS.getImagesByAlbum(sP.albumId);
        }],
        view,
        image: ['$stateParams', sP => {
          return sP.image;
        }],
        albums: ['albumService', aS => aS.get()]
      },
    });
  $urlRouterProvider.otherwise('/');
  $transitionsProvider.onStart({
    to: state => !!(state.data && state.data.requiresAuth)
  }, ($state) => {
    $state.$to().name;
    // console.log(name);
  });
}

// onStart.$inject = ['userService'];
//
// function onStart(userService) {
//   return userService.isAuthed();
// }
