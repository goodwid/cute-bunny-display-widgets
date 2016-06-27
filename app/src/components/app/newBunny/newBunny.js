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
      let bunny = {title: this.title, description: this.description, url: this.url };
      this.add({bunny});
      this.title = '';
      this.description = '';
      this.url = '';
    };
  }
};
