import template from './newBunny.html';

export default {
  template,
  controllerAs: 'newBunny',
  require: {
    app:'^^'
  },
  controller() {
    this.changeBunny = function() {
      console.log(this);
      this.app.image = {title: this.title, description: this.description, url: this.url };
      this.title = '';
      this.description = '';
      this.url = '';
    };


  }
};
