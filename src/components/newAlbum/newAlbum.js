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
      let album = this.album;
      this.add({album});
      this.album = {};

    };
  }
};
