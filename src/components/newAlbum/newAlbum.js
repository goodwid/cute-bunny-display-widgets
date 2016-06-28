import template from './newAlbum.html';
import styles from './newAlbum.scss';

export default {
  template,
  controllerAs: 'newAlbum',
  bindings: {
    add: '&'
  },
  controller() {
    this.styles = styles;
    this.submit = () => {
      let Album = this.Album;
      this.add({Album});
      this.Album = {};

    };
  }
};
