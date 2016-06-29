import template from './viewSelector.html';

export default {
  template,
  controllerAs: 'viewSelector',
  controller
};

controller.inject = ['albumService', 'imageService'];

function controller(albumService, imageService) {
  this.getImages = (album) => {
    imageService.getImagesByAlbum(album).then(images => this.data = images);
  };
  this.addImage = (image) => {
    imageService.add(image);
    imageService.getImagesByAlbum(this.albumId).then(images => this.data = images);
  };
  this.addAlbum = (album) => {
    albumService.add(album);
    albumService.get().then(albums => this.albums = albums);
  };
  imageService.get().then(images => this.data = images);
  albumService.get().then(albums => this.albums = albums);
  // this.data = [{
  //   title: 'Cutest Bunny Ever',
  //   description: 'This is the cutest damn bunny in all of creation.  Other things attempting to be cute tremble with terror at the cuteness of the bunny displayed here today.',
  //   url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
  // },
  // {
  //   title: 'Wild Bunny',
  //   description: 'This is a wild bunny',
  //   url: 'http://slodive.com/wp-content/uploads/2013/02/cute-bunny-pictures/wild-bunny.jpg'
  // },
  // {
  //   title: 'white Bunny',
  //   description: 'This is a white bunny',
  //   url: 'http://www.cutestpaw.com/wp-content/uploads/2015/05/Cute-a-bunny.jpg'
  // }];
  this.view = 'tile';
}
