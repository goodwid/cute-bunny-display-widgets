import template from './tile.html';
import styles from './tile.scss';

export default {
  template,
  controllerAs: 'tile',
  bindings: {
    data: '<'
  },
  controller: function() {
    this.styles = styles;
  }
};
