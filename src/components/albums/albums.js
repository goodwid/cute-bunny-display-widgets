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

controller.inject = ['albumService', 'imageService', '$state'];

function controller(albumService, imageService, $state) {
  this.styles = styles;
  this.changeView = () => {
    $state.go($state.current.name, {view: this.view});
  };
  albumService.get()
    .then(albums => this.albums = albums);

  this.getImages = (album) => {
    imageService.getImagesByAlbum(album)
      .then(images => this.images = images)
      .catch(err => console.error(err));
  };
  this.addAlbum = (album) => {
    albumService.add(album)
      .then(album => this.albums.push(album))
      .catch(err => console.error(err));;
  };



  imageService.get().then(images => this.images = images);
  albumService.get().then(albums => this.albums = albums);

  // default view
  this.view = this.view || 'tile';
}
