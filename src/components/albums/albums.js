import template from './albums.html';
import styles from './albums.scss';

export default {
  template,
  controllerAs: 'albums',
  bindings: {
    display: '<',
    view: '<'
  },

  controller
};

controller.inject = ['albumService', 'imageService', '$state', 'userService', 'ngDialog'];

function controller(albumService, imageService, $state, userService, ngDialog) {
  this.styles = styles;
  this.logout = () => userService.logout();
  imageService.get().then(images => this.images = images);
  albumService.get().then(albums => this.albums = albums);

  // default view
  this.view = this.view || 'tile';

  this.changeView = () => {
    $state.go($state.current.name, {view: this.view});
  };

  this.addAlbum = (album) => {
    albumService.add(album)
      .then(album => this.albums.push(album))
      .catch(err => console.error(err));;
  };

  this.newAlbum = (e) => {
    e.preventDefault();
    const dialog = ngDialog.open({
      template: '<new-album add="addAlbum(album)"></new-album>',
      plain: true,
      controller: ['$scope', ($scope) => {
        $scope.addAlbum = (album) => {
          dialog.close();
          this.addAlbum(album);
        };
      }]
    });
  };

  this.newImage = (e) => {
    e.preventDefault();
    const dialog = ngDialog.open({
      template: '<new-image albums="albums" add="addImage(image)"></new-image>',
      plain: true,
      controller: ['$scope', ($scope) => {
        $scope.albums = this.albums;
        $scope.addImage = (image) => {
          dialog.close();
          this.addImage(image);
        };
      }]
    });
  };
}
