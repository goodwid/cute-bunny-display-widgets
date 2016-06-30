import template from './albums.html';

export default {
  template,
  bindings: {
    display: '<'
  },
  controller
};

controller.inject = ['albumService'];

function controller(albumService) {
  albumService.get()
    .then(albums => this.albums = albums);
}
