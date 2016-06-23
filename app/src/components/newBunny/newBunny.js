import template from './newBunny.html';
import styles from './newBunny.css';

export default {
  template,
  controllerAs: 'newBunny',
  bindings: {
    data: '='
  },
  controller() {
    this.styles = styles;
    this.addBunny = function() {
      let image = {title: this.title, description: this.description, url: this.url };
      this.data.push(image);
      this.title = '';
      this.description = '';
      this.url = '';
    };
  }
};
