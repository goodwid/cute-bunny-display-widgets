import template from './thumb.html';
import styles from './thumb.css';

export default {
  template,
  controllerAs: 'thumb',
  bindings: {
    src: '='
  },
  controller: function() {
    this.styles = styles;
  }
};
