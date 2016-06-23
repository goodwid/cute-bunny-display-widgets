import template from './newBunny.html';
import styles from './newBunny.css';

export default {
  template,
  controllerAs: 'newBunny',
  bindings: {
    image: '='
  },
  controller() {
    this.styles = styles;
    this.changeBunny = function() {
      this.image = {title: this.title, description: this.description, url: this.url };
      this.title = '';
      this.description = '';
      this.url = '';
    };
  }
};
