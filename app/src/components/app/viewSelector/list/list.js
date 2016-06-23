import template from './list.html';
import styles from './list.css';

export default {
  template,
  controllerAs: 'list',
  bindings: {
    data: '='
  },
  controller: function() {
    console.log(this.data);
    this.styles = styles;

  }
};
