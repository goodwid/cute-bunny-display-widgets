import template from './full.html';
import styles from './full.scss';

export default {
  template,
  controllerAs: 'full',
  bindings: {
    data: '<'
  },
  controller: function() {
    this.index = 0;
    this.prev = function() {
      if (--this.index < 0) this.index = this.data.length -1;
    };
    this.next = function() {
      if (++this.index > this.data.length -1) this.index = 0;
    };
    this.styles = styles;

  }
};
