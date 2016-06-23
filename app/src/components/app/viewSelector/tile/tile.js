import template from './tile.html';
import styles from './tile.css';

export default {
  template,
  controllerAs: 'tile',
  bindings: {
    data: '='
  },
  controller: function() {
    this.styles = styles;
  }
};
