import template from './list.html';
import styles from './list.scss';

export default {
  template,
  controllerAs: 'list',
  bindings: {
    data: '<'
  },
  controller: function() {
    this.styles = styles;

  }
};
