import template from './newBunny.html';
import styles from './newBunny.scss';

export default {
  template,
  controllerAs: 'newBunny',
  bindings: {
    add: '&'
  },
  controller() {
    this.styles = styles;
    this.submit = () => {
      let bunny = this.bunny;
      this.add({bunny});
      this.bunny = {};

    };
  }
};
