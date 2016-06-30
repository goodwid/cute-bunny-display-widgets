import template from './albums.html';

export default {
  template,
  bindings: {
    display: '<',
    view: '<'
  },
  controller
};

controller.inject = ['albumService', 'imageService', '$state'];

function controller(albumService, imageService, $state) {
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
  this.addImage = (image) => {
    imageService.add(image)
      .then(image => this.images.push(image))
      .catch(err => console.error(err));
  };
  this.addAlbum = (album) => {
    albumService.add(album)
      .then(album => this.albums.push(album))
      .catch(err => console.error(err));;
  };
  this.deleteImage = (id) => {
    imageService.delete(id)
      .then(() => {
        const index = this.images.findIndex(image => image._id === id);
        if (index !== -1) this.images.splice(index,1);
      })
      .catch(err => console.error(err));
    imageService.getImagesByAlbum(this.albumId).then(images => this.images = images);
  };
  imageService.get().then(images => this.images = images);
  albumService.get().then(albums => this.albums = albums);


  // default view
  this.view = this.view || 'tile';






}
