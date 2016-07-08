configRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$transitionsProvider'];
const view = ['$stateParams', sP => {
  return sP.view;
}];

export default function configRoutes($stateProvider, $urlRouterProvider, $transitionsProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: `
      <div id="intro">
        Welcome to our image gallery.  Enjoy!<br>
        <h2><a ui-sref="albums">Albums</a></h2>
      </div>
      `
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
