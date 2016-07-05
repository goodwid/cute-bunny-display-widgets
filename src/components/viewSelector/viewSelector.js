import template from './viewSelector.html';
import styles from './viewSelector.scss';

export default {
  template,
  controllerAs: 'viewSelector',
  bindings: {
    view: '=',
    images: '=',
    albums: '='
  },
  controller
};

controller.inject = ['imageService', 'albumService'];

function controller(imageService, albumService) {

  this.uiOnParamsChanged = (params) => {
    this.view = params.view;
  };
  this.styles = styles;
  this.deleteImage = (id) => {
    imageService.delete(id)
    .then(() => {
      const index = this.images.findIndex(image => image._id === id);
      if (index !== -1) this.images.splice(index,1);
    })
    .catch(err => console.error(err));

  };
  this.addImage = (image) => {
    let albumId = this.images[0].album;
    imageService.add(image)
      .then(image => {
        if (image.album === albumId) this.images.push(image);
      })
      .catch(err => console.error(err));
  };

  this.deleteImage = (id) => {
    let albumId = this.images[0].album;
    imageService.delete(id)
      .then(() => {
        const index = this.images.findIndex(image => image._id === id);
        if (index !== -1) this.images.splice(index,1);
        if (this.images.length === 0) albumService.delete(albumId);
      })
      .catch(err => console.error(err));
    // imageService.getImagesByAlbum(this.albumId).then(images => this.images = images);
  };




  // this.view = 'tile';
}
