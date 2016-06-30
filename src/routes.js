configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function configRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: '<p>Home again home again</p>'
    })
    .state('album', {
      url: '/album/:albumId?display',
      resolve: {
        albumName: ['albumService', '$stateParams', (a, p) => {
          return a.get(p.albumId);
        }],
        display: ['$stateParams', (p) => {
          
        }]
      }
    })
    .state('list', {url: '/list'})
    .state('tile', {})
    .state('slideshow', {});

}
