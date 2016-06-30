import template from './viewSelector.html';
import styles from './viewSelector.scss';

export default {
  template,
  controllerAs: 'viewSelector',
  controller
};

controller.inject = ['albumService', 'imageService'];

function controller(albumService, imageService) {
  this.styles = styles;
  this.getImages = (album) => {
    imageService.getImagesByAlbum(album).then(images => this.images = images);
  };
  this.addImage = (image) => {
    imageService.add(image);
    imageService.getImagesByAlbum(this.albumId).then(images => this.images = images);
  };
  this.addAlbum = (album) => {
    albumService.add(album);
    albumService.get().then(albums => this.albums = albums);
  };
  this.deleteImage = (id) => {
    imageService.delete(id);
    imageService.getImagesByAlbum(this.albumId).then(images => this.images = images);
  };
  imageService.get().then(images => this.images = images);
  albumService.get().then(albums => this.albums = albums);

  this.view = 'tile';
}
