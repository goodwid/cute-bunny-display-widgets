import template from './list.html';
import styles from './list.scss';

export default {
  template,
  controllerAs: 'list',
  bindings: {
    data: '<',
    deleteImage: '&'
  },
  controller() {
    this.styles = styles;
  }
};
