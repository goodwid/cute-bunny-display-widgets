import template from './viewSelector.html';
import styles from './viewSelector.scss';

export default {
  template,
  controllerAs: 'viewSelector',
  bindings: {
    view: '=',
    images: '='
  },
  controller
};

controller.inject = ['imageService'];

function controller(imageService) {
  
  this.uiOnParamsChanged = (params) => {
    console.log('got ehre');
    this.view = params.view;
  };
  console.log('viewselector.view: ', this.view);
  this.styles = styles;
  this.deleteImage = (id) => {
    imageService.delete(id)
    .then(() => {
      const index = this.images.findIndex(image => image._id === id);
      if (index !== -1) this.images.splice(index,1);
    })
    .catch(err => console.error(err));
    // imageService.getImagesByAlbum(this.albumId).then(images => this.images = images);
  };

  // this.getImages = (album) => {
  //   imageService.getImagesByAlbum(album)
  //     .then(images => this.images = images)
  //     .catch(err => console.error(err));
  // };
  // this.addImage = (image) => {
  //   imageService.add(image)
  //     .then(image => this.images.push(image))
  //     .catch(err => console.error(err));
  // };
  // this.addAlbum = (album) => {
  //   albumService.add(album)
  //     .then(album => this.albums.push(album))
  //     .catch(err => console.error(err));;
  // };
  // imageService.get().then(images => this.images = images);


  // this.view = 'tile';
}
