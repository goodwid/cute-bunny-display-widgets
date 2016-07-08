import template from './newImage.html';
import styles from './newImage.scss';

export default {
  template,
  controllerAs: 'newImage',
  bindings: {
    add: '&',
    albums: '<'
  },
  controller
};

function controller () {
  this.styles = styles;
  this.submit = () => {
    let image = this.image;
    this.add({image});
    this.image = {};
  };
  console.log(this);
}
