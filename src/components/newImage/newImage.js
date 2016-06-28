import template from './newImage.html';
import styles from './newImage.scss';

export default {
  template,
  controllerAs: 'newImage',
  bindings: {
    add: '&'
  },
  controller
};

controller.inject = ['albumService'];

function controller (albumService) {
  albumService.get()
    .then(albums => {
      this.albums = albums;
    });
  this.styles = styles;
  this.submit = () => {
    let image = this.image;
    this.add({image});
    this.image = {};
  };
}
