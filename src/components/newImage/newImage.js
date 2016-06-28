import template from './newImage.html';
import styles from './newImage.scss';

export default {
  template,
  controllerAs: 'newImage',
  bindings: {
    add: '&'
  },
  controller() {
    this.styles = styles;
    this.submit = () => {
      let Image = this.Image;
      this.add({Image});
      this.Image = {};

    };
  }
};
