
auth.$inject=['$rootScope', 'userService','ngDialog', '$state'];

export default function auth($rootScope, userService, ngDialog, $state) {
  // $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {
  //   if(toState.data && to.State.data.requiresAuth && !userService.isAuthed()) {
  //     event.preventDefault();
  //     const dialog = ngDialog.open({
  //       template: '<signin success="success(response)">',
  //       plain: true,
  //       controller: ['$scope', ($scope) => {
  //         $scope.success = (response) => {
  //           console.log(response);
  //           dialog.close();
  //           return $state.go(toState.name, toParams);
  //         };
  //       }]
  //     });
  //     dialog.closePromise
  //
  //   }
  // });
}
