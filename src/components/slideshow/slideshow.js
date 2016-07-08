import template from './slideshow.html';
import styles from './slideshow.scss';

export default {
  template,
  controllerAs: 'slideshow',
  bindings: {
    data: '<' //,
    // image: '<'
  },
  controller
};
function controller () {
  this.index = 0;

  this.prev = function() {
    if (--this.index < 0) this.index = this.data.length -1;
  };
  this.next = function() {
    if (++this.index > this.data.length -1) this.index = 0;
  };
  this.styles = styles;
}
