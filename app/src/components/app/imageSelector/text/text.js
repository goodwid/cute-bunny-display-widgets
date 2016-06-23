import template from './text.html';
import styles from './text.css';

export default {
  template,
  controllerAs: 'text',
  bindings: {
    image: '='
  },
  controller: function() {
    this.styles = styles;

  }
};
